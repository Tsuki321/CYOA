// Elemental Category Spells for Mages CYOA
// All 31 spells of the Elemental Category with 5 proficiency levels each
// Rewritten 2026-05-03

// Initialize spell data object if it doesn't exist
if (typeof spellData === 'undefined') {
    var spellData = {
        physical: [],
        elemental: [],
        abstract: []
    };
}

const baseElementalSpells = [
    {
        id: 'thermal_lance',
        name: 'Thermal Lance',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device draws in ambient thermal energy from the surrounding air and ground, compressing it into a stabilized sphere of superheated plasma roughly the size of a softball. The process is computationally intensive—the device must calculate and maintain a magnetic containment field while the plasma core burns at approximately 800 degrees Celsius, preventing premature dissipation before the projectile reaches its target.

Range is limited to roughly 15 meters. Beyond that distance, the containment field degrades and the plasma sphere loses cohesion, dispersing harmlessly. A mage with a low-rank Mana Reactor can manage three to four casts per mana cycle before reserves dip to unsafe levels. Each cast requires roughly two seconds of concentration—the device needs that window to finish its compression calculations and spin up the magnetic bottle.

At Beginner, Thermal Lance is a short-range skirmishing tool. It will ignite flammable materials, cause second-degree burns on direct impact, and stagger an unarmored opponent. It will not punch through reinforced barriers, incinerate a target instantly, or function reliably in environments with extreme ambient cold that starve the device of thermal energy to compress. The spell lays the groundwork for thermal manipulation, nothing more.`,

            apprentice: `The plasma sphere grows to roughly basketball size, with the containment field strengthening proportionally to hold a denser, hotter core of approximately 1200 degrees Celsius. The device now models the thermal expansion rate of the target environment, adjusting compression ratios on the fly so that plasma spheres maintain cohesion out to 30 meters. A mid-rank reactor can sustain six to eight casts per cycle.

Concussive force accompanies the thermal payload. The rapid expansion of superheated gases on impact creates a shockwave that can knock a person off their feet or buckle a wooden door. The device staggers the collapse of the magnetic bottle to optimize this effect—too fast and the plasma dissipates before transferring heat; too slow and the blast is underwhelming. The computation is non-trivial, and the device's processor runs near its limit during sustained volleys.

At Apprentice, Thermal Lance becomes a legitimate battlefield tool. It can clear rooms, suppress groups of unarmored targets, and create zones of denied space through persistent thermal bloom. The spell still struggles against magically reinforced defenses and does not discriminate between friend and foe—anything in the blast radius takes the full effect.`,

            adept: `The device achieves near-instantaneous thermal compression and magnetic bottle formation, reducing cast time to a fraction of a second. Range extends to 60 meters with a core temperature of roughly 2000 degrees Celsius, hot enough to melt common metals and flash-boil water on contact. A high-rank reactor can sustain twenty or more casts per cycle.

Remote detonation becomes available. The device can calculate a delayed containment collapse, allowing the mage to fire a plasma sphere that hangs in the air or travels to a designated coordinate before detonating on command. This introduces tactical flexibility—trap-setting, area denial, and timed simultaneous strikes against multiple points. The device tracks and manages up to three delayed spheres simultaneously, each with independent detonation timers.

At Adept, Thermal Lance is professional combat-grade. It can breach light fortifications, disable armored vehicles through thermal shock, and serve as artillery support in squad-level engagements. The spell's primary limitation remains environmental—extreme cold, vacuum, and magically warded areas all degrade compression efficiency and reduce effective temperature.`,

            expert: `Cast time drops to effectively instant. The device pre-computes thermal compression parameters for likely combat scenarios and holds them in a cache, allowing the mage to deploy Thermal Lance as fast as they can form intent. Range pushes to 100 meters with core temperatures reaching 3000 degrees Celsius, sufficient to melt structural steel given direct and sustained exposure.

Sub-munition splitting becomes standard. The device can fragment a single plasma sphere into three to five smaller projectiles mid-flight, each independently tracked and guided to separate targets or spread across an area for saturation bombardment. Sustained bombardment mode allows the mage to maintain a continuous stream of plasma spheres—one every 0.3 seconds—for as long as mana reserves hold. The device handles all trajectory calculations and thermal modeling autonomously.

At Expert, Thermal Lance is a primary weapon system. A single mage can match the area-denial output of a mortar team, breach hardened structures, and engage multiple dispersed targets simultaneously. The mana cost per cast has been optimized, but sustained bombardment will still drain even a Keter-rank reactor within minutes of continuous fire.`,

            master: `The device achieves the theoretical optimum of thermal compression for a Tier 1 spell. The plasma sphere is modeled with near-perfect efficiency—every joule of ambient heat is captured, compressed, and delivered with minimal waste. Core temperature plateaus at approximately 3500 degrees Celsius, the maximum that the containment field can sustain before the plasma's own radiation pressure begins to destabilize the magnetic bottle. Cast time is reflexive; the mage no longer consciously activates the spell, merely wills it and the device executes.

Sustained bombardment efficiency is maximized. The device recycles waste heat from its own processor into the compression cycle, reducing net mana cost per cast to the lowest possible value. A Keter-rank mage can maintain continuous fire for extended engagements, and the sub-munition system can now split a sphere into up to eight guided fragments with independent targeting.

This is the ceiling of Thermal Lance as a Tier 1 spell. A mage at this level can demolish a small building with sustained, concentrated fire over several minutes. They cannot level a city block, cannot produce temperatures exceeding what a Tier 1 containment field can hold, and cannot bypass magical barriers of equal or higher tier through raw thermal output alone.`
        }
    },
    {
        id: 'cryo_needle',
        name: 'Cryo Needle',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device identifies and draws in ambient atmospheric moisture, flash-freezing it into a crystalline projectile roughly the size of a dagger. The freezing process is nearly instantaneous—the device strips thermal energy from a pinpoint volume of air, forcing water molecules into a dense, ordered lattice while simultaneously shaping the resulting ice into an aerodynamic form. A low-power magnetic pulse then accelerates the shard toward the target.

Range is limited to approximately 15 meters. Beyond that, the magnetic impulse loses coherence and the shard's trajectory becomes unreliable. A mage with a low-rank Mana Reactor can produce four to five shards per cycle before the device's thermal-extraction systems need a rest. Each shard hits with roughly the force of a thrown knife and causes localized numbness on impact as residual cold leaches into the surrounding tissue.

At Beginner, Cryo Needle is a precision harassment tool. It is nearly silent in flight and leaves no flash or smoke signature, making it useful for discreet engagement. It will not penetrate body armor, shatter on hardened surfaces, or function in arid environments where atmospheric moisture is scarce. The spell requires an atmosphere to work—it cannot conjure ice from vacuum.`,

            apprentice: `The shards grow to short-sword dimensions with a denser crystal structure. The device now layers the freezing process, building the shard from the core outward in concentric rings that interlock molecularly—the result is ice with roughly the compressive strength of pine wood rather than the brittleness of common frost. Range extends to 30 meters, and a mid-rank reactor can sustain eight to ten casts per cycle.

Spiraling magnetic acceleration is introduced. The device imparts a controlled rotation to each shard, gyroscopically stabilizing it in flight and significantly improving accuracy at range. The shard also carries a cold pulse on impact—a brief but intense thermal drain that flash-freezes a palm-sized area of the target, causing tissue damage beyond the physical penetration.

At Apprentice, Cryo Needle transitions from nuisance to threat. It can penetrate light leather armor and embed itself two to three centimeters into exposed wood. The silence and flashlessness remain tactical assets, but the spell still depends on sufficient atmospheric humidity. A desert or an artificially dehumidified environment cuts effective output by more than half.`,

            adept: `Shards accelerate to crossbow-bolt velocities—roughly 100 meters per second—and the device can now form and fire them in under a second. Range pushes to 60 meters with maintained accuracy thanks to improved gyroscopic modeling. A high-rank reactor can sustain twenty or more casts per cycle. The cold pulse on impact expands to a significant freezing burst: a shard striking a target's center mass can drop the temperature of the surrounding tissue by 30 degrees Celsius in a fraction of a second, causing immediate muscular paralysis in the affected area.

The crystalline structure is further refined. The device now grows shards in a hexagonal columnar pattern—the same molecular architecture that gives natural ice its structural integrity at glacial scales, compressed into a weaponized form. Each shard is hard enough to chip stone and embed itself in soft metals like copper or aluminum.

At Adept, Cryo Needle is a lethal weapon. A single well-placed shard can disable a limb, and sustained volleys can dismantle light cover. The freezing pulse also has utility applications—sealing a coolant leak, reinforcing a failing structural joint, or creating an improvised cold patch on overheating equipment. The spell remains bounded by the moisture content of the local atmosphere.`,

            expert: `Shards achieve supersonic velocities—the magnetic accelerator has been optimized to the point where each projectile breaks the sound barrier with a sharp crack that is the spell's only audible signature. Range extends to 100 meters with maintained lethality. The device can now fire rapid volleys: up to five shards per second, each independently targeted, as the freezing and acceleration pipelines operate in parallel rather than sequentially.

Core temperature drops to approximately negative 80 degrees Celsius. On impact, the shard detonates in a freezing burst that drops a 2-meter radius to sub-zero temperatures for several seconds, flash-freezing standing water, shattering brittle materials, and causing severe frostbite to any organic tissue in the zone. A direct hit on an unarmored human is almost certainly fatal from thermal shock alone.

At Expert, Cryo Needle is a suppression weapon. Sustained fire can freeze an area solid, create improvised barriers of ice from ambient moisture, and lock down chokepoints. The spell's primary limitation is no longer casting speed or accuracy—it is the total available water vapor in the engagement zone. The device cannot manufacture water; it can only freeze what is already present.`,

            master: `The device achieves the theoretical optimum of crystallization and magnetic acceleration for a Tier 1 spell. Each shard is grown with a flawless crystal lattice—no internal fractures, no weak planes—resulting in a projectile harder than tempered steel and sharp enough to score diamond. The freezing burst on impact drops to negative 100 degrees Celsius at the core, flash-freezing a 1.5-meter sphere solid within a tenth of a second.

Volley fire is fully reflexive. The device's thermal-extraction and acceleration pipelines run continuously, drawing moisture from a steadily expanding radius as local vapor is depleted. The mage no longer thinks about individual shards—they designate targets or areas and the device handles all formation and firing calculations. The mana cost per shard is the lowest theoretically achievable for a Tier 1 thermal-extraction routine.

This is the ceiling of Cryo Needle as a Tier 1 spell. The mage can sustain fire long enough to freeze a small building's exterior solid or create a localized ice field covering a few hundred square meters—provided sufficient atmospheric moisture. They cannot flash-freeze a lake, cannot produce ice in a true vacuum, and cannot overcome magical thermal barriers of equal or higher tier.`
        }
    },
    {
        id: 'arc_discharge',
        name: 'Arc Discharge',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device ionizes a narrow channel of air between the mage and the target, creating a conductive path through which a stored electrical potential discharges as an arc. The ionization is accomplished by projecting a focused laser pulse that strips electrons from atmospheric molecules; the resulting plasma channel is maintained for a fraction of a second—just long enough for the electrical discharge to travel through it. The arc itself moves at the speed of electricity through ionized air, which is effectively instantaneous to human perception.

Range is limited to roughly 10 meters. Beyond that, the ionization laser loses coherence and the plasma channel fails before the discharge can complete. The stored charge is equivalent to a high-powered stun gun—sufficient to cause full-body neuromuscular disruption lasting 10 to 15 seconds, but not lethal to a healthy adult unless pre-existing cardiac conditions are present. A low-rank reactor can manage three to four casts per cycle.

At Beginner, Arc Discharge is a non-lethal incapacitation tool. It is reliable against unarmored targets within its short range, but conductive armor, electrical grounding, and magically insulated barriers can all negate or redirect the arc. The spell also produces a loud thunderclap as superheated air expands along the discharge path, making it useless for stealth.`,

            apprentice: `Voltage increases by roughly an order of magnitude, bringing the discharge to lethal levels against unarmored human targets. The device now ionizes a wider, more stable plasma channel that holds coherence out to 25 meters, and the laser's targeting is refined to track moving targets in real time. A mid-rank reactor can produce six to eight casts per cycle.

Full neuromuscular disruption becomes the standard effect—every muscle group along the discharge path seizes simultaneously, causing a target to collapse regardless of pain tolerance or combat conditioning. The electrical pulse also generates an electromagnetic disruption: electronics within a 10-meter radius of the impact point experience transient failure, and unshielded devices may suffer permanent damage.

At Apprentice, Arc Discharge transitions from less-lethal to weapon. It can disable an armored vehicle's electronics, fry unshielded communication gear, and kill a human target outright with a center-mass hit. Grounded targets and Faraday-cage environments still offer significant protection, and the spell remains useless against targets that the ionization laser cannot reach—behind thick walls, in sealed containers, or in vacuum where no atmosphere exists to ionize.`,

            adept: `The ionization laser incorporates real-time atmospheric modeling, compensating for humidity, air pressure, and particulate density to optimize the plasma channel's conductivity. Range extends to 50 meters, and the device can now sustain the arc for up to 15 seconds in a continuous-mode discharge—the arc discharge does not strike and end; it persists, chaining damage over time to a single target or sweeping across multiple targets in sequence.

Voltage reaches levels that are reliably lethal against any organic target short of those with active magical shielding. A sustained-arc hit will carbonize tissue along the discharge path within seconds. The electromagnetic pulse radius expands to 20 meters, enough to disable vehicles and squad-level communications gear. Bioelectric tracking is added: the device detects the faint electromagnetic signature of living nervous systems and adjusts the ionization laser to ensure the arc seeks the target's core rather than dissipating into a nearby conductor.

At Adept, Arc Discharge is a heavy weapon. It can down aircraft via avionics disruption, destroy drone swarms through chain-arcing, and neutralize hardened targets through sustained electrical delivery. The spell's signature—visible arc, thunderclap, EMP spike—makes it highly detectable, and the continuous-mode discharge drains mana rapidly.`,

            expert: `Cast time drops to effectively instant. The device pre-ionizes multiple potential paths before the mage commits to a discharge, so the arc fires the moment intent is formed. Range extends to 100 meters, and the EMP radius expands to 50 meters—sufficient to black out a city block's electronics for the duration of the discharge. Multiple simultaneous bolts can be fired at independent targets, each tracked and sustained by a parallel ionization thread.

Sustained-arc mode can run for up to 30 seconds continuously, during which the device dynamically adjusts the ionization path to account for target movement, atmospheric changes, and energy bleed. The arc can also be modulated in frequency to optimize penetration—high-frequency pulses bypass surface conductivity and deliver damage deeper into a target's internal structure.

At Expert, Arc Discharge is an area-denial and anti-materiel weapon. A single cast can disable an armored convoy's electronics, and sustained fire can destroy hardened electrical infrastructure. The mage remains vulnerable during the discharge—the arc is a direct line to their position, and anyone who can trace it knows exactly where the fire is coming from.`,

            master: `The device achieves the theoretical optimum of atmospheric ionization and electrical discharge for a Tier 1 spell. The plasma channel is modeled with perfect precision—minimal energy bleed, maximum conductivity, exact atmospheric compensation in real time. The arc fires with zero conscious delay; the mage wills and the lightning strikes. EMP radius reaches 75 meters, affecting even hardened military electronics within that zone. Sustained-arc mode can run for up to 60 seconds without degradation.

Multiple simultaneous bolts are managed with the same ease as a single discharge. The device can track and engage up to eight independent targets across the full 100-meter range, each with its own dedicated ionization thread and discharge modulation. Bioelectric tracking is refined to the point where the arc can distinguish between friendlies and hostiles based on pre-registered bioelectric signatures.

This is the ceiling of Arc Discharge as a Tier 1 spell. The mage can neutralize an infantry platoon and its electronic support within seconds. They cannot produce an EMP at city scale, cannot "control all electricity" within a zone, and cannot discharge through barriers that the ionization laser cannot physically penetrate.`
        }
    },
    {
        id: 'pressure_edge',
        name: 'Pressure Edge',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device compresses a volume of ambient air into a monomolecular-thin cutting edge and accelerates it as a silent projectile. The compression is achieved by manipulating air pressure gradients—the device creates a high-pressure region that collapses into a linear wavefront, shearing along its leading edge with enough force to cut soft materials. The blade is nearly invisible in flight, betraying itself only as a faint shimmer like heat haze over asphalt.

Range is limited to roughly 15 meters. The compression wavefront begins to disperse beyond that distance, losing its cutting edge and dissolving into a harmless breeze. A low-rank Mana Reactor can produce four to five blades per cycle. Each blade cuts with roughly the force of a sharpened kitchen knife—enough to slice through heavy fabric, score wood to a depth of a few millimeters, and cause shallow but painful lacerations on exposed skin.

At Beginner, Pressure Edge is a stealth engagement tool. It produces no flash, no sound beyond a faint hiss, and no projectile that can be visually tracked without enhancement. It will not penetrate body armor, cut through structural materials, or remain coherent in turbulent air conditions. The spell requires an atmosphere—in vacuum, there is nothing to compress.`,

            apprentice: `The device introduces helical vortex stabilization. Each blade is wrapped in a counter-rotating air jacket that maintains the cutting edge's coherence over longer distances and through mild air turbulence. Range extends to 30 meters, and the edge sharpens as the device compresses the wavefront to approximately a tenth of a millimeter in thickness. A mid-rank reactor can sustain eight to ten casts per cycle.

Cutting power increases proportionally. The blade can now shear through light leather as if it were paper, embed itself two to three centimeters into solid wood, and cause deep lacerations that require immediate medical attention. The near-invisibility is preserved—the vortex jacket actually smooths out the shimmer that the Beginner-level blade produced, making the projectile even harder to spot.

At Apprentice, Pressure Edge becomes a lethal precision weapon. A single well-placed blade to the throat or femoral artery can kill. The spell's weakness remains its dependence on air density—at high altitude or in thin atmospheres, the compression wavefront is weaker and the blade loses cutting force proportionally.`,

            adept: `The blade becomes functionally invisible. The device eliminates all optical distortion by precisely matching the air density gradient around the projectile to the surrounding atmosphere—there is no shimmer, no haze, no visual signature of any kind. The only way to detect an incoming blade is through air-pressure sensors, enhanced hearing capable of registering the faint hiss, or magical detection. Range extends to 60 meters with maintained lethality, and a high-rank reactor can sustain twenty or more casts per cycle.

Cutting power reaches the threshold where sheet metal is sheared cleanly. A blade will pass through a car door, sever a tree branch as thick as a human arm, or bisect an unarmored target without losing velocity. A room-clearing vortex storm becomes available: the device fires a cluster of five to eight blades in a fan pattern that covers a cone roughly four meters wide at its terminal point, shredding everything in its path.

At Adept, Pressure Edge is a squad-level threat. It can clear entrenched positions, disable light vehicles by severing critical components, and create zones where moving without cover is effectively suicidal. The spell's invisibility makes it ideal for ambush tactics, but the blade's path can be predicted by anyone who can perceive the air-pressure wake it leaves behind.`,

            expert: `Range extends to 100 meters, and cutting power reaches the point where structural steel is severed. The device can now sustain barrages—a continuous stream of blades fired at a rate of up to three per second, each independently tracked and guided. The acoustic signature is actively suppressed; the device generates a counter-phase sound wave that cancels the blade's hiss, making the projectile both invisible and completely silent.

The compression wavefront has been refined to the thickness of a few molecules. At this scale, the blade cuts by physically separating atomic bonds along its edge rather than by brute force. The result is a projectile that passes through most materials with almost no resistance—it does not smash or tear; it cleaves at the molecular level.

At Expert, Pressure Edge is an assassination-grade weapon. A single silent, invisible blade can take a target from 100 meters with no warning. Sustained barrages can dismantle a reinforced structure piece by piece, each blade slicing through steel, concrete, and composite materials with equal ease. The spell is still bounded by air density—in thin atmospheres, cutting power and range both degrade proportionally.`,

            master: `The device achieves the theoretical optimum of air compression and projectile guidance for a Tier 1 spell. Each blade is compressed to the absolute minimum thickness that the atmosphere can support—a wavefront just a few atoms wide, capable of cleaving through reinforced concrete to a depth of 10 centimeters before dissipating. The projectile is silent, invisible, and leaves no detectable wake in still air. Reflexive casting is achieved: the mage designates targets through intent alone, and the device handles all compression, acceleration, and guidance calculations autonomously.

Sustained barrages are maintained with negligible conscious overhead. The device can engage a room full of targets, track moving vehicles, and intercept incoming projectiles mid-flight. The mana cost per blade is optimized to the lowest value compatible with Tier 1 computational limits—the spell is a model of efficiency within its design tier.

This is the ceiling of Pressure Edge as a Tier 1 spell. A mage at this level can dismantle a small building or a vehicle column through sustained, precise fire. They cannot cut through magical barriers of equal or higher tier, cannot project blades through vacuum, and cannot overcome targets that are fully sealed in airtight, magically reinforced enclosures.`
        }
    },
    {
        id: 'seismic_lance',
        name: 'Seismic Lance',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device emits a directed seismic pulse into the ground at the target location, vibrating the subterranean material at its resonant frequency. This liquefies a narrow channel through soil, clay, and loose rock, through which the device then compresses and extrudes a spire of available stone. The entire process takes roughly two seconds from pulse to emergence. The resulting spike stands about one meter tall with a tapered, spear-like tip.

Range is limited to roughly 10 meters. Beyond that, the seismic pulse attenuates too much to maintain the resonance needed for channel liquefaction. A low-rank Mana Reactor can manage three to four casts per cycle. The stone spire is crude—roughly the consistency of common building stone—and serves more as a trip hazard, barricade, or stagger-inducing obstacle than a direct weapon.

At Beginner, Seismic Lance is a battlefield-shaping tool. It can create improvised cover, block a doorway, trip an advancing opponent, or provide a step to reach higher ground. It will not pierce armor, stop a charging target, or function on surfaces that lack an earthen substrate—concrete slabs, metal decking, and magically warded ground are immune.`, 

            apprentice: `The spire grows to two meters in height with significantly denser stone. The device now selects the optimal mineral composition from the available substrate—quartz-rich soil produces harder spikes; clay-heavy ground yields wider, blunter formations. The seismic pulse is tuned to propagate deeper, creating a more stable base, and the extrusion process compresses the stone under higher pressure to eliminate internal fractures. Range extends to 20 meters, and a mid-rank reactor can sustain six to eight casts per cycle.

The spike can now pierce light body armor. A direct hit to an unarmored torso will penetrate, and the sudden eruption from below is difficult to anticipate or dodge without enhanced reflexes. The utility applications expand—the mage can create a line of spikes as a temporary barricade, breach a ground-floor wall by undermining its foundation, or collapse a shallow tunnel by disrupting the substrate.

At Apprentice, Seismic Lance becomes a weapon and a tool in equal measure. It can shape engagements by altering terrain and pose a genuine threat to lightly armored opponents. The spell still cannot function on artificial surfaces or in environments where the ground is frozen solid beyond the depth the seismic pulse can reach.`,

            adept: `The spire reaches three meters in height with granite-grade hardness. The device models the local geology in real time—soil composition, water table depth, bedrock proximity—and optimizes the liquefaction channel for maximum structural integrity of the resulting spike. Range extends to 50 meters, and a high-rank reactor can sustain 15 or more casts per cycle.

Formation patterns become available. The device can erupt multiple spikes simultaneously in geometric configurations—a ring to trap a target, a line to create a wall, a grid to deny an area to vehicles. Stone sonar sensing is added: by pulsing the ground and analyzing the reflected vibrations, the device builds a crude 3D map of subsurface structures, useful for detecting tunnels, buried objects, or approaching subterranean threats.

At Adept, Seismic Lance is a tactical engineering tool. The mage can reshape a battlefield in seconds—raising cover, creating chokepoints, disabling vehicles by erupting spikes through their undercarriages. The spell remains entirely dependent on available substrate. Bedrock at depth produces the strongest spikes; loose sand produces barely coherent formations that collapse under their own weight.`,

            expert: `The spire reaches three to four meters with near-instantaneous eruption—the seismic pulse, liquefaction, and extrusion occur in a single, seamless computational cycle that takes less than a tenth of a second. Range extends to 100 meters. The stone is compressed to maximum density, approaching the hardness of industrial-grade concrete, and the spike's tip is sharpened to a razor point by the device's extrusion modeling.

The spikes can stop small-arms fire. A line of them serves as legitimate cover against rifles and fragmentation grenades. Complex terrain mazes become possible—the mage can raise a network of walls, barriers, and obstacles across a wide area in seconds, creating a labyrinth that channels enemy movement into kill zones. The stone sonar system is refined to provide meter-resolution subsurface imaging out to 50 meters in all directions.

At Expert, Seismic Lance is a fortification spell. The mage can create defensive positions from nothing, trap vehicles, collapse terrain under enemy formations, and maintain full subsurface awareness. The spell's ceiling is geological—it cannot affect substrates deeper than roughly 5 meters, and the quality of the spike is always determined by the quality of the available stone.`,

            master: `The device achieves the theoretical optimum of geological modeling and resonant extrusion for a Tier 1 spell. Each spike erupts with perfect density, shape, and placement—no wasted stone, no structural flaws, no computation lag. The mage deploys them reflexively: intent triggers the seismic pulse, and the device handles everything from geological analysis to final formation. Fortified positions with interlocking cover, elevated firing platforms, and anti-vehicle barriers can be raised in under five seconds across a wide area.

The stone sonar provides continuous, real-time subsurface mapping with centimeter-level resolution. The mage is aware of every buried object, every tunnel, every approaching subterranean threat within the spell's 50-meter sensing radius. This awareness is maintained passively, a background process that requires no conscious attention.

This is the ceiling of Seismic Lance as a Tier 1 spell. The mage can reshape natural terrain into a fortified position in seconds and maintain complete geological awareness of the engagement zone. They cannot erupt spikes from metal surfaces, magically warded ground, or locations where no earth or stone substrate exists within the spell's 5-meter depth penetration. The spell cannot create stone from nothing—it only compresses and extrudes what is already present.`
        }
}
];
// Merge base spells into spellData
if (typeof spellData !== "undefined" && spellData.elemental) {
    spellData.elemental = baseElementalSpells.concat(spellData.elemental);
}

const elementalSpellsBatch1 = [
    {
        id: 'hydro_whip',
        name: 'Hydro Whip',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device draws moisture from the surrounding air and condenses it into a pressurized stream roughly one meter in length, anchored to the mage's palm by a thin mana tether. The stream functions as a flexible lash—striking, wrapping, and retracting on command with the speed and force of a swung chain. The device maintains the whip's cohesion through continuous hydrostatic pressure calculations, keeping the water compressed enough to hold shape without dispersing into spray.

Range is limited to approximately two meters from the mage's hand. Beyond that, the mana tether loses integrity and the water collapses into an harmless splash. The whip can trip, sting, and disarm but lacks the mass to cause serious blunt trauma. A low-rank Mana Reactor can sustain the whip for roughly five minutes of active combat before the device's moisture-extraction cycle needs to recalibrate.

At Beginner, Hydro Whip is a utility and harassment tool. It provides a mage with a reach advantage in close quarters, can retrieve small objects from a short distance, and serves as a non-lethal compliance tool. It will not cut, pierce, or injure a determined opponent through armor of any kind.`,
            apprentice: `The whip extends to roughly four meters and gains the ability to change its cross-sectional density on command. The device can thin the stream to a razor-fine filament for cutting, or swell it into a heavy blunt rope for concussive impact. Cutting capability is modest—light leather and fabric can be sliced, but the water lacks the pressure to penetrate armor or dense materials. Blunt strikes land with roughly the force of a weighted sap.

The moisture-extraction range expands, allowing the device to pull water from damp soil, plant matter, or nearby containers within ten meters. The whip can be split into two shorter lashes operating independently, though the device's processing load doubles and a mid-rank reactor is recommended for sustained dual-whip combat.

At Apprentice, Hydro Whip transitions from utility tool to flexible combat option. The mage can switch between cutting and bludgeoning modes mid-swing, and the extended reach makes the spell effective at controlling distance against melee opponents.`,
            adept: `The whip reaches eight meters with maintained structural integrity, and the device achieves water pressures sufficient to cut through sheet metal and shatter bone on impact. The lash can be reshaped mid-strike—the device calculates the optimal form for each phase of an attack, transitioning from a thin cutting edge to a broad sweeping surface to a coiling snare in a single fluid motion. The mana tether is robust enough to lift and throw objects up to roughly fifty kilograms.

Ambient moisture extraction becomes the default. The device continuously siphons water vapor from the air, maintaining the whip indefinitely without requiring the mage to stand near a water source. In humid environments, the whip actually grows stronger as excess moisture is absorbed and compressed into the stream. The whip can be projected as a high-pressure jet—effectively a short-range water cutter that slices through most conventional materials given sustained contact.

At Adept, Hydro Whip is a versatile combat tool and precision instrument. It cuts, crushes, grapples, and lifts with equal facility. The spell demands a mid-rank reactor for sustained pressure output, but the mana cost per strike is well within the budget of any combat-rated mage.`,
            expert: `The whip extends to fifteen meters with no loss of pressure or responsiveness, and the device can maintain up to four independent lashes simultaneously—each tracking separate targets with dedicated processing threads. Cutting pressure reaches industrial water-jet levels, slicing through reinforced concrete and inch-thick steel plate. The mage can reshape any lash into a spray, a barrier, a net, or a concentrated jet without conscious input—the device reads intent and reconfigures the water instantly.

Molecular-level compression allows the water to achieve densities far beyond natural limits. A whip-strike from this density carries the kinetic impact of a sledgehammer focused into a contact area the size of a fingernail. The device can freeze sections of the whip into ice for rigidity, or superheat them into steam for concussive expansion on contact, blending thermal manipulation with hydrostatic control.

At Expert, Hydro Whip is a weapon system in its own right. A single mage wielding four high-pressure lashes can engage multiple opponents at range, cut through fortified positions, and manipulate the battlefield with a fluidity that unenhanced fighters simply cannot counter.`,
            master: `The spell operates at the theoretical optimum of hydrostatic manipulation for a Tier 1 spell. The whip can extend up to twenty meters, split into any number of independent lashes the device can process, and achieve pressures that cut through any known conventional material given brief sustained contact. The mana tether is effectively unbreakable within its operational range—the device maintains the molecular bond between mage and water with near-perfect computational efficiency.

The device extracts moisture from any available source within a thirty-meter radius, including the water content of organic tissue—a capability that borders on unsettling but is primarily useful for maintaining the whip in arid environments where atmospheric moisture is scarce. The transition between solid ice, liquid water, and pressurized steam is seamless and instantaneous, allowing the mage to adapt the whip's properties to any tactical requirement without conscious direction.

This is the ceiling of Hydro Whip as a Tier 1 spell. The mage cannot control vast bodies of water, cannot generate water from nothing in a true vacuum, and cannot manipulate water inside a living creature's body to harmful effect—the device's moisture-extraction from organic tissue is limited to surface-level condensation. What Master offers is the most refined, most versatile hydrostatic weapon that Tier 1 computation can sustain—nothing more, nothing less.`
        }
    },
    {
        id: 'vapor_screen',
        name: 'Vapor Screen',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device extracts atmospheric moisture and disperses it as a fine, lingering mist in a radius of roughly five meters around the mage. The mist is thick enough to obscure vision—opponents beyond three meters appear as vague shapes, and fine details like weapon type or hand position are lost entirely. The device maintains the mist's density by continuously cycling water vapor through a mana-enhanced condensation loop, preventing natural dissipation for up to two minutes.

The spell provides no physical protection. The mist is simply water vapor—arrows, bullets, and spells pass through it unimpeded. Its value is purely tactical: breaking line of sight, concealing movement, and forcing opponents to close distance or rely on non-visual targeting. The mage's own vision is equally impaired unless they close their eyes and rely on the device's spatial sonar, which provides a crude but functional awareness of movement within the mist.

At Beginner, Vapor Screen is a disengagement and repositioning tool. It buys seconds rather than minutes, and a determined opponent can simply push through the mist and close to melee range. The spell is ineffective in extremely dry or hot environments where the device cannot extract sufficient moisture.`,
            apprentice: `The mist expands to a ten-meter radius and can be shaped—the device allows the mage to create corridors of clear air within the mist for allied firing lanes, or concentrate the fog into dense patches that block even enhanced vision. Duration extends to roughly five minutes. The mage's own vision is now compensated: the device renders a wireframe overlay of movement and shapes within the mist, allowing the mage to see what others cannot.

Thermal insulation becomes a secondary effect. The mist absorbs and diffuses infrared radiation, degrading thermal imaging and heat-based targeting within its radius. This makes the spell effective against opponents who rely on thermal scopes or infrared sensors, though the effect is moderate—a sufficiently powerful thermal array can still detect the heat differential of a living body through the fog.

At Apprentice, Vapor Screen becomes a genuine tactical asset. The mage controls the battlefield's visibility, creating firing lanes and concealment zones that favor their own side. The spell still depends on atmospheric moisture and cannot function in extremely arid conditions.`,
            adept: `The mist expands to twenty meters and persists indefinitely while the device maintains the condensation cycle. The device now extracts moisture from the ground, nearby plant life, and even the exhaled breath of creatures within range—effectively guaranteeing that the mist can be sustained in any environment that contains biological or geological water, which is virtually all terrestrial environments.

The mage gains full environmental awareness within the mist. Every droplet functions as a distributed sensor: movement disturbs the fog, and the device maps those disturbances into a real-time three-dimensional awareness overlay. Nothing moves within the mist without the mage knowing its position, velocity, and approximate mass. Invisible opponents, concealed threats, and hidden passages all become perceptible through this droplet-based sonar network.

At Adept, Vapor Screen is both a concealment system and a sensory network. The mage operates with perfect awareness in a space where opponents are functionally blind. The spell requires a mid-rank reactor to maintain the distributed sensor processing alongside the condensation cycle.`,
            expert: `The mist covers a fifty-meter radius and can be layered with mana-infused particles that scatter active sensor emissions—lidar, radar, and magical detection spells are all significantly degraded within the fog. The device can selectively clear or thicken sections of the mist in real time, creating a dynamic environment where allies always have clear firing lanes and enemies always face dense, disorienting fog.

The droplet sensor network achieves millimeter resolution. The device tracks not just movement but the specific outlines of objects and creatures within the mist, providing the mage with detailed spatial awareness that rivals direct visual observation. The mist can be flash-densified into a momentary wall of water vapor thick enough to deflect lightweight projectiles and disrupt energy-based attacks for a fraction of a second.

At Expert, Vapor Screen turns any engagement into a battle fought on the mage's terms. Opponents cannot see, cannot target effectively, and cannot move without broadcasting their position. The mage, by contrast, perceives everything within the fog with clarity that makes the mist feel like an extension of their own body.`,
            master: `The spell operates at the theoretical optimum of atmospheric moisture manipulation for a Tier 1 spell. The mist can extend to a hundred-meter radius, with every droplet functioning as a sensor node in a distributed awareness network that provides the mage with real-time, three-dimensional mapping of the entire volume at centimeter resolution. The device manages the condensation cycle with negligible mana overhead, making the mist effectively permanent until the mage dismisses it.

Selective transparency allows the mage to grant allies perfect visibility while enemies see only impenetrable fog. The device differentiates between registered and unregistered bioelectric signatures, adjusting mist density around each individual in real time. Flash-densification can produce momentary water barriers strong enough to deflect small-arms fire.

This is the ceiling of Vapor Screen as a Tier 1 spell. The mage cannot create fog from nothing in a true vacuum, cannot condense the mist into solid ice or liquid water weapons, and cannot extend the sensor network beyond the physical range of the dispersed droplets. What Master offers is the most comprehensive tactical concealment and awareness system that Tier 1 atmospheric manipulation can deliver—turning any environment into the mage's domain.`
        }
    },
    {
        id: 'cryogenic_field',
        name: 'Cryogenic Field',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device rapidly extracts thermal energy from the air in a spherical radius of roughly five meters around the mage, dropping the temperature by approximately forty degrees Celsius in under two seconds. The sudden cold snap freezes standing moisture—dew, puddles, sweat—into a thin layer of ice on every surface within range. Exposed skin suffers immediate frostnip; wet clothing freezes stiff; condensation on equipment becomes a slick, hazardous glaze.

The effect is a single burst rather than a sustained field. Once the thermal energy has been extracted and vented through the device's heat sinks, the environment begins warming immediately. In normal conditions, the ice begins melting within thirty seconds. The device requires a brief recalibration period—roughly ten seconds—before it can extract thermal energy again, making Cryogenic Field a one-shot engagement opener rather than a sustained defensive tool.

At Beginner, Cryogenic Field is an area-denial and disengagement tool. It creates a momentary zone of extreme cold that punishes anyone within melee range, buying the mage time to reposition. It will not kill a healthy adult outright, but the sudden temperature shock is deeply disorienting and the ice underfoot makes pursuit treacherous.`,
            apprentice: `The thermal extraction radius expands to eight meters, and the temperature drop reaches sixty degrees Celsius—sufficient to freeze standing water solid and cause immediate frostbite on exposed skin within seconds. The device can now sustain the cold zone for up to thirty seconds by continuously extracting heat and venting it as waste energy, creating a persistent area of frozen ground and chilled air rather than a single burst.

The ice layer thickens enough to impede movement—surfaces become dangerously slick, and the frozen ground can crack and buckle as moisture expands, creating uneven terrain that punishes careless footwork. The device can direct the thermal extraction asymmetrically, freezing one side of the radius more aggressively to channel opponents toward a desired direction.

At Apprentice, Cryogenic Field becomes a battlefield-shaping tool. The mage can create zones of frozen ground that slow and destabilize opponents, channel movement toward prepared positions, and persist long enough to influence an entire skirmish rather than a single exchange.`,
            adept: `The cold zone extends to fifteen meters, and the temperature drops by over a hundred degrees Celsius—sufficient to freeze human tissue through to the bone within seconds of exposure. The device maintains the field indefinitely by converting extracted thermal energy directly into mana, partially offsetting the spell's own cost. Frost crystals form on every surface, growing into elaborate fractal structures that further degrade footing and visibility.

The device can now shape the cold field. Rather than a simple sphere, the mage can project cones, walls, or rings of extreme cold, creating barriers of frozen air that are painful and damaging to cross. Living creatures within the sustained field suffer cumulative cold damage—initial shock gives way to frostbite, then hypothermia, then tissue death as exposure continues. A mage with a high-rank reactor can maintain the field through extended combat.

At Adept, Cryogenic Field is a lethal area-denial weapon. Opponents must either exit the zone immediately or accept progressively worse cold injuries. The field can be shaped to protect allies, creating corridors of normal temperature within the frozen perimeter.`,
            expert: `The cold zone reaches twenty-five meters with temperature drops exceeding a hundred and fifty degrees Celsius—cold enough to embrittle metals, shatter conventional plastics, and cause near-instantaneous tissue destruction in unprotected organic matter. The device extracts heat so efficiently that materials within the zone undergo thermal shock: glass cracks, metal warps, and stone fractures as differential contraction rips through structures.

The frost field becomes adaptive. The device monitors the positions of registered allies and maintains safe corridors for them while maximizing cold output everywhere else. Sustained exposure within the expert-level field is lethal within minutes for any unprotected human. Even heavily insulated opponents suffer from the sheer thermal gradient as the device leaches heat faster than protective gear can retain it.

At Expert, Cryogenic Field is a weapon of environmental domination. The mage creates a killing field where only they and their allies can operate effectively. The mana cost is significant, but the tactical advantage of rendering a large area hostile to all unprepared life is immense.`,
            master: `The spell operates at the theoretical optimum of localized thermal extraction for a Tier 2 spell. The cold zone reaches thirty meters with temperature drops approaching two hundred degrees Celsius—the hard limit of what the device's thermal-compression architecture can achieve before the extracted energy destabilizes the containment cycle. Every surface within the zone freezes instantly; the air itself becomes a hazard as moisture crystallizes into a dense suspension of ice particles that obscure vision and abrade lungs.

The device manages the field autonomously, maintaining safe zones for allies and concentrating cold output against detected threats. The mana cost is optimized to the theoretical minimum for the thermal energy being extracted, making sustained operation practical for a high-rank reactor through extended engagements.

This is the ceiling of Cryogenic Field as a Tier 2 spell. The mage cannot freeze an entire city block, cannot reduce temperatures to absolute zero, and cannot extract thermal energy from targets shielded by thermal barriers of equal or higher tier. What Master provides is the most lethal, most efficient localized cold-field that Tier 2 thermal manipulation can sustain—a weapon that turns the immediate environment itself into a hostile, freezing trap.`
        }
    },
    {
        id: 'cascade_arc',
        name: 'Cascade Arc',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device ionizes a conductive channel to the nearest target within ten meters, then on impact releases an electrical discharge that seeks the next nearest conductive body within three meters. The arc chains between up to three targets total, each successive strike carrying roughly two-thirds the voltage of the previous one as energy dissipates across the chain. The first target receives a stun-grade shock; the second and third receive diminishing shocks that are painful but rarely incapacitating.

The device must calculate the ionization path for each link in the chain before releasing the discharge, which adds roughly half a second to the cast time compared to a standard Arc Discharge. The chain follows the path of least electrical resistance, which means it arcs through conductive materials—metal armor, wet surfaces, and grounded opponents chain more reliably than dry, insulated ones. This can be a liability if the arc chooses an unintended target.

At Beginner, Cascade Arc is a crowd-control tool for closely grouped opponents. It will not reliably kill any of its targets, but it can stagger multiple enemies simultaneously, creating openings for follow-up attacks or retreats. The spell requires line of sight to the primary target; secondary targets are selected automatically by the device.`,
            apprentice: `The chain extends to five targets with a maximum jump distance of five meters between each. The device now models the electrical properties of all potential targets in real time, selecting the chain path that maximizes damage to hostiles while avoiding registered allies. Voltage at the primary target reaches lethal levels against unarmored humans; successive targets receive shocks sufficient to cause full neuromuscular disruption lasting ten to fifteen seconds.

The cast time drops as the device pre-computes likely chain paths based on battlefield positioning. The mage can now designate a preferred chain sequence—targeting specific enemies in order—though the device will override this if the designated path is electrically impractical. A mid-rank reactor can sustain five to six chained casts per mana cycle.

At Apprentice, Cascade Arc becomes a legitimate anti-group weapon. A single cast can disable an entire fire team, and the selective targeting prevents the common beginner problem of arcing into allies. The spell remains limited by the requirement for conductive proximity—widely dispersed opponents cannot be chained.`,
            adept: `The chain reaches eight targets with a jump distance of eight meters, and the device can now split the initial discharge into two independent chains that track separate target groups. Each chain maintains full voltage through the first four targets before degrading, effectively giving the mage two simultaneous Lightning Bolts that each chain to four opponents. The cast time is functionally instantaneous as the device runs continuous path calculations in the background.

The electrical discharge carries an electromagnetic pulse component that disables unshielded electronics within five meters of any target in the chain. This makes the spell devastating against technologically equipped forces—a single cast can disable a squad's communications, optics, and vehicle electronics while also incapacitating the soldiers themselves.

At Adept, Cascade Arc is a force-multiplying engagement opener. The mage can neutralize two separate groups of opponents simultaneously, crippling both their combat capability and their technological support. The mana cost is significant but well within the budget of a high-rank reactor.`,
            expert: `The chain reaches twelve targets per discharge with a jump distance of twelve meters, and the device can split into three independent chains. The voltage at every target in the chain is now standardized—the degradation effect has been engineered out, meaning the last target in the chain receives the same lethal discharge as the first. The EMP radius expands to fifteen meters from any point in the chain, blacking out a substantial area of electronic infrastructure with a single cast.

The device achieves real-time bioelectric targeting. The chain preferentially arcs to living targets based on their bioelectric signatures, allowing the mage to fire into a mixed environment of friendlies, hostiles, and inanimate objects with high confidence that the chain will find enemy combatants rather than allied ones. Pre-computed chain paths are generated and updated continuously, so the discharge fires the instant the mage forms intent.

At Expert, Cascade Arc is a tactical weapon of extraordinary flexibility. A single cast can disable a platoon, fry an entire vehicle column's electronics, and create a zone of electromagnetic chaos that disrupts enemy coordination for minutes afterward.`,
            master: `The spell operates at the theoretical optimum of chained electrical discharge for a Tier 2 spell. Up to fifteen targets can be chained with a jump distance of fifteen meters, split into up to four independent chains. Every target in the chain receives a discharge equivalent to a focused Arc Discharge—no degradation, no energy loss between arcs. The device computes the optimal chain geometry in milliseconds, factoring in target conductivity, atmospheric conditions, and ally positions to deliver maximum destructive output with zero friendly fire risk.

The EMP component is refined to a directed pulse that can be configured for maximum electronic disruption or minimal collateral damage, depending on the tactical requirement. The mana cost per target in the chain is optimized to the theoretical minimum for Tier 2 electrical discharge, making sustained chaining practical for extended engagements.

This is the ceiling of Cascade Arc as a Tier 2 spell. The mage cannot chain a discharge through non-conductive vacuum, cannot arc through targets beyond the device's ionization range, and cannot generate electrical output that exceeds Tier 2 voltage limits regardless of how many targets are chained. Master means the spell has been refined to the absolute limit of chained electrical weaponology within its designed tier.`
        }
    },
    {
        id: 'pyroclastic_vent',
        name: 'Pyroclastic Vent',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device emits a focused seismic pulse into the ground that fractures subsurface rock and injects a compressed mana charge into the resulting cavity. The mana charge superheats the fractured material to approximately eight hundred degrees Celsius, creating a small reservoir of molten rock that the device then extrudes upward through the fracture channel. The result is a geyser of magma roughly one meter wide and two meters tall that erupts at the targeted point within ten meters, persisting for roughly thirty seconds before cooling into a rough, igneous mound.

The magma is genuine molten stone—hot enough to cause severe burns from radiant heat alone at close range, and fatal on direct contact. However, the volume is small: roughly enough to fill a bathtub. The eruption is slow by combat standards, taking nearly three seconds from pulse to emergence, giving alert opponents time to clear the area.

At Beginner, Pyroclastic Vent is a denial and obstruction tool. The magma fountain creates a hazardous zone that opponents must avoid, and the resulting igneous mound permanently alters the terrain. The spell requires a rocky or earthen substrate—it cannot function on metal decking, deep water, or magically reinforced surfaces.`,
            apprentice: `The magma reservoir grows larger, producing a geyser roughly two meters wide and three meters tall that persists for up to two minutes. The device can now shape the eruption—directing the flow into a spreading pool that covers a wider area, a narrow stream that acts as a burning wall, or a concentrated pillar that reaches four meters. Temperature increases to approximately twelve hundred degrees Celsius, hot enough to soften steel given sustained proximity.

Multiple reservoirs can be created and maintained simultaneously. The device can manage up to three magma sources at once, though each requires a separate seismic pulse and injection cycle. The mage can use this to create overlapping zones of molten rock that funnel opponents through narrow gaps or cut off retreat routes with walls of radiant heat.

At Apprentice, Pyroclastic Vent becomes a battlefield-shaping tool with lethal potential. The sustained magma flows create persistent hazards that cannot be ignored, and the ability to shape the eruption gives the mage fine control over how the terrain is modified. The mana cost per reservoir is moderate but cumulative—a mid-rank reactor can maintain three reservoirs through a typical engagement.`,
            adept: `The device achieves near-instantaneous eruption—the seismic pulse, fracture, injection, and extrusion occur in a single computational cycle taking under half a second. Temperature reaches approximately eighteen hundred degrees Celsius, sufficient to melt common metals and ignite most organic materials from radiant heat alone at close range. The magma can be erupted in any shape the mage conceives: walls, domes, trenches, or sprays of molten droplets that function as a short-range area weapon.

Subsurface magma manipulation becomes available. The device can maintain a reservoir of molten rock beneath the surface, heating and pressurizing it without eruption, then trigger a sudden release when opponents pass overhead. This creates the potential for devastating trap deployment—openings that suddenly become fountains of molten stone, corridors that flood with magma, fortifications that erupt from beneath enemy positions.

At Adept, Pyroclastic Vent is both a weapon and an engineering tool. The mage can reshape the battlefield with molten stone, creating fortifications that cool into permanent structures, traps that lie dormant until triggered, and zone-denial hazards that render entire areas impassable to unprotected personnel.`,
            expert: `The magma temperature reaches approximately twenty-five hundred degrees Celsius—approaching the melting point of steel—and the device can create eruptions of substantial volume, producing flows large enough to fill a small room. The mage can direct magma underground through subterranean channels, causing it to emerge at any point within fifty meters where the substrate allows. The seismic pulse can fracture rock at greater depth, creating larger reservoirs that sustain more voluminous and longer-lasting eruptions.

Obsidian shaping becomes a standard capability. The device can control the cooling rate of erupted magma with precision, producing volcanic glass in any form the mage requires—razor-sharp blades, reflective surfaces, or transparent panels. Rapidly cooled magma forms structural walls of exceptional hardness; slowly cooled magma forms dense, heat-resistant barriers. The mage can build a fortified position from raw earth in under a minute.

At Expert, Pyroclastic Vent blurs the line between weapon and architecture. The mage carries the capability to reshape terrain with fire and stone, creating obstacles, weapons, and fortifications from nothing but the ground beneath their feet. The mana cost is substantial but manageable for a high-rank reactor.`,
            master: `The spell operates at the theoretical optimum of geological thermal manipulation for a Tier 2 spell. Magma temperature approaches three thousand degrees Celsius—the practical ceiling of what the device's containment fields can sustain before the molten stone's own radiant energy begins destabilizing the injection cycle. Eruption volume, shaping precision, and subsurface channeling all reach the maximum that Tier 2 seismic and thermal computation can deliver.

The device manages all reservoirs, channels, and active flows autonomously, allowing the mage to focus on tactical decisions while the spell handles the engineering. Obsidian and igneous structures are produced with structural integrity comparable to reinforced concrete, and the mage can switch between creating weapons, barriers, and traps with zero conscious overhead.

This is the ceiling of Pyroclastic Vent as a Tier 2 spell. The mage cannot trigger actual volcanic eruptions, cannot melt materials with melting points above approximately three thousand degrees Celsius, and cannot create magma from substrates that lack appropriate mineral composition. The spell transforms what is already present in the ground into a weapon and a tool—nothing more, nothing less—but at Master, it does so with absolute precision and devastating efficiency.`
        }
    },
    {
        id: 'cyclone_column',
        name: 'Cyclone Column',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device establishes a rotating pressure differential at a targeted point within fifteen meters, causing the surrounding air to spin inward and upward in a narrow column roughly two meters across and three meters tall. The resulting vortex is comparable to a strong dust devil—enough to lift loose debris, scatter lightweight objects, and make standing difficult for anyone within a meter of the column. The rotation persists for roughly thirty seconds before the pressure differential equalizes and the vortex dissipates.

The vortex has limited lifting capacity—roughly ten kilograms of sustained vertical force at its core. It will loft dust, papers, and small objects but cannot lift a person. The noise is significant; the spinning column produces a constant roaring sound that makes stealth impossible within earshot. The device requires several seconds to establish the pressure differential, during which the mage must maintain focus on the target point.

At Beginner, Cyclone Column is a disruption and area-denial tool. It creates a distracting, noisy obstacle that forces opponents to reroute and provides the mage with a moment of chaos to exploit. It will not seriously injure a determined opponent, but it makes their life difficult in the immediate vicinity.`,
            apprentice: `The vortex expands to roughly four meters across and six meters tall, with sustained wind speeds at the core exceeding one hundred kilometers per hour. Lifting capacity increases to roughly fifty kilograms—enough to loft a person briefly off their feet and tumble them before depositing them several meters away. The device can now sustain the vortex for up to two minutes by continuously maintaining the pressure differential.

Directional control is introduced. The mage can direct the vortex to move slowly across the ground—roughly walking speed—allowing it to be steered toward opponents or positioned as a mobile barrier. The device can also tilt the vortex axis, creating a horizontal spinning column that sweeps across the battlefield like a rotating wall of wind.

At Apprentice, Cyclone Column becomes a genuine battlefield hazard. It can displace personnel, scatter equipment, and force opponents into unfavorable positions. The mana cost is moderate, and a mid-rank reactor can sustain the vortex through a standard engagement.`,
            adept: `The vortex reaches eight meters across and twelve meters tall, with core wind speeds exceeding two hundred kilometers per hour—sufficient to lift and throw a grown human dozens of meters. The device can sustain the vortex indefinitely while mana holds, and the column can be moved at running speed. Multiple smaller vortices can be spawned from the main column, creating a field of spinning air columns that shred anything loose within a twenty-meter radius.

The lifting capacity at the core exceeds two hundred kilograms. Vehicles, debris, and entire sections of light structures can be torn from their moorings and hurled. The mage can selectively add a suction component to the vortex, pulling opponents inward toward the core rather than merely pushing them away. This makes the spell a trap as well as a weapon—opponents who get too close find themselves drawn into the spinning column.

At Adept, Cyclone Column is a devastating environmental weapon. The mage deploys a mobile, sustained tornado that can be directed with precision, and anything caught in its path is subjected to forces that exceed what unaugmented humans can withstand.`,
            expert: `The vortex expands to fifteen meters across and can extend up to thirty meters tall, with core wind speeds approaching three hundred and fifty kilometers per hour. The device can maintain up to three independent vortices simultaneously, each tracked and steered with independent targeting. The combined lifting capacity of a single expert-level vortex exceeds a thousand kilograms—enough to tear the roof off a small building and deposit it hundreds of meters away.

The pressure differential at the core becomes extreme enough to cause barotrauma in unprotected humans. The rapid pressure changes as the vortex passes can rupture eardrums, damage lungs, and cause disorienting vertigo even in opponents who are not physically lifted. The mage can collapse a vortex on command, creating an implosion that sucks nearby objects toward the point of collapse before releasing the compressed air as a concussive blast.

At Expert, Cyclone Column is a natural disaster in miniature. The mage can deploy tornado-force winds with surgical precision, using them as weapons, barriers, or tools of demolition. The mana cost is high but sustainable for a high-rank reactor through extended engagements.`,
            master: `The spell operates at the theoretical optimum of localized atmospheric pressure manipulation for a Tier 2 spell. A single vortex can reach twenty meters across and forty meters tall with core wind speeds approaching four hundred kilometers per hour—the practical ceiling of what the device's pressure-differential computations can sustain before atmospheric friction and energy dissipation make further acceleration impossible. Up to five independent vortices can be maintained and directed simultaneously.

Each vortex is tracked with millimeter-precision targeting and can be steered, tilted, merged, or collapsed on command with zero conscious overhead. The device handles all atmospheric calculations autonomously. Allies within the mage's operational radius are automatically flagged as protected targets, and the vortices will not draw them in or subject them to harmful pressure changes.

This is the ceiling of Cyclone Column as a Tier 2 spell. The mage cannot create hurricane-scale weather systems, cannot sustain wind speeds beyond what the device's localized pressure differential can generate, and cannot project vortices through environments that lack an atmosphere. Master means the spell has been refined to the absolute limit of Tier 2 aerodynamic manipulation—mobile, precise, devastating, and bounded by the physics of air pressure and computational capacity.`
        }
    },
    {
        id: 'liquefaction_zone',
        name: 'Liquefaction Zone',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device emits a sustained low-frequency vibration into a patch of ground within ten meters, disrupting the structural bonds between soil particles and forcing groundwater toward the surface. The result is a circular patch of liquefied earth roughly three meters across that behaves like thick mud—anything standing on it begins to sink at a rate of roughly ten centimeters per second. The liquefaction persists for up to a minute after the vibration ceases.

The quicksand is not bottomless; it extends roughly half a meter below the surface before hitting compacted subsoil that the vibration cannot penetrate. A person caught in it sinks to roughly thigh depth before the compacted layer stops them, at which point they are immobilized but not drowning. Extraction requires significant effort—the suction of the liquefied earth makes pulling free difficult without assistance.

At Beginner, Liquefaction Zone is a trapping spell. It creates a hazard that can immobilize a single opponent and force others to reroute around the affected area. The spell requires earthen ground with some moisture content—it cannot liquefy solid rock, metal flooring, or bone-dry sand.`,
            apprentice: `The quicksand patch expands to roughly five meters across, and the depth of liquefaction reaches one meter—deep enough to submerge a person to the chest. The device can now maintain the vibration indefinitely, keeping the ground liquefied for as long as the mage channels mana. The sinking rate increases to roughly twenty centimeters per second, and the suction force makes self-extraction extremely difficult without enhanced strength or assistance.

Multiple patches can be created and maintained simultaneously—up to three at once with a mid-rank reactor. The device can selectively liquefy and re-solidify patches on command, allowing the mage to trap opponents and then release allies who stumble into the same hazard. The vibration frequency can be adjusted to affect different soil compositions with greater efficiency.

At Apprentice, Liquefaction Zone becomes a tactical terrain-modification tool. The mage can create a field of hidden traps that immobilize opponents while remaining virtually undetectable until triggered—the surface of a quicksand patch looks identical to normal ground until weight is applied.`,
            adept: `The quicksand patch reaches eight meters across with a liquefaction depth of up to two meters. The device can now create quicksand that appears completely stable until a specific trigger condition is met—weight exceeding a threshold, a specific number of footsteps, or a delay timer. This allows the mage to lay traps that opponents walk onto without suspicion, only to have the ground liquefy beneath them without warning.

The suction force increases to the point where even enhanced-strength opponents struggle to extract themselves. The device can selectively liquefy specific sections of ground within the patch, creating channels that guide sinking victims toward or away from specific positions. This allows the mage to control where trapped opponents end up—pulling them toward the mage for capture, or pushing them deeper into the hazard.

At Adept, Liquefaction Zone is a concealable, controllable trap system. The mage can prepare an entire area as a minefield of hidden ground hazards, each triggered on the mage's terms. The mana cost per patch is moderate, and the device can maintain several patches indefinitely with a mid-to-high-rank reactor.`,
            expert: `The quicksand patch reaches fifteen meters across with a liquefaction depth of three meters—deep enough to fully submerge a standing human. The device can create patches that selectively affect targets based on bioelectric signature, weight, or device identification, allowing allies to walk across quicksand without triggering it while enemies sink immediately. The liquefaction can be activated and deactivated in under a second, allowing the mage to trap and release with precision timing.

The vibration frequency can be tuned to affect different materials. Metal-reinforced concrete, compacted gravel, and even wooden flooring can be liquefied if the device finds the correct resonant frequency. This dramatically expands the environments where Liquefaction Zone can be deployed—no longer limited to natural earthen terrain.

At Expert, Liquefaction Zone is a comprehensive terrain-denial system. The mage can turn virtually any surface into a trap, selectively target hostiles, and control the depth and duration of liquefaction with millimeter precision. The spell becomes a strategic tool for area control and prisoner capture.`,
            master: `The spell operates at the theoretical optimum of localized seismic liquefaction for a Tier 2 spell. Patches can reach twenty meters across with a liquefaction depth of five meters, and the device can maintain an unlimited number of patches simultaneously within the mage's operational radius. Each patch is a precisely controlled hazard with customizable trigger conditions, selective targeting, and instant activation or deactivation.

The device maps subsurface composition continuously and adjusts vibration parameters in real time to maintain optimal liquefaction regardless of changing moisture content, temperature, or seismic interference. Allies are protected automatically—the device registers their positions and ensures the ground remains solid beneath their feet even when surrounded by patches of active quicksand.

This is the ceiling of Liquefaction Zone as a Tier 2 spell. The mage cannot liquefy bedrock or magically reinforced surfaces, cannot create bottomless pits, and cannot affect substrates that lack particulate structure for the vibrations to disrupt. What Master offers is the most sophisticated, most selective, most lethal ground-based trapping system that Tier 2 seismic manipulation can deliver—turning the very earth beneath an enemy's feet into a weapon.`
        }
    },
    {
        id: 'thermal_extraction',
        name: 'Thermal Extraction',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device performs a focused thermal extraction on a single target within fifteen meters, dropping the temperature of a roughly one-meter sphere around the target point by approximately two hundred degrees Celsius in under a second. The effect is instantaneous and violent: moisture in the air crystallizes into a dense cloud of ice particles, any liquid on the target freezes solid, and exposed skin suffers immediate cold burns. The freeze persists for roughly ten seconds before ambient heat begins reversing the effect.

The spell targets a point in space rather than a specific creature, making it possible to freeze environmental features—door locks, pipes, standing water—or to target an opponent directly. A direct hit on an unarmored human causes immediate frostbite at the contact zone and a painful but temporary nerve-numbing cold that spreads outward from the point of impact. It will not freeze a person solid, but it can lock a joint or disable a hand for the crucial seconds needed to capitalize.

At Beginner, Thermal Extraction is a precision cold weapon. It trades Cryogenic Field's area of effect for focused intensity on a single target, making it useful for disabling specific threats or manipulating the environment. The spell requires atmospheric moisture or a target that contains water—it cannot freeze dry objects in arid conditions.`,
            apprentice: `The freeze radius expands to two meters, and the temperature drop reaches approximately three hundred degrees Celsius—sufficient to freeze a human limb solid on direct impact if the target lacks thermal protection. The device can now sustain the freeze for up to thirty seconds, keeping the affected zone locked at sub-zero temperatures while the mage takes action. The mana cost is significant but manageable for a mid-rank reactor through a typical engagement.

The spell gains a chain component. On impact, secondary freeze pulses radiate outward from the initial point, each carrying a fraction of the original thermal extraction. Targets within two meters of the primary freeze zone suffer a milder but still painful cold snap that slows movement and numbs extremities. This makes Thermal Extraction effective against closely grouped opponents even though it is nominally a single-target spell.

At Apprentice, Thermal Extraction becomes a precision disable tool. The mage can freeze a weapon arm solid, lock a door by freezing its mechanism, or create a patch of ice on a walkway that sends an opponent tumbling. The sustained freeze component allows the mage to keep a target immobilized while deciding what to do next.`,
            adept: `The freeze radius reaches three meters with a temperature drop exceeding four hundred degrees Celsius—cold enough to embrittle steel and shatter frozen organic tissue with a firm impact. The device can target a specific region of the body with surgical precision, freezing only the intended area while leaving surrounding tissue functional. This allows the mage to disable without killing: freeze a hand to drop a weapon, freeze a leg to prevent escape, freeze a throat to silence without suffocation.

The sustained freeze becomes indefinite while the device maintains thermal extraction. The mage can hold a target in a state of frozen immobility for as long as mana holds, creating a prison of ice that is painful but not necessarily lethal. The device compensates for the target's body heat, continuously extracting thermal energy faster than metabolism can produce it.

At Adept, Thermal Extraction is a precision weapon and capture tool. The mage can disable opponents with selective, non-lethal freezing or deliver devastating cold injuries to specific body regions. The spell's focused nature makes it more mana-efficient than Cryogenic Field for single-target engagements.`,
            expert: `The freeze radius reaches five meters with a temperature drop approaching five hundred degrees Celsius—sufficient to flash-freeze most organic matter solid in under a second. A direct hit on a human target without thermal protection results in total body freeze: tissue crystallizes, blood solidifies, and the target becomes a frozen statue. The device can selectively thaw specific regions while keeping the rest frozen, allowing the mage to interrogate a frozen prisoner by thawing their head while keeping their body immobilized.

The spell can be channeled into a sustained beam rather than an instantaneous pulse. The beam maintains a continuous thermal extraction along its path, freezing everything it touches. This allows the mage to sweep the beam across a battlefield, creating walls of ice, freezing corridors, and denying movement through specific areas. A high-rank reactor can sustain the beam for over a minute of continuous output.

At Expert, Thermal Extraction is both a lethal weapon and a precision tool. The mage can freeze opponents solid, create ice structures from ambient moisture, and shape the battlefield with walls and barriers of frozen air and water. The spell's versatility makes it one of the most tactically flexible cold-based routines available.`,
            master: `The spell operates at the theoretical optimum of focused thermal extraction for a Tier 3 spell. The freeze radius reaches eight meters with a temperature drop that approaches six hundred degrees Celsius—the practical ceiling of what Tier 3 thermal-compression architecture can sustain before the extraction cycle destabilizes. The device can freeze virtually any conventional material solid in under a second, and the sustained beam mode can maintain sub-zero temperatures along its entire path indefinitely while mana holds.

Selective thawing and refreezing is instantaneous and requires no conscious direction—the device reads the mage's intent and adjusts thermal output accordingly. A frozen opponent can be kept in a state of suspended animation indefinitely, their biological processes halted at the molecular level by the cold, with zero risk of tissue damage from thaw-related cellular rupture. This makes Thermal Extraction one of the most effective non-lethal containment tools in a mage's arsenal.

This is the ceiling of Thermal Extraction as a Tier 3 spell. The mage cannot reduce temperatures to absolute zero, cannot freeze targets shielded by thermal barriers of equal or higher tier, and cannot freeze matter that lacks thermal energy to extract. The spell provides the most precise, most lethal, and most versatile focused cold weapon that Tier 3 computation can deliver—capable of both surgical disable and devastating area control.`
        }
    },
    {
        id: 'conflagration',
        name: 'Conflagration',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device superheats the air in a roughly five-meter radius around a targeted point within twenty meters, raising the temperature to approximately five hundred degrees Celsius in under two seconds. The sudden heat blast ignites flammable materials, causes first-degree burns on exposed skin, and creates a shimmering haze that distorts vision through the zone. The inferno persists for roughly thirty seconds before the device's thermal output wanes and ambient cooling takes over.

The heat is diffuse rather than focused—this is not a cutting beam or a concentrated plasma projectile but a zone of superheated air that punishes everything within it. Unprotected humans suffer immediate heat exhaustion and superficial burns; armored opponents are insulated but experience dangerous internal temperatures after more than a few seconds of exposure. The device must maintain line of sight to the target point for the duration of the heating cycle.

At Beginner, Conflagration is an area-denial tool that creates a zone of extreme heat opponents must avoid. It will not incinerate a target outright, but it makes an area hostile to unprotected life for the duration. The spell is ineffective against targets with active thermal shielding and cannot function in environments that dissipate heat faster than the device can generate it, such as deep water or vacuum.`,
            apprentice: `The temperature reaches approximately eight hundred degrees Celsius and the radius expands to eight meters. The heat zone persists for up to two minutes, and the device can now shape the inferno—concentrating heat into a narrower column for greater intensity or spreading it across a wider area for broader denial. Sustained exposure causes second-degree burns within seconds and ignites most common materials on contact.

The device introduces oxygen management. By controlling the availability of oxygen within the inferno zone, the mage can prevent the combustion of specific materials or exacerbate it in others. This allows the creation of "clean" infernos that burn hot but produce minimal smoke, or suffocating firestorms that consume oxygen so rapidly that targets within the zone asphyxiate before they burn. The tactical flexibility is significant.

At Apprentice, Conflagration becomes a sustained lethal hazard. A target caught in the zone without thermal protection will die from burn injuries within minutes. The mana cost is substantial but manageable for a mid-rank reactor through a typical engagement.`,
            adept: `The temperature reaches approximately twelve hundred degrees Celsius—hot enough to melt aluminum and soften steel—with a radius of twelve meters. The inferno can be maintained indefinitely while mana holds, and the device manages all thermal calculations autonomously. The mage can create moving walls of fire, fire tornadoes by combining Conflagration with atmospheric manipulation, and precisely controlled burn zones that advance or retreat on command.

The oxygen management system becomes sophisticated enough to support selective combustion. The mage can designate zones within the inferno where specific materials burn while others remain untouched—burning the supports of a structure while leaving its contents intact, or igniting an opponent's equipment while preserving evidence on their person. The inferno can also be made to burn without visible flame, producing an invisible zone of superheated air that kills without warning.

At Adept, Conflagration is a devastating environmental weapon. The mage controls fire with the precision of a pyrotechnic engineer, creating zones of lethal heat that can be shaped, moved, and controlled with tactical flexibility. The spell demands a high-rank reactor for sustained output.`,
            expert: `The temperature exceeds two thousand degrees Celsius with a radius of twenty meters. The inferno can melt structural steel on contact and ignite virtually any organic material within seconds. The device achieves near-perfect thermal containment—heat radiates inward rather than outward, allowing the mage to create zones of annihilating heat immediately adjacent to areas of normal temperature. An ally can stand one meter from the edge of an expert-level inferno and feel only warmth.

The spell can be channeled into a sustained beam that projects a line of superheated air up to fifty meters long. Anything caught in the beam's path is subjected to the full thermal output—metal flows, stone cracks from thermal stress, and organic matter carbonizes in seconds. The beam can be swept across a battlefield, carving a burning path through opposition.

At Expert, Conflagration is a weapon of concentrated destruction. The mage wields fire with the precision of a surgeon's scalpel and the force of a blast furnace, creating and controlling infernos that would require fuel and oxygen that the device simply conjures through mana-driven thermal manipulation. The mana cost is extreme but within the budget of a high-rank reactor for combat-duration engagements.`,
            master: `The spell operates at the theoretical optimum of sustained thermal generation for a Tier 3 spell. The inferno reaches temperatures of approximately twenty-five hundred degrees Celsius—the practical ceiling of what the device's mana-to-heat conversion can sustain before the thermal output begins degrading the device's own containment architecture. The radius extends to twenty-five meters, and the device manages all thermal calculations with zero conscious overhead.

The mage can create and control multiple independent infernos simultaneously, each with its own temperature, shape, and movement parameters. The oxygen management system operates at molecular precision, allowing the mage to burn or spare any material within the zone with absolute selectivity. The thermal containment is so precise that the mage can create a corridor of normal temperature through the center of an inferno, walking through their own firestorm unharmed.

This is the ceiling of Conflagration as a Tier 3 spell. The mage cannot generate temperatures that exceed the mana-to-heat conversion limit of Tier 3 computation, cannot create fire in a true vacuum where there is nothing to heat, and cannot burn through thermal barriers of equal or higher tier. What Master provides is the most devastating, most precise, most controlled sustained fire-weapon that Tier 3 thermal manipulation can achieve.`
        }
    },
    {
        id: 'cryo_barrage',
        name: 'Cryo Barrage',
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

The device introduces shrapnel hail—pellets that fragment on impact into a spray of razor-sharp crystalline fragments, each traveling outward at high velocity. This dramatically increases the lethal radius of each impact, creating a secondary zone of fragmentation damage around every strike point. The cumulative effect is a storm of shrapnel that makes even partial cover inadequate.

At Expert, Hailstorm is a weapon of annihilation. The mage calls down a storm of lethal ice that renders a large area impassable to unprotected personnel and dangerous even to armored targets. The mana cost is extreme but within the budget of a high-rank reactor for combat-duration engagements.`,
            master: `The spell operates at the theoretical optimum of atmospheric ice-generation and kinetic acceleration for a Tier 3 spell. The hail pellets are grown with flawless crystalline density—each one a compressed projectile harder than tempered steel, accelerated to the maximum velocity the device's atmospheric manipulation can sustain. The target area reaches fifty meters, and the barrage can be sustained with optimized mana efficiency for extended engagements.

The device manages all moisture extraction, freezing, acceleration, and targeting autonomously. The mage simply designates a target area or specific opponents, and the device delivers the optimal hail configuration—saturation bombardment for area denial, focused corridors for precision engagement, or shrapnel hail for maximum lethality against entrenched targets. The mana cost per pellet is the theoretical minimum for Tier 3 thermal-extraction and kinetic-acceleration routines.

This is the ceiling of Hailstorm as a Tier 3 spell. The mage cannot call down hail from the actual upper atmosphere, cannot generate ice in a vacuum, and cannot accelerate pellets beyond the device's atmospheric-manipulation limits. What Master provides is the most lethal, most efficient, most versatile ice-based area weapon that Tier 3 computation can sustain—a storm of killing cold that scours the battlefield clean.`
        }
    },
    {
        id: 'maelstrom_vortex',
        name: 'Maelstrom Vortex',
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
        id: 'pressure_void',
        name: 'Pressure Void',
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
        id: 'mineral_matrix',
        name: 'Mineral Matrix',
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
        id: 'phase_flash',
        name: 'Phase Flash',
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
        id: 'ionization_beam',
        name: 'Ionization Beam',
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
        id: 'corrosive_stream',
        name: 'Corrosive Stream',
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
        id: 'calcification_hex',
        name: 'Calcification Hex',
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
        id: 'particulate_storm',
        name: 'Particulate Storm',
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
        id: 'atmospheric_crucible',
        name: 'Atmospheric Crucible',
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
        id: 'mass_anchor',
        name: 'Mass Anchor',
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
        id: 'ferrous_disruption',
        name: 'Ferrous Disruption',
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
        id: 'heat_pump',
        name: 'Heat Pump',
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
        id: 'molecular_decay',
        name: 'Molecular Decay',
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
        id: 'acoustic_penetrator',
        name: 'Acoustic Penetrator',
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
        id: 'tesla_prison',
        name: 'Tesla Prison',
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
        id: 'resonance_shockwave',
        name: 'Resonance Shockwave',
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


// Third batch: New elemental spells (20 spells)
const elementalSpellsBatch3 = [
{
    id: 'flora_animation',
    name: 'Flora Animation',
    tier: 2,
    cost: 10,
    proficiency: {
        beginner: `The device establishes a mana link with the root systems of plant life within a five-meter radius, transmitting low-frequency pulse commands that trigger growth responses and directional movement. The process is slower than direct spell-casting, roots and vines shift position over the course of two to three seconds rather than moving instantly. The device can animate roughly a dozen individual plant structures at once, guiding them to form barriers, reach toward designated targets, or reshape themselves into crude grasping forms.

The animated plants retain their natural properties. A vine has the tensile strength of a rope but lacks the rigidity to strike with force; thorned brambles can entangle and lacerate but will not pierce armor. The mana link extends only to surface-level root systems and above-ground growth, the device cannot reach deep taproots or stimulate accelerated growth beyond what the plant's existing cellular structure allows. A low-rank Mana Reactor can sustain the animation for roughly two minutes before the mana cost of maintaining multiple simultaneous links becomes prohibitive.

At Beginner, Flora Animation is a utility and area-denial tool. It turns existing vegetation into a temporary obstacle network that slows and distracts opponents but poses minimal direct threat to anyone armored or alert. The spell is entirely dependent on the presence of living plant matter, it cannot function in deserts, barren rock, or artificial indoor environments devoid of vegetation.`,

        apprentice: `The mana link reaches a ten-meter radius and can now animate up to thirty individual plant structures simultaneously. The device introduces accelerated growth stimulation, coaxing vines to extend by up to fifty percent of their natural length and roots to surface from shallow soil within seconds. The animated plants move faster, repositioning themselves in under a second, and can exert greater force, a vine can now wrap and constrict with enough strength to bruise flesh through light clothing.

The device gains basic shape-memory programming. The mage can command animated plants to form specific configurations, walls, nets, tripwires, or climbing aids, and the plants will maintain those forms for the duration of the animation. Thorned species become genuinely hazardous: animated brambles can create barriers that inflict dozens of shallow cuts on anyone forcing passage, and the mana link allows the plants to actively grasp and hold rather than passively obstruct.

At Apprentice, Flora Animation transitions from nuisance to tactical asset. The mage can reshape vegetated terrain into a dynamic obstacle network that actively resists enemy movement while providing cover and mobility aids for allies. The spell still requires substantial existing vegetation, sparse undergrowth yields limited results.`,

        adept: `The mana link extends to twenty meters and can animate over a hundred individual plant structures with refined coordination. The device achieves aggressive growth stimulation: vines double their length within seconds, roots erupt from soil to form grasping limbs, and flowering plants can be forced into premature bloom to release pollen clouds that obscure vision and irritate exposed eyes and lungs. Animated plants move with near-animal responsiveness, tracking targets and adjusting formations in real time based on battlefield conditions.

Structural reinforcement becomes available. The device channels mana through the plant's vascular system, temporarily hardening cellulose walls to the approximate toughness of green wood. A reinforced vine strikes with enough force to bruise bone, and a reinforced root barrier can stop small-arms fire for several seconds before splintering. The mage can designate priority targets, and animated plants will actively pursue them, vines lashing out to trip or entangle, roots erupting beneath feet to topple, thorns seeking exposed skin.

At Adept, Flora Animation is a dynamic battlefield-control weapon. The vegetated environment becomes an extension of the mage's intent, hostile to designated enemies and responsive to allies. The mana cost scales with the number of animated structures, but a high-rank reactor can sustain a forest's worth of aggressive plant life through a full engagement.`,

        expert: `The mana link reaches fifty meters and can coordinate several hundred individual plant structures as a networked system. The device achieves hyper-accelerated growth: a sapling can be forced to triple in height and girth within seconds, vines can extend across entire rooms, and root networks can surface en masse to create a shifting labyrinth of grasping tendrils. Structural reinforcement reaches the hardness of seasoned hardwood, animated branches can shatter bone on impact, and reinforced root barriers stop rifle fire indefinitely.

The device introduces limited sentience emulation. Animated plants track, predict, and respond to enemy movement with tactical sophistication that exceeds simple stimulus-response. A network of animated vines will coordinate to herd targets into kill zones; root systems will time their eruptions to catch running opponents mid-stride; thorned barriers will open corridors for allies and close them for enemies without conscious direction from the mage. The mana link also transmits sensory data, the mage perceives vibrations, contact, and pressure across the entire animated network, granting awareness of any movement within the vegetated area.

At Expert, Flora Animation transforms a forest or overgrown ruin into a lethal, semi-autonomous weapon system. The environment itself hunts, traps, and kills under the mage's oversight. The spell remains bounded by the availability of plant matter, barren zones cannot be animated, and fire is a catastrophic weakness as burning plants sever the mana link and spread beyond the mage's control.`,

        master: `The spell operates at the theoretical optimum of botanical mana-linking for a Tier 2 spell. The mana link extends to a hundred-meter radius and can animate thousands of individual plant structures as a unified, responsive ecosystem. Hyper-accelerated growth reaches the practical ceiling: mature trees can be grown from seeds in under a minute, vines can extend hundreds of meters, and entire forests can be reshaped from sparse undergrowth in minutes. Structural reinforcement plateaus at ironwood-equivalent hardness, the maximum cellulose density the device's mana-channeling can sustain without causing cellular rupture and plant death.

The sentience emulation is refined to the point where the animated flora operates with near-human tactical awareness. The mage designates objectives, protect this position, eliminate these targets, clear this path, and the plant network executes autonomously with coordinated efficiency. Sensory feedback is seamless; the mage perceives the entire vegetated zone as an extension of their own nervous system, aware of every footfall, every breath, every disturbance within the linked network.

This is the ceiling of Flora Animation as a Tier 2 spell. The mage cannot animate dead wood or synthetic plant analogues, cannot create plant matter from nothing in barren environments, and cannot sustain the animation indefinitely without mana reserves, even a Keter-rank reactor will drain over extended engagements covering large areas. Fire, herbicides, and overwhelming physical force can still destroy animated plants faster than the mage can replace them. What Master provides is absolute control over living vegetation within the spell's range, turning any forest, jungle, or overgrown urban ruin into a lethal domain where the plants themselves are the enemy.`
    }
},
{
    id: 'magnetic_repulsion',
    name: 'Magnetic Repulsion',
    tier: 2,
    cost: 10,
    proficiency: {
        beginner: `The device generates a localized magnetic field centered on the mage, scanning the immediate environment for ferromagnetic materials and calculating repulsion vectors for any detected metal objects. The field strength is modest—approximately 0.5 Tesla at peak output—but sufficient to deflect incoming metal projectiles within a three-meter radius. The device redirects bullets and thrown metal objects by applying a lateral magnetic impulse that shifts trajectories by 10 to 15 degrees, enough to turn a center-mass hit into a glancing blow or a clean miss.

The field requires active maintenance. The device constantly recalculates flux gradients to account for the movement of both the mage and incoming metal objects, resulting in a sustained processing load that a low-rank Mana Reactor can maintain for approximately thirty seconds before overheating risks force a cooldown period. The spell also generates a faint but audible hum—ferromagnetic objects within the field vibrate slightly, producing a telltale signature that announces the spell's activation to anyone within earshot.

At Beginner, Magnetic Repulsion is a defensive reflex against conventional firearms and metal melee weapons. It will not stop non-ferrous projectiles like ceramic rounds, composite arrows, or stone fragments, and the deflection margin is narrow enough that massed fire or close-range attacks can still overwhelm the field. The spell is useless against purely magical attacks or anything not carrying a significant ferromagnetic mass.`,

        apprentice: `Field strength doubles to roughly 1 Tesla, and the effective radius extends to six meters. The device now differentiates between threat categories—incoming projectiles receive full repulsion priority, while passive environmental metal is ignored to reduce processing overhead. Deflection angles increase to 25 to 30 degrees, and the device can now impart enough lateral force to send deflected bullets tumbling, further reducing their kinetic energy on impact.

Selective attraction is introduced. The mage can designate a metallic object within the field's radius and pull it toward themselves at moderate velocity—enough to disarm an opponent holding a metal weapon or retrieve a dropped piece of equipment from across a room. The pull is proportional to the object's ferromagnetic mass; a knife snaps into the mage's hand instantly, while a full suit of plate armor drags forward slowly. A mid-rank reactor can sustain the field for roughly two minutes.

At Apprentice, Magnetic Repulsion becomes a dual-purpose tool. The mage deflects incoming fire while simultaneously disarming opponents and manipulating their tactical environment. The spell still struggles against high-velocity armor-piercing rounds at close range, and non-metallic threats remain entirely unaffected.`,

        adept: `Field strength reaches 2 Tesla with a ten-meter operational radius. The device achieves fine-grained control—individual metal objects can be tracked and manipulated independently, allowing the mage to deflect incoming fire while simultaneously launching retrieved metal objects back at attackers as improvised projectiles. A deflected knife can be caught mid-air, reversed, and accelerated back toward its source at velocities comparable to a thrown weapon. The magnetic grip is strong enough to rip a pistol from an opponent's hand or hold a metal door shut against attempts to force it open.

The field's acoustic signature is suppressed through active vibration damping. The device counteracts the hum by generating a counter-phase magnetic pulse that cancels the vibration of ferrous objects within the field, rendering the spell nearly silent. Sustained operation time extends to five minutes with a high-rank reactor, and the cooldown period is reduced to negligible—the device cycles waste heat efficiently enough that the mage can maintain near-continuous uptime with brief pauses between activations.

At Adept, Magnetic Repulsion is professional-grade battlefield control. The mage dictates the movement of every metal object within a ten-meter sphere, turning an opponent's weapons into liabilities and creating a zone where conventional firearms are more dangerous to the shooter than the target. The spell remains bounded by ferromagnetic material—aluminum, titanium, and composite armor are immune.`,

        expert: `Field strength pushes to 3 Tesla across a fifteen-meter radius, and the device manages magnetic flux with enough precision to selectively compress or expand the field in real time—creating a focused repulsion cone in one direction while maintaining standard coverage elsewhere. The mage can launch ferrous objects at lethal velocities: a handful of ball bearings accelerates to rifle-round speeds, and a thrown crowbar impacts with the kinetic force of a battering ram.

Multi-target engagement becomes standard. The device independently tracks up to twenty metallic objects, assigning each a priority level and a manipulation vector. Incoming bullets are deflected or arrested mid-flight and held suspended in the field; discarded shell casings are collected and accelerated back as fragmentation. The mage can create a storm of orbiting metal debris—a cloud of spinning, high-velocity fragments that shreds anything attempting to enter the field's perimeter.

At Expert, Magnetic Repulsion is an area-denial weapon. The mage operates inside a controlled sphere of metallic chaos where conventional weapons are useless and any metal brought into the engagement zone becomes ammunition. The field drains mana steadily under sustained multi-target load, but a Keter-rank reactor can maintain full combat output for ten minutes or more.`,

        master: `The device achieves the theoretical optimum of localized magnetic field manipulation for a Tier 2 spell. Field strength plateaus at 4 Tesla across a twenty-meter radius—the maximum intensity that the device can sustain without inducing dangerous eddy currents in the mage's own equipment and implants. Magnetic control is reflexive; the mage designates threats through intent, and the device handles all vector calculations, flux modulation, and kinetic redirection autonomously.

The spell operates in layered modes simultaneously. Defensive deflection runs as a passive background process, while offensive projection and environmental manipulation are executed on demand with zero conscious lag. The device can strip an entire squad of their firearms in a single coordinated pull, suspend the weapons in a rotating grid, and return them as a barrage of accelerated projectiles—all within two seconds. Fine manipulation reaches the threshold where the mage can unlock metal doors by magnetically shifting internal bolt mechanisms or retrieve specific items from a pile of ferrous debris by mass and shape signature.

This is the ceiling of Magnetic Repulsion as a Tier 2 spell. The mage dominates any battlefield where ferrous metals are present, turning the environment into an extension of their will. They cannot affect non-ferromagnetic materials, cannot generate magnetic fields strong enough to disrupt electronics at range beyond incidental interference, and cannot manipulate metals that are magically warded or bound. The spell is the absolute limit of what Tier 2 magnetic flux computation can achieve—total control over ferrous materials within a defined sphere, nothing more.`
    }
},
{
    id: 'laser_focus',
    name: 'Laser Focus',
    tier: 2,
    cost: 10,
    proficiency: {
        beginner: `The device concentrates ambient thermal and electromagnetic energy into a coherent photon beam roughly three millimeters wide, projected from the mage's palm. The beam operates in the near-infrared spectrum with enough power density to cut through wood and soft plastics over several seconds of sustained contact. Maintaining beam coherence requires continuous device processing—the mage must hold focus on the target point, and the beam remains anchored to the mage's hand rather than firing as a projectile.

Range is limited to approximately fifteen meters. Beyond that distance, atmospheric scattering and diffraction degrade the beam's coherence to the point where it becomes a harmless light show. The device can sustain the beam for roughly ten seconds before thermal buildup in its focusing arrays forces a cooldown period of equal length. A low-rank Mana Reactor can manage three to four sustained burns per cycle before reserves drop to unsafe levels.

At Beginner, Laser Focus is a precision cutting tool with combat applications. It can slice through rope, burn through light barricades, ignite flammable materials, and cause painful second-degree burns on exposed skin with direct contact lasting two to three seconds. It will not punch through body armor, cannot be swept rapidly across multiple targets, and leaves the mage vulnerable during the sustained-focus requirement.`,

        apprentice: `The beam tightens to approximately one millimeter width with power density sufficient to cut through sheet metal and bone given three to five seconds of sustained contact. The device achieves better thermal management—the focusing arrays incorporate heat-sink cycling that extends continuous burn time to thirty seconds before requiring a brief cooldown. Range extends to thirty meters with maintained cutting power, and a mid-rank reactor can sustain six to eight burn cycles per mana period.

Pulsed-beam mode becomes available. The device can fire the laser in rapid bursts rather than a continuous stream, sacrificing cutting depth for tactical flexibility—the mage can mark multiple targets with shallow burns, create dotted cutting lines that weaken structures for follow-up impacts, or strobe the beam to disorient opponents with flashing coherent light. Each pulse carries roughly a quarter of the continuous beam's total energy but can be fired as fast as twice per second.

At Apprentice, Laser Focus transitions from tool to weapon. A sustained beam to center mass will penetrate light body armor within seconds, and the pulsed mode allows the mage to engage multiple threats without committing to a single long burn. The spell still demands that the mage hold relatively still during sustained cuts—rapid movement degrades targeting precision and wastes energy on missed beam contact.`,

        adept: `The beam reaches industrial laser-cutter intensity, slicing through hardened steel plate in under two seconds and maintaining cutting power out to sixty meters. The device incorporates adaptive optics that compensate for atmospheric turbulence, target movement, and mage motion in real time—the beam tracks to the designated point even if both mage and target are moving. Continuous burn time extends to sixty seconds, and thermal recycling converts waste heat back into usable mana, partially offsetting the spell's cost.

Multi-point targeting becomes standard. The device can split the main beam into up to three independent cutting lasers, each tracking separate targets with dedicated processing threads. Each split beam carries roughly half the cutting power of the full-strength beam but allows the mage to engage multiple threats simultaneously or create complex cutting patterns—carving three sides of a door simultaneously, disabling multiple vehicle tires in parallel, or suppressing a dispersed group with surgical precision.

At Adept, Laser Focus is professional-grade directed energy. The mage can dismantle light fortifications, disable vehicles through precision component cuts, and engage targets with accuracy that conventional weapons cannot match. The spell demands a high-rank reactor for sustained multi-beam operation, but the tactical flexibility justifies the cost.`,

        expert: `The beam achieves military-grade cutting laser intensity, capable of severing structural steel, slicing through reinforced concrete, and punching through armored vehicle plating with sustained contact. Range extends to one hundred meters with maintained lethality. The device's adaptive optics reach the point where atmospheric conditions—rain, fog, smoke—are compensated for in real time with minimal power loss. Continuous burn time extends to two minutes before thermal limits force a cooldown.

Rapid traverse mode allows the beam to sweep across targets at speeds approaching five meters per second while maintaining cutting depth—the device predictively models the beam path and adjusts power output to ensure consistent material penetration despite the rapid motion. This turns the laser into a sweeping blade of light that can slice through multiple targets in a single continuous motion or carve large sections out of structures in seconds.

At Expert, Laser Focus is an anti-materiel weapon. A single mage can disable armored vehicles, collapse load-bearing structures, and engage dispersed targets with a precision and speed that exceeds conventional heavy weapons. The thermal signature is significant—the beam's passage superheats the air along its path, creating a visible distortion trail that broadcasts the mage's firing line.`,

        master: `The device achieves the theoretical optimum of coherent photon beam generation for a Tier 2 spell. The beam cuts through any known conventional material within seconds of contact—reinforced steel, composite armor, hardened concrete—all yield to sustained focus. Range plateaus at one hundred and fifty meters, the maximum distance at which Tier 2 optics can maintain coherence against atmospheric diffraction. The beam can be split into up to six independent cutting lasers, each with full-strength cutting power managed through near-perfect energy distribution algorithms.

Continuous burn time is limited only by mana reserves. The device's thermal recycling is optimized to the point where waste heat conversion offsets roughly thirty percent of the spell's operating cost, making extended operations practical even for mid-rank reactors. Reflexive targeting is achieved—the mage designates cut lines through intent alone, and the device executes with millimeter precision while handling all motion compensation and atmospheric correction autonomously.

This is the ceiling of Laser Focus as a Tier 2 spell. The mage can dismantle a reinforced building through sustained, precise cutting or disable a mechanized unit's vehicles faster than conventional anti-tank weapons. They cannot cut through magical barriers of equal or higher tier, cannot generate beam power exceeding Tier 2 photonic limits regardless of focus time, and cannot project coherent light through environments that physically block photon transmission such as solid obstacles or dense smoke beyond the adaptive optics' compensation threshold.`
    }
},
{
    id: 'ferrous_swarm',
    name: 'Ferrous Swarm',
    tier: 3,
    cost: 15,
    proficiency: {
        beginner: `The device identifies and magnetizes ferrous particulates within a fifteen-meter radius—rust flakes, iron dust, metal shavings, fragments of corroded infrastructure—drawing them into a loose cloud roughly two meters across. The particulates orbit a central point through coordinated magnetic pulses, forming a swirling sphere of metallic debris. The device maintains cohesion through continuous field adjustments, compensating for particle mass distribution and air resistance as the cloud moves.

The cloud can be directed to envelop a target area roughly one meter across. Contact with the swarm causes superficial abrasions—the spinning metal fragments scrape exposed skin and score unprotected surfaces—but the individual particles lack sufficient mass and velocity to penetrate fabric or cause serious injury. The device sustains the swarm for approximately thirty seconds before magnetic coherence degrades and the particulates scatter. A low-rank Mana Reactor can generate two to three swarms per cycle before the electromagnetic modeling systems require a reset.

At Beginner, Ferrous Swarm is a harassment and distraction tool. It obscures vision, fouls exposed mechanical joints, and forces opponents to shield their eyes and airways. It will not harm armored targets, cannot source metal in environments devoid of ferrous debris, and dissipates rapidly in strong winds that overcome the magnetic binding force.`,

        apprentice: `The device expands its sourcing radius to thirty meters and achieves significantly stronger magnetic cohesion, compressing the swarm into a dense sphere roughly one meter across containing thousands of metallic fragments. Orbital velocity increases to the point where individual particles strike with the force of hurled gravel—sufficient to raise welts on exposed skin, crack unprotected bone on sustained contact, and embed shallow fragments in softer materials. The swarm persists for up to two minutes.

The device gains limited particle shaping capability. Larger metal fragments—nails, screws, bent wire—are oriented edge-first within the swarm to maximize cutting potential. The cloud can be split into two smaller swarms operating independently, each covering roughly half a meter and tracking separate targets within the thirty-meter operational radius. A mid-rank reactor can sustain six to eight casts per cycle.

At Apprentice, Ferrous Swarm transitions from nuisance to tactical threat. The swarm can strip exposed skin down to bleeding tissue within seconds, foul vehicle air intakes, and blind unprotected opponents through a combination of impact trauma and particulate inhalation. The spell remains dependent on available ferrous material—clean, debris-free environments significantly limit the swarm's mass and effectiveness.`,

        adept: `The swarm expands to three meters across with orbital velocities approaching fifty meters per second. The device now sources metal aggressively—pulling rust from structural beams, stripping oxidized layers from vehicles, extracting iron filings from concrete and soil. The magnetic field is strong enough to deform soft metals and fracture brittle alloys, allowing the device to break down larger objects into swarm-compatible fragments in real time. Sourcing radius extends to sixty meters, and duration pushes to five minutes with sustained mana input.

The swarm achieves penetrative lethality. High-velocity metal fragments punch through light body armor, embed deep into wood and soft metals, and cause severe lacerations on direct contact. The device tracks multiple targets simultaneously, splitting the swarm into up to four independent sub-clouds that can converge on a single target for saturation attack or spread across an area for zone denial. Magnetic shaping allows the swarm to form temporary barriers—walls of spinning metal that deflect incoming projectiles and shred anything attempting to pass through.

At Adept, Ferrous Swarm is a lethal area-control weapon. The mage commands a battlefield of weaponized debris, stripping metal from the environment and turning it into autonomous killing clouds. The spell demands a high-rank reactor for sustained multi-swarm coordination, and effectiveness scales directly with environmental metal content—urban and industrial zones are ideal; pristine natural environments offer minimal material.`,

        expert: `Orbital velocity exceeds a hundred meters per second, accelerating fragments to velocities where kinetic energy alone causes significant damage on impact. The swarm can reach five meters across at full expansion or compress to a half-meter sphere of extreme density containing tens of thousands of metallic projectiles. The device sources metal from any ferrous object within a hundred meters, including weapons, armor, and structural reinforcements—opponents watch their equipment corrode and disintegrate in real time as the swarm strips away every accessible iron atom.

The magnetic field achieves sufficient strength to induce electrical currents in conductive materials. Electronics within ten meters of the swarm experience transient failure, and sustained proximity causes permanent damage. The device can shape the swarm into directed streams—metal rivers that flow across the battlefield, cutting through obstacles and targets alike—or spinning vortexes that anchor to specific locations and shred everything in a fixed radius.

At Expert, Ferrous Swarm is a weapon of area annihilation. The mage controls a storm of metal that dismantles infrastructure, disables vehicles, and kills unprotected personnel through sheer kinetic saturation. The spell's signature is unmistakable—a roaring cloud of spinning metal accompanied by electromagnetic interference across all nearby systems. Sustained operation drains even a Keter-rank reactor within minutes of continuous full-output deployment.`,

        master: `The device achieves the theoretical optimum of electromagnetic particle manipulation and sourcing for a Tier 3 spell. The swarm can expand to ten meters across or compress to a fist-sized sphere of lethally dense metallic projectiles, with orbital velocities capped at approximately two hundred meters per second—the maximum the magnetic containment can sustain before centrifugal force overcomes binding. Sourcing radius extends to two hundred meters, and the device extracts ferrous content from any available source with ruthless efficiency, corroding structures and stripping vehicles down to non-ferrous frames within minutes.

The swarm operates with full autonomy. The mage designates targets, zones, and priorities; the device handles all sourcing, acceleration, tracking, and formation calculations without conscious input. Multiple swarms—typically five to eight of moderate density or two to three at maximum concentration—can be maintained simultaneously, each independently targeted and modulated. Electromagnetic interference radius extends to thirty meters, disabling unshielded electronics and causing severe degradation of hardened military systems.

This is the ceiling of Ferrous Swarm as a Tier 3 spell. The mage cannot generate metal from nothing, cannot manipulate non-ferrous materials through this spell's magnetic framework, and cannot exceed the particle velocities that Tier 3 electromagnetic computation can sustain. Master means the spell has been optimized to the absolute limit of ferrous particulate weaponization—a storm of metal that scours the battlefield clean, fed by the environment itself.`
    }
},
{
    id: 'silicate_scatter',
    name: 'Silicate Scatter',
    tier: 1,
    cost: 5,
    proficiency: {
        beginner: `The device identifies silicate particulates in the surrounding environment - loose sand, dry soil, pulverized stone - and accelerates them outward in a conical spray using a compressed-air impulse. The cone extends roughly five meters from the mage's outstretched hand with a terminal width of two meters. The particulate cloud is dense enough to obscure vision and irritate exposed mucous membranes, forcing opponents to close their eyes or turn away. The device relies on naturally available dust and cannot conjure silicates from nothing.

A low-rank Mana Reactor can produce four to five bursts per cycle. Each burst disperses the available particulates in the immediate area, requiring the mage to reposition or wait for ambient dust to resettle before casting again. The cloud lingers for roughly twenty seconds in still air before settling. In enclosed spaces, the effect is more pronounced; outdoors in wind, the cloud disperses almost immediately.

At Beginner, Silicate Scatter is a harassment and disengagement tool. It blinds temporarily, distracts, and creates brief openings for repositioning. It will not cause injury beyond minor respiratory irritation, will not penetrate barriers, and cannot function in environments lacking loose silicate material - metal floors, dense vegetation, wet terrain.`,

        apprentice: `The spray cone extends to ten meters with maintained density, and the device gains the ability to selectively accelerate specific grain sizes. Coarse sand provides greater kinetic impact; fine dust produces longer-lasting obscuration. The air impulse increases in force - particulates now strike with enough velocity to sting exposed skin and leave minor abrasions. A mid-rank reactor can sustain six to eight casts per cycle.

The device begins extracting silicates from surfaces rather than just gathering loose material. Dried mortar, weathered concrete, and compacted soil can all be pulverized and projected, significantly expanding the spell's availability. The lingering cloud now carries a mild abrasive effect - prolonged exposure scours paint, scratches glass, and degrades unprotected optics and sensors.

At Apprentice, Silicate Scatter transitions from nuisance to tactical asset. The mage can degrade enemy sensors, create cover through sustained obscuration, and suppress visibility across a chokepoint. The spell remains dependent on available silicates - pristine indoor environments with polished surfaces offer minimal material to work with.`,

        adept: `The cone reaches twenty meters with enough kinetic force behind the particulates to cause painful welts on exposed flesh and minor lacerations where sharp-edged grains strike at velocity. The device now vibrates target surfaces at resonant frequencies to liberate embedded silicates - even sealed concrete and hardened clay yield usable dust. A high-rank reactor can sustain fifteen or more casts per cycle.

The particulate cloud becomes tactically persistent. The device ionizes the dust, causing grains to repel each other and remain suspended in the air for up to two minutes rather than settling immediately. This ionized dust interferes with electronic targeting systems, scatters laser designators, and creates a radar-reflective haze. The abrasive effect intensifies - sustained exposure will pit metal, frost optical glass, and clog mechanical systems.

At Adept, Silicate Scatter is an area-denial and sensor-suppression tool. The mage can blind an entire engagement zone, disable unshielded equipment, and create conditions where only those with protected optics and sealed armor can operate effectively. The spell's effectiveness scales with environmental silicate availability - deserts offer abundant material; marshlands and tundra offer almost none.`,

        expert: `The cone extends to forty meters, and the device accelerates particulates to velocities approaching small-caliber gunfire. Direct exposure causes deep lacerations, shredded clothing, and severe corneal damage. The device extracts silicates from any mineral substrate within a five-meter radius of the mage, including stone walls, brick structures, and crystalline formations - the extraction process leaves pitting and surface erosion on source materials.

The ionized dust cloud persists for up to five minutes and achieves densities that actively degrade energy-based attacks. Thermal lances lose cohesion as plasma interacts with suspended particles; directed lasers scatter and diffuse; even kinetic projectiles experience measurable drag. The abrasive effect becomes a weapon in its own right - anything caught in the cloud for more than a minute suffers structural degradation as thousands of high-velocity grains sandblast every exposed surface.

At Expert, Silicate Scatter is a suppression weapon and anti-equipment tool. The mage can deny entire zones to unprotected infantry, disable vehicle sensors and optics, and create conditions where standard ranged weapons lose effectiveness. The spell's lethality increases proportionally with exposure time - a target trapped in the cloud for multiple minutes faces life-threatening injuries from sustained abrasion.`,

        master: `The device achieves the theoretical optimum of silicate extraction and acceleration for a Tier 1 spell. The cone reaches fifty meters with particulate velocities sufficient to strip flesh from bone given sustained exposure. The device extracts silicates from any mineral-bearing surface within ten meters, pulverizing material at the molecular level and accelerating grains with near-perfect efficiency. Cast time is reflexive - the mage designates the target zone and the device handles extraction, ionization, and projection autonomously.

The ionized dust cloud persists for up to ten minutes and forms a sensor-opaque barrier. Radar, lidar, thermal imaging, and magical detection all experience significant degradation within the cloud. The abrasive effect reaches industrial-sandblasting intensity - exposed machinery seizes within seconds, structural materials degrade rapidly, and unprotected organic tissue is flayed in under a minute of direct exposure.

This is the ceiling of Silicate Scatter as a Tier 1 spell. The mage can create persistent area-denial zones that are lethal to unprotected infantry and degrading to equipment, can suppress an entire engagement area's visibility and sensors, and can sustain the effect indefinitely given sufficient environmental silicates. They cannot conjure silicates from environments that contain none - sealed metal chambers, deep water, true vacuum. They cannot selectively spare targets within the cloud without reducing overall intensity. The spell manipulates existing particulates with maximum efficiency but cannot exceed the material limitations of its environment.`
    }
},
{
    id: 'photon_blade',
    name: 'Photon Blade',
    tier: 3,
    cost: 15,
    proficiency: {
        beginner: `The device captures ambient electromagnetic radiation—primarily visible and near-ultraviolet light—and compresses it into a coherent, stabilized cutting edge roughly 30 centimeters long. The compression is achieved through a mana-sustained photonic lattice: the device models a containment field that forces photons into a densely-packed, linear formation with enough structural integrity to interact mechanically with matter. The blade glows with a pale blue-white luminescence and hums at a frequency just below audible range as the photonic lattice cycles to maintain stability.

The blade persists for approximately fifteen seconds before the lattice destabilizes and the compressed light disperses harmlessly. Effective cutting range is limited to the blade's physical length, and the device requires roughly two seconds of focus to compress sufficient photons into a usable edge. A low-rank Mana Reactor can sustain three to four manifestations per cycle. The blade cuts through soft materials—fabric, wood, unarmored flesh—with minimal resistance, cauterizing as it goes due to localized photon-matter interaction heating the cut surface to several hundred degrees Celsius.

At Beginner, Photon Blade is a close-quarters utility tool. It will slice through rope, score light metals to a depth of a few millimeters, and cauterize wounds on contact. It will not penetrate body armor, maintain stability against heavy impacts, or function in environments with insufficient ambient light—deep underground or in total darkness, the device has no photons to harvest.`,

        apprentice: `The blade extends to 60 centimeters with a denser photonic lattice that holds coherence for up to thirty seconds. The device now sources photons more aggressively, pulling from infrared and microwave bands in addition to visible light, allowing the spell to function in low-light conditions. A mid-rank reactor can sustain six to eight manifestations per cycle, and the compression time drops to roughly one second.

Cutting power increases significantly. The blade now shears through light steel plate as if it were cardboard, melts through aluminum and copper in a single pass, and leaves glass and ceramic materials fractured along stress lines from rapid localized heating. The photonic lattice is stable enough that the blade can be swung with force—parrying another weapon, deflecting incoming projectiles, or used in aggressive melee exchanges—without immediate collapse, though sustained heavy impacts will degrade the lattice over several seconds.

At Apprentice, Photon Blade becomes a legitimate melee weapon. It can disable light vehicles by cutting through engine components, breach reinforced doors, and serve as both offensive and defensive tool in close combat. The blade still requires the mage to be within arm's reach of the target and cannot project cutting force at range.`,

        adept: `The blade reaches a full meter in length with a multi-layered photonic lattice that can sustain impacts from conventional weapons without degradation. The device models photon density gradients within the blade—a razor-sharp outer edge transitions to a denser, hammer-like core that provides structural rigidity. Duration extends to one minute, and a high-rank reactor can maintain the blade continuously for extended engagements with minimal mana bleed. Formation time drops to a fraction of a second.

The blade now cuts through military-grade armor plate. Reinforced steel, titanium alloys, and composite ceramics are all severed cleanly. The photonic lattice generates localized temperatures exceeding 1500 degrees Celsius along the cutting edge, flash-melting metal and vaporizing organic material on contact. Remote projection becomes available: the device can compress a photonic edge and launch it as a short-lived projectile, traveling up to 20 meters before the lattice loses cohesion and disperses. The projected blade retains full cutting power for its brief flight.

At Adept, Photon Blade is professional combat-grade. The mage can breach armored fortifications, disable heavy vehicles by severing structural members, and engage at close-to-medium range through projected strikes. The spell remains dependent on electromagnetic radiation—environments shielded against EM radiation or immersed in absolute darkness require the device to generate photons internally at significantly higher mana cost.`,

        expert: `The blade extends to 1.5 meters with near-instantaneous formation—the photonic lattice compresses from ambient radiation so quickly that the blade appears to ignite in the mage's hand as intent forms. Duration is effectively unlimited so long as mana reserves hold, and the lattice is stable enough to function as a load-bearing structural element—the mage can brace the blade against heavy objects, use it as a climbing anchor, or parry incoming fire without fear of collapse.

Cutting temperature peaks at approximately 2500 degrees Celsius along the active edge. The blade passes through reinforced concrete, structural steel beams, and vehicle armor with almost no resistance, leaving glowing, molten edges in its wake. Projected blade range extends to 50 meters, and the device can generate multiple simultaneous projections—up to three independent cutting edges launched in rapid succession or a fan pattern. The mage can also shape the blade: transitioning from a linear edge to a crescent arc, a whip-like segmented chain, or a wide cleaving surface depending on tactical need.

At Expert, Photon Blade is a versatile demolition and anti-materiel weapon. The mage dismantles structures, bisects armored vehicles, and clears fortified positions with sustained, precise cuts. The blade's luminescence makes it highly visible, and the photonic lattice—while stable—can be disrupted by sufficiently powerful electromagnetic interference or magical countermeasures of equal or higher tier.`,

        master: `The device achieves the theoretical optimum of photonic compression and lattice stabilization for a Tier 3 spell. The blade can extend up to 2 meters, or be compressed into a dagger-length edge with proportionally increased density and cutting power. Formation is reflexive—the mage wills the blade into existence and it manifests instantly, fully stable. The photonic lattice is maintained with near-perfect efficiency, recycling waste photons back into the compression cycle and minimizing mana bleed to the lowest achievable value.

Cutting temperature reaches approximately 3500 degrees Celsius at the core, capable of slicing through any non-magical material short of exotic alloys or magically-reinforced barriers. The blade can be shaped dynamically mid-combat—lengthening for reach, widening for defense, segmenting for whip-strikes—with the device handling all lattice reconfiguration calculations autonomously. Projected blades can be fired at a rate of one per second out to 75 meters, each retaining full lethality for the duration of its flight.

This is the ceiling of Photon Blade as a Tier 3 spell. A mage at this level can dismantle a reinforced bunker piece by piece, bisect a main battle tank through sustained cutting, or engage multiple targets simultaneously through projected strikes. They cannot cut through magical barriers of equal or higher tier, cannot generate the blade in true EM-void environments without prohibitive mana cost, and cannot extend the photonic lattice beyond the computational limits of Tier 3 photon-matter interaction modeling.`
    }
},
{
    id: 'electromagnetic_dominance',
    name: 'Electromagnetic Dominance',
    tier: 4,
    cost: 20,
    proficiency: {
        beginner: `At Beginner proficiency, Electromagnetic Dominance allows you to generate localized magnetic fields within a 15-meter radius, strong enough to deflect ferrous projectiles, drag metal objects weighing up to 50 kilograms toward or away from you, and levitate yourself roughly half a meter off the ground for short bursts of 10-15 seconds. The levitation is unstable and requires intense concentration, making it impractical for combat or sustained travel. You can sense ferromagnetic materials within your field radius, giving you a crude awareness of weapons, structural steel, and heavy machinery. Cast time for field generation is 3-4 seconds, and maintaining active control drains your reactor steadily. Most Beginners use this spell for utility work, retrieving tools in industrial environments, clearing debris, or creating momentary shields against ballistic threats.

The electromagnetic fields you generate are visible as faint blue-white distortions in the air, crackling with static discharge when interacting with conductive materials. Overexertion causes painful feedback, your nervous system registering phantom tingling and muscle spasms as the field collapses. You cannot yet manipulate non-ferrous metals or generate fields precise enough for fine control. Flight attempts are jerky and exhausting, often ending in hard landings. Your reactor needs 20-30 seconds of cooldown between sustained field applications to prevent burnout. Environmental interference from power lines, large transformers, or natural magnetic anomalies can destabilize your fields, forcing you to compensate manually or lose control entirely.`,

        apprentice: `At Apprentice proficiency, your magnetic fields extend to 40 meters and can exert forces up to 200 kilograms on ferrous targets. Levitation becomes stable and sustainable, allowing you to fly at speeds up to 60 kilometers per hour for 5-10 minute intervals before reactor strain forces you to land and recover. You can now perform basic aerial maneuvers, hovering in place, banking into turns, and maintaining altitude in moderate winds. Cast time drops to 1-2 seconds, and you can layer multiple field projections simultaneously, creating magnetic "anchors" on structural steel to pull yourself rapidly across urban environments or industrial facilities. You gain rudimentary control over non-ferrous conductive metals like aluminum and copper, though with significantly reduced force compared to ferromagnetic materials.

Your electromagnetic sense sharpens, allowing you to detect conductive wiring, data cables, and even the faint magnetic signatures of active electronics within your field radius. You can disrupt unshielded circuits with focused pulses, causing temporary malfunctions in drones, security cameras, and basic computing systems. This makes you a valuable asset in infiltration or sabotage operations. The visual signature of your fields intensifies, blue-white arcs of energy visibly connecting you to manipulated objects, often accompanied by a low-frequency hum audible within 20 meters. Sustained flight generates a corona of ionized air around your body, leaving a faint ozone scent in your wake. Your reactor still requires 10-15 seconds of cooldown between high-intensity applications, but general field maintenance is far less taxing. You can now compensate for most environmental interference, though extremely strong magnetic sources like MRI machines or industrial electromagnets can still overwhelm your control.`,

        adept: `At Adept proficiency, Electromagnetic Dominance becomes a true force multiplier in both combat and mobility. Your fields extend to 80 meters and can exert forces exceeding 500 kilograms, allowing you to hurl vehicles, tear apart reinforced structures, or create barriers strong enough to deflect high-velocity kinetic rounds. Flight speed increases to 150 kilometers per hour, and you can sustain aerial travel for 30-40 minutes before needing to rest. Maneuverability rivals that of purpose-built aircraft, you can perform sharp turns, rapid ascents and dives, and even brief bursts of acceleration up to 200 kilometers per hour for 10-15 seconds. Cast time becomes nearly instantaneous, and you can project multiple independent fields across your entire operational radius, manipulating dozens of objects simultaneously with precision measured in centimeters.

Your control over non-ferrous metals improves dramatically, allowing you to manipulate aluminum, copper, and even weakly conductive materials like carbon fiber composites with 60-70% of the force you can apply to ferrous metals. You can generate powerful electromagnetic pulses in a 30-meter radius, disabling unshielded electronics, inducing current overloads in power systems, and disrupting communications equipment. Your electromagnetic sense becomes precise enough to map building interiors through their electrical wiring, detect concealed weapons and devices, and track the faint bioelectric signatures of living organisms within 40 meters. In combat, you can magnetize non-magnetic materials temporarily by inducing eddy currents, turning improvised projectiles into guided munitions or creating temporary magnetic anchors on otherwise unsuitable surfaces.

The environmental impact of your spellwork is substantial. Active fields generate visible lightning-like arcs between you and manipulated objects, scorching surfaces and leaving burn marks on conductive materials. High-speed flight creates a visible ionization trail and a distinctive crackling roar, making stealth impossible when moving at full speed. Your reactor can sustain continuous field projection for hours at moderate intensity, and cooldown requirements for high-intensity bursts drop to 3-5 seconds. You can now operate effectively even in magnetically hostile environments, actively compensating for interference and maintaining stable control. Overuse still carries risks, sustained maximum-intensity projection for more than 2-3 minutes can cause temporary sensory disorientation and reactor stress warnings, forcing you to throttle back or risk system strain.`,

        expert: `At Expert proficiency, you achieve mastery over electromagnetic phenomena that borders on the extraordinary. Your fields extend to 150 meters and can exert forces exceeding 2 tons, sufficient to crumple armored vehicles, rip apart reinforced bunkers, or create defensive barriers capable of stopping tank rounds and low-yield explosive ordnance. Flight speed reaches 300 kilometers per hour in sustained travel, with sprint bursts up to 400 kilometers per hour for 20-30 seconds. You can fly for hours without rest, your reactor and physical conditioning adapted to the demands of sustained aerial operation. Aerial combat becomes second nature, you can execute complex three-dimensional maneuvers, maintain stable hover in hurricane-force winds, and even fly effectively in severe weather conditions including thunderstorms and heavy precipitation.

Your electromagnetic manipulation extends beyond simple attraction and repulsion. You can generate shaped magnetic fields with complex geometries, creating lensing effects that focus or disperse electromagnetic radiation, forming rudimentary railgun-style acceleration corridors to launch projectiles at hypersonic velocities, or weaving dense field matrices that function as reactive armor against incoming threats. Your EMP capabilities expand to a 60-meter radius with enough intensity to permanently damage unshielded electronics and temporarily disable hardened military-grade systems. You can sense and manipulate the electromagnetic spectrum more broadly, detecting radio transmissions, disrupting wireless communications, and even generating localized jamming fields that blind radar and electronic sensors.

Your electromagnetic sense becomes a tactical asset of immense value. You can map entire facilities through their electrical infrastructure, distinguish between different types of electronic devices by their electromagnetic signatures, and track individual personnel by the unique bioelectric patterns of their nervous systems. In urban environments, you can "see" through walls by mapping conductive materials, detect concealed surveillance equipment, and identify active data transmission pathways. The visual and audible signature of your spellwork is dramatic, sustained high-intensity operations generate a sphere of coruscating blue-white energy around you, visible for kilometers and accompanied by a deep, resonant thrumming that can be felt as much as heard. Ground surfaces beneath you during takeoff and landing often show scorch patterns from induced currents.

Your reactor efficiency improves to the point where moderate field projection requires negligible power draw, and even high-intensity bursts recover within 1-2 seconds. You can operate continuously in magnetically hostile environments, not just compensating for interference but actively suppressing external fields within your operational radius. The primary limitation you face is not power or control, but the physical durability of the materials you manipulate, attempting to exert maximum force on insufficiently robust objects simply tears them apart rather than moving them as desired.`,

        master: `At Master proficiency, Electromagnetic Dominance transforms you into a phenomenon of nature, a living nexus of electromagnetic force whose presence reshapes the local environment. Your fields extend to 250 meters and can exert forces exceeding 5 tons with surgical precision, sufficient to manipulate individual components within complex machinery, perform remote "surgery" on electronic systems by selectively energizing or de-energizing specific circuits, or create defensive barriers capable of stopping sustained heavy weapons fire and shaped-charge explosives. Flight speed reaches 500 kilometers per hour in sustained travel with sprint bursts up to 600 kilometers per hour for 45-60 seconds, and you can remain airborne for the better part of a day before fatigue becomes a limiting factor. Your aerial agility surpasses any conventional aircraft, you can execute instantaneous direction changes that would destroy mechanical systems, maintain perfect stability in conditions that would ground conventional fliers, and even "surf" along power lines and conductive infrastructure for rapid urban transit.

Your electromagnetic manipulation reaches levels of sophistication that blur the line between spell and technology. You can generate shaped-charge magnetic fields that function as directed-energy weapons, inducing powerful eddy currents in conductive targets that cause catastrophic heating and structural failure. Your railgun projections can accelerate ferrous projectiles to velocities exceeding 3 kilometers per second, delivering kinetic strikes with explosive force. You can create electromagnetic "cages" that trap and contain other electrically-based phenomena, including lightning, plasma discharges, and even certain types of energy-based spellwork. Your EMP capabilities extend to 100 meters with intensity sufficient to permanently destroy hardened military electronics and disable reactor-powered systems temporarily by inducing overload conditions in their power regulation systems.

Your electromagnetic sense becomes a form of omniscience within your operational radius. You perceive the electromagnetic environment as a rich, multi-layered landscape, from the gross topology of structural steel and power distribution networks down to the minute fluctuations of bioelectric signals in individual neurons. You can reconstruct recent events by examining the residual electromagnetic "echoes" left in conductive materials, effectively reading a form of electromagnetic history. You can identify individuals by their unique bioelectric signatures from hundreds of meters away, detect concealed reactors and spell matrices through their characteristic field patterns, and even predict equipment failures by sensing anomalies in electromagnetic behavior. In combat, this sense provides near-precognitive awareness of threats, you perceive the activation of electronic triggers, the buildup of charge in capacitor-based weapons, and the distinctive signatures of incoming projectiles while they're still beyond visual range.

The environmental impact of your spellwork at full intensity is dramatic and unmistakable. Active fields generate constant lightning-like discharges between you and everything metallic within range, creating a sphere of electromagnetic chaos that interferes with communications, disrupts unshielded electronics, and causes visible auroral effects in the air from ionization. High-speed flight leaves a luminous contrail visible for kilometers, accompanied by a sound like continuous thunder. Landings and takeoffs can cause localized power outages as you draw on or discharge into nearby electrical infrastructure. Despite this power, you remain bound by physical law, you cannot create magnetic monopoles, cannot manipulate non-conductive materials through electromagnetic force alone, and cannot exceed the fundamental limitations of field strength imposed by your reactor's output capacity. This is the ceiling of Electromagnetic Dominance as a Tier 4 spell.

Your reactor reaches peak efficiency, able to sustain maximum-intensity projection for 5-10 minutes continuously before requiring cooldown, and moderate operations require so little power they can be maintained indefinitely as a passive function. You can operate in any electromagnetic environment, actively reshaping the local field topology to your advantage regardless of external conditions. The combination of unlimited aerial mobility, devastating offensive capability, impenetrable defense, and near-omniscient electromagnetic awareness makes you a strategic asset of the highest order, equally valuable in combat operations, infrastructure security, electronic warfare, and search-and-rescue scenarios where your ability to sense and manipulate the electrical signatures of life itself can mean the difference between survival and death.`
    }
},
{
    id: 'botanical_catalyst',
    name: 'Botanical Catalyst',
    tier: 1,
    cost: 5,
    proficiency: {
        beginner: `The device identifies viable plant life within a three-meter radius and floods its cellular structure with accelerated metabolic signals, forcing rapid cell division and expansion. The process bypasses the plant's natural circadian and nutrient-absorption cycles, compressing hours of growth into roughly thirty seconds. Grass lengthens visibly, saplings push upward by centimeters, and vines extend across nearby surfaces. The device calculates the optimal mana distribution to avoid cellular rupture, but the accelerated growth is unstable—the affected plants are brittle and will wither within a day without natural sunlight and water to sustain them.

Range is limited to immediate proximity, and the effect is modest. A low-rank Mana Reactor can sustain three to four pulses per cycle, each triggering a single burst of growth across the radius. The spell requires living plant matter to work—barren soil, cut wood, and processed plant fibers are unaffected. Cast time is roughly three seconds as the device scans and identifies cellular targets before releasing the growth pulse.

At Beginner, Botanical Catalyst is a utility and environmental manipulation tool. It can thicken underbrush for concealment, extend vines to create improvised handholds, or grow grass over disturbed earth to mask recent activity. It will not produce substantial biomass, create combat-effective barriers, or accelerate growth beyond what the existing plant structure can physically support without collapsing under its own weight.`,

        apprentice: `The radius expands to eight meters, and the device now directs growth asymmetrically—vines can be coaxed to climb specific surfaces, roots to burrow in designated directions, branches to extend toward particular targets. Cast time drops to under two seconds, and a mid-rank reactor can produce six to eight pulses per cycle. The accelerated plants remain viable for several days rather than hours, as the device now optimizes their cellular structure for short-term stability.

Thickness and structural integrity improve proportionally. Vines grow dense enough to entangle an arm or leg, forcing an opponent to waste seconds cutting free. Saplings harden into juvenile trees thick enough to provide partial cover. The device calculates load-bearing capacity in real time, preventing catastrophic structural failure and allowing the mage to create barriers that can briefly withstand impacts from thrown objects or stumbling bodies.

At Apprentice, Botanical Catalyst transitions from passive utility to active battlefield shaping. The mage can create temporary barricades, entangle close-range threats, and rapidly alter the vegetation profile of an engagement zone to favor concealment and ambush tactics. The spell remains dependent on existing plant life—a paved street or deforested clearing yields nothing.`,

        adept: `The radius reaches twenty meters, and the device achieves growth rates that compress multiple days of natural development into a single ten-second pulse. Trees shoot upward by meters, their trunks thickening to the diameter of a human torso. Vines weave into dense nets capable of stopping a running person dead. The device introduces localized nutrient synthesis, drawing trace minerals from the soil and air to fortify the accelerated growth, extending plant viability to weeks rather than days. A high-rank reactor can sustain fifteen or more pulses per cycle.

Directed growth becomes precise. The device can shape vines into specific geometries—nets, snares, walls—and guide roots to undermine foundations or entangle subsurface obstacles. The accelerated plants are strong enough to bear significant weight: a vine lattice can support a climbing mage, and a rapidly grown thicket can halt a vehicle by fouling its undercarriage and wheels.

At Adept, Botanical Catalyst is a tactical engineering spell. The mage reshapes natural terrain into fortified positions, creates barriers that channel enemy movement, and deploys entangling hazards across wide areas. The spell's effectiveness scales directly with the density and health of existing vegetation—a lush forest becomes a tactical playground; a sparse grassland offers limited material to work with.`,

        expert: `The radius extends to fifty meters, and growth rates reach the point where trees mature by years in under five seconds. The device can now trigger secondary metabolic cascades: flowering plants bloom and produce seed pods, fruiting plants generate immature but edible fruit, and certain species synthesize defensive compounds—thorns harden, bark exudes irritant sap, leaves develop toxic oils. Cast time drops to effectively instant as the device pre-caches growth models for common plant species in the local biome.

The mage gains selective control over which plants respond to each pulse. The device distinguishes between species and prioritizes those with the most tactical utility—fast-growing vines over slow hardwoods, thorned brambles over soft grasses. Structural reinforcement allows the accelerated plants to withstand significant abuse: a vine net can hold a struggling human for minutes, and a rapidly grown tree can absorb small-arms fire without splintering.

At Expert, Botanical Catalyst is an environmental dominance tool. The mage transforms any vegetated area into a defensive position within seconds, deploying entangling hazards, visual cover, and physical barriers that reshape the engagement entirely. A forest under an Expert mage's influence becomes an actively hostile environment to anyone without magical countermeasures.`,

        master: `The device achieves the theoretical optimum of cellular acceleration and metabolic manipulation for a Tier 1 spell. Growth pulses compress weeks of natural development into a reflexive, sub-second process. The mage designates intent—barrier, snare, cover, maze—and the device autonomously selects and accelerates the appropriate plant life within a seventy-five-meter radius to fulfill that intent. Trees reach maturity in seconds, their wood dense and stable enough to serve as load-bearing structural elements for hours before requiring natural sustenance.

The device synthesizes localized atmospheric nitrogen and trace minerals to sustain the accelerated biomass indefinitely, eliminating the viability decay that plagued lower proficiency levels. Vines develop tensile strength comparable to hemp rope. Thorns grow sharp enough to pierce leather. The mage can layer multiple growth pulses, building on previous acceleration to create structures of compounding complexity—a thicket becomes a labyrinth, a sapling becomes a watchtower.

This is the ceiling of Botanical Catalyst as a Tier 1 spell. The mage can transform a vegetated area into a fortified, actively hostile environment within seconds and sustain that transformation for extended periods. They cannot generate plant life from barren ground, cannot accelerate growth beyond what the plant's genetic structure permits even with optimal conditions, and cannot control plants of higher-tier magical origin or those protected by wards of equal or greater strength. The spell manipulates existing biology to its structural and metabolic limits—nothing more.`
    }
},
{
    id: 'geomagnetic_reversal',
    name: 'Geomagnetic Reversal',
    tier: 5,
    cost: 25,
    proficiency: {
        beginner: `The device begins modeling the local magnetic field structure within a radius of roughly fifty meters, identifying field lines, flux density gradients, and natural magnetic anomalies in the substrate. Over the course of ten to fifteen seconds, it injects concentrated mana into the ground, creating localized ferromagnetic excitation in available iron-rich minerals. This generates a modest but detectable magnetic distortion—roughly 5 to 10 percent deviation from Earth's baseline field—that persists for about thirty seconds.

The distortion is enough to throw off unshielded magnetic compasses, introduce drift into navigation systems that rely on geomagnetic referencing, and cause mild disorientation in animals and humans sensitive to magnetic fields. The device cannot reverse the field polarity at this level, only bend and distort it within the affected zone. The mage must maintain contact with the ground throughout the casting process.

At Beginner, Geomagnetic Reversal is a navigation-disruption and disorientation spell. It will not incapacitate anyone directly, but it degrades the effectiveness of compass-based navigation, interferes with magnetically-guided munitions, and creates a subtle sensory confusion that adds to the fog of war. The spell requires iron-bearing substrate—deserts with low ferrous content, wooden structures over basements, and ocean surfaces are all poor casting environments.`,

        apprentice: `The device accelerates the modeling and excitation process, achieving a 20 to 30 percent magnetic deviation across a hundred-meter radius within five seconds. The field distortion now includes measurable polarity shifts in localized pockets—small zones where north and south swap for the duration of the effect, lasting up to two minutes. Electronics with unshielded magnetic sensors experience calibration errors, and any device using magnetometers for orientation or stabilization begins reporting nonsense data.

The mage can now designate multiple focal points within the affected area, creating a patchwork of competing magnetic anomalies that makes coherent navigation impossible. The disorientation effect on living targets intensifies—nausea, vertigo, and spatial confusion become common in anyone without magical or technological countermeasures. Migratory birds, if present, panic and scatter.

At Apprentice, Geomagnetic Reversal becomes a tactical denial tool. It blinds magnetic-guided weapon systems, forces opponents to rely on visual navigation in environments where visibility may already be compromised, and adds physiological stress to anyone operating in the affected zone for more than a minute.`,

        adept: `The device achieves full localized polarity reversal across a two-hundred-meter radius within three seconds. North becomes south, south becomes north, and the transition between reversed and normal zones creates shear boundaries where magnetic flux density spikes to three or four times Earth's baseline. These shear zones physically damage unshielded electronics—hard drives experience read/write errors, solid-state memory may corrupt, and any device with spinning magnetic storage is at severe risk of mechanical failure.

The field holds for up to five minutes, and the device continuously recalculates the optimal excitation pattern to maintain stability as the substrate responds. The mage can shape the reversal—creating corridors of normal polarity through a reversed zone, or isolated bubbles of reversed polarity within a normal field—to allow allied forces to navigate while hostiles flounder.

At Adept, Geomagnetic Reversal is an electronics-warfare and psychological-attack spell. The sheer wrongness of having planetary magnetism inverted within a localized zone triggers deep evolutionary discomfort in humans and animals. Navigation is impossible without celestial or inertial systems, and magnetically-sensitive ordnance goes haywire.`,

        expert: `The reversal covers a four-hundred-meter radius and stabilizes within a single second. The device achieves sustained polarity inversion for up to fifteen minutes, with flux shear boundaries so precisely controlled that they can be weaponized—the mage directs high-intensity magnetic gradients to specific points, inducing powerful eddy currents in any conductive material passing through them. Vehicles with steel chassis experience sudden braking as induced currents generate opposing magnetic drag. Ferrous projectiles deflect mid-flight. Power lines within the field experience surges and voltage spikes.

The disorientation effect becomes severe. Humans operating in the reversed zone for more than a few minutes without countermeasures experience intense nausea, visual distortions, and complete loss of spatial orientation. The device can now modulate the reversal in pulses—flipping polarity back and forth at intervals of a few seconds—to maximize physiological disruption and prevent adaptation.

At Expert, Geomagnetic Reversal is a strategic area-denial weapon. The mage can lock down an entire engagement zone, forcing opponents to either withdraw or operate under crippling sensory and technological disadvantages. The spell also has utility in counter-detection—thermal and radar systems function normally, but any magnetic anomaly detection or submarine-hunting magnetometers in the area report absurd, contradictory data.`,

        master: `The device achieves the theoretical optimum of localized geomagnetic manipulation for a Tier 5 spell. The reversal can encompass a six-hundred-meter radius, with polarity inversion completing in a fraction of a second and holding for as long as mana reserves permit—typically an hour or more with a high-rank reactor. Flux shear boundaries are weaponized to maximum effect: magnetic gradients at the boundaries reach intensities sufficient to physically rip apart steel-frame structures and shred unshielded electronics through catastrophic induced-current overload.

The device maintains a real-time magnetic field model of the entire affected volume, adjusting excitation patterns to compensate for substrate variations, underground metal deposits, and even nearby magnetic interference from vehicles or equipment. The mage configures the field in three-dimensional zones—reversed polarity at ground level, normal above ten meters, shear boundaries running horizontally to maximize anti-vehicle effectiveness—and the device handles all recalculations autonomously.

The physiological effect is maximized. Anyone without magical or high-grade technological shielding becomes non-functional within the zone in under a minute—severe vertigo, vomiting, complete disorientation, and potential loss of consciousness. The mage and designated allies are inoculated: the device generates a personal counter-field around each registered friendly, maintaining local magnetic normalcy within a meter-radius bubble that moves with them.

This is the ceiling of Geomagnetic Reversal as a Tier 5 spell. The mage can render a small-town-scale area navigable only to those with celestial, inertial, or magical navigation, cripple all magnetic-dependent systems within that zone, and inflict debilitating sensory overload on unprotected hostiles. They cannot reverse Earth's magnetic field on a continental or planetary scale, cannot affect areas without ferrous substrate to excite, and cannot penetrate deeply-shielded facilities designed to operate in magnetic dead zones. The spell manipulates local geology to distort the geomagnetic field, not the magnetosphere itself.`
    }
},
{
    id: 'fauna_beckoning',
    name: 'Fauna Beckoning',
    tier: 1,
    cost: 5,
    proficiency: {
        beginner: `The device emits a low-frequency resonance pulse tuned to mammalian and avian neural receptivity ranges, propagating through the ground and air within a radius of roughly 50 meters. The pulse carries no conscious message—it is a generalized attractant signal that triggers curiosity and mild compulsion in nearby animals without overriding their survival instincts. Small mammals, birds, and domesticated animals within range feel an urge to investigate the source, approaching cautiously over the course of one to two minutes.

The mage has no control over which species respond or how many arrive. The pulse is indiscriminate—rats and pigeons are as likely to answer as dogs or deer, and animals that perceive the mage as a threat will override the compulsion and flee regardless. The device sustains the resonance for roughly 30 seconds per cast, after which the attractant effect fades and animals either linger or wander off according to their natural behavior. A low-rank Mana Reactor can manage four to five casts per cycle.

At Beginner, Fauna Beckoning is a reconnaissance and distraction tool. The mage can populate an area with animals to serve as improvised motion sensors, create noise and movement to confuse opponents, or summon urban wildlife to forage through an area and disturb environmental sensors. The spell will not compel predators to attack on command, cannot summon animals from beyond the 50-meter radius, and fails entirely in sterile environments where no fauna exist.`,

        apprentice: `The resonance pulse strengthens and gains rudimentary directional shaping. The device can now bias the pulse to favor certain size categories—small mammals, medium quadrupeds, or avian species—though the targeting remains approximate and any nearby animals of other types may still respond. Range extends to 100 meters, and the compulsion effect is strong enough that animals will approach even if mildly startled or distracted, though genuine predators and territorial species still resist.

The device introduces a sustained resonance mode. Rather than a single 30-second pulse, the mage can maintain a continuous low-level attractant field for up to five minutes, drawing animals from the full radius over time as they detect and respond to the signal. The arriving fauna remain in proximity as long as the field persists, milling about the mage's position or following at a distance if the mage moves. A mid-rank reactor can sustain six to eight casts or two sustained-field deployments per cycle.

At Apprentice, Fauna Beckoning becomes a tactical shaping tool. The mage can flood an area with animals to trigger motion sensors and antipersonnel devices, use flocking birds as aerial reconnaissance proxies, or create chaotic swarms that obstruct movement and break line of sight for unenhanced combatants.`,

        adept: `The device achieves species-specific resonance targeting. The mage designates a preferred animal type—canines, corvids, rodents, ungulates—and the pulse is narrowed to frequencies and harmonics that appeal primarily to that category. The compulsion effect strengthens to the point where most non-predatory animals will ignore mild threats and environmental hazards to reach the mage's position. Range extends to 200 meters, and the sustained field can run for up to ten minutes before the device needs to recalibrate the resonance pattern.

Behavioral suggestion becomes available. The device modulates the pulse with secondary harmonics that encourage specific behaviors—milling in place, dispersing in a pattern, moving toward a designated point away from the mage, or following a slow patrol route. The animals do not understand commands, but the resonance nudges their instincts toward the desired behavior as long as it does not conflict with immediate survival drives. A high-rank reactor can sustain fifteen or more casts per cycle.

At Adept, Fauna Beckoning is a force multiplier for area control and intelligence gathering. The mage can direct swarms of rats through a tunnel network to map enemy positions, station flocks of birds as aerial sentries across multiple vantage points, or herd deer and other large fauna into chokepoints to block vehicle movement. The spell remains limited by available fauna—if no animals exist within range, the resonance achieves nothing.`,

        expert: `Range extends to 500 meters, and the compulsion effect is strong enough to override most instinctive caution in non-predatory species. Animals will approach through moderately dangerous terrain, ignore unfamiliar humans, and tolerate close proximity to machinery and gunfire for the duration of the resonance. The device can now layer multiple species-specific pulses simultaneously, summoning several distinct animal types to the same location or directing different species to separate coordinates within the spell's radius.

Sensory relay is introduced. The device establishes a low-bandwidth mana link with responding animals, allowing the mage to perceive through their senses—primarily vision and hearing, with crude proprioceptive feedback for larger mammals. The relay is passive; the mage observes but cannot puppet the animals directly. The device manages up to a dozen simultaneous sensory feeds, stitching them into a composite awareness that the mage experiences as a background overlay rather than conscious focus.

At Expert, Fauna Beckoning is an intelligence and surveillance system. The mage deploys animals across a wide area as living sensor nodes, tracks enemy movements through their eyes, and uses swarms to create multi-layered distractions and obstacles that force opponents to expend resources clearing fauna rather than advancing. The spell's effectiveness scales with local biodiversity—urban environments teem with rats, pigeons, and stray dogs; rural areas offer deer, foxes, and corvids; sterile military installations offer nothing.`,

        master: `The device achieves the theoretical optimum of resonance modulation and neural interfacing for a Tier 1 spell. Range extends to 1 kilometer, the compulsion is strong enough that even mildly territorial or skittish animals will respond unless directly threatened with lethal force, and the sensory relay supports simultaneous feeds from up to fifty animals with negligible conscious overhead. The mage experiences the composite sensory network as an ambient awareness—movement, sound, and visual anomalies are flagged automatically by the device, and the mage's attention is drawn only to tactically relevant stimuli.

Behavioral suggestion is refined to near-command precision within the boundaries of each species' natural capabilities. The mage cannot make a sparrow attack a human, but they can direct it to land on a specific object, vocalize at a designated time, or follow a patrol route indefinitely. Larger mammals can be nudged to block paths, knock over objects, or create noise on cue. The resonance field is sustainable for as long as mana allows—typically 20 to 30 minutes with a high-rank reactor—and the device handles all neural modulation, sensory relay processing, and behavioral suggestion autonomously.

This is the ceiling of Fauna Beckoning as a Tier 1 spell. The mage can command a small army of local wildlife as reconnaissance assets, area-denial obstacles, and distraction vectors across a kilometer radius. They cannot summon apex predators to fight on command, cannot compel animals to suicidal actions, and cannot generate fauna in environments where none exist. The spell transforms available wildlife into a tactical resource—nothing more, nothing less.`
    }
},
{
    id: 'stellar_corona',
    name: 'Stellar Corona',
    tier: 5,
    cost: 25,
    proficiency: {
        beginner: `The device creates a localized sphere of plasma by stripping electrons from atmospheric molecules at a designated point within fifty meters, then channels concentrated mana into the resulting ionized core to sustain fusion-adjacent energy densities. The process takes approximately three seconds as the device models the plasma containment field, calculates atmospheric composition, and builds the magnetic bottle that prevents the sphere from immediately dispersing. The resulting construct burns at roughly 8,000 degrees Celsius - hot enough to emit visible light across the spectrum and produce a corona of radiant heat that extends three to four meters beyond the core.

The sphere persists for about fifteen seconds before the containment field fails and the plasma dissipates in a burst of thermal bloom. Range to the center of the sphere is limited to fifty meters; beyond that, the device cannot maintain stable magnetic containment against atmospheric interference. A low-to-mid-rank Mana Reactor can sustain one to two casts per cycle - the spell is computationally and energetically expensive, requiring continuous real-time adjustments to plasma density, magnetic field strength, and thermal radiation modeling.

At Beginner, Stellar Corona is a tactical denial weapon. Anything within the three-meter corona radius suffers severe thermal damage - exposed flesh blisters and chars within seconds, flammable materials ignite, and metal softens or warps depending on alloy composition. Direct contact with the core is instantly lethal to unshielded organic tissue. The spell cannot be moved once placed, and the intense light it produces creates a temporary blind spot in the mage's field of view unless the device compensates with optical filtering.`,

        apprentice: `The plasma core stabilizes at approximately 12,000 degrees Celsius with a corona extending six meters from the center. The device now incorporates dynamic atmospheric modeling, adjusting containment parameters in real time to compensate for wind, humidity, and pressure variations. Range extends to a hundred meters, and the sphere's duration increases to thirty seconds. A mid-rank reactor can manage three to four casts per cycle, though sustained operations will still drain reserves quickly.

Radiant heat output becomes a weapon in its own right. Personnel within the corona radius experience third-degree burns within five seconds of exposure, vehicle-mounted optics and sensors fail from thermal overload, and ammunition stores detonate if caught in the effect zone. The device now tracks heat dissipation patterns and can modulate the corona's intensity across different radial segments - creating a hot side that incinerates and a cooler side where allies can operate with merely uncomfortable heat rather than lethal exposure.

At Apprentice, Stellar Corona becomes a sustained area-denial tool. The mage can lock down a chokepoint, deny cover by making it thermally uninhabitable, or force opponents into predictable movement patterns to avoid the radiating heat. The spell remains stationary once cast, and the mage must maintain line-of-sight to the anchor point or the containment field will collapse prematurely.`,

        adept: `The core temperature reaches 18,000 degrees Celsius - approaching the surface temperature of blue-white stars - and the corona extends ten meters from center. The device achieves mobile anchoring: the plasma sphere can now track a designated target or follow a programmed path at walking speed, the containment field continuously recalculating to maintain stability during movement. Range extends to two hundred meters, and duration pushes to one minute with active maintenance. A high-rank reactor can sustain six to eight casts per cycle.

Thermal radiation becomes suppression-grade. Unshielded electronics fail within the corona radius from electromagnetic interference generated by the plasma's intense ionization. Metal structural members glow cherry-red and lose load-bearing capacity within fifteen seconds of exposure. The device can now split the sphere into two smaller constructs - each operating at reduced intensity but covering separate areas - or merge them back into a single high-intensity core for concentrated damage.

At Adept, Stellar Corona is a mobile catastrophe. The mage can herd targets away from objectives, deny vehicle movement by melting road surfaces, or pursue fleeing opponents with a slow-moving sun that incinerates everything it touches. The spell's signature is impossible to hide - it produces light visible for kilometers and a thermal bloom detectable by any infrared sensor within line-of-sight.`,

        expert: `The core stabilizes at 25,000 degrees Celsius with a corona extending fifteen meters. The device achieves sub-second casting - pre-computation of likely deployment scenarios allows the plasma sphere to ignite almost reflexively when the mage designates a target point. Range extends to four hundred meters, and duration can be sustained for several minutes with continuous mana feed. The containment field is now robust enough to maintain stability through significant atmospheric turbulence, including active countermeasures like fire-suppression systems or magically-induced wind.

The corona becomes selectively permeable. The device models the thermal tolerance and electromagnetic signature of every object within the effect radius and can designate specific targets for full exposure while creating thermal shadows that protect friendlies or sensitive equipment. A squad can operate inside the corona's outer edge while hostiles ten meters away cook. The mage can also trigger a controlled collapse of the containment field, releasing the plasma core in a directed thermal lance that extends the killing radius by an additional twenty meters in a cone.

At Expert, Stellar Corona is a battlefield control weapon. The mage shapes engagement zones by making entire sectors thermally lethal, drives armored vehicles into kill zones by cutting off cooler routes, and eliminates fortified positions by sustaining the sphere adjacent to a structure until the building materials fail. The spell's mana cost remains steep - even a Keter-rank reactor will drain within ten minutes of continuous operation at full intensity.`,

        master: `The device achieves the theoretical optimum of plasma containment and thermal radiation management for a Tier 5 spell. The core reaches approximately 30,000 degrees Celsius - the effective ceiling beyond which the magnetic containment field cannot prevent the plasma from radiating itself to dissipation faster than mana can replenish it. The corona extends twenty meters from center with perfect selectivity: every object within the radius is independently assessed and receives exactly the thermal load the mage intends, from zero exposure to full core-temperature bombardment.

Casting is reflexive. The sphere ignites the instant the mage forms intent, and the device handles all atmospheric modeling, containment calculations, and thermal distribution autonomously. Duration is limited only by mana reserves - typically ten to fifteen minutes with a Keter-rank reactor at sustained high intensity. The mage can maintain up to three independent spheres simultaneously, each with separate movement patterns, intensity profiles, and selective-exposure parameters. Controlled collapse can be triggered on command, releasing the plasma as a shaped-charge thermal blast that extends lethality to fifty meters in a directed cone.

This is the ceiling of Stellar Corona as a Tier 5 spell. The mage can deny large sections of a battlefield through sustained thermal bombardment, melt through reinforced bunkers given sufficient exposure time, and create environmental conditions comparable to standing on the surface of a star within localized zones. They cannot generate actual stellar-scale fusion, cannot sustain temperatures exceeding the 30,000-degree containment limit, and cannot project the effect beyond the four-hundred-meter maximum range where magnetic coherence fails. The spell is a localized plasma weapon optimized to its tier's hard limits - devastating within its parameters, but bounded by the physics of mana-sustained fusion-adjacent reactions.`
    }
},
{
    id: 'ecosystem_reconstruction',
    name: 'Ecosystem Reconstruction',
    tier: 4,
    cost: 20,
    proficiency: {
        beginner: `The device analyzes a barren or damaged area roughly ten meters in diameter, cataloging soil composition, moisture content, and available organic matter. Over approximately two minutes, it accelerates the growth cycle of viable seeds and root structures already present in the substrate, flooding them with concentrated mana that bypasses normal photosynthetic and cellular division processes. Dormant seeds germinate within seconds, roots extend at visible speed, and seedlings push through the soil in a matter of minutes rather than days.

The result is a patch of fast-grown vegetation - grasses, weeds, and whatever hardy pioneer plants were already present in seed form. The growth is structurally sound but nutritionally depleted; the plants are alive but thin, pale, and will require conventional sunlight and water to mature beyond their initial burst. The device can only work with what is already present - if the soil is completely sterile or the area has been salted, glassed, or chemically sterilized, the spell produces nothing.

At Beginner, Ecosystem Reconstruction is a recovery and stabilization tool. It prevents erosion, provides initial ground cover after a fire or battle, and creates concealment where none existed. The vegetation produced is fragile and will die off if environmental conditions remain hostile. The spell does not create an ecosystem, merely jumpstarts one that was waiting for conditions to improve.`,

        apprentice: `The device expands its operational radius to twenty-five meters and introduces rudimentary soil remediation. Toxic compounds are broken down through mana-catalyzed chemical reactions, heavy metals are bound into inert complexes, and depleted soil receives an injection of synthesized nutrients drawn from atmospheric carbon and nitrogen. The growth acceleration extends to shrubs and small trees - saplings can reach a meter in height within minutes, and a thirty-meter coverage area can shift from mud and rubble to a young thicket within ten minutes of sustained casting.

The device now seeds the area with synthesized spores and root networks when natural seed stock is insufficient, drawing genetic templates from any plant matter within a hundred meters. The resulting flora is a functional blend of local species optimized for rapid growth and soil stabilization. The plants are healthier, capable of sustaining themselves after the initial boost, though they remain visibly younger and less robust than naturally mature vegetation.

At Apprentice, Ecosystem Reconstruction becomes a tactical terraforming tool. The mage can create cover, obscure sight lines, and destabilize enemy positions by growing root networks that crack pavement and undermine foundations. The spell still cannot operate in true dead zones - areas with no water, no atmosphere, or no substrate capable of supporting plant life.`,

        adept: `The device processes a fifty-meter radius and achieves full soil reconstruction within minutes. Contaminated ground is cleansed, compacted earth is aerated, and the device synthesizes a complete biome template tailored to the local climate and available sunlight. Trees grow to five meters in height, undergrowth fills in densely, and the area transitions from barren wasteland to young forest within fifteen minutes. The vegetation is structurally mature - root systems extend deep, trunks are thick enough to stop small-arms fire, and the canopy provides genuine concealment from aerial observation.

Water table manipulation is introduced. The device redirects subsurface moisture toward the target area, creating localized irrigation channels that sustain the new growth without requiring rain. The mage can also specify the type of biome - temperate forest, grassland, wetland marsh - and the device adjusts species composition and hydrology accordingly. The plants grow at an accelerated rate but age normally once the spell concludes, so a forest created at Adept will survive and expand naturally if conditions permit.

At Adept, Ecosystem Reconstruction is a battlefield reshaping spell. The mage transforms open ground into dense woodland, creates impassable thorn thickets, or establishes wetlands that bog down vehicles and obscure thermal signatures. The spell requires significant mana and works best in areas with some baseline fertility; sterile deserts and salted earth remain difficult targets.`,

        expert: `The device operates across a hundred-meter radius and achieves ecosystem maturity within minutes. Trees grow to ten meters with trunks thick enough to serve as cover against vehicle-mounted weapons, undergrowth becomes a maze of interlocking vegetation, and the soil develops a rich humus layer complete with microbial colonies and fungal networks. The device synthesizes an entire food web - insects, soil fauna, and microbial decomposers - that sustains the new ecosystem without external input.

Aggressive growth modes become available. The mage can direct plant growth as a weapon - vines that entangle and crush, roots that erupt from the ground to trip and impale, thorned branches that lash out at designated targets. The device models plant biomechanics in real time, optimizing growth patterns for structural integrity and tactical effect. The vegetation can be directed to avoid friendly forces, creating clear corridors while surrounding hostiles in impassable green walls.

At Expert, the mage is a terraforming weapon. A barren hillside becomes an impassable forest in minutes, complete with all the ecological complexity of a naturally mature biome. The plants respond to the mage's tactical intent, reshaping the battlefield dynamically to trap, slow, or eliminate opposition. The spell still cannot operate in environments fundamentally hostile to life - hard vacuum, molten lava, chemically inert substrates.`,

        master: `The device operates at its Tier 4 ceiling. A two-hundred-meter radius can be fully transformed from wasteland to mature ecosystem within five minutes. Trees reach fifteen meters in height with root systems that stabilize slopes and break through bedrock to access deep water. The device synthesizes complex multi-species ecosystems complete with symbiotic relationships, predator-prey dynamics, and closed nutrient cycles. The resulting biome is indistinguishable from one that developed naturally over decades, except for the speed of its appearance.

Total environmental control is achieved within the radius. The mage specifies temperature, humidity, soil pH, and species composition, and the device executes with perfect precision. Aggressive growth is fully weaponized - the mage can command a forest to attack, with trees physically uprooting to reposition, vines striking with the speed and force of whips, and root networks collapsing structures from below. The ecosystem persists and expands naturally after the spell concludes, requiring no further mana input to sustain itself.

This is the ceiling of Ecosystem Reconstruction as a Tier 4 spell. The mage can terraform a small-town-scale area into a thriving, self-sustaining biome within minutes and direct that biome as a weapon system during the transformation. They cannot affect continental climates, cannot create life in true vacuum or on substrates with zero water content, and cannot generate ecosystems that violate the physical limits of plant biology - no trees that grow to a hundred meters in seconds, no plants that survive in molten rock. Master means the spell has achieved the maximum speed, scale, and complexity that Tier 4 biological acceleration and ecological modeling can sustain.`
    }
},
{
    id: 'biosphere_command',
    name: 'Biosphere Command',
    tier: 3,
    cost: 15,
    proficiency: {
        beginner: `The device broadcasts a low-frequency mana pulse through the surrounding environment, establishing a rudimentary link with the bioelectric signatures of plant and animal life within a radius of roughly ten meters. The pulse carries simple directives—approach, retreat, calm, agitate—that are interpreted by the target organisms' nervous systems or, in the case of plants, their electrochemical signaling networks. The device can simultaneously influence two distinct species types, and the effect persists for roughly twenty seconds before the organisms revert to natural behavior.

The influence is suggestive rather than absolute. Animals with higher cognitive functions—dogs, primates, corvids—may resist or ignore directives that conflict sharply with survival instinct or conditioning. Plants respond slowly, requiring several seconds to initiate growth, wilting, or directional shifts. The spell has no effect on organisms that lack a bioelectric signature detectable by the device—bacteria, fungi, and viruses are outside its scope.

At Beginner, Biosphere Command is a utility and soft-control spell. The mage calms a guard dog, coaxes vines to shift aside, or agitates a flock of birds into creating a distracting commotion. The spell will not compel suicidal actions, cannot override pain or fear responses in intelligent animals, and requires living organisms to already be present—it does not summon creatures from elsewhere.`,

        apprentice: `The influence radius extends to twenty-five meters, and the device can now link with up to four species simultaneously. The directives become more complex—the device can specify targeting priority (attack this person, not that one), simple pathing (move to this location, avoid that obstacle), and coordinated group behavior (swarm, scatter, flank). Duration extends to forty-five seconds, and the bioelectric link strengthens enough to partially override fear responses in animals with moderate intelligence.

Plants respond more rapidly—vines lash out or coil defensively within five seconds, roots shift beneath soil to trip or entangle, and flowering plants release pollen or irritants in concentrated clouds on command. The mage can direct insects en masse—wasps, ants, bees—to attack specific targets or form living barriers that most unprotected humans will not willingly cross.

At Apprentice, Biosphere Command becomes a legitimate combat asset. The mage turns the environment's living occupants into improvised defenders or attackers, overwhelming a single opponent through coordinated insect swarms, or using animals to flank and distract while the mage engages directly. The spell still cannot force truly suicidal behavior, and predators may break the link if seriously injured.`,

        adept: `The radius expands to fifty meters, and the device manages links with up to eight species concurrently. The directives achieve near-telepathic clarity—the device translates the mage's intent into bioelectric commands that animals perceive as instinctive urges they cannot easily distinguish from their own thoughts. Even intelligent animals like wolves and raptors obey complex, multi-step instructions. Plants respond with combat-relevant speed, growing or shifting in under two seconds to create barriers, weapons, or entanglements.

The device now modulates organism behavior at a granular level—accelerating metabolic rates to make animals faster and more aggressive temporarily, or slowing them to induce torpor and docility. Swarms of insects can be directed with tactical precision: forming screens to block vision, targeting vulnerable points like eyes and airways, or delivering venomous stings in concentrated volleys. Large animals—deer, boars, dogs—charge, grapple, and harry targets on command with coordination that appears trained.

At Adept, Biosphere Command turns any natural or semi-urban environment into an extension of the mage's tactical presence. Opponents face attacks from every direction as plants ensnare, animals charge, and insects swarm in response to the mage's will. The spell requires a moderately diverse biosphere to be effective—sterile or heavily urbanized environments with minimal life offer limited material to work with.`,

        expert: `The device establishes links across a hundred-meter radius with up to fifteen species simultaneously. The bioelectric commands are irresistible to any creature short of magically warded or cybernetically augmented intelligence—animals will follow directives even into life-threatening situations, though the device prioritizes keeping them functional rather than expending them recklessly. Plants achieve aggressive growth rates, extending roots or vines several meters in seconds, hardening bark to deflect small-arms fire temporarily, or releasing concentrated toxins and allergens.

The mage gains environmental awareness through the linked organisms. Every animal's senses feed back to the device as a distributed sensory network—the mage perceives movement, heat signatures, and threats across the entire radius through the eyes, ears, and chemoreceptors of the creatures under their command. The device coordinates complex multi-species tactics: birds dive to distract, ground animals trip and harry, insects blind and poison, while plants entangle and crush in a seamless combined assault.

At Expert, Biosphere Command makes the mage a force multiplier in any living environment. Opponents cannot hide, cannot move freely, and face a coordinated biological assault that adapts in real time. The spell's effectiveness scales with biodiversity—a dense forest or wetland offers overwhelming tactical advantage, while a barren desert or sterile facility provides minimal support.`,

        master: `The spell operates at the theoretical optimum of bioelectric coordination for a Tier 3 spell. The device links with every viable organism within a hundred and fifty meters simultaneously—animals, plants, insects, even simple multicellular life like slime molds and algae. The bioelectric commands are executed as though the mage's intent were the organisms' own survival imperative. Animals coordinate with trained-unit precision, plants respond with reflexive speed, and the entire biosphere within range functions as a unified defensive or offensive system.

The sensory network achieves centimeter-resolution awareness across the entire radius. The mage perceives the environment through hundreds of perspectives simultaneously, processed and filtered by the device into a coherent tactical overlay. The organisms are directed with zero conscious overhead—the mage wills an outcome (defend this position, eliminate that target, block that corridor) and the device translates it into thousands of individual directives executed in concert.

This is the ceiling of Biosphere Command as a Tier 3 spell. The mage cannot create life, cannot summon organisms from beyond the spell's radius, and cannot command creatures whose bioelectric signatures are shielded or whose cognitive architecture resists external influence (undead, constructs, heavily cybernetic entities). The spell works only with what is already present in the environment, but within that constraint, it achieves perfect coordination and utilization of every living thing the device can reach.`
    }
},
{
    id: 'gamma_emission',
    name: 'Gamma Emission',
    tier: 4,
    cost: 20,
    proficiency: {
        beginner: `The device strips electrons from ambient atmospheric particles and accelerates them to relativistic velocities within a tightly focused magnetic containment tube, producing a collimated beam of high-energy gamma radiation roughly five centimeters in diameter. The beam emerges as an invisible, ionizing lance that propagates in a straight line from the mage's position. Exposure causes immediate cellular disruption - DNA strands break, enzymes denature, and cellular mitochondria fail within seconds. The device requires approximately three seconds to spin up the magnetic accelerator and achieve the necessary particle velocities.

Range is limited to roughly 30 meters in atmosphere before the beam disperses through interaction with air molecules. Beyond that distance, ionizing power drops sharply as the photon stream loses coherence. A low-rank Mana Reactor can manage two to three emissions per cycle before the device's radiation shielding and particle acceleration systems require thermal recalibration. Each emission lasts approximately two seconds of sustained output, delivering a cumulative dose of roughly 50 Gray to targets in the beam path - lethal to unshielded organic tissue within hours, though death is not immediate.

At Beginner, Gamma Emission is a delayed-lethality weapon. It produces no visible flash, no thermal signature, and no audible report - the only indication of firing is a faint ozone smell from ionized air. The beam passes through most conventional materials without significant attenuation, making cover largely irrelevant unless it incorporates lead, concrete, or water in sufficient thickness. The spell cannot be deployed safely near allies - the radiation scatters omni-directionally from impact surfaces and poses a contamination hazard within a 10-meter radius of the target zone.`,

        apprentice: `The beam diameter expands to 10 centimeters with improved particle density, and the device reduces spin-up time to roughly one second. Range extends to 60 meters with maintained lethality, and the sustained emission duration increases to five seconds per cast. The cumulative dose delivered reaches approximately 100 Gray - sufficient to cause acute radiation syndrome within minutes and death within hours without immediate medical intervention. A mid-rank reactor can sustain four to six emissions per cycle.

The device now incorporates rudimentary beam shaping. The mage can widen the emission cone to 30 degrees for area saturation or narrow it to a pinpoint for maximum penetration against hardened targets. Scatter radius expands to 15 meters, and the device begins tracking secondary ionization patterns to provide the mage with crude awareness of what the beam is passing through - flesh, metal, concrete - based on gamma backscatter signatures.

At Apprentice, Gamma Emission becomes a strategic assassination tool. Targets die within hours of exposure, often without realizing they have been irradiated until symptoms manifest. The spell can engage through walls, around corners via ricochet shots, and against targets in sealed vehicles. The radiation hazard is significant - the mage must either maintain distance from the impact zone or rely on their own device's shielding to mitigate scatter exposure.`,

        adept: `The device achieves near-instantaneous particle acceleration, reducing cast time to a fraction of a second. Range extends to 120 meters with a core beam delivering 200 Gray over a sustained three-second emission. The beam can now be pulsed - rapid on-off cycles that allow the device to engage multiple targets in sequence without requiring a full recalibration between shots. A high-rank reactor can sustain 15 or more emissions per cycle, with thermal management systems cycling waste heat into supplementary mana generation.

Beam steering becomes available. The device projects the gamma stream through a dynamic magnetic lens that can bend the emission path up to 15 degrees from the direct line of fire, allowing the mage to shoot around obstacles or track moving targets without physically reorienting. Scatter control is introduced - the device modulates emission frequency to minimize secondary ionization in designated safe zones, creating corridors where allies can operate with reduced contamination risk.

At Adept, Gamma Emission is a precision radiation weapon. The mage can sterilize a fortified position from outside, irradiate a vehicle's crew without damaging the vehicle itself, or deliver lethal doses to multiple dispersed targets in rapid succession. The spell's invisibility and material-penetration capabilities make conventional cover and concealment effectively worthless.`,

        expert: `Cast time drops to effectively instant. The device pre-charges the magnetic accelerator and maintains a ready state, allowing reflexive emissions the moment intent is formed. Range extends to 200 meters with core doses reaching 500 Gray - fatal within minutes even with aggressive medical intervention. The beam can be sustained continuously for up to 15 seconds, during which the device dynamically adjusts particle flux to maintain lethal intensity across the entire emission duration.

Multi-target engagement becomes standard. The device can split the beam into three independent streams, each tracking separate targets through magnetic lensing with up to 30 degrees of angular displacement from the primary axis. Scatter radiation is weaponized - the device calculates optimal ricochet angles to flood enclosed spaces with ionizing backscatter, irradiating everyone in a room through a single wall penetration. The mage perceives detailed gamma-backscatter imaging of everything within 50 meters, effectively seeing through walls and solid objects.

At Expert, Gamma Emission is an area-sterilization weapon. The mage can irradiate an entire building, disable a platoon through mass-casualty radiation exposure, or selectively contaminate specific zones to deny them to unshielded personnel for hours. The spell remains completely silent and invisible, making the source of contamination difficult to identify until victims begin exhibiting acute radiation symptoms.`,

        master: `The device achieves the theoretical optimum of gamma-ray generation and magnetic beam control for a Tier 4 spell. Emissions are reflexive - the mage wills and the beam fires with zero perceptible delay. Range reaches 300 meters with maintained lethality, and core doses peak at approximately 1000 Gray - lethal within minutes, incapacitating within seconds as cellular structures catastrophically fail. The beam can be sustained for up to 30 seconds continuously, or pulsed at rates exceeding five emissions per second for rapid multi-target engagement.

The device manages up to eight independent beam streams simultaneously, each with full magnetic steering across 45 degrees of angular displacement. Scatter control is perfected - the mage can designate safe zones where secondary ionization is actively suppressed through counter-phased emissions, allowing allies to operate mere meters from lethal radiation fields. Gamma-backscatter imaging provides real-time three-dimensional mapping of all structures and biological signatures within 100 meters, rendering stealth and concealment meaningless within the spell's operational radius.

This is the ceiling of Gamma Emission as a Tier 4 spell. The mage can irradiate a city block, sterilize hardened bunkers through meters of concrete, and engage targets with perfect awareness through any non-lead barrier. They cannot generate gamma radiation at nuclear-detonation intensities, cannot affect targets beyond the 300-meter range limit where atmospheric interaction disperses the beam, and cannot bypass lead-lined shielding or equivalent radiation barriers of 10 centimeters or greater thickness. What Master provides is the most lethal, most precise ionizing-radiation weapon that Tier 4 particle acceleration can sustain - silent death that passes through walls and kills hours after the battle ends.`
    }
},
{
    id: 'tidal_surge',
    name: 'Tidal Surge',
    tier: 3,
    cost: 15,
    proficiency: {
        beginner: `The device draws massive quantities of ambient moisture from the air, ground, and any available water sources within a hundred-meter radius, condensing it into a coherent wave roughly three meters tall and ten meters wide that travels outward from the mage's position at approximately twenty kilometers per hour. The compression and shaping process takes roughly four seconds, during which the device models the local hydrology and atmospheric moisture content to optimize volume. The resulting wave carries several tons of water with enough momentum to knock unbraced humans off their feet and sweep loose objects along with the current.

The wave travels in a straight line for approximately fifty meters before losing cohesion and dispersing into a shallow flood. The force is equivalent to a river rapid—dangerous to the unprepared but survivable if the target braces or moves with the flow. Structures and anchored objects experience significant pressure but rarely catastrophic damage unless they were already compromised. A low-to-mid-rank Mana Reactor can produce two to three waves per mana cycle before the device's hydrostatic-compression systems require recalibration.

At Beginner, Tidal Surge is a crowd-dispersal and positional-control tool. It clears open ground of personnel, washes away light fortifications, and creates temporary flooding that complicates movement for minutes after the wave passes. It will not bring down reinforced structures, cannot be used in environments where insufficient water exists within extraction range, and relies on terrain to channel the wave—walls and elevation changes significantly reduce effective coverage.`,

        apprentice: `The wave grows to six meters tall and twenty meters wide, with improved hydrostatic compression producing a mass of water equivalent to a small swimming pool moving at approximately thirty-five kilometers per hour. The device now incorporates terrain modeling into its calculations, allowing the wave to follow contours, bend around obstacles, and concentrate force on designated targets rather than dispersing evenly. Cast time drops to roughly two seconds as the compression algorithms are optimized. A mid-rank reactor can sustain four to five waves per cycle.

Impact force increases substantially. The wave can topple unanchored vehicles, breach wooden doors and lightweight walls, and carry humans dozens of meters downstream before depositing them bruised and disoriented. The residual flooding is deeper—knee-to-waist height in low-lying areas—and persists longer, creating hazardous terrain that slows pursuits and disrupts formations. The device can split the wave into two or three smaller surges that travel along independent paths, allowing the mage to engage multiple dispersed groups simultaneously.

At Apprentice, Tidal Surge becomes a legitimate battlefield weapon. It can reposition enemy forces against their will, destroy light fortifications, and create environmental hazards that persist through an engagement. The spell remains dependent on available moisture—arid environments yield smaller, weaker waves—and the mage has limited control over the wave once released.`,

        adept: `The wave reaches ten meters tall and forty meters wide, carrying tens of tons of water at speeds approaching fifty kilometers per hour. The device achieves near-instantaneous moisture extraction and compression, reducing cast time to under a second. Hydrostatic shaping allows the mage to sculpt the wave's profile in real time—concentrating it into a narrow, high-velocity jet for maximum penetration, or spreading it wide for area suppression. Range extends to a hundred meters before the wave begins to lose structural integrity. A high-rank reactor can sustain eight to ten waves per cycle.

Impact force is sufficient to collapse unreinforced masonry walls, flip armored vehicles, and shatter windows through hydrostatic pressure alone. The wave can be directed to travel uphill for short distances by borrowing momentum from the mass of water behind it, and the device can sustain the wave's coherence through sharp turns by dynamically adjusting the pressure distribution across the wavefront. Drowning becomes a genuine hazard—opponents caught in the surge and unable to reach high ground can be held underwater by the turbulent flow for tens of seconds.

At Adept, Tidal Surge is a tactical assault weapon. The mage can breach fortified positions, clear entire zones of enemy personnel, and reshape the engagement terrain by flooding low-lying areas. The residual water creates muddy, treacherous ground that persists for hours. The spell requires significant moisture within extraction range—coastal, riverside, or humid environments are ideal; deserts and arid zones yield minimal results.`,

        expert: `The wave grows to fifteen meters tall and sixty meters wide, moving at approximately seventy kilometers per hour with a mass of water comparable to an Olympic swimming pool compressed into a single surge. The device extracts moisture from every available source within a two-hundred-meter radius, including vegetation, soil, and even the exhaled breath of living creatures, guaranteeing sufficient volume in all but the most extreme desert environments. Cast time is effectively instant—the mage forms intent and the wave materializes. Range extends to two hundred meters with maintained lethality. A high-rank reactor can sustain continuous wave generation for extended engagements.

The wave can be shaped into complex geometries mid-flight. The device models the optimal form for the tactical requirement: a towering wall for maximum intimidation and suppression, a low-profile surge that flows beneath obstacles, or a spiraling vortex that traps targets in a rotating current. The force is sufficient to demolish reinforced structures, overturn heavy vehicles, and strip away temporary fortifications like sandbags and barricades as if they were made of paper. The residual flooding reaches chest height in low areas and persists for tens of minutes, rendering the affected zone effectively impassable to infantry.

At Expert, Tidal Surge is an environmental-dominance weapon. The mage commands water on a scale that turns the battlefield itself into a hazard, forcing opponents to flee high ground or drown. Entire formations can be dispersed, and fortified positions can be washed away. The spell's signature is unmistakable—the roar of the approaching wave and the resulting devastation make stealth impossible.`,

        master: `The device achieves the theoretical optimum of large-scale hydrostatic manipulation for a Tier 3 spell. The wave can reach twenty meters tall and eighty meters wide, moving at speeds approaching ninety kilometers per hour—the practical ceiling of what the device's hydrodynamic modeling can sustain before turbulence and friction losses destabilize the wavefront. The mass of water exceeds a hundred tons, and the device extracts it from any available source within a three-hundred-meter radius with near-perfect efficiency. Cast time is reflexive; the mage wills the surge and it forms without conscious delay.

The wave's geometry is fully adaptive. The device monitors the battlefield in real time, adjusting the surge's profile to maximize tactical impact—flowing around allied positions, concentrating force against hardened targets, and dispersing to flood large areas when suppression is the goal. The force is sufficient to level unreinforced buildings, sweep away armored convoys, and carve new channels through soft earth as the water scours the ground beneath it. Residual flooding creates lakes in low-lying terrain that persist for hours.

This is the ceiling of Tidal Surge as a Tier 3 spell. The mage can deploy devastating water-based assaults that reshape entire engagement zones, but they cannot generate tsunamis at oceanic scale, cannot summon water from nothing in true vacuum or absolute desert, and cannot overcome magical barriers or structures reinforced to withstand Tier 3 hydrodynamic forces. What Master delivers is the most powerful, most adaptable hydrostatic weapon system that Tier 3 moisture extraction and wave dynamics can sustain—a force of nature compressed into tactical form.`
    }
},
{
    id: 'aqueous_generation',
    name: 'Aqueous Generation',
    tier: 1,
    cost: 5,
    proficiency: {
        beginner: `The device condenses atmospheric moisture into liquid water, drawing from ambient humidity and forming it into a stable collection within a designated container or surface. The process is straightforward but slow - the device ionizes air molecules to attract water vapor, then compresses the collected moisture into liquid form. At low humidity (below 30%), collection efficiency drops sharply, and the device struggles to produce meaningful volume.

Range is limited to roughly 5 meters from the mage's position. The device can generate approximately 2 liters per minute under optimal conditions (60-80% humidity, moderate temperature), dropping to less than half a liter per minute in arid environments. A low-rank Mana Reactor can sustain the collection process for about 10 minutes per cycle before reserves dip to unsafe levels. The water produced is potable - the condensation process filters out most particulates and contaminants - but the device cannot guarantee sterility.

At Beginner, Aqueous Generation is a survival and utility tool. It provides clean drinking water in field conditions where humidity permits, can fill containers for transport, and offers a reliable hydration source during extended operations. The spell will not function in true desert conditions where atmospheric moisture is negligible, cannot produce water faster than evaporation in extreme heat without a sealed container, and has no offensive capability. The rate of production makes it impractical for large-scale needs - filling a bathtub would take over an hour.`,

        apprentice: `The device's condensation efficiency improves through refined ionization patterns and multi-stage compression. Production rate increases to approximately 5 liters per minute at standard humidity, and the device can now extract moisture from lower humidity levels (down to 15%) with reasonable efficiency. Range extends to 10 meters, allowing the mage to fill distant containers without relocating. A mid-rank reactor can sustain generation for 20 to 25 minutes per cycle.

The water quality is enhanced. The device now incorporates a basic filtration matrix during condensation, removing trace contaminants, dissolved gases, and biological material to produce water that meets field-sterile standards. Temperature control is introduced - the mage can output water at temperatures ranging from just above freezing (5 degrees Celsius) to pleasantly warm (40 degrees Celsius) by modulating the thermal energy retained or shed during compression.

At Apprentice, Aqueous Generation becomes a reliable logistical asset. The mage can provide hydration for a small squad during field operations, fill canteens and water bladders efficiently, and produce sterile water for medical use. The spell remains environmentally dependent - production in arid climates is still limited - but the improved extraction efficiency makes it viable in a wider range of conditions.`,

        adept: `The condensation rate reaches 15 liters per minute with atmospheric moisture extraction refined to function even in hostile environments. The device can now pull water vapor from air as dry as 5% humidity by extending its ionization field and increasing compression cycles. Range extends to 25 meters, and the device can simultaneously fill multiple containers within that radius through parallel condensation streams. A high-rank reactor can sustain generation for over an hour per cycle.

Selective filtration becomes precise. The device analyzes the composition of collected moisture in real time and can remove specific contaminants, adjust mineral content for taste or health requirements, and produce water that is laboratory-sterile rather than merely field-clean. The mage can also reverse the process temporarily - drawing moisture from materials rather than air, extracting water from damp soil, saturated fabric, or organic matter to accelerate drying or reclaim water from unconventional sources.

At Adept, Aqueous Generation is a professional logistics and engineering tool. The mage can sustain the water needs of a platoon-sized unit indefinitely, provide sterile water for medical facilities, flood small areas for tactical purposes by directing sustained output into a depression, or extract moisture from damaged equipment to prevent corrosion. The spell's utility extends beyond simple hydration into environmental control and field engineering.`,

        expert: `Production rate reaches 40 liters per minute with near-instantaneous condensation onset. The device pre-computes optimal extraction patterns for the current environment and activates collection the moment intent is formed. Range extends to 50 meters, and the device can manage dozens of simultaneous condensation streams, each independently controlled for volume, temperature, and delivery point. A high-rank reactor can sustain generation for hours without interruption.

Large-scale output becomes viable. The mage can fill a standard water tank (200 liters) in under five minutes, create standing pools of water on demand for firefighting or decontamination, or generate sustained streams that function as improvised water barriers. The reverse extraction process is refined to pull moisture from virtually any source - humid stone, living plants, even the air in a sealed room can be dehumidified completely within minutes, producing water while simultaneously drying the environment.

At Expert, Aqueous Generation is a strategic logistics tool and environmental manipulation capability. The mage can provide water to support large-scale operations, rapidly fill reservoirs, create tactical water obstacles, or deny moisture to an area by extracting it faster than natural processes can replace it. The spell remains bounded by available atmospheric or environmental moisture - it cannot create water from nothing, only collect and condense what exists.`,

        master: `The device achieves the theoretical optimum of atmospheric condensation and moisture extraction for a Tier 1 spell. Production rate reaches 100 liters per minute under optimal conditions, and the device can extract trace moisture from air with less than 1% humidity through maximally efficient ionization cascades. The condensation process is reflexive - the mage designates containers, locations, or targets, and the device handles all extraction, compression, and delivery calculations autonomously. Range extends to 100 meters.

The water quality is controlled with molecular precision. The device can produce water with any desired mineral composition, pH balance, or temperature (from near-freezing to just below boiling) by manipulating the thermal and chemical properties during condensation. Reverse extraction operates at maximum efficiency - the mage can dehumidify an entire building in minutes, extract water from organic matter without causing tissue damage (useful for medical applications), or pull moisture from materials to preserve them.

This is the ceiling of Aqueous Generation as a Tier 1 spell. The mage can sustain the water needs of hundreds of people, fill swimming pools or firefighting reservoirs within an hour, and control environmental humidity across wide areas. They cannot create water in absolute vacuum where no moisture exists, cannot exceed the 100 liters per minute production ceiling that Tier 1 condensation architecture can sustain, and cannot produce water of sufficient volume to flood large structures in tactically relevant timeframes. The spell provides the most efficient, most versatile water collection and environmental moisture control that Tier 1 atmospheric manipulation can deliver.`
    }
},
{
    id: 'ferrous_control',
    name: 'Ferrous Control',
    tier: 1,
    cost: 5,
    proficiency: {
        beginner: `The device generates a localized magnetic field tuned to ferromagnetic materials, enabling the mage to levitate and manipulate small metal objects within a 5-meter radius. The field strength is modest—roughly equivalent to a strong neodymium magnet—allowing control over objects up to half a kilogram in mass. Cast time is approximately two seconds as the device calculates the target's composition, mass distribution, and required field geometry. A low-rank Mana Reactor can sustain the field for 3-4 manipulation cycles before reserves dip to unsafe levels.

The manipulation is crude at this proficiency. Objects move slowly—roughly walking pace—and fine control over orientation is difficult. The device struggles with alloys of mixed ferromagnetic content, and non-ferrous metals like aluminum, copper, and titanium are completely unaffected. The mage can pull a knife from an opponent's hand, retrieve a dropped tool, or deflect an incoming blade, but complex multi-object choreography is beyond the device's processing capacity.

At Beginner, Ferrous Control is a utility and disarmament tool. It provides basic battlefield control over metal objects within arm's reach, can retrieve items from hazardous locations, and offers rudimentary defense against ferrous projectiles. It will not manipulate objects heavier than a combat knife, control multiple targets simultaneously, or function against magically reinforced metals that resist magnetic interference.`,

        apprentice: `The magnetic field strengthens to industrial electromagnet levels, raising the mass ceiling to approximately five kilograms and extending the effective range to 15 meters. The device now performs real-time compositional analysis, identifying ferromagnetic content in alloys and adjusting field harmonics to maximize grip on mixed-metal targets. Cast time drops to under a second, and a mid-rank reactor can sustain 6-8 manipulation cycles per mana pool.

Objects move at roughly sprinting speed—fast enough to weaponize. A hurled steel wrench or crowbar carries lethal kinetic energy, and the device can now control two to three objects simultaneously with independent trajectories. Rotational control improves significantly; the mage can spin a blade in flight, orient a shield to intercept incoming fire, or position a metal bar as an improvised barrier. The field can also exert attractive or repulsive force against ferrous surfaces, allowing the mage to anchor themselves magnetically to steel structures or push off metal walls for mobility.

At Apprentice, Ferrous Control becomes a flexible combat tool. The mage can disarm multiple opponents, create improvised projectile swarms from battlefield debris, and manipulate their own equipment mid-combat. The spell still cannot affect non-ferrous metals, struggles with objects exceeding the mass limit, and provides no enhancement against targets who've secured their gear with non-metallic fasteners.`,

        adept: `Field strength reaches heavy industrial levels, capable of gripping objects up to twenty kilograms and extending effective range to 40 meters. The device achieves near-instantaneous field formation—the magnetic geometry is calculated and deployed in a fraction of a second. Compositional analysis is refined to the molecular level; the device identifies trace ferromagnetic elements in otherwise non-magnetic alloys and leverages them for control. A high-rank reactor can sustain 15-20 manipulation cycles per pool.

Multi-object control scales dramatically. The device manages up to eight independent targets simultaneously, each with dedicated tracking and trajectory calculation. Objects accelerate to projectile velocities—steel fragments hurled at 30-40 meters per second hit with the force of crossbow bolts. Magnetic binding becomes available: the mage can fuse multiple ferrous objects into a temporary composite structure—an improvised shield from scrap metal, a makeshift bridge from steel beams, or a weighted net from chain-link fencing.

At Adept, Ferrous Control is a battlefield-shaping weapon. The mage can strip an armory of weapons in seconds, construct defensive barriers from environmental metal, and turn any steel-rich environment into a lethal projectile swarm. The spell's ceiling remains material-dependent—it cannot generate metal from nothing, cannot affect pure non-ferrous materials, and cannot overcome magnetic shielding or enchanted metals designed to resist field manipulation.`,

        expert: `Range extends to 80 meters with maintained precision, and the mass ceiling rises to fifty kilograms—sufficient to control vehicle components, structural steel, and heavy weaponry. Cast time is effectively instant; the device pre-calculates likely field configurations and holds them in a predictive cache, executing the moment intent is formed. The magnetic field can now induce eddy currents in conductive non-ferrous metals, creating enough electromagnetic resistance to slow or deflect aluminum and copper projectiles, though true control remains limited to ferromagnetic targets.

The device manages up to fifteen simultaneous objects with the same ease as a single target. Projectile velocities reach 60-70 meters per second—steel shrapnel at this speed punches through light body armor and embeds itself in concrete. Magnetic sculpting is introduced: the mage can deform ferrous materials by applying differential field pressures, bending rebar, crushing steel plate, or shaping molten metal into desired forms if sufficient heat is available from external sources.

At Expert, Ferrous Control is a weapons platform and engineering tool. The mage can dismantle vehicles by removing critical components, collapse steel-frame structures by warping load-bearing members, and sustain barrages of high-velocity metal debris that suppress entire engagement zones. The spell remains bounded by available ferrous material—the mage cannot conjure metal, cannot affect materials that lack ferromagnetic elements, and cannot penetrate electromagnetic shielding rated for anti-magnetic operations.`,

        master: `The device achieves the theoretical optimum of magnetic field manipulation for a Tier 1 spell. Range plateaus at 100 meters with maintained molecular-level precision over every target within the field. The mass ceiling reaches seventy kilograms—the maximum that can be suspended and accelerated through Tier 1 magnetic field density before the device's computation load exceeds safe thresholds. Cast time is reflexive; the mage wills and the field forms, no conscious activation required.

The device tracks and manipulates up to twenty independent ferrous objects simultaneously, each with dedicated trajectory modeling and real-time environmental compensation for wind, gravity, and target movement. Projectile velocities reach 80 meters per second—steel fragments at this speed shatter bone and penetrate vehicle armor. Eddy current induction in non-ferrous metals is refined to provide crude deflection control over copper and aluminum projectiles, though true telekinetic-level manipulation remains exclusive to ferromagnetic targets.

This is the ceiling of Ferrous Control as a Tier 1 spell. A mage at this level can strip a mechanized infantry unit of weapons, construct fortified positions from structural steel debris, and sustain high-velocity metal swarms that dominate urban engagement zones. They cannot affect non-metallic materials, cannot manipulate metals beyond the 100-meter radius, cannot overcome anti-magnetic enchantments or shielding, and cannot generate ferrous material from nothing—the spell operates exclusively on what already exists within its operational sphere.`
    }
},
{
    id: 'photonic_burst',
    name: 'Photonic Burst',
    tier: 1,
    cost: 5,
    proficiency: {
        beginner: `The device collects ambient photons from the surrounding environment and compresses them into a focal sphere roughly the size of a fist, held in a stabilized electromagnetic bottle. Upon release, the sphere detonates in an omnidirectional flash of intense light peaking at approximately 10 million candela—comparable to a military-grade flashbang grenade. The compression process takes roughly two seconds as the device calculates the optimal wavelength distribution to maximize retinal saturation without causing permanent damage.

Range is limited to approximately 15 meters. Beyond that distance, the light disperses below the threshold required for effective flash-blinding. A low-rank Mana Reactor can produce three to four bursts per cycle before the device's photon-collection arrays need time to recalibrate. The burst causes immediate but temporary blindness—roughly five to ten seconds in well-lit conditions, longer in darkness—accompanied by disorientation and afterimage persistence that degrades aim and spatial awareness.

At Beginner, Photonic Burst is a non-lethal disruption tool. It creates an opening for repositioning or retreat, breaks visual targeting, and forces opponents to rely on hearing or enhanced sensors. It will not harm those wearing eye protection rated for intense light, cannot penetrate opaque barriers, and is entirely ineffective in environments already saturated with bright light where the contrast is insufficient.`,

        apprentice: `The sphere grows to roughly melon size with a refined spectral output. The device now calculates the optimal wavelength blend for the local environment—broad-spectrum in dimly lit spaces, UV-shifted in bright conditions to bypass natural pupillary reflex. Light intensity peaks at approximately 20 million candela, and the device can shape the emission pattern into a directional cone rather than an omnidirectional burst, concentrating the flash in a 90-degree arc out to 30 meters.

Flash-blindness duration extends to twenty seconds or more, with afterimages severe enough to induce nausea and vertigo in susceptible targets. The burst carries sufficient energy to overload unshielded optical sensors and low-grade cameras, causing temporary malfunction or permanent damage to cheaper electronics. A mid-rank reactor can sustain six to eight bursts per cycle.

At Apprentice, Photonic Burst transitions from disengagement tool to tactical weapon. The directional shaping allows the mage to blind enemies without affecting allies positioned outside the cone. The spell remains dependent on line of sight—any opaque object between the mage and the target blocks the flash entirely.`,

        adept: `Intensity reaches 50 million candela with near-instantaneous detonation—the device compresses and releases in under half a second. The directional cone tightens to 45 degrees with maintained range of 60 meters, allowing surgical application of the flash against specific targets or groups. The device introduces a secondary thermal pulse: the concentrated photons carry enough energy to cause surface heating, igniting paper and dry cloth within two meters of the detonation point.

The device can now delay the burst. After compressing the photon sphere, the mage can project it to a specific coordinate where it hovers for up to three seconds before detonating on command or automatically upon detecting motion within a two-meter proximity radius. This introduces trap-setting and area-denial applications—invisible trip-flares that punish anyone entering a guarded space.

At Adept, Photonic Burst is a combat-grade flash weapon and area control tool. Flash-blindness persists for thirty seconds or more, long enough to render a target combat-ineffective for the duration of most engagements. The thermal pulse adds a secondary hazard, and the delayed-detonation mode makes the spell valuable for defensive perimeters.`,

        expert: `Cast time drops to effectively instant. The device pre-compresses probable burst configurations and holds them in ready state, allowing reflexive deployment the moment intent is formed. Range extends to 100 meters, and intensity peaks at 100 million candela—bright enough to cause permanent retinal scarring with sustained direct exposure at close range. The thermal pulse is refined to deliver focused heat: sufficient to ignite gasoline, melt plastics, and cause second-degree burns to exposed skin within a five-meter radius.

Multiple delayed bursts can be deployed simultaneously. The device tracks up to eight independent spheres, each hovering at designated coordinates with separate detonation triggers—proximity, timer, remote command, or environmental condition such as incoming projectile or hostile bioelectric signature. The directional cone can be narrowed to a laser-like beam 10 degrees wide, projecting a blinding lance of light that overloads even hardened military optics.

At Expert, Photonic Burst is a suppression and denial system. A single mage can seed an area with delayed bursts that create a minefield of light traps, engage multiple targets with precision flashes, and maintain continuous pressure through rapid-fire deployment. The spell's signature is unmistakable—there is no hiding the source of a 100-million-candela burst.`,

        master: `The device achieves the theoretical optimum of photonic compression and spectral modulation for a Tier 1 spell. Light intensity plateaus at approximately 150 million candela—the maximum that the electromagnetic containment bottle can sustain before photon pressure destabilizes the compression matrix. Cast time is reflexive; the mage wills the burst and the device executes without conscious delay. The thermal pulse reaches temperatures sufficient to ignite most combustible materials within a seven-meter radius and flash-vaporize standing water.

Delayed bursts are managed autonomously. The device can maintain up to fifteen independent spheres across the full 100-meter range, each with adaptive detonation logic that responds to battlefield conditions in real time—detonating to intercept incoming projectiles, timing bursts to catch opponents mid-movement, or holding indefinitely as sentinel traps. The directional beam mode achieves laser-like collimation, projecting a blinding column of light with minimal dispersion over the full engagement range.

This is the ceiling of Photonic Burst as a Tier 1 spell. The mage can blind an entire infantry squad, seed a defensive perimeter with autonomous light traps, and maintain continuous flash suppression across a wide area. They cannot produce light beyond the 150-million-candela containment limit, cannot cause photonic explosions that deliver kinetic damage, and cannot overcome opaque barriers or magically darkened zones that absorb light before it reaches targets. The spell manipulates photons with maximum efficiency within Tier 1 constraints—nothing more.`
    }
}
{
    id: 'infrasonic_wave',
    name: 'Infrasonic Wave',
    tier: 2,
    cost: 10,
    proficiency: {
        beginner: `The device generates a low-frequency acoustic pulse in the 5-20 Hz range, below the threshold of human hearing but well within the resonance frequencies of soft tissue and internal organs. The pulse propagates through air as a directed cone roughly ten degrees wide, traveling at the speed of sound and maintaining coherence out to approximately thirty meters. The device calculates atmospheric density, temperature, and humidity in real time to optimize the waveform for maximum energy transfer into biological targets.

A direct hit causes immediate disorientation - the inner ear's vestibular system is disrupted by the resonant vibration, inducing vertigo, nausea, and loss of balance for five to ten seconds. Sustained exposure of more than two seconds causes cumulative discomfort: headaches, chest pressure, and mild respiratory distress. A low-rank Mana Reactor can produce three to four pulses per cycle, with each pulse lasting roughly one second. The device requires a two-second recalibration period between casts to rebuild the acoustic waveform.

At Beginner, Infrasonic Wave is a non-lethal area suppression tool. It disorients and destabilizes targets within its cone, making it useful for crowd control and forcing opponents out of cover. It will not cause permanent injury to healthy adults, penetrate solid barriers effectively, or function in vacuum where no atmosphere exists to propagate the sound. Hearing protection offers no defense - the frequencies bypass the eardrum entirely and resonate directly with body cavities.`,

        apprentice: `The frequency range tightens to 8-15 Hz, maximizing resonance with human thoracic and abdominal cavities. The cone widens to twenty degrees with maintained coherence out to fifty meters. The device now modulates the waveform dynamically, pulsing the infrasonic pressure in a pattern that amplifies nausea and panic responses. A mid-rank reactor can sustain six to eight pulses per cycle, and the recalibration period drops to one second.

Physical effects intensify. The resonant vibration causes involuntary muscle spasms in the diaphragm and intercostal muscles, making breathing difficult and speech nearly impossible while under sustained exposure. Vision blurs as the eyeballs vibrate in their sockets. Targets within the cone experience profound psychological distress - the frequency triggers the same autonomic fear response as natural infrasound from earthquakes or severe weather, inducing panic even in trained combatants.

At Apprentice, Infrasonic Wave becomes a battlefield suppression weapon. It can clear rooms, break formations, and force entrenched opponents to abandon their positions. The spell propagates through light cover like wood and drywall with minimal attenuation, making it effective against targets behind thin barriers. Dense materials like concrete and steel still block or deflect the wave significantly.`,

        adept: `The device achieves sustained-emission mode, projecting a continuous infrasonic beam rather than discrete pulses. The frequency can be tuned between 5-20 Hz in real time to match the resonant characteristics of different target types - human bodies, vehicle frames, structural supports. Range extends to eighty meters with a thirty-degree cone, and a high-rank reactor can maintain the beam for up to thirty seconds continuously before requiring a brief rest cycle.

Resonant amplification becomes available. The device identifies the natural frequencies of objects within the beam and adjusts the waveform to match, causing cumulative vibrational stress that can fracture brittle materials, loosen fasteners, and induce structural fatigue. Sustained exposure on a human target for five seconds or more causes temporary incapacitation - the combined vestibular disruption, respiratory distress, and psychological panic render most unenhanced humans unable to function for minutes after the beam ceases.

At Adept, Infrasonic Wave is a versatile suppression and demolition tool. It clears fortified positions by making them physically unbearable to occupy, weakens structural integrity through resonant stress, and can disable light vehicles by disrupting fuel lines and loosening critical components. The spell's limitation is material density - thick walls, underground bunkers, and magically reinforced barriers all attenuate the wave significantly.`,

        expert: `Range extends to one hundred twenty meters with a forty-five-degree cone, and the device can now fire multiple independent beams simultaneously at separate targets within its field. The frequency range expands down to 3 Hz, entering the range where infrasound causes not just discomfort but genuine physiological damage. Sustained exposure at this frequency induces cardiac arrhythmia, pulmonary edema, and internal hemorrhaging as organs are vibrated against their connective tissue moorings.

The device incorporates active acoustic tracking. By analyzing reflected infrasound from surfaces and targets, it builds a sonar map of the engagement zone that penetrates light cover and reveals concealed threats. The beam can be pulsed in a strobing pattern that maximizes psychological impact - the on-off cycling prevents habituation and sustains the panic response indefinitely. Structural resonance targeting is refined to the point where the device can identify and exploit load-bearing weaknesses, collapsing buildings and fortifications through calculated vibrational stress.

At Expert, Infrasonic Wave is a weapon of area denial and psychological warfare. No unprotected human can remain functional within the beam for more than a few seconds, and the structural damage potential makes it effective against hardened positions. The spell demands significant mana throughput to maintain multiple beams, but the tactical advantage of projecting force through cover is substantial.`,

        master: `The device achieves the theoretical optimum of infrasonic generation and propagation for a Tier 2 spell. The beam can extend to one hundred fifty meters with a sixty-degree cone, and the device can project up to five independent beams tracked simultaneously with dedicated processing threads. Frequency control is precise to a tenth of a hertz, allowing the mage to tune each beam to the exact resonant frequency of its target - human bodies, vehicle chassis, building frames, or even the earth itself for localized seismic disruption.

Sustained-emission mode runs indefinitely with a high-rank reactor. The mana cost has been optimized through perfect waveform efficiency - no energy is wasted in harmonics or side-lobes; every joule propagates directly into the target. The sonar mapping provides real-time three-dimensional awareness of everything within one hundred meters, with resolution sufficient to distinguish individual humans behind walls. Lethal-frequency mode can be engaged for targets that require permanent neutralization, inducing fatal cardiac or respiratory failure within ten seconds of exposure.

This is the ceiling of Infrasonic Wave as a Tier 2 spell. The mage can suppress entire formations, collapse structures through resonant demolition, and maintain complete acoustic awareness of the battlefield. They cannot propagate infrasound through vacuum, cannot affect targets in magically shielded enclosures that block acoustic transmission, and cannot overcome the inverse-square law - even at Master, the beam's intensity drops with distance and cannot match the localized lethality of a direct kinetic or thermal weapon at point-blank range.`
    }
},
{
    id: 'toxic_vapor',
    name: 'Toxic Vapor',
    tier: 2,
    cost: 10,
    proficiency: {
        beginner: `The device synthesizes airborne toxins by catalyzing atmospheric nitrogen and trace pollutants into a caustic aerosol cloud. Generation requires 3.5 seconds of processing as the device calculates optimal molecular structures based on ambient air composition. The resulting vapor manifests as a pale green mist eight meters in diameter, persisting for approximately ninety seconds before atmospheric dispersion renders it inert. Malkuth reactors support three deployments per cycle with sixty-second recovery periods between casts.

The vapor irritates exposed mucous membranes on contact, causing tearing, coughing, and respiratory discomfort. Unprotected targets within the cloud experience immediate sensory impairment—blurred vision through watering eyes, difficulty breathing through inflamed airways, skin irritation on exposed areas. The toxin is non-lethal at this concentration; symptoms fade within five minutes of leaving the affected area. Standard gas masks provide complete protection. Wind speeds above 15 km/h disperse the cloud rapidly, reducing effective duration to thirty seconds. Hod reactors extend cloud diameter to twelve meters and duration to two minutes.

At Beginner level Toxic Vapor functions as area denial and crowd control. The spell creates hazardous zones that force repositioning, breaks line-of-sight through the dense mist, and disorients unprotected opponents. It cannot penetrate sealed environments, harm targets with respiratory protection, or maintain coherence in adverse weather conditions.`,

        apprentice: `Cloud diameter expands to twenty meters with duration reaching four minutes. The device refines toxin composition for enhanced potency—respiratory irritation intensifies to cause productive coughing and mild bronchospasm that persists for fifteen minutes after exposure. Cast time drops to 1.8 seconds with Malkuth supporting five deployments, Yesod supporting eight per cycle with thirty-second recovery. The vapor gains mild corrosive properties that degrade organic materials like cloth, leather, and exposed wood over the four-minute exposure period.

Selective toxicity becomes available—the device encodes molecular markers that make the vapor harmless to designated allies while maintaining full potency against unmarked targets. The mist actively seeks low-lying areas, flowing downhill and pooling in depressions rather than dispersing uniformly. Concentration gradients allow tactical placement: dense toxic cores with fifteen-meter radius surrounded by irritant halos extending another ten meters. The device monitors wind patterns and adjusts vapor density dynamically to maintain coverage despite environmental interference.

Apprentice-tier Toxic Vapor transitions from area denial to active area control weapon. The spell creates persistent hazard zones that degrade enemy equipment while selectively protecting allies, flows tactically to fill defensive positions, and maintains effectiveness in moderate wind conditions. It cannot penetrate sealed armor, harm targets with military-grade respiratory protection, or maintain coherence in severe weather exceeding 40 km/h winds.`,

        adept: `Cloud diameter reaches fifty meters with duration extending to eight minutes. The device synthesizes neurotoxic compounds alongside irritants—prolonged exposure (thirty seconds or more) causes muscle weakness, impaired coordination, and cognitive slowing that persists for one hour after leaving the cloud. Cast time drops to 0.7 seconds with Tiferet reactors treating the spell as negligible overhead, supporting fifteen deployments per cycle. The vapor becomes denser and heavier, resisting wind dispersal up to 60 km/h and settling into structures through ventilation systems.

Multi-stage toxicity profiles allow programming delayed effects—initial exposure causes mild irritation, but symptoms escalate after five minutes to severe respiratory distress and disorientation even after targets leave the area. The device produces antitoxin markers that fully protect designated allies and allow safe operation within the cloud. Corrosive enhancement degrades composite armor, vehicle seals, and electronic casings over the eight-minute exposure period. The vapor detects and flows toward heat signatures within fifty meters, actively hunting targets rather than dispersing passively.

At Adept level the spell delivers tactical chemical warfare capability. It creates lethal denial zones with neurotoxic effects, degrades hardened equipment and fortifications, actively pursues fleeing targets, and maintains effectiveness through adverse conditions. The spell cannot overcome sealed NBC-rated equipment, extend beyond fifty-meter radius, or maintain neurotoxic potency beyond eight-minute duration.`,

        expert: `District-scale deployment reaches one hundred twenty meters with duration extending to twenty minutes. Neurotoxic potency increases to incapacitate unprotected targets within sixty seconds of exposure—severe muscle paralysis, loss of consciousness, and respiratory failure requiring immediate medical intervention. Geburah reactors sustain three simultaneous clouds across the operational area while supporting thirty total deployments per cycle. The vapor develops environmental persistence—residual toxins adhere to surfaces and release slowly, maintaining hazardous conditions for hours after the primary cloud disperses.

The device executes sophisticated chemical warfare: layering multiple toxin types with staggered activation timelines, creating vapor walls that channel enemy movement into kill zones, generating localized super-concentrated pockets that defeat most protective equipment through overwhelming exposure. Adaptive molecular structures allow the toxin to penetrate standard NBC filters by mimicking inert atmospheric compounds until internal to the respiratory system. Allied protection extends to three hundred meters—the device continuously broadcasts antitoxin markers that neutralize vapor effects on friendly forces across the theater.

Expert-tier Toxic Vapor delivers theater-scale chemical warfare with lethal incapacitation capability and hours-long environmental persistence. The spell creates district-wide hazard zones, penetrates military protective equipment, executes complex tactical vapor manipulation, and maintains effectiveness for extended operations. It cannot exceed one-hundred-twenty-meter deployment radius, penetrate divine-scale protection, or overcome sealed power armor with independent air supply.`,

        master: `The device maintains three simultaneous clouds at maximum efficiency across district-scale operations as permanent background capability. All functions operate at design ceiling: one-hundred-twenty-meter radius, twenty-minute primary duration, lethal neurotoxic effects within sixty seconds, adaptive filter penetration, and hours-long environmental persistence. Keter reactors optimize all vapor generation and management as background processes requiring zero conscious overhead.

Molecular customization allows real-time toxin adjustment—switching between lethal, incapacitating, and irritant profiles based on tactical requirements and rules of engagement. The system handles all cloud placement, concentration management, multi-stage activation timing, and adaptive penetration as integrated autonomous functions. Vapor clouds coordinate intelligently—forming barriers, executing tactical sweeps, and converging on high-value targets under unified strategic control. Allies within five hundred meters receive automatic universal antitoxin protection regardless of toxin profile deployed.

This represents the absolute ceiling for Toxic Vapor as a Tier 2 spell: comprehensive chemical warfare capability at district scale with lethal effects, adaptive penetration, environmental persistence, and autonomous tactical control. The spell provides maximum toxic aerosol manipulation achievable within Tier 2 elemental physics. It cannot exceed one-hundred-twenty-meter deployment radius, create truly permanent environmental contamination, penetrate sealed power armor with independent systems, or overcome divine-scale immunity to mundane toxins.`
    }
},
];

// Merge batch3 into spellData
if (typeof spellData !== "undefined" && spellData.elemental) {
    spellData.elemental = spellData.elemental.concat(elementalSpellsBatch3);
}

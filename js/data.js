// Game Data - All descriptions and options

// Difficulty Configurations
const difficultyConfig = {
  easy: {
    name: 'Easy',
    aetherPoints: 400,
    personalizationPoints: 350,
    description: 'Plenty of resources to build the mage you want. You can afford most options without sweating the budget — pick what looks fun and still have points left over.'
  },
  medium: {
    name: 'Medium',
    aetherPoints: 280,
    personalizationPoints: 230,
    description: 'A comfortable balance. You will need to make choices and set priorities, but you will not feel pinched — a solid build comes together without spreadsheet-level planning.'
  },
  hard: {
    name: 'Hard',
    aetherPoints: 175,
    personalizationPoints: 140,
    description: 'Every point matters. You must budget carefully, prioritize ruthlessly, and accept that you cannot have everything — but a focused build is still viable and effective.'
  }
};

// Mana Reactor Ranks (Kabbalistic Tree of Life)
const manaReactorRanks = {
    malkuth: {
        name: 'Malkuth (Foundation)',
        cost: 10,
        freeBodyPerks: { primary: 0, secondary: 0 },
        freeBodyPerksByClass: {
            knight: ['speed', 'strength', 'dexterity'],
            bombardment: ['sense', 'intelligence', 'wisdom'],
            thaumaturge: ['intelligence', 'wisdom', 'sense']
        },
        freeDeviceGen: null,
        description: `A Malkuth-class reactor is the baseline mana generation unit issued to newly awakened mages under the Bureau. Its single-layer crystalline core holds 1x capacity — the reference point against which all higher ranks are measured. Full depletion requires 8-12 minutes of ambient absorption to recover, and the reactor can sustain only one concurrent spell effect reliably, two if neither exceeds Tier 2 complexity. Spell routines above Tier 3 exceed the core's throughput ceiling, causing mana bleed that wastes roughly thirty percent of each casting as radiant heat.

In practical terms, a Malkuth mage operates under constant resource scarcity. A single Tier 3 combat spell consumes a quarter of total reserves, limiting engagement to 2-3 full-power casts per cycle before mandatory recovery. The single lamination structure provides no buffering against draw spikes, which forces most Malkuth mages to develop precise mana discipline — smooth, controlled casting with minimal waste. Field instructors note that mages who spend extensive time at this rank often outperform higher-ranked peers in efficiency metrics, having learned habits that treat every joule of mana as precious.

The unique capability at Malkuth is also its vulnerability: the reactor's simplicity makes it remarkably stable against mana feedback, highly resistant to the resonance cascades that plague multi-layer cores, but this same lack of internal buffering means any disruption to the casting process dumps the full spell cost as waste. Interrupted casts at Malkuth rank bleed mana directly into the environment, a failure mode that can leave the mage depleted after a single botched routine.`
    },
    yesod: {
        name: 'Yesod (Foundation)',
        cost: 20,
        freeBodyPerks: { primary: 1, secondary: 0 },
        freeBodyPerksByClass: {
            knight: ['speed', 'strength'],
            bombardment: ['sense', 'intelligence'],
            thaumaturge: ['intelligence', 'wisdom']
        },
        freeDeviceGen: null,
        description: `The Yesod-class reactor integrates a second lamination layer, raising total capacity to 2x baseline and reducing recovery time from full depletion to 4-6 minutes. This upgrade enables sustained operation with 2-3 concurrent spell effects and raises the safe casting ceiling to Tier 4 without mana bleed. A Yesod mage can deliver 5-6 Tier 3 combat spells per cycle, enough to prosecute an engagement from opening to resolution without mandatory downtime — a threshold the Bureau's safety board considers the minimum viable standard for field deployment.

The second lamination introduces a unique capability: involuntary ambient mana sensitivity. The interlayer resonance between laminations creates a passive feedback loop that translates environmental mana density into visceral sensation — pressure, temperature shift, or a metallic taste depending on the mage's neurology. This isn't precise enough for tactical targeting, but it provides reliable early warning when entering zones of high magical concentration, dimensional instability, or active spell formations. A Yesod mage walking toward a concealed barrier routine will feel the pressure build long before visual detection range.

The vulnerability lies in the interlayer boundary itself. Under sustained high-output casting or external mana shock (hostile dispel attempts, reactor-targeting munitions), the interface between laminations can develop micro-fractures that compromise structural integrity. A fractured Yesod reactor bleeds reserves at 2-3x normal rate until recalibration, and catastrophic delamination — though rare — can drop the mage to sub-Malkuth output in seconds. The Bureau mandates interlayer inspection every 90 days of active service.`
    },
    hod: {
        name: 'Hod (Splendor)',
        cost: 30,
        freeBodyPerks: { primary: 1, secondary: 0 },
        freeBodyPerksByClass: {
            knight: ['speed', 'strength', 'dexterity'],
            bombardment: ['sense', 'intelligence', 'wisdom'],
            thaumaturge: ['intelligence', 'wisdom', 'sense']
        },
        freeDeviceGen: 1,
        description: `The Hod-class reactor incorporates a third lamination layer with internal refraction lattice, raising capacity to 3.5x baseline and cutting recovery time to 2-3 minutes from full depletion. The refraction geometry improves mana coherence by approximately forty percent, reducing waste heat and enabling clean casting up to Tier 5 without bleed. A Hod mage can maintain 4 concurrent spell effects — typically a barrier jacket, sensory enhancement, and two active combat routines — while sustaining 8-10 Tier 3 casts per cycle, enough for extended engagement without resource anxiety.

The refraction lattice grants Hod its defining capability: on-the-fly output shaping. By adjusting the lattice harmonics mid-cast, a Hod mage can retune a spell routine's parameters without loading a separate program — widening a thermal lance's area at reduced intensity, or collapsing it into a penetrator beam at full focus. This real-time adaptability makes Hod mages tactically versatile, able to respond to target hardening or environmental constraints without cycling through their Device's spell library. Field commanders note that Hod is where mages stop being limited by their loadout and start being limited by their judgment.

The vulnerability is precision dependence. The refraction lattice requires exact harmonic alignment across all three laminations, and misalignment produces erratic output: spells that collapse prematurely, overshoot intended power, or detonate during formation. Environmental mana turbulence, Device desync, or physical shock to the reactor can knock the harmonics off-kilter, and a Hod mage fighting through misalignment burns 50-60% more mana per cast while risking spontaneous spell failure. The Bureau's qualification exam includes a live-fire harmonics stress test, and washout rate sits around 12%.`
    },
    netzach: {
        name: 'Netzach (Eternity)',
        cost: 40,
        freeBodyPerks: { primary: 2, secondary: 1 },
        freeBodyPerksByClass: {
            knight: ['speed', 'strength', 'dexterity'],
            bombardment: ['sense', 'intelligence', 'wisdom'],
            thaumaturge: ['intelligence', 'wisdom', 'sense']
        },
        freeDeviceGen: 1,
        description: `The Netzach-class reactor solves the endurance problem through a fourth lamination layer that incorporates mana recirculation channels, raising capacity to 6x baseline while recovering from full depletion in 90-120 seconds. The recirculation system captures up to sixty percent of waste heat and converts it back into usable reserves, effectively tripling combat endurance compared to Hod. A Netzach mage can sustain 5-6 concurrent effects and maintain high-output casting for 20-30 minutes of continuous engagement — long enough to prosecute a full operation from infiltration to extraction without hitting depletion thresholds that force disengagement.

Netzach represents the minimum rank for independent long-duration operations in Bureau doctrine. The recirculation channels enable simultaneous barrier maintenance, active offense, and Device processing overhead without the exponential depletion curve that plagues lower tiers. As an incidental benefit, recirculation reduces the mage's thermal and mana emission signature by 40-50%, making them substantially harder to detect through magical sensing at ranges beyond 200 meters — a stealth advantage that has saved more lives than most tactical mages realize. Tier 6 spells become sustainable at this rank, with 6-8 casts per cycle depending on complexity.

The failure mode is catastrophic. Under specific resonance conditions — typically hostile mana interference combined with reactor overstress — the recirculation flow can reverse direction, creating a positive feedback loop where waste energy amplifies instead of dissipating. The reactor enters thermal runaway within 3-5 seconds, and the only failsafe is an emergency dump valve that forcibly vents all four lamination channels. The resulting mana discharge is violent enough to render the mage unconscious, and recovery from a forced dump takes 6-8 hours. Bureau protocol requires Netzach mages to test their dump valve monthly.`
    },
    tiferet: {
        name: 'Tiferet (Beauty)',
        cost: 50,
        freeBodyPerks: { primary: 2, secondary: 1 },
        freeBodyPerksByClass: {
            knight: ['speed', 'strength', 'dexterity'],
            bombardment: ['sense', 'intelligence', 'wisdom'],
            thaumaturge: ['intelligence', 'wisdom', 'sense']
        },
        freeDeviceGen: 2,
        description: `The Tiferet-class reactor marks the median point of the Kabbalistic scale, where quantitative capacity increases give way to qualitative transformation. Its fifth lamination layer introduces harmonic synchronization across all layers, raising capacity to 10x baseline while reducing recovery time to 45-60 seconds from full depletion. The synchronization eliminates interlayer friction entirely, producing mana flow so consistent that spell output variance sits below 2% between castings. A Tiferet mage can maintain 6-7 concurrent effects and safely cast Tier 7 spells without bleed, with 10-12 Tier 3 casts per cycle or 4-5 at Tier 6.

The defining capability at Tiferet is passive mana gain. The harmonic synchronization optimizes ambient absorption to the point where environmental intake exceeds the reactor's baseline metabolic draw — a Tiferet mage walking through typical atmospheric mana density (0.8-1.2 units) slowly accumulates reserves rather than depleting them. Over a 24-hour period without active casting, a Tiferet reactor will charge from empty to 60-70% capacity purely from ambient exposure. This eliminates the logistical burden of mana rationing during extended deployments, and it means a Tiferet mage knocked unconscious in combat will wake 20-30 minutes later with partially restored reserves — a survival margin that has turned certain death into recoverable injury.

The vulnerability is Device dependency. The harmonic synchronization requires continuous calibration feedback from an Intelligent Device to maintain phase alignment across all five layers. Severing the Device link — whether through damage, jamming, or forcible disconnection — causes the reactor to desynchronize within 10-15 seconds, dropping output efficiency by 40-50% and reintroducing the friction losses that synchronization eliminates. A Tiferet mage fighting without Device support effectively regresses to Hod-level performance until reconnection restores harmonic lock.`
    },
    geburah: {
        name: 'Geburah (Severity)',
        cost: 60,
        freeBodyPerks: { primary: 3, secondary: 2 },
        freeBodyPerksByClass: {
            knight: ['speed', 'strength', 'dexterity'],
            bombardment: ['sense', 'intelligence', 'wisdom'],
            thaumaturge: ['intelligence', 'wisdom', 'sense']
        },
        freeDeviceGen: 2,
        description: `The Geburah-class reactor is the first tier optimized for offensive output above all else. Its sixth lamination layer incorporates a compression matrix that forces mana into a denser state before release, maintaining 15x baseline capacity with 30-45 second recovery from full depletion. The compression multiplies kinetic and magical impact by 2-3x without additional mana expenditure — a Tier 5 combat spell cast through Geburah hits with Tier 7-8 force through a Tiferet reactor. A Geburah mage can sustain 7-8 concurrent effects and deliver 12-15 Tier 3 casts per cycle, or 6-8 at Tier 6, but the real value lies in the rapid discharge capability: dumping 40-50% of total reserves in a single pulse to overwhelm defensive routines before they can adapt.

This compression capability makes Geburah mages the Bureau's primary strike asset. A single Geburah mage with appropriate Device configuration can breach fortifications that would require a full Tiferet-rank squad, and their effectiveness against hardened barriers scales proportionally — the compressed mana punches through defensive weaves by exploiting structural stress points rather than overwhelming them through volume. Tier 8 spells become accessible at this rank, though casting them induces significant mana bleed (20-25% waste) and thermal stress. Field doctrine trains Geburah mages for decisive assault: rapid approach, compressed strike, immediate disengagement.

The failure mode is self-inflicted degradation. The compression matrix generates extreme internal stress during operation — crystalline micro-fractures propagate through the lamination layers at rates 3-4x higher than any other reactor tier. Sustained high-compression casting accelerates this decay, and a Geburah mage who operates at full output for extended periods risks permanent reactor damage that drops maximum capacity by 10-15% per incident. The compression cannot be disabled; it is structural to the sixth lamination. Bureau doctrine explicitly limits Geburah deployment to high-value targets, reserving full compression for decisive moments rather than sustained assault.`
    },
    chesed: {
        name: 'Chesed (Mercy)',
        cost: 70,
        freeBodyPerks: { primary: 3, secondary: 2 },
        freeBodyPerksByClass: {
            knight: ['speed', 'strength', 'dexterity'],
            bombardment: ['sense', 'intelligence', 'wisdom'],
            thaumaturge: ['intelligence', 'wisdom', 'sense']
        },
        freeDeviceGen: 3,
        description: `The Chesed-class reactor inverts Geburah's compression technology through a seventh lamination layer that disperses mana into finer, more distributed states before release. Capacity remains at 15x baseline with 30-45 second recovery from full depletion, matching Geburah's reservoir scale but optimizing for penetration over impact. Dispersed mana infiltrates biological and magical structures with minimal kinetic disruption, making it ideal for restorative, protective, and purification routines that need structural-level effect without collateral damage. A Chesed mage can maintain 7-8 concurrent effects, with 12-15 Tier 3 casts per cycle focusing on support roles: barrier reinforcement, tissue regeneration, hostile enchantment dissolution, and mana transfer to allied units.

The defining capability at Chesed is mana sharing. The dispersion matrix enables reserve transfer to allied mages or Devices with less than 15% loss — a Chesed mage can restore a depleted teammate to 60-70% capacity by donating half their own reserves, a force-multiplication capability that makes them the linchpin of any squad-level operation. Dispersed healing routines operate by coaxing tissue into alignment rather than forcing regeneration, which reduces recovery time by 30-40% compared to conventional medical casting. Tier 7 support spells become sustainable at this rank, and the dispersion matrix enables barrier routines that flex and redirect incoming force rather than simply hardening against it.

The vulnerability is offensive impotence. The dispersion matrix offers zero enhancement to destructive casting — a Chesed mage's fireball delivers exactly baseline Tier output with none of Geburah's compression bonus. This asymmetry is intentional; the Bureau's design philosophy recognized that a reactor equally effective at destruction and preservation would create strategic indecision, and forced specialization produces more committed role execution. Chesed mages requiring offensive capability must rely on Device configuration, spell selection, and teammate coordination. The dispersion matrix cannot be bypassed or disabled; it affects all mana output regardless of spell type.`
    },
    binah: {
        name: 'Binah (Understanding)',
        cost: 80,
        freeBodyPerks: { primary: 4, secondary: 3 },
        freeBodyPerksByClass: {
            knight: ['speed', 'strength', 'dexterity'],
            bombardment: ['sense', 'intelligence', 'wisdom'],
            thaumaturge: ['intelligence', 'wisdom', 'sense']
        },
        freeDeviceGen: 3,
        description: `The Binah-class reactor raises total capacity to roughly 25x baseline and recovers from full depletion in 20-30 seconds, but its defining feature is not reservoir scale. Its eighth lamination layer is a bank of reactive crystalline circuits that observe and model mana flow in real time, analyzing the reactor's own output and the surrounding magical environment as it operates. A Binah mage sustains 9-10 concurrent spell effects and casts Tier 8 routines without bleed, with Tier 9 accessible at the cost of 15-20% waste. Where lower-tier mages sense mana as vague pressure or temperature, a Binah mage perceives its structure: the weave patterns of active routines, the resonance signatures of different mana types, and the micro-fluctuations that reveal whether a barrier is holding steady or about to fracture.

This analytical layer is Binah's unique capability. Rather than reacting to threats, a Binah mage reads an opponent's mana flow to predict which routine is being constructed before it finishes casting, identifies the weak points in a defensive weave by its stress distribution, and exploits timing windows lower ranks cannot perceive. Facing a Geburah-rank opponent, a Binah mage won't try to overpower the compression — they will sidestep the compressed pulse and strike during the reactor's refill cycle, a window that lasts fractions of a second. The same circuits let Binah mages reverse-engineer unfamiliar routines by observing their structure, which makes them the Bureau's primary intelligence asset for analyzing captured or hostile magical technology.

The vulnerability is twofold. The analytical layer draws processing capacity away from raw output, so a Binah mage will not out-cast a Geburah on sheer force; their edge is knowing exactly where and when to apply what they have. More acutely, the reactive circuits are sensitive to deliberate overload: a sufficiently chaotic mana signature fed into them — a saturation routine built specifically to flood the analytical layer — can induce perceptual whiteout lasting 5-10 seconds, during which the mage's structural sight fails and output efficiency drops by 30-40%. Veteran anti-mage units carry exactly this kind of countermeasure for Binah-rank targets.`
    },
    chokhmah: {
        name: 'Chokhmah (Wisdom)',
        cost: 90,
        freeBodyPerks: { primary: 5, secondary: 4 },
        freeBodyPerksByClass: {
            knight: ['speed', 'strength', 'dexterity'],
            bombardment: ['sense', 'intelligence', 'wisdom'],
            thaumaturge: ['intelligence', 'wisdom', 'sense']
        },
        freeDeviceGen: 4,
        description: `The Chokhmah-class reactor pushes total capacity to roughly 40x baseline with 15-20 second recovery from full depletion, but like Binah its significance is qualitative rather than a matter of reservoir size. Its ninth lamination layer is a dynamic reconfiguration matrix — a lattice that restructures its own crystalline geometry in response to the mage's intent, rewriting the reactor's operational parameters as it runs. A Chokhmah mage sustains 10-12 concurrent effects and casts Tier 9 routines reliably. Where Binah perceives how a spell routine is structured, Chokhmah restructures its own output to match, producing mana flows that adapt in real time to the demands of the moment.

This reconfiguration is Chokhmah's unique capability, and it enables something no lower tier can replicate: improvised spell construction. A Chokhmah mage modifies a known routine mid-cast — widening its area, shifting its element, retargeting it — by consciously reshaping the reactor's output geometry rather than loading a pre-programmed routine from the Device. The Device still handles the mathematical heavy lifting, but the mage supplies the structural blueprint through direct mana-shaping intuition instead of selecting from a fixed library. In practice a Chokhmah mage is never confined to a loadout; they adapt to threats that no pre-planned spell set anticipated.

The cost of this flexibility is cognitive load, and it is also the reactor's failure mode. Reshaping reactor geometry while maintaining situational awareness and making combat decisions demands mental discipline that borders on the inhuman, and the Bureau's Chokhmah qualification washes out more candidates than any other rank — not because the reactor is hard to operate, but because most mages cannot think fast enough to drive it. Worse, contradictory or panicked intent can force the reconfiguration lattice into an unstable geometry it cannot resolve: the matrix locks mid-restructure, output destabilizes, and the reactor requires a manual reset cycle of 30-40 seconds — an eternity in combat — before it will accept new commands. Chokhmah mages train relentlessly to hold a single clear intent, precisely because a divided mind can seize their own reactor.`
    },
    keter: {
        name: 'Keter (Crown)',
        cost: 100,
        freeBodyPerks: { primary: 6, secondary: 5 },
        freeBodyPerksByClass: {
            knight: ['speed', 'strength', 'dexterity'],
            bombardment: ['sense', 'intelligence', 'wisdom'],
            thaumaturge: ['intelligence', 'wisdom', 'sense']
        },
        freeDeviceGen: 5,
        description: `The Keter-class reactor is the practical ceiling of current mana-reactor engineering, holding roughly 70x baseline capacity and recovering from full depletion in 8-12 seconds — though in practice its ambient intake so exceeds its metabolic draw that it rarely nears depletion at all. Its tenth lamination layer is a self-organizing crystalline matrix that integrates all nine lower layers into a unified system able to run every mode — compression, dispersion, recirculation, analysis, reconfiguration — at once and without conflict. A Keter mage does not choose between offensive power and defensive finesse, or between endurance and insight; the reactor sustains them simultaneously, and concurrent effect count is bounded by mana throughput rather than reactor architecture, with fifteen or more stable effects routine. Tier 10 routines are theoretically within reach, though they sit at the edge of what any Device can safely construct.

In operation, a Keter reactor behaves less like a power source and more like an extension of the mage's will. The integration layer reads autonomic signals from the mage's nervous system through the Device link, pre-configuring output geometry before a conscious command is issued. Experienced Keter mages report that their reactors anticipate their intent — not through sentience, but through pattern recognition built on thousands of hours of shared casting history. The result is casting that feels reflexive: the mage forms an intention and the spell is already taking shape, with command-to-manifestation latency bounded only by mana-channel physics.

No Keter reactor has ever been manufactured. Every known unit emerged from a rank-up event — a poorly understood phenomenon in which a Chokhmah-class reactor under extreme operational stress spontaneously restructures its laminations into the Keter configuration. The conditions are not reproducible, and most candidates who attempt it simply destroy their reactor. That origin is also Keter's defining vulnerability: because the integration layer self-organizes around one specific nervous system rather than being engineered, it cannot be transplanted, repaired by Bureau technicians, or recalibrated if the mage-Device bond is severed — a Keter core that loses its mage is inert, and a Keter mage who loses the bond mid-operation cannot simply swap Devices. And because all ten layers are coupled into a single system, a sufficiently violent external mana shock can cascade across every mode at once, where a lower-rank reactor would isolate the fault to a single layer; full-system recovery from such a cascade is measured in days, with no field repair possible. Only one mage has verifiably reached this rank: Alicia Hindelburg, First Seat of the High Thaumaturgic Council — the first and only confirmed Keter core in recorded history.`
    },
};

// Intelligent Device Generations
const deviceGenerations = {
    1: {
        name: '1st Generation (Service Issue)',
        cost: 10,
        freeDevicePerks: { processing: 1, weave: 1, barrier: 0, structural: 0 },
        description: `1st Generation Devices are the entry tier of Bureau-licensed hardware, issued to newly registered mages who are still operating under their cover identities. Private Corporations fabricate them from the early principles the Numerals open-sourced, producing palm-sized units with a lightweight AGI tuned for a narrow, dependable repertoire: fast spell-routine lookup and clean mana weaving. That focus is why they ship with their processing and weave channels already calibrated but carry no defensive hardware of their own — a 1st Generation Device loads and casts a known routine quickly and with low mana bleed, yet it has no barrier matrix and no structural reinforcement, leaving protection and durability for the mage to build or for later hardware to provide.

What a 1st Generation Device lacks in defensive capability it makes up for in simplicity and robustness. The AGI is responsive within its lane — it confirms routines, flags obvious misfires, and preloads the handful of spells a mage uses most — but it does not model combat or offer tactical analysis. Memory and storage are limited, so a mage carries a curated routine set rather than a full library. The narrow feature set makes the device easy to maintain, hard to misuse, and well suited to the controlled, low-exposure assignments the Bureau hands to mages in their first years of registration.

Because they are cheap for Corporations to produce and leave no exotic materials to trace, 1st Generation Devices are the backbone of the Bureau's cover program: a registered mage can carry one through everyday life without it reading as anything stranger than an unusual gadget. Many experienced mages keep their first Device as a backup, valuing a tool that will cast reliably when a more sophisticated unit is jammed, desynced, or compromised.`
    },
    2: {
        name: '2nd Generation',
        cost: 20,
        freeDevicePerks: { processing: 1, weave: 1, barrier: 1, structural: 1 },
        description: `2nd Generation Devices are the first balanced platform. Where the 1st Generation leaves barrier and structural work entirely to the mage, the 2nd Generation ships with all four core channels — processing, weave, barrier, and structural — calibrated to an entry baseline. This is the generation at which a Device becomes self-sufficient in a fight, able to raise a basic barrier and repair its own casing without the mage dedicating routines to either. Corporations produce them in volume on the Numerals' published principles, and they are the standard issue for mages cleared for field work under cover.

The AGI is a clear step up: it keeps a working spell library rather than a curated handful, reviews a routine's performance after casting and suggests refinements, and synchronizes with Bureau routine databases so a mage's loadout can be updated without returning the hardware. The even spread across all four channels makes the 2nd Generation a generalist's tool — it does nothing exceptionally, but it has no blind spots, which is exactly what a mage wants when the assignment is unpredictable.

That balance is why the 2nd Generation remains the most widely carried hardware in the Bureau despite three newer generations existing. For the majority of registered mages, whose work is investigative or protective rather than front-line, a device with modest competence in every channel is more useful than one that excels in two and neglects the rest.`
    },
    3: {
        name: '3rd Generation',
        cost: 30,
        freeDevicePerks: { processing: 2, weave: 2, barrier: 1, structural: 1 },
        description: `3rd Generation Devices mark the shift to combat-grade hardware. Their processing and weave channels are calibrated a full tier above the generalist 2nd Generation, while barrier and structural stay at a serviceable baseline. The design philosophy is deliberate: a 3rd Generation mage casts faster and wastes far less mana than a 2nd Generation one, trading some built-in resilience for throughput. These are the devices the Bureau issues to mages whose assignments are expected to involve actual engagements rather than observation.

The AGI is substantially more capable — it learns a mage's usage patterns, optimizes mana allocation in real time, and runs an active sensor suite that detects and classifies magical phenomena in the environment, feeding tactical readouts mid-engagement. The heavier processing and weave calibration lets the device construct multi-layered routines and sustain concurrent effects that would stall a 2nd Generation unit.

3rd Generation hardware puts capabilities once reserved for specialist units into the hands of ordinary field mages: enforcement, rapid response, and investigative work that may turn hostile. Corporations fabricate them under tighter Bureau licensing than the lower generations — still on the Numerals' open principles, but with export controls — because a device this capable in the wrong hands is a liability the secrecy program cannot absorb.`
    },
    4: {
        name: '4th Generation',
        cost: 40,
        freeDevicePerks: { processing: 2, weave: 2, barrier: 2, structural: 2 },
        description: `4th Generation Devices raise every core channel — processing, weave, barrier, and structural — to the heavy-duty tier at once, making them the most capable hardware that Corporations are licensed to mass-fabricate. Where the 3rd Generation trades resilience for throughput, the 4th Generation refuses the trade: it casts and weaves at combat grade while also fielding a genuine barrier matrix and self-repairing structure. The result is a device with no deliberate weakness, suited to mages who cannot predict whether a given operation will demand offense, defense, or endurance.

The defining advance is the neural interface. A 4th Generation Device links directly to the mage's nervous system, collapsing the lag between intent and command so routines manifest as fast as the mage can form the thought. The AGI approaches independent reasoning — it can analyze a situation, plan a response, and run limited autonomous operation while the mage attends to something else — and its sensor array reads magical and conventional energy signatures alike for a comprehensive tactical picture.

The 4th Generation is the top of the line a registered mage can expect to be issued through normal channels, but it is not the ceiling. The 5th Generation sits above it; 5th Generation hardware is simply not something Corporations are permitted to build. For everyone outside the handful of mages cleared for Numerals-restricted equipment, a 4th Generation Device is as advanced as magitech gets.`
    },
    5: {
        name: '5th Generation (Cutting Edge)',
        cost: 50,
        freeDevicePerks: { processing: 3, weave: 3, barrier: 2, structural: 2 },
        description: `5th Generation Devices are the restricted apex of magitech, built only by the Numerals and the Bureau's own workshops and never licensed to the Corporations that fabricate every lower generation. Their processing and weave channels are calibrated a tier beyond anything mass production reaches, with barrier and structural held at heavy-duty baseline; the design concentrates its advantage in raw computation and efficiency, on the reasoning that a mage cleared for a 5th Generation Device can supply their own defensive doctrine. Processing supports routines of a complexity that would overload a 4th Generation unit, and weave quality pushes mana efficiency toward the limits current theory permits.

The breakthroughs are qualitative rather than incremental: deep neural integration that makes the Device feel like an extension of the mage's own cognition, quantum-entangled links for latency-free coordination, and self-evolving routine systems that refine their own spell constructions without direct instruction. The AGI reasons independently enough to solve novel problems and develop optimizations a mage never asked for, and its sensors read magical phenomena across multiple spectral bands at once.

Because they are hand-built, un-exportable, and tied to the Numerals' most closely held research, 5th Generation Devices exist in small numbers and are issued almost exclusively to Council seats, Arcaea Division specialists, and a few mages whose work justifies the exposure. A 5th Generation Device is less a product than a statement of trust: possessing one means the Bureau has decided the secrecy risk of putting its best hardware in your hands is worth whatever you are being asked to do.`
    }
};

// Classes
const classes = {
    knight: {
        name: 'Knight',
        description: `Knights are the Bureau's close-quarters specialists: mages who route their reactor output into their own bodies and their Device's bladed forms rather than into ranged spellwork. A Knight closes distance, reinforces flesh and bone past human tolerance, and settles engagements inside the reach where a Bombardment mage's artillery becomes a liability and a Thaumaturge's support cannot keep pace. The fighting style is physical and decisive — overwhelm the target before it can bring a prepared routine to bear.

Because a Knight's power is bodily, the class lives and dies by physical reinforcement, and this shapes how the reactor allocates its free attribute tiers. For a Knight, the reactor-granted free tiers lean toward speed, strength, and dexterity — the attributes that govern closing distance, striking force, and blade control — while the perception- and mana-oriented attributes receive the lower free allotment. These are not flat starting bonuses: the higher the mana reactor rank, the deeper those free tiers run, so a well-ranked Knight begins with a substantial physical baseline before spending a single point.

This makes the Knight the most forgiving class for a mage who prefers to read a fight through movement and timing rather than through spell-routine construction. It is also the most exposed: a Knight who cannot reach the target, or who is held at range by a disciplined opponent, loses the engagement. Knights win by dictating distance.`
    },
    bombardment: {
        name: 'Bombardment',
        description: `Bombardment mages are the Bureau's artillery: specialists in long-range spell-routine casting who break targets from a distance before those targets can answer. Where a Knight commits their body, a Bombardment mage commits their calculations, constructing wide-area and high-penetration routines that level structures and deny ground, launched from standoff range through a Device that typically takes the form of a staff or a cannon. Their doctrine is to engage first, from cover, and never let an opponent reach them.

Long-range precision is a problem of perception and cognition, not muscle, and the reactor's free attribute tiers reflect that. For a Bombardment mage, the reactor-granted free tiers lean toward sense, intelligence, and wisdom — the attributes that govern target acquisition at distance, the mental bandwidth to run complex multi-stage routines, and the mana-perception needed to place an effect precisely on a point they may never see directly. The physical attributes receive the lower free allotment, and all of these free tiers deepen only as the mana reactor rank raises every tier together.

The Bombardment mage is the hardest-hitting class on open ground and the most helpless in a corner. Stripped of distance — ambushed, flanked, or run down by a Knight — their advantages evaporate, and they lean on allies or barrier work to buy back the range their routines need. A Bombardment mage's skill is measured in positioning as much as in firepower.`
    },
    thaumaturge: {
        name: 'Thaumaturge',
        description: `Thaumaturges are the Bureau's support and systems specialists: mages who turn their reactor output outward onto allies, environments, and enemy equipment rather than into raw destruction. They buff and heal teammates, replenish depleted reserves, anchor defensive formations, and interfere with hostile Devices and routines. Their own Device often stays in its compact form or takes the shape of a grimoire — a reference and processing aid rather than a weapon.

Support and system manipulation reward insight and mana-literacy over physical force, and the reactor allocates a Thaumaturge's free attribute tiers accordingly. For a Thaumaturge, the reactor-granted free tiers lean toward intelligence, wisdom, and sense — the cognition to coordinate several simultaneous effects, the mana-perception to read an ally's reserves or an enemy routine's structure, and the sensory acuity to track a whole engagement at once. As with every class these are not fixed Tier-1 grants; the physical attributes take the lower allotment, and the free tiers run deeper as the mana reactor rank climbs.

A Thaumaturge rarely wins a fight alone, and is not meant to — their value is multiplicative. A squad with a capable Thaumaturge outlasts, out-coordinates, and recovers faster than one without, and a Thaumaturge who can dissolve an enemy's enchantments or crash a hostile Device can decide an engagement without landing a single offensive blow. The weakness is dependence: isolated and targeted first, a Thaumaturge has the thinnest personal offense of the three classes.`
    }
};

// Barrier Jacket Styles
const barrierJacketStyles = {
    ballroom: {
        name: 'Victorian Ballroom Gown',
        cost: 5,
        description: `The Ballroom manifestation renders the barrier jacket as a sweeping period gown — trailing skirts, layered underskirting, long gloves — but the silhouette is function, not fashion. The device extends the barrier's active surface into those trailing layers, giving the mage an unusually large interception area well suited to catching indirect fire, shrapnel, and area effects that a tight-fitting manifestation would let past. The trade is close-in agility: the diffuse shell sweeps and billows, covering ground rather than hugging the body.

Because the motif reads as elaborate costume to any unaware onlooker, it is favored for sanctioned Bureau functions and for covert work inside formal gatherings, where an active barrier jacket passes as theatrical dress. Mages who like to control space — holding a doorway, shielding bystanders behind them, covering a wide arc — gravitate to the Ballroom profile for the coverage its silhouette provides.`
    },
    military: {
        name: 'Military Uniform',
        cost: 5,
        description: `The Military manifestation projects the barrier jacket as a crisp dress uniform: hard shoulders, rigid lines, rank marking rendered in light. Its distinguishing feature is coordination. The manifestation broadcasts a clean identification-and-status signature that friendly devices read at a glance, which makes it the natural choice for squad operations where knowing exactly where every mage's barrier stands — and whose it is — matters as much as the protection itself. The rigid geometry also anchors formation work, giving neighboring barriers a stable edge to key off.

The disciplined signature that makes it excellent for coordinated units also makes it conspicuous to anyone scanning for mana activity, so it sees most use in overt, sanctioned deployments rather than covert ones. Mages who operate inside a chain of command, or who routinely fight shoulder to shoulder, value the Military profile for the shared situational picture it maintains.`
    },
    tactical: {
        name: 'Sleek Tactical Suit',
        cost: 5,
        description: `The Tactical manifestation strips the barrier jacket to its smallest viable profile — a close, matte skin with no trailing surfaces and nothing to snag. Everything the design saves on silhouette it spends on the mage: integrated sensor overlays, mana-management readouts, and a communications channel are woven directly into the manifestation and fed to the mage's perception in real time. The result is the most mobile of the standard styles, built for mages who resolve fights through movement and information rather than by holding ground.

With the lowest drag and the tightest fit, the Tactical profile keeps a mage fast and aware at the cost of the extended interception area that bulkier manifestations provide — it protects the body, not the space around it. It is the default for infiltration, pursuit, and any assignment where the mage expects to be moving the entire time.`
    },
    royal: {
        name: 'Royal Court Dress',
        cost: 5,
        description: `The Royal manifestation renders the jacket as heavy court regalia — a long mantle, a high collar, a projected circlet of light — and leans deliberately into presence. The device tunes the manifestation's mana emission into a palpable pressure that unaugmented people register as instinctive deference and that lesser mages feel as a weight in the air. Paired with a reinforced frontal arc, this makes the Royal profile a tool of deterrence and crowd control: many confrontations end because the opponent decides not to start one.

That same imposing output is slow to raise and impossible to hide, so the Royal profile belongs to sanctioned, high-visibility work — standoffs, protective details, moments when the Bureau wants a mage to be unmistakably in command. Mages who prefer to win by dominating the tempo of an encounter before blows are exchanged gravitate to it.`
    },
    scholar: {
        name: "Scholar's Robes",
        cost: 5,
        description: `The Scholar manifestation forms a layered robe inscribed with slowly rotating routine-glyphs, and its purpose is analytical rather than martial. The inscribed surfaces act as an extension of the device's processing lattice, accelerating spell-routine construction, the dissection of observed enemy routines, and clean mana weaving. A mage running support or utility casting through a Scholar jacket builds and adjusts complex routines faster than they could through a bare device, trading some of the reactive hardening that combat-focused styles emphasize.

The robe motif passes as academic or ceremonial dress in the handful of settings where the Bureau stages mages as researchers, which suits its typical user: the analyst, the formation-designer, the mage whose contribution to a fight is the quality of the routines they weave rather than the force they absorb.`
    },
    aristocratic: {
        name: 'Aristocratic Evening Wear',
        cost: 5,
        description: `The Aristocratic manifestation is defined by what it hides. Rendered as understated, impeccably cut evening wear, it is tuned above all for a low signature — the device suppresses the manifestation's mana emission and thermal bleed so that an active barrier jacket reads, to magical sensing, as little more than ambient noise. Core protection is comparable to the other styles; the difference is that an opponent may not realize the mage is shielded at all until an attack fails to land.

This makes the Aristocratic profile the quiet counterpart to the Royal one: where Royal announces, Aristocratic conceals. It is the preferred manifestation for covert work that must stay covert even against other mages — surveillance, protective shadowing, and infiltration where the first advantage is simply not being read as a threat.`
    },
    combat: {
        name: 'Combat-Ready Ensemble',
        cost: 5,
        description: `The Combat manifestation drops every aesthetic consideration in favor of a plain, heavy, impact-hardened shell. Its signature trait is reactive hardening: the barrier concentrates density at the exact point of contact in the instant before an impact lands, so struck areas stiffen while unstressed areas stay light. For a mage trading blows at close and mid range, this delivers more effective punishment-absorption per unit of mana than the evenly distributed styles, at the cost of the extended coverage and secondary features those styles carry.

There is nothing covert about it — the manifestation is obviously armor — so it is reserved for engagements the Bureau has already decided will be fought in the open. It is the straightforward choice for mages who expect to be hit, repeatedly, and simply intend to still be standing afterward.`
    },
    ceremonial: {
        name: 'Mystical Ceremonial Attire',
        cost: 5,
        description: `The Ceremonial manifestation takes the form of flowing ritual vestments threaded with sustained sigil-work, and it is built for endurance rather than burst. Its structure stabilizes long, continuously channeled routines and multi-mage formations, damping the fluctuations that cause sustained spells to drift or collapse. A mage anchoring a ward network, holding a protracted barrier, or coordinating a group ritual through a Ceremonial jacket can maintain the effect far longer and more steadily than through a combat-tuned manifestation.

The vestment motif is at home in the sanctioned ritual and formation work the Bureau conducts away from public view, and it is less suited to a fast, shifting firefight, where its emphasis on steady output over rapid reconfiguration becomes a liability. Formation anchors and long-duration specialists favor it.`
    },
    street: {
        name: 'Modern Street Style',
        cost: 5,
        description: `The Street manifestation renders as unremarkable contemporary clothing, and its whole design philosophy is speed and inconspicuousness. It raises and dismisses faster than any other style, and its signature is deliberately shaped to blend into the dense mana clutter of an urban environment, so a mage can flicker a barrier up for a single exchange and drop it before anyone cross-references the spike. Protection is on par with the other styles; what it sacrifices is extended coverage and integrated extras in exchange for the lowest possible profile.

It is the everyday manifestation of the cover program — the one a registered mage can trigger on a crowded street without a single bystander, or sensor, flagging anything unusual. Mages who live their cover identities full time, moving through ordinary city life, rely on the Street profile precisely because it refuses to look like magic.`
    },
    traditional: {
        name: 'Ancient Traditional Garb',
        cost: 5,
        description: `The Traditional manifestation draws on the heavy garb of older cultures — layered wraps, weighty mantles, worked fittings — and tunes itself to coarser, more elemental mana patterns than the modern styles assume. In practice this makes it unusually robust against environmental extremes: the manifestation seals and insulates, holding up where cold, heat, pressure, or hostile ambient mana would degrade a sleeker jacket. A mage operating far from support, contending with conditions as much as with opponents, gets a barrier that treats the environment itself as one of the threats.

The resonance it favors is older and slower to retune, so it is less responsive to rapid shifts than the Combat and Tactical styles, but it endures. It suits expeditionary and remote work, and mages drawn to the deliberate, grounded character of the older magical traditions adopt it as much for that character as for its hardiness.`
    }
};

// Body Perks Tiers (Descriptions for each tier of each perk)
const bodyPerkTiers = {
    speed: [
        "Tier 0: Baseline human speed without magical enhancement. <em>You move and react at normal human levels, perhaps capable of running a 100-meter dash in 12-15 seconds depending on your natural fitness.</em>",
        "Tier 1: Slight magical enhancement provides 10% improvement to movement speed and reflexes. <em>Example: You can now consistently dodge thrown objects, catch items knocked off tables before they hit the ground, and your sprint speed approaches that of a trained athlete even without extensive physical training.</em>",
        "Tier 2: Moderate enhancement grants 25% improvement. <em>Example: You can outrun most untrained opponents with ease, react fast enough to deflect slow-moving projectiles with your weapon, and perceive individual frames in fast-moving video footage. In combat, you notice attacks early enough to begin defensive maneuvers before they fully develop.</em>",
        "Tier 3: Significant enhancement provides 50% improvement. <em>Example: You move fast enough that untrained observers struggle to track your movements during combat. You can dodge gunfire from inexperienced shooters by reading their aim and moving before they fire. Your reaction time allows you to catch arrows shot from moderate distances.</em>",
        "Tier 4: Substantial enhancement grants 75% improvement. <em>Example: You can sprint at speeds approaching highway traffic (30-40 mph), your reflexes allow you to parry individual bullets with a blade if you see the shooter, and your perception of time subtly slows during intense focus, giving you what feels like extra seconds to react.</em>",
        "Tier 5: Major enhancement doubles your baseline speed. <em>Example: You become a blur to normal human perception during full-speed movement. You can run across water for short distances before surface tension breaks, wall-run for several steps, and your combat style becomes nearly impossible for unenhanced opponents to counter as you strike from multiple angles before they complete a single defensive motion.</em>",
        "Tier 6: Exceptional enhancement triples your speed. <em>Example: You can outrun vehicles on city streets, your movements create visible displacement of air, and you can literally run circles around groups of normal opponents, striking each one multiple times before any of them realize you've moved. Time seems to crawl from your accelerated perspective during combat.</em>",
"Tier 7: Extraordinary enhancement quintuples your speed. <em>Example: You can sprint fast enough to shatter windows from the shockwave, leaving afterimages that linger for a fraction of a second. Your perception accelerates to track individual bullets in flight, and you can dodge sustained automatic fire from a single shooter with room to spare. In combat, unenhanced opponents see only a blur between positions—you are effectively untouchable by conventional soldiers.</em>",
    "Tier 8: Tremendous enhancement increases speed ten-fold. <em>Example: You move fast enough to cross open water at a dead sprint for as long as you keep your pace up, race up the sheer face of a building on momentum alone, and your combat speed exceeds what standard targeting systems can lock onto. You can engage multiple opponents in the time it takes one to complete a single defensive motion, and your afterimages are convincing enough to draw attacks. Dodging individual bullets is reliable; only fully automatic sustained fire from multiple angles can pin you down.</em>",
    "Tier 9: Overwhelming enhancement provides twenty-fold improvement. <em>Example: Your full-speed dashes appear as short-range teleportation to observers—you cross a hundred meters before most mages can begin casting. You can intercept attacks mid-flight, striking projectiles out of the air or redirecting them. Your reaction speed allows you to fight multiple enhanced opponents simultaneously, each one feeling like they have your undivided attention. Only mages with Tier 5+ speed enhancements can track your movements without device assistance.</em>",
    "Tier 10: Ultimate speed enhancement approaches the practical ceiling of enhanced human movement. <em>Example: You close any visible distance before most opponents complete a defensive action, and your sustained combat speed is limited primarily by your device's processing throughput rather than your muscles. You can maintain enhanced-speed combat for extended engagements without fatigue buildup, and your afterimages can serve as momentary tactical diversions. You represent the practical ceiling of device-augmented personal mobility—fast enough to dominate any personal-scale engagement, but not so fast that you outrun the physics of air resistance and surface interaction. Further investment beyond this tier yields diminishing returns.</em>"
    ],
    strength: [
        "Tier 0: Baseline human strength without magical enhancement. <em>You can lift and carry objects appropriate to your natural physical conditioning, typically managing 50-100 pounds comfortably and perhaps deadlifting 1-2 times your body weight with effort.</em>",
        "Tier 1: Slight enhancement provides 10% improvement to physical strength. <em>Example: You can comfortably carry heavy backpacks (60-70 lbs) for extended periods, break wooden boards with strikes, and your punches hit noticeably harder than before, capable of cracking ribs through body armor with solid contact.</em>",
        "Tier 2: Moderate enhancement grants 25% improvement. <em>Example: You can deadlift 400-500 pounds depending on body weight, bend iron bars with effort, punch through wooden doors, and your strikes can dent steel plating. In combat, your attacks send unenhanced opponents flying several feet from the impact force.</em>",
        "Tier 3: Significant enhancement provides 50% improvement. <em>Example: You can flip cars with effort, punch through brick walls, carry motorcycle engines single-handedly, and your strikes shatter bones even through protective gear. You could arm-wrestle a bear and have a reasonable chance of winning.</em>",
        "Tier 4: Substantial enhancement grants 75% improvement. <em>Example: You can deadlift small vehicles (2,000+ lbs), tear car doors off their hinges, and your combat strikes can crater concrete. Your grip strength can crush steel pipes, and you could restrain an angry gorilla through sheer power. Throwing a baseball would send it through cinder block walls.</em>",
        "Tier 5: Major enhancement doubles your baseline strength. <em>Example: You can overturn armored vehicles, punch through reinforced steel, and carry motorcycles over your head for extended periods. Your strikes generate shockwaves that knock over nearby objects, and a full-power punch could collapse a residential wall. You're strong enough to perform construction or demolition work single-handedly.</em>",
        "Tier 6: Exceptional enhancement triples your strength. <em>Example: You can throw cars like baseball throws, deadlift 20+ tons, and your combat strikes punch through tank armor. You could manually dig tunnels through rock using just your hands, tear apart steel I-beams like pulling apart rope, and your grip could crush diamonds.</em>",
"Tier 7: Extraordinary enhancement quintuples your strength. <em>Example: You can hurl a car the length of a city block, deadlift in the 30-40 ton range, and your strikes punch clean through tank armor rather than merely denting it. A full-power blow shatters a load-bearing concrete pillar outright, and you can tear a steel blast door off its frame or hold a collapsing structure's weight long enough for others to clear. In combat, your blows land with the force of a demolition charge, and few conventional barriers survive direct contact.</em>",
    "Tier 8: Tremendous enhancement increases strength ten-fold. <em>Example: You can throw vehicles like softball pitches, deadlift roughly 60-80 tons, and your sustained strikes can bring down a reinforced building over the course of a fight. A casual backhand sends a person tumbling across a room. You can manually dig through earthen walls, crush steel I-beams in your grip, and your shockwave-generating punches become a reliable area-denial tool. Your raw output approaches the limit of what a human frame—reinforced by magic—can channel without self-injury.</em>",
    "Tier 9: Overwhelming enhancement provides twenty-fold improvement. <em>Example: You can tear through reinforced bunker walls with sustained effort, move well over a hundred tons in a two-handed lift and throw heavy vehicles one-handed, and your strikes generate shockwaves that shatter windows across a block. A focused barrage can collapse a large structure—given time and a clear angle. Your grip can crush military-grade composites, and you can hold your ground against forces that would send lesser mages flying. You represent a mobile demolition force, bounded by the time and leverage needed to apply your strength to large targets.</em>",
    "Tier 10: Ultimate strength pushes the practical ceiling of personal-scale force multiplication. <em>Example: You can lift and throw objects weighing hundreds of tons, your strikes can destabilize multi-story structures through transferred force, and your grip crushes anything short of high-tier magically reinforced materials. Shockwaves from your full-power blows are a tactical weapon in their own right. You represent the practical ceiling of device-augmented physical strength—powerful enough to demolish any personal-scale obstacle or opponent, but not so strong that you level city blocks with a punch. Further investment beyond this tier yields diminishing returns as device processing and mana-channel capacity become the binding constraints.</em>"
    ],
    sense: [
        "Tier 0: Baseline human sensory capabilities. <em>You perceive the world through normal human senses—reading standard text clearly, hearing conversations in quiet rooms, distinguishing common scents and flavors, feeling obvious textures and temperatures.</em>",
        "Tier 1: Slight sensory enhancement providing 10% improvement. <em>Example: You can read smaller text without squinting, hear whispered conversations from across a room, detect subtle scents others miss (like gas leaks before they become obvious), and feel the grain patterns in wood through touch. You notice when people are approaching before they appear.</em>",
        "Tier 2: Moderate enhancement grants 25% improvement. <em>Example: You can read license plates from 100+ yards away, hear distinct conversations through thin walls, identify specific ingredients in complex dishes by taste, and detect temperature differences of a few degrees by touch. You can see well enough in moonlight to navigate without artificial light.</em>",
        "Tier 3: Significant enhancement provides 50% improvement. <em>Example: You can read street signs from quarter-mile distances, hear heartbeats of people standing near you, track animals by scent like a bloodhound, and feel air currents with enough precision to sense when someone moves nearby. Your night vision rivals that of nocturnal predators.</em>",
        "Tier 4: Substantial enhancement grants 75% improvement. <em>Example: You can read newspapers from across football fields, hear conversations through concrete walls, detect individual chemical components in the air by smell, and sense vibrations through your feet well enough to detect approaching vehicles blocks away. You can see infrared heat signatures with concentration.</em>",
        "Tier 5: Major enhancement doubles your senses. <em>Example: You perceive individual raindrops in a storm, hear cell phone conversations from blocks away, identify people by their unique scent from rooms they left hours ago, and sense electrical fields around active devices. You can see ultraviolet spectrum patterns invisible to normal humans.</em>",
        "Tier 6: Exceptional enhancement triples your senses. <em>Example: You can count individual blades of grass in a distant lawn, hear someone's pulse rate and detect lies from subtle changes, smell emotional states through pheromone changes, and feel air pressure changes that predict weather hours in advance. You perceive electromagnetic fields and radio waves as tangible sensations.</em>",
"Tier 7: Extraordinary enhancement quintuples your senses. <em>Example: You can read fine print across a stadium, pick a single voice out of a crowd through layered walls and background noise, and identify chemical compounds by scent alone. Your night vision needs no ambient light at all—you navigate pitch-darkness as easily as daylight—and you perceive well into the infrared and ultraviolet bands, reading residual heat left on a surface someone touched minutes ago. Vibration through your feet gives you the position and movement of anyone inside a building before they come into view.</em>",
    "Tier 8: Tremendous enhancement increases senses ten-fold. <em>Example: Your senses fuse into a continuous spatial picture that extends well past line of sight. You resolve detail at distances that would otherwise require a telescope, hear a whispered conversation across a city block and filter it from the surrounding noise, and read the full electromagnetic environment—active devices, power lines, transmissions—as plainly as light and sound. Minute cues such as air-pressure shifts, thermal gradients, and ground vibration map the layout of a space and the position of everyone in it, which makes a physical ambush against you extremely difficult.</em>",
    "Tier 9: Overwhelming enhancement provides twenty-fold improvement. <em>Example: Your physical perception operates at an almost instrument-grade level across wide ranges. You track a specific individual by scent through a crowded city, resolve a face or a license plate at distances measured in kilometers under clear conditions, and separate dozens of simultaneous conversations by voice. You read the electromagnetic emissions of active equipment well enough to tell what a device is doing, and tactile and thermal sensitivity let you assess a person's pulse, temperature, and physical state from across a room. Your device fuses all of this into a single live model of your surroundings.</em>",
    "Tier 10: Ultimate sensory enhancement approaches the practical ceiling of device-mediated perception. <em>Example: You maintain a continuous, fused awareness of your entire physical environment across the full span your device can process—optical, acoustic, olfactory, thermal, electromagnetic, and vibrational input integrated into one seamless picture with few blind spots. You detect concealed threats by the heat, sound, or air displacement they cannot suppress, track many targets at once, and resolve detail at ranges limited only by atmosphere and line of sight. Further investment beyond this tier yields diminishing returns, as your perception is bounded by your device's sensory-processing throughput and mana-channel bandwidth rather than the acuity of your augmented senses. Perception of mana itself, spell structure, and magical intent belongs to Wisdom rather than Sense.</em>"
    ],
    dexterity: [
        "Tier 0: Baseline human dexterity and coordination. <em>You can perform everyday tasks like tying shoes, writing, using utensils, and maintaining balance on flat surfaces without difficulty.</em>",
        "Tier 1: Slight enhancement providing 10% improvement to fine motor control. <em>Example: Your handwriting becomes noticeably neater, you can thread needles without effort, perform card tricks with practice, and maintain balance on narrow ledges (6+ inches wide). You rarely drop things accidentally and can catch objects tossed to you more reliably.</em>",
        "Tier 2: Moderate enhancement grants 25% improvement. <em>Example: You can pick locks with basic tools given time, perform sleight-of-hand convincingly, walk across 2-inch wide beams confidently, and type 100+ WPM with minimal errors. Your knife skills in the kitchen approach professional chef level, and you can juggle three objects indefinitely.</em>",
        "Tier 3: Significant enhancement provides 50% improvement. <em>Example: You can perform precision work requiring steady hands (like microsurgery or watchmaking), walk across tightropes, execute complex gymnastics routines, and catch arrows from the air with practice. Your hand-eye coordination allows you to hit moving targets with thrown weapons reliably.</em>",
        "Tier 4: Substantial enhancement grants 75% improvement. <em>Example: You can perform acrobatic feats that defy normal human ability\u2014running along clotheslines, catching bullets (with proper tools), performing mid-air flips with precise rotation control, and walking on icy surfaces without slipping. You could defuse bombs manually or perform surgery while the patient is in a moving vehicle.</em>",
        "Tier 5: Major enhancement doubles your dexterity. <em>Example: You can walk across single wires, dodge attacks while performing backflips, juggle a dozen objects in complex patterns, and perform precision tasks that seem superhuman\u2014like removing individual grains of sand from a pile without disturbing others. Your balance is refined enough that you could stand on a basketball while someone rolls it.</em>",
        "Tier 6: Exceptional enhancement triples your dexterity. <em>Example: You can walk on water briefly by distributing weight precisely across surface tension, dodge automatic weapon fire by reading bullet trajectories, perform gymnastics that would make Olympic athletes seem clumsy, and manipulate objects with toes as precisely as most people use fingers. You could walk across a taut thread while juggling knives.</em>",
        "Tier 7: Extraordinary enhancement quintuples your dexterity. <em>Example: You can walk across a taut wire in a windstorm, deflect thrown knives out of the air with a blade, and perform acrobatic sequences that would make Olympic gymnasts stare. Your fine motor control allows you to disassemble and reassemble a mechanical watch in under a minute, pick locks by touch, and execute surgical procedures under combat conditions. Your balance is superhuman—any surface that can bear your weight is stable ground.</em>",
        "Tier 8: Tremendous enhancement increases dexterity ten-fold. <em>Example: You can deflect individual bullets with a blade by reading firing patterns and positioning your weapon in their path—predictive parrying rather than raw reaction. You can run across narrow surfaces—pipes, railings, fence lines—at full speed without breaking stride. Precision tasks that normally require tools can be performed freehand: shaping metal by bending it with perfectly applied force, threading a needle on the first try while sprinting. Your movements flow with an economy of motion that makes every action look effortless.</em>",
        "Tier 9: Overwhelming enhancement provides twenty-fold improvement. <em>Example: You can parry automatic weapons fire with a melee weapon through a combination of pattern prediction and blade positioning, maintain unshakable equilibrium during acrobatics that would disorient any unaugmented human, and perform precision actions—defusing explosives, surgical procedures, lock manipulation—at combat speed without error. You can fight effectively in zero-visibility conditions, relying on tactile feedback and spatial memory to track your surroundings and opponents. Your body simply does what you intend, every time.</em>",
        "Tier 10: Ultimate dexterity enhancement approaches the practical ceiling of physical coordination. <em>Example: Your body responds to intent with near-zero effective latency for combat purposes—thought and action are effectively simultaneous. You can perform precision tasks at the limits of what your device's motor-control augmentation allows, dodge supersonic projectiles through predictive movement reading and pre-positioning, and maintain assured balance on any surface that can physically support you. Further investment beyond this tier yields diminishing returns as your coordination approaches the theoretical maximum of what device-augmented humanoid motor systems can achieve.</em>"
    ],
    intelligence: [
        "Tier 0: Baseline human intelligence. <em>You learn and think at normal human speeds, might master a new skill in months to years of practice, and remember important information with typical human recall (sometimes forgetting names, dates, or details).</em>",
        "Tier 1: Slight enhancement providing 10% improved cognition. <em>Example: You can learn new skills noticeably faster than before—picking up new languages with a few months of dedicated study, remembering most of what you read the first time, and solving puzzles more quickly. You rarely forget important appointments or names after being introduced.</em>",
        "Tier 2: Moderate enhancement grants 25% improvement. <em>Example: You can read and comprehend college textbooks at twice normal speed with full retention, learn new languages in weeks rather than months, solve complex math problems mentally that others need calculators for, and remember specific details from conversations weeks ago. You could get a PhD in 2-3 years.</em>",
        "Tier 3: Significant enhancement provides 50% improvement. <em>Example: You can speed-read entire books in an hour with complete comprehension, master new skills in days rather than months, devise complex strategies considering dozens of variables simultaneously, and recall specific dates, names, and details from years past. You could become an expert in a new field within months.</em>",
        "Tier 4: Substantial enhancement grants 75% improvement. <em>Example: You can read entire libraries in weeks, learn new languages in days, perform complex calculations faster than computers for certain problems, and possess near-photographic memory. You grasp advanced physics concepts that take normal humans years to understand within hours. You could master multiple doctorates simultaneously.</em>",
        "Tier 5: Major enhancement doubles intelligence. <em>Example: You absorb and integrate information at superhuman speed—reading a dense textbook in an evening and retaining it, reaching conversational fluency in a new language within days, and spotting patterns in noisy data that others miss entirely. Your memory is photographic for anything you focus on, and with a few weeks of study you can reach the working frontier of an unfamiliar field and begin making original contributions.</em>",
        "Tier 6: Exceptional enhancement triples intelligence. <em>Example: You process information like a supercomputer, analyzing millions of data points at once and predicting outcomes with uncanny accuracy. About a week of study brings you to professional competence in an unfamiliar field, and you can make sense of unfamiliar technologies or magic systems after only brief observation. Your recall is near-total for everything you consciously attend to.</em>",
        "Tier 7: Extraordinary enhancement quintuples intelligence. <em>Example: You process tactical situations with the speed and depth of a seasoned command staff, holding every relevant variable in view at once. A few days of focused study brings you to professional competence in a new field. Your recall is total for everything you consciously attend to, and your device maintains a cross-referenced knowledge base that surfaces connections across disciplines a normal human could never see.</em>",
        "Tier 8: Tremendous enhancement increases intelligence ten-fold. <em>Example: You can coordinate several simultaneous operations in your head—tracking a firefight, planning a spell sequence, and analyzing an opponent's weaknesses at the same time. You synthesize unrelated fields into novel insight, reverse-engineer unfamiliar magical systems given enough observation, and predict opponent behavior with high accuracy. Working competence in a new discipline takes a day or two, your recall now extends to peripheral detail you never consciously noted, and your analytical capability exceeds what any unaugmented human—no matter how brilliant—could achieve.</em>",
        "Tier 9: Overwhelming enhancement provides twenty-fold improvement. <em>Example: Your cognition handles thousands of variables at once, running complex probability assessments and tactical evaluations in real time. You reverse-engineer foreign magical systems from study samples, find structure in chaotic data sets that defeats conventional analysis, and grasp an entirely new field in a matter of hours. Your recall is complete for everything you have personally experienced or studied, attended or not—your mind operates as a strategic asset, and you see the shape of conflicts and problems before others have finished framing them.</em>",
        "Tier 10: Ultimate intelligence approaches the practical ceiling of cognition enhancement. <em>Example: You comprehend and integrate complex systems across many disciplines at once. You model the outcomes of large-scale events through exhaustive probability analysis, and you assimilate a new field about as fast as the source material can be put in front of you. Your memory holds everything with complete fidelity across your entire lifespan, and you could make significant contributions to several sciences in parallel. Further investment beyond this tier yields diminishing returns as your cognitive enhancement approaches the theoretical maximum of what mana-channel-mediated neural augmentation can achieve.</em>"
    ],
    wisdom: [
        "Tier 0: Baseline human intuition and mana sensitivity. <em>You have normal gut feelings and hunches, may sense when something feels 'off' in situations, and can detect obvious magical phenomena when they occur nearby.</em>",
        "Tier 1: Slight enhancement providing 10% improvement. <em>Example: Your intuition becomes more reliable—you can often sense when people are lying, feel magical energy as a tingling sensation, predict obvious outcomes before they occur, and generally trust your gut feelings more. You can detect active spell routines within a few meters.</em>",
        "Tier 2: Moderate enhancement grants 25% improvement. <em>Example: You can sense magical energy concentrations like heat sources, reliably detect deception in most people, have accurate hunches about immediate danger, and feel when you're being watched. You can perceive the general 'flavor' of magical effects and identify spell types (offensive, defensive, support) within your sensory range.</em>",
        "Tier 3: Significant enhancement provides 50% improvement. <em>Example: You can see magical energy as visible auras, sense hostile intent before aggression manifests, predict likely outcomes of decisions with uncanny accuracy, and feel emotional states of nearby people. You can identify specific spell routines by their Mana signatures and detect magical traps or wards.</em>",
        "Tier 4: Substantial enhancement grants 75% improvement. <em>Example: You perceive magical energy as clearly as visible light, sense danger seconds before it manifests, read surface emotions and intentions from people, and your hunches are right far more often than chance allows. You can track magical signatures like footprints and sense the presence of mages by their Mana Reactors.</em>",
        "Tier 5: Major enhancement doubles wisdom. <em>Example: You perceive the flow of mana through your environment like currents in water—strong concentrations, active spell routines, and ambient energy patterns are vivid and clear. You can sense danger moments before it manifests as a sharp intuitive warning, and your gut feelings about people and situations are remarkably reliable. You can analyze spell routines at a glance and detect when major magical events occur anywhere in your immediate vicinity.</em>",
        "Tier 6: Exceptional enhancement triples wisdom. <em>Example: You perceive mana as a tangible environmental force—its density, flow patterns, and fluctuations register like weather changes. You can sense hostile intent as a distinct pressure, see through magical illusions by detecting the mana scaffolding that sustains them, and detect invisible entities by their mana signature. Your hunches about immediate events are reliable enough to act on without confirmation, and you can identify the type and approximate strength of magical phenomena at significant range.</em>",
        "Tier 7: Extraordinary enhancement quintuples wisdom. <em>Example: Your magical intuition operates with remarkable clarity—you can sense the purpose and structure of spell routines by observing their mana flow, detect magical disturbances across a wide area, and perceive the mana signatures of living beings as distinct as fingerprints. You can identify illusions, enchantments, and magical traps by the faint mana irregularities they produce, and your sense for danger gives you enough advance warning to react before threats fully materialize.</em>",
        "Tier 8: Tremendous enhancement increases wisdom ten-fold. <em>Example: Your intuition operates as a reliable predictive model—you sense the likely outcomes of magical interactions before they resolve, detect subtle manipulations in mana flow that indicate hidden spells or traps, and your awareness of magical phenomena extends across wide operational ranges. You can read the intent woven into spell routines—whether a spell is designed to harm, heal, or deceive—by feeling its mana structure. Your understanding of magical dynamics is deep enough to anticipate what an opponent's spell will do before it finishes casting.</em>",
        "Tier 9: Overwhelming enhancement provides twenty-fold improvement. <em>Example: You perceive magical phenomena with extraordinary fidelity—mana signatures, spell structures, dimensional fluctuations, and magical interactions are all clearly readable across your operational range. Your intuition about magical events is reliable enough to serve as a primary tactical sense, and you can detect complex magical systems—ward networks, ritual formations, enchantment architecture—by the patterns they create in ambient mana flow. Your awareness extends far enough that magical surprises are extremely rare.</em>",
        "Tier 10: Ultimate wisdom approaches the practical ceiling of intuition enhancement. <em>Example: You understand the fundamental principles of magic, mana dynamics, and spell-routine interactions at a depth that allows you to intuit novel applications from first principles. Your intuition operates as a reliable predictive model—you know the probable outcomes of complex magical interactions before they occur. You perceive all magical phenomena across your operational range simultaneously, understand the motivations and intent woven into spell routines, and can sense when major magical disruptions are about to cascade. Further investment beyond this tier yields diminishing returns as your intuition enhancement approaches the theoretical maximum of what mana-channel-mediated perception can achieve.</em>"
    ]
};

// Device Materials
const deviceMaterials = {
    basic: {
        name: 'Basic Materials',
        cost: 10,
        description: `Basic Materials represent the foundational materials used in Intelligent Device construction, featuring standard metals, crystals, and conductive materials that provide reliable functionality at an affordable cost. These materials offer adequate mana conductivity and structural integrity for basic spell routine operations, making them suitable for civilian and entry-level devices. The components are durable enough for everyday use but may show wear over time with heavy magical applications.

The primary advantage of Basic Materials is their accessibility and cost-effectiveness, allowing Intelligent Devices to be produced and maintained without significant financial investment. These materials are well-understood and easy to work with, making repairs and modifications straightforward for technicians with basic training. The mana conductivity is sufficient for most routine magical operations, though it may limit the complexity and power of spell routines that can be efficiently executed.

Basic Materials are ideal for mages who need reliable, functional devices without requiring advanced capabilities or exceptional performance. These materials provide a solid foundation for magical practice and can be upgraded later as the mage's needs and skills develop. Many experienced mages appreciate the simplicity and reliability of Basic Materials, especially for backup devices or situations where advanced capabilities aren't necessary.`
    },
    advanced: {
        name: 'Advanced Materials',
        cost: 20,
        description: `Advanced Materials represent a significant improvement over basic components, featuring refined metals, enhanced crystals, and superior conductive materials that provide improved mana conductivity and structural integrity. These materials offer better performance for intermediate spell routine operations, making them suitable for professional and military-grade devices. The components are more durable than basic materials and can withstand heavier magical applications without significant degradation.

The primary advantage of Advanced Materials is their enhanced performance and durability, allowing Intelligent Devices to handle more complex and powerful spell routines with greater efficiency. These materials have better mana conductivity, reducing energy loss during spell execution and improving overall device responsiveness. The structural integrity is superior, allowing devices to maintain performance under stress and extending their operational lifespan compared to basic materials.

Advanced Materials are ideal for mages who need reliable performance for professional or combat applications without the extreme cost of the most exotic materials. These materials provide a good balance of performance, durability, and cost, making them popular choices for serious magical practitioners. The enhanced capabilities allow for more sophisticated spell routines and better mana efficiency, giving mages a tangible advantage in magical operations.`
    },
    rare: {
        name: 'Rare Materials',
        cost: 30,
        description: `Rare Materials represent exceptional components that are difficult to obtain and process, featuring exotic metals, precious crystals, and unique conductive materials that provide superior mana conductivity and exceptional structural integrity. These materials offer outstanding performance for advanced spell routine operations, making them suitable for elite military and specialized magical devices. The components are extremely durable and can withstand intense magical applications without significant degradation.

The primary advantage of Rare Materials is their exceptional performance and longevity, allowing Intelligent Devices to execute highly complex and powerful spell routines with maximum efficiency. These materials have excellent mana conductivity, minimizing energy loss during spell execution and providing superior device responsiveness. The structural integrity is exceptional, allowing devices to maintain peak performance under extreme stress and providing extended operational lifespan that far exceeds basic or advanced materials.

Rare Materials are ideal for mages who require top-tier performance for critical operations or who demand the best possible capabilities from their Intelligent Devices. These materials provide significant advantages in mana efficiency, spell complexity, and device durability, making them worth the substantial investment for serious magical practitioners. The enhanced capabilities enable the most sophisticated spell routines and optimal performance in demanding magical situations.`
    },
    exotic: {
        name: 'Exotic Materials',
        cost: 40,
        description: `Exotic Materials represent cutting-edge components that push the boundaries of material science, featuring dimensional metals, mana-infused crystals, and revolutionary conductive materials that provide exceptional mana conductivity and extraordinary structural integrity. These materials offer outstanding performance for master-level spell routine operations, making them suitable for the most advanced magical devices and experimental prototypes. The components are highly durable and can handle the most intense magical applications without significant degradation.

The primary advantage of Exotic Materials is their exceptional performance and extended longevity, allowing Intelligent Devices to execute spell routines of virtually any complexity and power with near-optimal efficiency. These materials have very high mana conductivity, minimizing energy loss during spell execution and providing near-instantaneous device responsiveness. The structural integrity is extraordinary, allowing devices to maintain peak performance under extreme stress and providing substantially extended operational lifespan.

Exotic Materials are ideal for mages who require top-tier performance for the most demanding magical operations or who are pushing the boundaries of what is possible with Intelligent Device technology. These materials provide overwhelming advantages in all aspects of device performance, making them the preferred choice for the most dedicated and accomplished magical practitioners. The enhanced capabilities enable spell routines that would be impractical with lesser materials and provide reliability in the most extreme magical situations.`
    },
    legendary: {
        name: 'Legendary Materials',
        cost: 50,
        description: `Legendary Materials represent the peak of current material achievement, featuring materials with properties at the frontier of magitech science, including dimensional alloys, mana-resonant crystalline matrices, and materials whose behavior challenges conventional understanding of physics and chemistry. These materials offer exceptional performance for the most demanding spell routine operations, making them suitable only for the most accomplished mages and experimental devices at the frontier of magical research. The components are extraordinarily durable and can handle virtually any magical application without significant limitations.

The primary advantage of Legendary Materials is their exceptional performance approaching theoretical limits, allowing Intelligent Devices to execute spell routines of any known complexity and power with optimal efficiency. These materials have near-optimal mana conductivity with minimal energy loss, providing device response times that approach the practical limits of magitech engineering. The structural integrity is remarkable, allowing devices to maintain near-optimal performance under virtually any conceivable stress and providing exceptionally long operational lifespan.

Legendary Materials are ideal for mages who have reached the highest levels of magical achievement and require devices that can match their exceptional capabilities. These materials provide advantages at the frontier of current understanding, enabling spell routines of extraordinary sophistication and providing capabilities at the cutting edge of magitech development. The enhanced capabilities push the boundaries of what is possible, allowing mages to achieve results that would be considered highly improbable by any conventional standard.`
    }
};

// Device Perks Tiers
const devicePerkTiers = {
    processing: [
        "Tier 0: Baseline device processing with no enhancement. Spell routines execute sequentially with perceptible delays between command and manifestation. <em>Example: A Tier 3 offensive spell takes roughly 1.2 seconds from mental command to full effect. Your device handles one spell at a time, queuing subsequent commands until the current routine completes. The AGI provides voice confirmations and basic status readouts but cannot analyze combat patterns or offer tactical suggestions.</em>",
        "Tier 1: 10% processing enhancement reduces spell execution latency and improves AGI response times. <em>Example: That same Tier 3 spell now executes in roughly 1.08 seconds—a noticeable improvement in rapid-fire exchanges where milliseconds matter. The AGI begins preloading frequently used routines before conscious command, anticipating your tactical preferences. Dual-casting remains strained, but routine switching feels smoother.</em>",
        "Tier 2: 25% processing enhancement enables reliable spell-chaining and basic multi-target tracking. <em>Example: Spell routines execute in approximately 0.9 seconds from command to effect. You can chain two spells in quick succession without device cooldown—cast a barrier, immediately follow with an offensive strike. The AGI tracks up to three targets simultaneously and provides basic threat priority assessments during engagements.</em>",
        "Tier 3: 50% processing enhancement cuts execution time by roughly a third and enables real-time tactical analysis. <em>Example: Spell routines complete in roughly 0.8 seconds, a clear step up in rapid exchanges. The AGI analyzes enemy movement patterns mid-combat, flags optimal spell choices against each opponent, and suggests defensive timing windows. You maintain two concurrent spell effects (barrier + offensive) without performance degradation.</em>",
        "Tier 4: 75% processing enhancement delivers markedly faster casting and advanced tactical support. <em>Example: Spell execution drops to approximately 0.65 seconds from command to manifestation. Your device handles three concurrent spell effects seamlessly—maintain barriers, sustain a sensor net, cast offensive spells—without queue delays. The AGI presents tactical overlays directly to your perception: threat vectors, friendly positions, environmental hazards, all updated in real-time.</em>",
        "Tier 5: 100% processing enhancement doubles baseline speed, enabling true parallel spell-routine execution. <em>Example: Spell routines execute in roughly 0.6 seconds—twice baseline casting speed, with multiple routines processed in parallel rather than queued. You maintain four concurrent effects without strain, and the AGI manages routine defensive operations autonomously (auto-barrier triggers, threat warnings) while you focus on offense. Complex multi-target engagements become manageable rather than overwhelming.</em>",
        "Tier 6: 200% processing enhancement triples execution speed and enables predictive combat modeling. <em>Example: Spell routines complete in approximately 0.4 seconds with true parallelization—your device processes multiple complex calculations simultaneously. The AGI predicts enemy actions based on micro-movements and combat pattern analysis, warning you 0.5-1 second before attacks fully form. You maintain six concurrent spell effects, and the device automatically optimizes mana allocation across active routines.</em>",
        "Tier 7: 400% processing enhancement delivers 5× baseline speed with sophisticated autonomous tactical support. <em>Example: Spell execution approaches 0.24 seconds from intent to effect. Your device manages eight to ten concurrent spell effects without performance hits—barriers, sensor nets, active camouflage, offensive routines, all operating smoothly. The AGI preloads likely tactical responses based on battlefield analysis, presenting optimized spell sequences for your confirmation rather than waiting for detailed commands.</em>",
        "Tier 8: 900% processing enhancement provides 10× baseline speed with near-autonomous tactical management. <em>Example: Spell routines execute in roughly 0.12 seconds—your device processes commands faster than most opponents can track. The AGI handles the tactical layer autonomously: deploys countermeasures to detected threats, rotates barrier sectors toward incoming fire, queues optimal offensive responses. You operate at the strategic level (target priority, engagement/withdrawal decisions) while the device manages execution details. Twelve-plus concurrent effects remain stable.</em>",
        "Tier 9: 1900% processing enhancement delivers 20× baseline speed with strategic-level AGI support. <em>Example: Spell execution occurs in approximately 0.06 seconds—effectively reflexive from external observation. The AGI identifies enemy spell signatures the moment mana patterns begin forming, categorizes threat levels, and queues optimized counter-responses for your approval. You think in strategic objectives; the device translates them into tactical execution. Concurrent spell-effect management is limited only by your mana throughput, not processing capacity.</em>",
        "Tier 10: Practical ceiling of device processing—further enhancement yields diminishing returns. <em>Example: Spell routines execute at the minimum latency imposed by mana-channel physics—roughly 0.03 seconds from neural command to manifestation. The AGI operates as a seamless cognitive extension, processing thousands of combat variables in parallel with sub-millisecond reaction times. Enemy spell-routine identification occurs during the formation phase, and optimal responses are queued automatically. This represents the hard limit of current computational architecture; additional processing power cannot overcome the physical constraints of mana throughput and channel propagation speeds.</em>"
    ],
    weave: [
        "Tier 0: Baseline spell-weaving with no enhancement. Device constructs spell routines with significant mana bleed and inefficient channel pathways. <em>Example: Your device wastes roughly 30% of each spell's mana as dissipated heat and environmental bleed. A Tier 3 offensive spell that theoretically requires 100 units of mana actually costs you 130 units—your reactor depletes 30% faster than it should. Sustained casting drains reserves rapidly, limiting engagements to short bursts before mandatory recovery periods.</em>",
        "Tier 1: 10% efficiency improvement tightens mana channel pathways and reduces waste. <em>Example: Mana bleed drops to roughly 27%—you gain approximately one extra spell per reactor cycle before depletion. Spell manifestation shows marginally cleaner edges, fewer misfires occur under pressure, and your reactor's effective endurance increases noticeably during extended engagements. The improvement feels subtle but compounds over multiple casts.</em>",
        "Tier 2: 25% efficiency improvement produces visibly cleaner spell construction and extended combat endurance. <em>Example: Mana waste falls to approximately 23%. Offensive spells maintain coherent structure longer in flight—fireballs hold shape through crosswinds, force lances penetrate deeper before dispersing. Barrier spells distribute impact forces more evenly across their surface. Your reactor sustains roughly 25% more casting before depletion warnings trigger compared to baseline devices.</em>",
        "Tier 3: 50% efficiency improvement halves mana waste and doubles effective combat endurance. <em>Example: Mana bleed drops to roughly 15%—your device wastes half as much energy as baseline constructs. In practical terms, you sustain offensive or defensive operations approximately twice as long as comparably-ranked mages with unenhanced weave quality. A reactor cycle that provided 10 casts at baseline now yields closer to 17-18 casts at comparable power.</em>",
        "Tier 4: 75% efficiency improvement reduces mana waste to negligible levels and increases spell impact. <em>Example: Mana bleed falls below 10%. Your device constructs spell routines so cleanly that continuous casting through extended engagements becomes viable without reactor strain. Spells hit with noticeably greater impact because less energy dissipates during formation and travel—a Tier 4 offensive spell carries roughly 10-15% more destructive force than the same spell through a baseline device.</em>",
        "Tier 5: 100% efficiency improvement doubles weave quality, cutting effective mana costs in half. <em>Example: Mana waste drops to approximately 5%—your spells cost roughly half the mana of baseline equivalents. What once exhausted your reactor in 5 minutes of sustained casting now extends to 10+ minutes with reserves remaining. The efficiency improvement effectively raises your combat endurance by a full reactor rank without upgrading the core itself.</em>",
        "Tier 6: 200% efficiency improvement triples weave quality and enables ambient mana subsidization. <em>Example: Mana waste becomes negligible (under 3%), and your device begins drawing ambient environmental mana into spell routines, partially subsidizing casting costs. Spells visibly outperform identical routines cast through lesser devices—fire burns 15-20% hotter, barriers absorb 20-25% more punishment before failure, kinetic lances penetrate proportionally deeper. Effective mana costs drop to roughly 35-40% of baseline.</em>",
        "Tier 7: 400% efficiency improvement delivers 5× weave quality with significant ambient mana recovery. <em>Example: Your device achieves approximately 5:1 efficiency compared to baseline—each unit of mana produces roughly five times the standard effect. Ambient mana drawn from the environment subsidizes 15-20% of routine casting costs. Spells manifest with visibly superior definition: sharper edges, denser energy matrices, tighter containment fields. You sustain combat operations that would require reactors 1-2 ranks higher with inferior weave optimization.</em>",
        "Tier 8: 900% efficiency improvement provides 10× weave quality and active mana feedback loops. <em>Example: Mana waste approaches theoretical minimums (under 1%). Your device actively recovers ambient mana from your own spell emissions, creating a partial feedback loop that stretches effective mana pools by 25-30%. High-output casting through extended engagements becomes routine rather than exceptional. Spell quality surpasses baseline devices dramatically—barriers are 40-50% denser, offensive spells carry proportionally greater destructive force, utility effects operate with precision unattainable through lesser weave optimization.</em>",
        "Tier 9: 1900% efficiency improvement delivers 20× weave quality approaching theoretical optimization limits. <em>Example: Your device constructs spell routines where virtually every unit of mana produces close to its maximum theoretical effect. Environmental mana recovery subsidizes 30-40% of casting costs during active operations. You routinely cast at magnitudes that would require reactors 2-3 ranks higher with baseline weave quality. Sustained high-output operations remain viable through engagements lasting 30+ minutes—limited primarily by tactical necessity rather than mana scarcity.</em>",
        "Tier 10: Practical ceiling of spell-weave optimization—further enhancement yields diminishing returns. <em>Example: Your device achieves near-optimal weave efficiency where mana waste is reduced to the theoretical minimum imposed by thermodynamic constraints (under 0.5%). Every unit of mana produces approximately its maximum possible effect. Spells manifest as works of precision engineering with consistently optimal parameters. You sustain high-output casting for extended periods, limited primarily by your reactor's generation rate rather than consumption efficiency. This represents the hard limit of spell-routine architecture; additional optimization cannot overcome the physical constraints of mana-to-effect conversion that current magitech theory permits.</em>"
    ],
    barrier: [
        "Tier 0: Baseline defensive capabilities with no enhancement. Basic barrier spell routines provide minimal protection against conventional and magical threats. <em>Example: Your barriers deflect small arms fire (9mm handgun rounds) and blunt physical impacts from hand-to-hand combat, but sustained automatic weapons fire (5.56mm rifle rounds at 600 RPM) breaches them within 3-4 seconds. Direct magical attacks from Tier 2+ spells shatter barriers instantly. Deployment requires conscious activation with roughly 0.8-second response time—too slow to counter surprise attacks.</em>",
        "Tier 1: 10% barrier strength enhancement improves durability and enables basic threat monitoring. <em>Example: Your barriers survive approximately 10% more punishment—perhaps 4-5 seconds under sustained rifle fire instead of 3-4, or 2-3 additional Tier 1 spell impacts before failure. The AGI begins monitoring for incoming threats and suggests barrier activation when danger is detected, reducing your manual response time to approximately 0.5 seconds—still vulnerable to ambush but notably improved.</em>",
        "Tier 2: 25% barrier strength enhancement enables regeneration and extended protection against conventional threats. <em>Example: Your barriers withstand sustained small arms fire for 6-7 seconds before showing stress fractures. Low-tier offensive spells (Tier 1-2) deflect with minimal damage, and the barrier's regeneration cycle repairs minor damage between attacks rather than accumulating—scratches and micro-fractures from small impacts heal within 2-3 seconds during combat lulls.</em>",
        "Tier 3: 50% barrier strength enhancement provides reliable protection against mid-tier magical attacks. <em>Example: Your barriers absorb roughly 50% more punishment than baseline before catastrophic failure. Direct hits from Tier 3 offensive spells—which would instantly breach baseline barriers—cause severe stress but don't immediately penetrate, buying you 1-2 seconds to respond. The AGI proactively shifts barrier density toward detected incoming attack vectors, concentrating protection where needed most and improving effective durability by an additional 15-20%.</em>",
        "Tier 4: 75% barrier strength enhancement delivers multi-layer construction and dramatically improved survivability. <em>Example: Your barriers shrug off rifle-caliber rounds entirely—sustained fire causes surface ripples but no structural damage. Tier 4 offensive spells impact with manageable strain rather than immediate penetration. The multi-layer construction forces attacks to breach 3-4 defensive shells sequentially, buying 3-5 seconds for counter-attacks or tactical repositioning even under heavy fire.</em>",
        "Tier 5: 100% barrier strength enhancement doubles baseline durability with automatic threat response. <em>Example: Your barriers withstand twice the punishment of baseline defensive constructs. Tier 5 offensive spells—capable of vaporizing unprotected humans—strike your barrier and dissipate with 40-50% integrity remaining, enough to absorb 2-3 follow-up attacks. The AGI automatically deploys localized barrier reinforcement against each detected incoming attack vector independently, effectively providing 5-6 independently strengthened defensive sectors.</em>",
        "Tier 6: 200% barrier strength enhancement triples durability and enables active energy dispersion. <em>Example: Your barriers absorb sustained bombardment from multiple opponents simultaneously—three to four mages casting Tier 5 spells in coordinated strikes cannot overwhelm your defenses faster than you eliminate them individually. The barrier actively disperses absorbed kinetic and thermal energy across its entire surface rather than allowing stress fractures to concentrate at impact points, extending effective durability by 30-40% beyond raw strength improvements.</em>",
        "Tier 7: 400% barrier strength enhancement delivers 5× durability with squad-scale protective coverage. <em>Example: Your barriers withstand sustained Tier 4-5 offensive fire without collapsing—continuous bombardment for 20-30 seconds shows strain but maintains integrity. Tier 6 attacks cause severe stress but don't achieve immediate penetration. The barrier projects outward to cover nearby allies within a 3-4 meter radius, creating a defensive dome that protects your immediate squad. The AGI dynamically adjusts barrier density and composition against incoming attacks in real-time.</em>",
        "Tier 8: 900% barrier strength enhancement provides 10× durability rivaling military-grade defensive installations. <em>Example: Your barriers absorb Tier 5-6 offensive spells with manageable strain—attacks that would obliterate vehicles or breach reinforced concrete impact your barrier and dissipate with 30-50% integrity remaining. Lower-tier attacks (Tier 1-4) are effectively neutralized on contact. The device intercepts incoming spell signatures and pre-reinforces barrier sectors before attacks arrive. Multi-layer construction forces attacks through 6-8 defensive shells. Extended coverage protects a full squad (8-10 people) at 60-70% individual barrier strength.</em>",
        "Tier 9: 1900% barrier strength enhancement delivers 20× durability representing personal-scale defensive pinnacle. <em>Example: Your barriers withstand sustained bombardment from Tier 6-7 offensive spells—attacks capable of destroying buildings or armored vehicles impact with significant stress but require sustained focus fire (15-20 seconds of continuous casting) to achieve penetration. Anything below Tier 5 makes negligible progress against your defenses. The defensive matrix operates on multiple independent layers: kinetic absorption, thermal dispersion, mana-charge dissipation, and reactive reinforcement—each regenerating independently at roughly 8-10% integrity per second during lulls.</em>",
        "Tier 10: Practical ceiling of barrier protection—further enhancement yields diminishing returns. <em>Example: Your barriers represent the theoretical maximum of personal-scale defensive spell-routine architecture. Even Tier 8-9 offensive spells—strategic-level attacks capable of destroying city blocks—expend significant mana breaking through your defensive layers, requiring 30-40 seconds of sustained focus to achieve penetration. Your barrier maintains integrity against coordinated focus fire from 4-6 powerful opponents simultaneously, degrading under combined weight of fire but regenerating at 12-15% per second during brief lulls. This represents the hard limit of defensive constructs; additional strength cannot overcome the physical constraints of mana-channel throughput and barrier-matrix complexity that current magitech theory permits.</em>"
    ],
    structural: [
        "Tier 0: Baseline structural integrity with no enhancement. The device survives everyday handling but cannot repair meaningful damage on its own. <em>Example: Your device shrugs off drops, temperature swings, and minor knocks, but a direct strike from a Knight's blade or a focused spell shatters it beyond self-repair. Restoring it requires external work at a qualified facility.</em>",
        "Tier 1: 10% structural enhancement improves durability and begins superficial self-repair. <em>Example: Your device survives glancing blows and near-misses that would have chipped or cracked a baseline unit. Scratches and minor dents close within minutes, and the device mends superficial damage without outside help.</em>",
        "Tier 2: 25% structural enhancement grants moderate durability and faster self-repair. <em>Example: Your device withstands moderate impacts—a drop onto concrete from shoulder height leaves cosmetic marks that repair within the hour. Small combat-stress cracks seal between engagements, and the device keeps operating with minor structural damage that would disable lesser units.</em>",
        "Tier 3: 50% structural enhancement provides significant durability and substantially faster self-repair. <em>Example: Your device survives impacts that would shatter baseline units into non-functional fragments. A direct strike from a Knight's weapon may crack the casing but won't reach the core components, and the crack begins sealing within seconds while combat functions continue uninterrupted.</em>",
        "Tier 4: 75% structural enhancement delivers substantial durability and rapid self-repair. <em>Example: Your device endures battlefield conditions that would destroy lesser devices within minutes. Sustained magical bombardment, extreme temperatures, and physical impacts cause damage that repairs visibly fast—you can watch cracks seal and material regenerate during combat pauses.</em>",
        "Tier 5: 100% structural enhancement doubles durability with very rapid self-repair. <em>Example: Your device withstands roughly twice the punishment of baseline constructs. Tier 5 offensive spells that could reduce conventional equipment to slag leave it dented but fully functional. Penetrating damage begins repairing the moment it occurs, so a crack opened by one attack is half-healed before the follow-up lands.</em>",
        "Tier 6: 200% structural enhancement triples durability with self-sustaining regeneration. <em>Example: Your device approaches the durability of military-grade armored equipment while staying palm-sized. It can take a direct Tier 6 offensive spell and remain operational, the damage visibly regenerating in seconds. The device draws ambient mana to fuel constant low-level structural repair even when undamaged.</em>",
        "Tier 7: 400% structural enhancement delivers 5× durability with very fast self-repair. <em>Example: Your device survives direct hits from Tier 5-6 offensive spells with severe but repairable damage—cracked casings seal within seconds, and the core components stay protected even when the outer shell is compromised. Constant ambient-mana maintenance keeps minor wear from accumulating, and the device re-establishes full operational capacity from significant damage within minutes of disengagement.</em>",
        "Tier 8: 900% structural enhancement provides 10× durability with aggressive self-repair. <em>Example: Your device withstands battlefield conditions that would destroy lesser devices several times over. Even when badly damaged—cracked, dented, or with components exposed—the self-repair protocols rebuild critical pathways and structural elements faster than new damage accumulates in most engagements. Only a direct, focused attack specifically targeting the core stands a realistic chance of taking it offline.</em>",
        "Tier 9: 1900% structural enhancement delivers 20× durability with extreme survivability. <em>Example: Your device takes hits from high-tier offensive spells and stays functional, severe damage reconstructed rapidly by the self-repair matrix. Even partially shattered, the surviving fragments hold core functionality and rebuild lost sections from available material and ambient mana. The device is highly resistant to destruction through incidental damage—only a concentrated, deliberate effort by a comparably powered opponent poses a realistic threat—and recovery from near-destruction takes minutes rather than hours.</em>",
        "Tier 10: Practical ceiling of device structural integrity—further enhancement yields diminishing returns. <em>Example: Your device represents the practical maximum of magitech structural engineering. It withstands sustained high-tier spell impacts, extreme environments, and heavy physical abuse while holding core functionality, and the self-repair protocols reconstruct severe damage within minutes given sufficient mana. Further investment beyond this tier yields diminishing returns as durability approaches the hard limits of known material science and mana-channel structural reinforcement that current magitech theory permits.</em>"
    ]
};

// Spell Routines Data - This will be extensive with 90 spells (30 per category)
// Due to the large amount of content, I'll create a structure that can be easily expanded

const spellCategories = {
    physical: 'Physical',
    elemental: 'Elemental',
    abstract: 'Abstract'
};

const spellProficiencyLevels = {
    beginner: 'Beginner',
    apprentice: 'Apprentice',
    adept: 'Adept',
    expert: 'Expert',
    master: 'Master'
};

// Device Shapes by Class
const deviceShapes = {
    knight: [
        { id: 'longsword', name: 'Longsword', cost: 0 },
        { id: 'katana', name: 'Katana', cost: 0 },
        { id: 'broadsword', name: 'Broadsword', cost: 0 },
        { id: 'rapier', name: 'Rapier', cost: 0 },
        { id: 'scimitar', name: 'Scimitar', cost: 0 },
        { id: 'greatsword', name: 'Greatsword', cost: 0 },
        { id: 'dagger_pair', name: 'Dagger Pair', cost: 0 },
        { id: 'spear', name: 'Spear', cost: 0 },
        { id: 'halberd', name: 'Halberd', cost: 0 },
        { id: 'battle_axe', name: 'Battle Axe', cost: 0 },
        { id: 'whip_sword', name: 'Whip Sword', cost: 0 },
        { id: 'lance', name: 'Lance', cost: 0 },
        { id: 'saber', name: 'Saber', cost: 0 },
        { id: 'cutlass', name: 'Cutlass', cost: 0 },
        { id: 'claymore', name: 'Claymore', cost: 0 },
        { id: 'naginata', name: 'Naginata', cost: 0 },
        { id: 'war_hammer', name: 'War Hammer', cost: 0 },
        { id: 'dual_blades', name: 'Dual Blades', cost: 0 },
        { id: 'energy_blade', name: 'Energy Blade', cost: 0 },
        { id: 'ancient_relic_blade', name: 'Ancient Relic Blade', cost: 0 }
    ],
    bombardment: [
        { id: 'standard_staff', name: 'Standard Staff', cost: 0 },
        { id: 'high_power_cannon', name: 'High-Power Cannon', cost: 0 },
        { id: 'sniper_rifle', name: 'Sniper Rifle', cost: 0 },
        { id: 'gatling_gun', name: 'Gatling Gun', cost: 0 },
        { id: 'missile_launcher', name: 'Missile Launcher', cost: 0 },
        { id: 'orbital_cannon', name: 'Orbital Cannon', cost: 0 },
        { id: 'railgun', name: 'Railgun', cost: 0 },
        { id: 'particle_beam', name: 'Particle Beam', cost: 0 },
        { id: 'plasma_cannon', name: 'Plasma Cannon', cost: 0 },
        { id: 'gravity_well_generator', name: 'Gravity Well Generator', cost: 0 },
        { id: 'energy_staff', name: 'Energy Staff', cost: 0 },
        { id: 'twin_cannons', name: 'Twin Cannons', cost: 0 },
        { id: 'tri_barrel_cannon', name: 'Tri-Barrel Cannon', cost: 0 },
        { id: 'floating_orb', name: 'Floating Orb', cost: 0 },
        { id: 'crystal_staff', name: 'Crystal Staff', cost: 0 },
        { id: 'mechanical_arm', name: 'Mechanical Arm', cost: 0 },
        { id: 'drone_controller', name: 'Drone Controller', cost: 0 },
        { id: 'satellite_uplink', name: 'Satellite Uplink', cost: 0 },
        { id: 'void_cannon', name: 'Void Cannon', cost: 0 },
        { id: 'ancient_relic_staff', name: 'Ancient Relic Staff', cost: 0 }
    ],
    thaumaturge: [
        { id: 'standard_cube', name: 'Standard Cube', cost: 0 },
        { id: 'floating_book', name: 'Floating Book', cost: 0 },
        { id: 'ancient_grimoire', name: 'Ancient Grimoire', cost: 0 },
        { id: 'digital_tablet', name: 'Digital Tablet', cost: 0 },
        { id: 'crystal_ball', name: 'Crystal Ball', cost: 0 },
        { id: 'floating_runes', name: 'Floating Runes', cost: 0 },
        { id: 'mechanical_gauntlet', name: 'Mechanical Gauntlet', cost: 0 },
        { id: 'holographic_interface', name: 'Holographic Interface', cost: 0 },
        { id: 'spirit_orb', name: 'Spirit Orb', cost: 0 },
        { id: 'tome_of_knowledge', name: 'Tome of Knowledge', cost: 0 },
        { id: 'mystic_mirror', name: 'Mystic Mirror', cost: 0 },
        { id: 'scroll_array', name: 'Scroll Array', cost: 0 },
        { id: 'neural_interface', name: 'Neural Interface', cost: 0 },
        { id: 'floating_cards', name: 'Floating Cards', cost: 0 },
        { id: 'ancient_codex', name: 'Ancient Codex', cost: 0 },
        { id: 'magical_circle', name: 'Magical Circle', cost: 0 },
        { id: 'spirit_compass', name: 'Spirit Compass', cost: 0 },
        { id: 'rune_stone', name: 'Rune Stone', cost: 0 },
        { id: 'astral_projection_device', name: 'Astral Projection Device', cost: 0 },
        { id: 'ancient_relic_grimoire', name: 'Ancient Relic Grimoire', cost: 0 }
    ]
};

function getFreeBodyPerks(rankId, classId) {
    const rank = manaReactorRanks[rankId];
    if (!rank) return { speed: 0, strength: 0, sense: 0, dexterity: 0, intelligence: 0, wisdom: 0 };
    
    const base = rank.freeBodyPerks;
    if (!base) return { speed: 0, strength: 0, sense: 0, dexterity: 0, intelligence: 0, wisdom: 0 };
    
    if (!classId || !rank.freeBodyPerksByClass || !rank.freeBodyPerksByClass[classId]) {
        const result = {};
        const perkKeys = ['speed', 'strength', 'sense', 'dexterity', 'intelligence', 'wisdom'];
        perkKeys.forEach(key => { result[key] = 0; });
        return result;
    }
    
    const primary = rank.freeBodyPerksByClass[classId];
    const result = {};
    const perkKeys = ['speed', 'strength', 'sense', 'dexterity', 'intelligence', 'wisdom'];
    perkKeys.forEach(key => {
        result[key] = primary.includes(key) ? base.primary : base.secondary;
    });
    return result;
}

function getFreeDeviceGen(rankId) {
    const rank = manaReactorRanks[rankId];
    return (rank && rank.freeDeviceGen) ? rank.freeDeviceGen : null;
}

function getFreeDevicePerks(genId) {
    if (!genId || !deviceGenerations[genId]) return { processing: 0, weave: 0, barrier: 0, structural: 0 };
    return deviceGenerations[genId].freeDevicePerks || { processing: 0, weave: 0, barrier: 0, structural: 0 };
}
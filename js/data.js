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
        description: `A Malkuth-class reactor is the baseline mana generation unit issued to newly awakened mages under the Star Light Project. Its crystalline core holds a single mana lamination layer — enough to sustain basic spell routines and keep an Intelligent Device operational, but not enough for sustained combat casting. Ambient mana absorption is slow; a Malkuth mage who exhausts their reserves in a fight will wait minutes, not seconds, before they can cast again.

In practical terms, this reactor tier limits the mage to one or two active spell effects at a time. Spell routines above Tier 3 strain the core's throughput, causing mana bleed that wastes roughly a third of each casting's energy as waste heat. Most Malkuth mages compensate by leaning heavily on their Device's processing to optimize what little mana they have, developing efficient habits that serve them well if they later rank up.

Despite its limitations, the Malkuth reactor is remarkably stable — its single-layer construction makes it virtually immune to mana feedback loops, a reliability that higher ranks sometimes sacrifice for raw output. Many field instructors consider Malkuth mages who have trained extensively at this tier to be among the most technically precise casters in the Project, precisely because they never had excess mana to waste.`
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
        description: `The Yesod-class reactor adds a second mana lamination layer around the core, roughly doubling total capacity and halving recovery time compared to Malkuth. This seemingly small upgrade has outsized effects on battlefield viability — a Yesod mage can sustain two to three concurrent spell effects and recover from depletion in under a minute, making them the minimum rank recommended for field operations by the Project's safety board.

With the added throughput, spell routines up to Tier 5 can be cast without significant bleed. Yesod mages also begin to develop a passive sense for ambient mana density, an involuntary side effect of the second lamination's resonance with environmental mana flows. This nascent sensitivity isn't precise enough for tactical use, but it does provide a visceral warning when entering areas of high magical concentration or dimensional instability — enough to make a Yesod mage pause before walking into a trap.

The Yesod reactor's dual-layer design also introduces a minor vulnerability: the interface between laminations can develop micro-fractures under extreme stress, requiring periodic recalibration at a certified maintenance facility. Most mages consider this a fair trade for the leap in capability, and the Project's logistics corps stocks replacement interlayer seals at every forward operating base.`
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
        description: `The Hod-class reactor introduces a third lamination layer with a crystalline lattice structure that refracts mana internally before release, improving output efficiency by roughly forty percent over Yesod. This refraction effect is what gave the tier its colloquial nickname among Project engineers — the "splendor" of a Hod mage's spells comes from the tighter mana coherence, which produces visibly cleaner spell formations with sharper boundaries and less ambient bleed-off.

Tactically, the Hod reactor enables sustained casting of Tier 6-7 spell routines and supports up to four concurrent effects. The refraction lattice also grants the mage a degree of output shaping that lower tiers lack: spell routines can be "tuned" to different parameters on the fly — wider area at lower intensity, or focused beam at full power — without requiring a separate casting. This makes Hod mages versatile in the field, able to adapt their output to the situation rather than being locked into a single mode per spell.

The tradeoff is complexity. The refraction lattice requires precise mana harmonics to maintain, and a misaligned Hod reactor can produce erratic output — spells that fizzle, overshoot, or detonate prematurely. The Project mandates a qualification exam before mages are cleared for field deployment at this rank, and roughly one in eight candidates wash out on the harmonics calibration test. Those who pass, however, represent the backbone of the Project's operational mage complement.`
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
        description: `The Netzach-class reactor solves the endurance problem that limits every lower tier. Its fourth lamination layer incorporates a mana recirculation channel that captures and reabsorbs up to sixty percent of the waste energy that lower reactors vent as heat. In practice, this means a Netzach mage can maintain combat-output casting for roughly three times longer than a Hod mage before requiring recovery — a difference that turns sustained engagements from desperate sprints into manageable marathons.

Field commanders consider Netzach the minimum rank for independent long-duration operations. A Netzach mage can sustain barrier routines, offensive casting, and Device processing simultaneously for hours rather than minutes, without the dangerous depletion curves that force lower-ranked mages to disengage or risk reactor damage. The recirculation channel also reduces the mage's thermal and mana signature, making them harder to detect through magical sensing at range — an incidental benefit that proves tactically useful more often than anyone expected.

The recirculation system does have a failure mode: if the channel's flow direction reverses under certain rare resonance conditions, the reactor enters a positive feedback loop that can overload the core within seconds. Project safety protocols require Netzach mages to carry an emergency dump valve that forcibly vents the channel, and the resulting mana discharge is violent enough to knock the mage unconscious. It beats the alternative.`
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
        description: `The Tiferet-class reactor is the median point of the Kabbalistic scale — the tier where quantitative improvements give way to qualitative ones. Its fifth lamination layer doesn't simply add capacity; it introduces a harmonic synchronization system that aligns all five layers into a unified resonance, eliminating the interlayer friction that plagues Hod and Netzach reactors. The result is a reactor that runs noticeably smoother, cooler, and quieter than any lower tier, with mana flow so consistent that spell output barely fluctuates between castings.

This harmonic synchronization is what gives Tiferet its reputation. Mages at this rank report that casting feels fundamentally different — less like forcing energy through a conduit and more like directing a current that already wants to flow the right way. Device compatibility improves dramatically as well; the clean mana signature reduces calibration overhead by half, allowing Tiferet mages to swap Device configurations or shift between spell categories with negligible transition lag. In combat, this manifests as a fluid, almost effortless casting style that observers often describe as "artistic."

The Tiferet reactor is also the first tier where ambient mana absorption outpaces passive expenditure during routine operations. A Tiferet mage walking through an area with typical mana density will slowly gain reserves rather than slowly lose them — a small change on paper that eliminates the logistical burden of mana rationing during extended deployments. It also means a Tiferet mage who is knocked unconscious in combat will wake up with their reactor already partially recharged, a survival margin that has saved lives.`
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
        description: `The Geburah-class reactor is the first tier optimized for offensive output rather than general capability. Its sixth lamination layer incorporates a compression matrix that can force mana into a denser state before release, multiplying the kinetic and magical impact of offensive spell routines by two to three times without additional mana expenditure. A Tier 5 combat spell cast through a Geburah reactor hits with the force of a Tier 7-8 cast through Tiferet — same input, dramatically more destructive output.

This compression capability makes Geburah mages the Project's primary strike asset. A single Geburah mage with appropriate Device configuration can breach fortifications that would require a full squad of Tiferet-rank mages, and their anti-barrier effectiveness against enemy defensive routines is proportionally increased. The compression matrix also enables rapid discharge — the reactor can dump a significant fraction of its reserves in a single pulse, producing a brief but overwhelming spike in output that overwhelms most defensive spell routines before they can adapt.

The severity of the reactor's name reflects its constraints as much as its power. The compression matrix generates extreme internal stress during operation, and sustained high-output casting accelerates crystalline micro-fracture propagation throughout the core. A Geburah mage who fights at full intensity for too long risks permanent reactor degradation — the very compression that makes them devastating also slowly destroys their own power source. The Project's combat doctrine explicitly trains Geburah mages to pace themselves, reserving full compression for decisive moments rather than constant assault.`
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
        description: `The Chesed-class reactor takes the compression technology pioneered at Geburah and inverts it. Its seventh lamination layer introduces a dispersion matrix that expands mana into a finer, more distributed state before release — the mirror image of Geburah's compression. This dispersed mana penetrates biological and magical structures with minimal kinetic disruption, making it ideal for restorative and protective spell routines that need to affect their target at a deep structural level without causing collateral damage.

A Chesed mage can close wounds by coaxing tissue back into alignment rather than forcing it, reinforce a barrier jacket's weave by threading mana between existing structural bonds rather than simply layering more on top, and purge hostile enchantments by dissolving their mana scaffolding rather than overpowering it. The dispersion matrix also makes Chesed reactors uniquely effective at mana sharing — they can transfer reserves to allied mages or Devices with minimal loss, a capability that makes them the linchpin of any squad-level operation.

The dispersion matrix does not prevent offensive casting, but it offers no enhancement to it either. A Chesed mage casting a fireball delivers exactly the baseline output with none of Geburah's compression bonus. This asymmetry is by design — the Project's procurement board recognized that a reactor equally good at destruction and preservation would create strategic indecision, and that a specialist forced to choose between the two paths commits more fully to their role. Chesed mages who need offensive options rely on their Device, their spell selection, and their teammates.`
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
        description: `The Binah-class reactor introduces an analytical layer that no previous tier possesses: an eighth lamination composed of reactive crystalline circuits that can observe and model mana flow patterns in real time. Where lower-tier mages sense mana as vague pressure or temperature, a Binah mage perceives its structure — the weave patterns of active spell routines, the resonance signatures of different mana types, the micro-fluctuations that reveal whether a barrier is holding steady or about to fracture.

This analytical capability transforms how a Binah mage approaches combat. Rather than responding to threats reactively, they can read an opponent's mana flow to predict which spell routine is being constructed before it finishes casting, identify the weak points in a defensive weave by observing its stress distribution, and exploit timing windows that lower-ranked mages can't even perceive. A Binah mage fighting a Geburah-rank opponent won't overpower their compression — they'll sidestep the compressed pulse and strike during the reactor's refill cycle, a window that lasts fractions of a second.

The reactive circuits also serve a peacetime role that the Project values as much as the combat application: Binah mages can reverse-engineer unfamiliar spell routines by observing their mana structure, making them the primary intelligence asset for analyzing enemy magical technology. Every known counter to dimensional-space spell routines was developed by Binah-rank analysts who observed the casting pattern and mapped its internal logic. The limitation is that the analytical layer draws processing power away from raw output — a Binah mage won't out-cast a Geburah on sheer force, but they'll know exactly where and when to apply what they have.`
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
        description: `The Chokhmah-class reactor represents a qualitative leap beyond analytical understanding. Its ninth lamination layer is a dynamic reconfiguration matrix — a lattice that can restructure its own crystalline geometry in response to the mage's intent, effectively rewriting the reactor's operational parameters on the fly. Where Binah perceives how a spell routine is structured, Chokhmah can restructure its own output to match, producing mana flows that adapt in real time to the demands of the situation.

This reconfiguration capability enables something no lower tier can replicate: improvised spell construction. A Chokhmah mage can modify a known spell routine mid-cast — widening its area, shifting its element, changing its targeting parameters — by consciously reshaping the reactor's output geometry rather than loading a pre-programmed routine from their Device. The Device still handles the mathematical heavy lifting, but the mage provides the structural blueprint through direct mana-shaping intuition rather than selecting from a list of pre-built options.

The cost of this flexibility is cognitive load. Reshaping reactor geometry while simultaneously maintaining situational awareness and executing combat decisions requires a degree of mental discipline that borders on the inhuman. The Project's Chokhmah qualification program has a higher washout rate than any other rank — not because the reactor is harder to operate, but because most mages literally cannot think fast enough to use it to its full potential. Those who can are the rarest strategic asset in the Project's inventory, capable of adapting to threats that no pre-planned spell library anticipated.`
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
        description: `The Keter-class reactor is the practical ceiling of current mana-reactor engineering. Its tenth lamination layer is a self-organizing crystalline matrix that integrates all nine lower layers into a unified system capable of operating in any mode — compression, dispersion, recirculation, analysis, reconfiguration — simultaneously and without conflict. A Keter mage doesn't choose between offensive power and defensive finesse, between endurance and insight. The reactor handles all of it at once, shifting resources between operational modes faster than the mage can consciously direct.

In operation, a Keter reactor behaves less like a power source and more like an extension of the mage's will. The integration layer reads autonomic signals from the mage's nervous system through their Device link, preemptively configuring output geometry before a conscious command is issued. Experienced Keter mages report that their reactors anticipate their intent — not through sentience, but through pattern recognition built on thousands of hours of shared casting history. The result is casting that feels instantaneous: the mage thinks, and the spell is already forming.

No Keter reactor has ever been manufactured. Every known unit emerged from a rank-up event — a poorly understood phenomenon where a Chokhmah-class reactor undergoing extreme operational stress spontaneously restructures its lamination layers into the Keter configuration. The conditions that trigger this transformation are not reproducible, and most candidates who attempt it simply destroy their reactor. The Project has documented fewer than a dozen Keter-rank mages in its entire history. Their capabilities are not classified because they are dangerous to know — they are classified because the gap between Keter and every other rank is large enough that public awareness would distort the entire strategic landscape.`
    },
};

// Intelligent Device Generations
const deviceGenerations = {
    1: {
        name: '1st Generation (Civilian)',
        cost: 10,
        freeDevicePerks: { processing: 1, weave: 1, barrier: 0, structural: 0 },
        description: `The 1st Generation Intelligent Devices represent the foundational technology that made practical magic accessible to the general population, featuring basic spell routine capabilities and simple AGI systems designed for everyday magical tasks. These devices are palm-sized cubes that can transform into simple tools and weapons, providing civilian mages with the ability to perform basic magical functions like lighting fires, creating small barriers, and executing simple utility spells. The processing power is modest but sufficient for the needs of everyday magical life, making these devices perfect for mages who primarily use magic for convenience rather than combat or complex applications.

Despite being the oldest and most basic generation, 1st Generation Intelligent Devices are reliable and easy to use, requiring minimal training to operate effectively. The AGI systems are simple but responsive, providing clear guidance and feedback to help mages execute their spell routines correctly. These devices have limited memory and storage capacity, but what they lack in sophistication they make up for in durability and ease of maintenance, making them ideal for mages who value simplicity and reliability over advanced features.

The primary advantage of 1st Generation Intelligent Devices is their accessibility and low cost, allowing mages of all backgrounds to acquire a magical tool without significant financial investment. These devices are perfect for learning the basics of magical practice and developing fundamental skills before potentially upgrading to more advanced generations. Many experienced mages still keep their 1st Generation devices as backup tools or for situations where simplicity and reliability are more important than advanced capabilities.`
    },
    2: {
        name: '2nd Generation',
        cost: 20,
        freeDevicePerks: { processing: 1, weave: 1, barrier: 1, structural: 1 },
        description: `The 2nd Generation Intelligent Devices represent a significant improvement over their predecessors, featuring enhanced processing power, expanded memory capacity, and more sophisticated AGI systems capable of handling intermediate spell routines. These devices maintain the palm-sized cube form factor but can transform into a wider variety of tools and weapons, providing mages with greater versatility in their magical applications. The improved processing capabilities allow for more complex spell construction and better mana efficiency, making these devices suitable for mages who need more than basic functionality.

The 2nd Generation Intelligent Devices introduced advanced spell routine libraries and improved mana management systems that help mages optimize their magical output and conserve energy during casting. The AGI systems are more intelligent and can provide detailed analysis of spell performance, suggesting improvements and helping mages refine their techniques. These devices also feature better connectivity options, allowing for data transfer and synchronization with other magical systems and databases of spell routines.

Mages who use 2nd Generation Intelligent Devices benefit from significantly expanded capabilities without the complexity and cost of the most advanced generations. These devices strike an excellent balance between functionality and usability, making them popular choices for professional mages who need reliable tools for their work but don't require cutting-edge features. The enhanced processing power and memory capacity enable more sophisticated spell routines while maintaining the ease of use that makes Intelligent Devices so valuable to mages of all skill levels.`
    },
    3: {
        name: '3rd Generation',
        cost: 30,
        freeDevicePerks: { processing: 2, weave: 2, barrier: 1, structural: 1 },
        description: `The 3rd Generation Intelligent Devices represent a major leap forward in magical technology, featuring powerful AGI systems, advanced processing capabilities, and sophisticated spell routine construction tools that approach military-grade performance. These devices can transform into complex multi-functional tools and weapons, providing mages with exceptional versatility and the ability to adapt to virtually any magical situation. The processing power is substantial enough to handle advanced spell routines with multiple layers and complex mana manipulation, making these devices suitable for serious magical practitioners.

The 3rd Generation Intelligent Devices introduced real-time spell optimization and predictive mana management systems that help mages achieve maximum efficiency in their magical output. The AGI systems are highly intelligent and capable of learning from the mage's usage patterns, adapting to their preferences and providing personalized assistance in spell construction and execution. These devices feature advanced sensory systems that can detect and analyze magical phenomena in the environment, providing mages with valuable tactical information.

Mages who use 3rd Generation Intelligent Devices have access to capabilities that were previously only available to military or specialized magical organizations. These devices are powerful enough for combat applications and complex magical operations while remaining user-friendly enough for everyday use. The balance of power and usability makes 3rd Generation devices popular choices for professional mages, magical law enforcement, and serious magical researchers who need reliable, powerful tools for their work.`
    },
    4: {
        name: '4th Generation',
        cost: 40,
        freeDevicePerks: { processing: 2, weave: 2, barrier: 2, structural: 2 },
        description: `The 4th Generation Intelligent Devices represent cutting-edge magical technology, featuring state-of-the-art AGI systems, exceptional processing power, and advanced spell routine capabilities that rival the most sophisticated military equipment. These devices can transform into virtually any tool or weapon the mage can imagine, limited only by the mage's creativity and mana capacity. The processing capabilities are extraordinary, enabling real-time construction and modification of complex spell routines with multiple simultaneous effects and precise mana control.

The 4th Generation Intelligent Devices introduced quantum-enhanced processing and neural interface capabilities that allow for direct mental communication between mage and device, dramatically improving response times and coordination. The AGI systems are nearly sentient in their sophistication, capable of independent analysis, strategic planning, and even autonomous operation in limited circumstances. These devices feature advanced sensory arrays that can detect and analyze all forms of energy, magical and technological, providing comprehensive situational awareness.

Mages who use 4th Generation Intelligent Devices possess capabilities that place them among the elite of the magical world, with tools that can handle any magical challenge they might encounter. These devices are powerful enough for the most demanding magical operations while maintaining intuitive interfaces that don't require extensive training to use effectively. The 4th Generation represents the pinnacle of currently available magical technology, with only experimental prototypes exceeding their capabilities.`
    },
    5: {
        name: '5th Generation (Cutting Edge)',
        cost: 50,
        freeDevicePerks: { processing: 3, weave: 3, barrier: 2, structural: 2 },
        description: `The 5th Generation Intelligent Devices represent the practical cutting edge of magical technology, featuring revolutionary AGI systems with advanced intelligence, processing capabilities that approach the theoretical limits of magical computation, and spell routine construction tools of unprecedented sophistication. These devices can transform into any form the mage desires, with nanoscale precision and materials that can change their physical properties on command. The processing power supports spell routines of exceptional complexity and power.

The 5th Generation Intelligent Devices introduced breakthrough technologies including direct neural integration, quantum-entangled communication, and self-evolving spell routine systems that can learn and improve autonomously. The AGI systems are so advanced that they exhibit sophisticated independent reasoning, capable of independent analysis, creative problem-solving, and developing novel spell routine optimizations without direct mage input. These devices feature sensory systems that can perceive magical phenomena across multiple spectral bands simultaneously, providing comprehensive situational awareness of their magical environment.

Mages who possess 5th Generation Intelligent Devices are among the most capable practitioners in existence, with tools that amplify their magical capabilities to extraordinary levels. These devices are so advanced that they are extremely rare and typically only available to the most accomplished mages or those with exceptional connections to magical research organizations. The 5th Generation represents the leading edge of magical technology, with capabilities at the boundary of current understanding and suggesting directions that magical development might take in the coming decades.`
    }
};

// Classes
const classes = {
    knight: {
        name: 'Knight',
        description: `The Knight class represents mages who excel in body reinforcement and melee combat, specializing in close-quarters magical engagements where physical prowess and magical enhancement combine to devastating effect. Knights use mana to reinforce their bodies to superhuman levels, allowing them to move at incredible speeds, strike with tremendous force, and withstand attacks that would destroy ordinary humans. Their Intelligent Devices typically transform into bladed weapons that channel and amplify their magical power, creating weapons of devastating effectiveness in combat.

The Knight's primary strength lies in their ability to combine physical combat skills with magical enhancement, creating a fighting style that is both elegant and brutally effective. They excel at rapid, decisive engagements where their enhanced speed and strength allow them to overwhelm opponents before they can react. Knights are particularly skilled at body reinforcement spells that increase their physical capabilities, blade enhancement spells that improve their weapons' cutting power and durability, and movement spells that allow them to close distances instantly or evade attacks with supernatural agility.

Knights receive free Tier 1 perks in Body Reinforcement and Blade Mastery, giving them a solid foundation in the core abilities that define their class. These perks provide basic enhancement of physical attributes and fundamental blade techniques that Knights can build upon as they develop their skills. The Knight class is ideal for mages who prefer direct, action-oriented approaches to magical challenges and who enjoy the visceral satisfaction of combining martial prowess with magical power.`
    },
    bombardment: {
        name: 'Bombardment',
        description: `The Bombardment class represents mages who excel in long-range spell routine casting, specializing in devastating magical attacks that can strike targets from great distances with overwhelming force. Bombardment mages use mana to construct powerful spell routines that project destructive energy across battlefields, capable of leveling structures, decimating armies, and eliminating threats before they can approach. Their Intelligent Devices typically transform into staffs or high-tech cannons that serve as focusing tools for their powerful long-range spells.

The Bombardment mage's primary strength lies in their ability to deliver massive amounts of damage from safe distances, making them invaluable in both offensive and defensive military operations. They excel at constructing complex spell routines with large areas of effect, powerful destructive potential, and extended ranges that allow them to engage targets before they can retaliate. Bombardment mages are particularly skilled at elemental manipulation spells, energy projection spells, and area-effect spells that can control entire battlefields through sheer destructive power.

Bombardment mages receive free Tier 1 perks in Mana Control and Long-range Casting, giving them a solid foundation in the core abilities that define their class. These perks provide basic enhancement of mana manipulation efficiency and fundamental techniques for extending spell range and accuracy. The Bombardment class is ideal for mages who prefer strategic, calculated approaches to combat and who enjoy the satisfaction of unleashing devastating magical attacks from positions of safety.`
    },
    thaumaturge: {
        name: 'Thaumaturge',
        description: `The Thaumaturge class represents mages who excel in support roles, specializing in buffs, mana augmentation, healing, and the manipulation of both magical and technological systems through spell routines. Thaumaturges use mana to enhance the capabilities of their allies, heal wounds and conditions, restore mana reserves, and even hack into or disrupt enemy devices and systems. Their Intelligent Devices typically remain in their base palm-sized cube form or transform into grimoires and books that serve as repositories of knowledge and spell routine libraries.

The Thaumaturge's primary strength lies in their versatility and ability to support and enhance the effectiveness of their allies while simultaneously weakening or disrupting their opponents. They excel at constructing spell routines that provide temporary enhancements to physical and magical abilities, restore health and mana to injured or exhausted allies, and interfere with enemy magical and technological systems. Thaumaturges are particularly skilled at mana augmentation spells, healing spells, enhancement spells, and system manipulation spells that can turn the tide of any conflict through strategic support.

Thaumaturges receive free Tier 1 perks in Mana Augmentation and Device Hacking, giving them a solid foundation in the core abilities that define their class. These perks provide basic enhancement of mana manipulation and restoration capabilities and fundamental techniques for interacting with and manipulating magical and technological systems. The Thaumaturge class is ideal for mages who prefer strategic, supportive approaches to magical challenges and who enjoy the satisfaction of enabling their allies to achieve greatness through their magical assistance.`
    }
};

// Barrier Jacket Styles
const barrierJacketStyles = {
    ballroom: {
        name: 'Victorian Ballroom Gown',
        cost: 5,
        description: `The Victorian Ballroom Gown style evokes the elegance and sophistication of 19th-century high society, featuring flowing fabrics, intricate lace details, and a silhouette that combines modesty with undeniable grace. This Barrier Jacket provides substantial magical protection while maintaining the appearance of formal evening wear appropriate for the most prestigious social gatherings. The gown's layers of fabric are reinforced with mana-infused threads that can deflect physical attacks and absorb magical energy without compromising the garment's beautiful appearance.

The Victorian Ballroom Gown is particularly favored by mages who move in high society or who wish to project an image of refinement and sophistication while maintaining their combat readiness. The gown's design includes hidden pockets and compartments for storing magical items and tools, and the fabric can shift and adapt to provide additional protection in combat situations. The magical reinforcement is seamlessly integrated into the garment's construction, allowing the mage to move with unrestricted freedom while benefiting from substantial defensive capabilities.

This Barrier Jacket style is ideal for mages who value elegance and social presentation alongside their magical capabilities, providing both protection and the ability to fit seamlessly into formal social settings. The Victorian Ballroom Gown demonstrates that magical protection need not come at the expense of beauty or social appropriateness, allowing mages to maintain their dignity and grace even in the midst of dangerous situations.`
    },
    military: {
        name: 'Military Uniform',
        cost: 5,
        description: `The Military Uniform style draws inspiration from formal military dress uniforms across various cultures and eras, featuring crisp lines, precise tailoring, and authoritative design elements that command respect and convey discipline. This Barrier Jacket provides excellent magical protection while presenting the mage as a figure of authority and military precision. The uniform's structure is reinforced with mana-infused materials that offer superior protection against both physical and magical attacks while maintaining the sharp, professional appearance of military dress.

The Military Uniform is particularly favored by mages who serve in military organizations, law enforcement, or who wish to project an image of authority and disciplined professionalism. The uniform includes rank insignia, medals, and other decorative elements that can be customized to reflect the mage's achievements and affiliations. The magical reinforcement is integrated into the uniform's structure, providing protection that doesn't interfere with the precise movements required for military-style combat and tactical operations.

This Barrier Jacket style is ideal for mages who value authority, discipline, and the projection of professional competence alongside their magical capabilities. The Military Uniform provides both protection and the ability to command respect in formal and operational settings, making it perfect for mages who serve in official capacities or who wish to present themselves as disciplined, authoritative figures.`
    },
    tactical: {
        name: 'Sleek Tactical Suit',
        cost: 5,
        description: `The Sleek Tactical Suit style represents the cutting edge of magical protective technology, featuring form-fitting design, advanced materials, and integrated systems that maximize both protection and mobility in combat situations. This Barrier Jacket provides exceptional magical protection while allowing for unrestricted movement and tactical flexibility. The suit's design incorporates mana-infused composite materials that offer superior defense against both physical and magical attacks while maintaining a lightweight, streamlined profile that doesn't hinder the mage's agility.

The Sleek Tactical Suit is particularly favored by mages who specialize in combat operations, tactical engagements, or who require maximum mobility and protection in dangerous situations. The suit includes integrated systems for mana management, communication, and tactical analysis, providing the mage with real-time information and enhanced capabilities during combat. The magical reinforcement is distributed throughout the suit's structure, providing comprehensive protection without compromising the suit's sleek, professional appearance.

This Barrier Jacket style is ideal for mages who value tactical advantage, mobility, and cutting-edge protective technology alongside their magical capabilities. The Sleek Tactical Suit provides both protection and enhanced operational capabilities, making it perfect for mages who engage in frequent combat or who operate in high-risk environments where both protection and mobility are essential.`
    },
    royal: {
        name: 'Royal Court Dress',
        cost: 5,
        description: `The Royal Court Dress style embodies the opulence and grandeur of royal attire throughout history, featuring luxurious fabrics, elaborate embroidery, precious materials, and design elements that proclaim nobility and high status. This Barrier Jacket provides substantial magical protection while presenting the mage as royalty or nobility, commanding awe and respect from all who behold them. The dress's construction incorporates mana-infused precious materials that offer exceptional protection while maintaining the extravagant appearance appropriate for royal courts and formal ceremonies.

The Royal Court Dress is particularly favored by mages of noble birth, those who serve royal households, or who wish to project an image of supreme authority and aristocratic elegance. The dress includes elaborate decorations, family crests, and royal symbols that can be customized to reflect the mage's heritage and status. The magical reinforcement is seamlessly integrated into the garment's luxurious construction, allowing the mage to move with regal grace while benefiting from powerful defensive capabilities.

This Barrier Jacket style is ideal for mages who value nobility, grandeur, and the projection of supreme authority alongside their magical capabilities. The Royal Court Dress provides both protection and the ability to command respect in the most formal and prestigious settings, making it perfect for mages who move in royal circles or who wish to present themselves as figures of ultimate authority.`
    },
    scholar: {
        name: "Scholar's Robes",
        cost: 5,
        description: `The Scholar's Robes style draws inspiration from academic and mystical traditions throughout history, featuring flowing robes, intricate symbols, and design elements that convey wisdom, knowledge, and magical expertise. This Barrier Jacket provides reliable magical protection while presenting the mage as a learned scholar and practitioner of the magical arts. The robes' fabric is infused with mana-conductive materials that offer good protection against both physical and magical attacks while maintaining the dignified appearance appropriate for academic and research settings.

The Scholar's Robes are particularly favored by mages who dedicate themselves to magical research, teaching, or the pursuit of arcane knowledge. The robes include pockets and compartments for storing books, scrolls, magical tools, and research materials, and are often adorned with symbols of magical significance that reflect the mage's areas of expertise. The magical reinforcement is integrated into the robes' structure, providing protection that doesn't interfere with the mage's ability to study, research, or teach.

This Barrier Jacket style is ideal for mages who value knowledge, learning, and the projection of scholarly expertise alongside their magical capabilities. The Scholar's Robes provide both protection and the ability to move comfortably in academic and research environments, making them perfect for mages who dedicate their lives to the advancement of magical knowledge and understanding.`
    },
    aristocratic: {
        name: 'Aristocratic Evening Wear',
        cost: 5,
        description: `The Aristocratic Evening Wear style combines the elegance of high society with the refined sophistication of aristocratic culture, featuring impeccable tailoring, luxurious materials, and design elements that convey wealth, taste, and social standing. This Barrier Jacket provides substantial magical protection while presenting the mage as a member of the aristocracy, fitting seamlessly into the most exclusive social gatherings. The garments' construction incorporates mana-infused luxury materials that offer excellent protection while maintaining the refined appearance appropriate for aristocratic circles.

The Aristocratic Evening Wear is particularly favored by mages of noble birth, wealthy backgrounds, or who wish to project an image of refined wealth and social superiority. The garments include subtle family crests, aristocratic symbols, and design elements that reflect the mage's heritage and status. The magical reinforcement is seamlessly integrated into the luxurious construction, allowing the mage to move with aristocratic grace while benefiting from powerful defensive capabilities.

This Barrier Jacket style is ideal for mages who value refinement, social standing, and the projection of aristocratic elegance alongside their magical capabilities. The Aristocratic Evening Wear provides both protection and the ability to fit seamlessly into high society, making it perfect for mages who move in exclusive social circles or who wish to present themselves as figures of refined wealth and taste.`
    },
    combat: {
        name: 'Combat-Ready Ensemble',
        cost: 5,
        description: `The Combat-Ready Ensemble style prioritizes functionality and protection above all else, featuring reinforced materials, practical design elements, and integrated systems that maximize combat effectiveness and survivability in dangerous situations. This Barrier Jacket provides exceptional magical protection while allowing for optimal combat performance and tactical flexibility. The ensemble's design incorporates mana-infused combat materials that offer superior defense against both physical and magical attacks while maintaining a practical, no-nonsense appearance suited for serious combat operations.

The Combat-Ready Ensemble is particularly favored by mages who specialize in combat, military operations, or who frequently find themselves in dangerous situations where protection is paramount. The ensemble includes integrated armor plating, tactical systems, and combat utilities that enhance the mage's combat capabilities and survivability. The magical reinforcement is distributed throughout the ensemble's structure, providing comprehensive protection without compromising combat mobility or effectiveness.

This Barrier Jacket style is ideal for mages who value combat effectiveness, survivability, and practical protection above all other considerations. The Combat-Ready Ensemble provides both maximum protection and enhanced combat capabilities, making it perfect for mages who engage in frequent combat or who operate in extremely dangerous environments where survival depends on superior protection.`
    },
    ceremonial: {
        name: 'Mystical Ceremonial Attire',
        cost: 5,
        description: `The Mystical Ceremonial Attire style draws inspiration from ancient mystical and religious traditions, featuring flowing robes, intricate symbolic patterns, sacred materials, and design elements that convey deep spiritual significance and magical power. This Barrier Jacket provides substantial magical protection while presenting the mage as a mystical practitioner or religious figure, inspiring awe and reverence in observers. The attire's construction incorporates mana-infused sacred materials that offer powerful protection while maintaining the mystical appearance appropriate for ceremonies and rituals.

The Mystical Ceremonial Attire is particularly favored by mages who follow specific mystical traditions, serve in religious or ceremonial roles, or who wish to project an image of deep spiritual power and connection to the magical realms. The attire includes sacred symbols, ritual implements, and design elements that reflect the mage's spiritual path and magical traditions. The magical reinforcement is integrated into the sacred construction, providing protection that enhances rather than detracts from the mystical appearance.

This Barrier Jacket style is ideal for mages who value spiritual significance, mystical power, and the projection of deep magical connection alongside their protective capabilities. The Mystical Ceremonial Attire provides both protection and the ability to participate in sacred ceremonies and rituals, making it perfect for mages who follow specific mystical traditions or who serve in religious or ceremonial capacities.`
    },
    street: {
        name: 'Modern Street Style',
        cost: 5,
        description: `The Modern Street Style embraces contemporary fashion trends and urban aesthetics, featuring stylish casual wear, bold design elements, and a look that fits seamlessly into modern city environments while providing magical protection. This Barrier Jacket provides reliable magical protection while allowing the mage to blend into urban settings and move comfortably through modern society. The garments' construction incorporates mana-infused modern materials that offer good protection against both physical and magical attacks while maintaining the casual, stylish appearance of contemporary street fashion.

The Modern Street Style is particularly favored by mages who live and operate in modern urban environments, who value blending in with contemporary society, or who prefer a casual, relaxed appearance while maintaining their magical capabilities. The garments include practical pockets, modern design elements, and styling that reflects current fashion trends while incorporating magical reinforcement. The protection is integrated into the modern construction, allowing the mage to move naturally through urban environments while benefiting from reliable defensive capabilities.

This Barrier Jacket style is ideal for mages who value contemporary style, urban integration, and the ability to blend into modern society alongside their magical capabilities. The Modern Street Style provides both protection and the ability to move comfortably through modern city life, making it perfect for mages who live and work in urban environments or who prefer a casual, contemporary appearance.`
    },
    traditional: {
        name: 'Ancient Traditional Garb',
        cost: 5,
        description: `The Ancient Traditional Garb style draws inspiration from the clothing of ancient civilizations and traditional cultures throughout history, featuring time-honored designs, traditional materials, and cultural elements that convey connection to heritage and ancient wisdom. This Barrier Jacket provides substantial magical protection while presenting the mage as a keeper of ancient traditions and cultural heritage. The garments' construction incorporates mana-infused traditional materials that offer excellent protection while maintaining the authentic appearance of ancient cultural attire.

The Ancient Traditional Garb is particularly favored by mages who come from traditional cultures, who value their heritage and ancestry, or who wish to honor ancient traditions through their magical attire. The garments include traditional patterns, cultural symbols, and design elements that reflect specific cultural heritages and ancient traditions. The magical reinforcement is integrated into the traditional construction, providing protection that enhances rather than detracts from the authentic cultural appearance.

This Barrier Jacket style is ideal for mages who value cultural heritage, ancient traditions, and the projection of connection to ancestral wisdom alongside their magical capabilities. The Ancient Traditional Garb provides both protection and the ability to honor and express cultural identity, making it perfect for mages who come from traditional backgrounds or who wish to connect with ancient cultural traditions.`
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
    "Tier 8: Tremendous enhancement increases speed ten-fold. <em>Example: You move fast enough to run across water for several seconds before surface tension fails, traverse vertical surfaces with momentum alone, and your combat speed exceeds what standard targeting systems can lock onto. You can engage multiple opponents in the time it takes one to complete a single defensive motion, and your afterimages are convincing enough to draw attacks. Dodging individual bullets is reliable; only fully automatic sustained fire from multiple angles can pin you down.</em>",
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
"Tier 7: Extraordinary enhancement quintuples your strength. <em>Example: You can flip a car with a solid grip, throw a motorcycle across a street, and your punches crater concrete on impact. A full-power strike sends shockwaves through structures—enough to crack load-bearing walls. You could hold back a closing blast door through sheer force or tear a locked steel gate off its hinges. In combat, your blows hit with the force of small explosive charges.</em>",
    "Tier 8: Tremendous enhancement increases strength ten-fold. <em>Example: You can throw vehicles like softball pitches, deadlift objects weighing tens of tons, and your sustained strikes can bring down a reinforced building over the course of a fight. A casual backhand sends a person tumbling across a room. You can manually dig through earthen walls, crush steel I-beams in your grip, and your shockwave-generating punches become a reliable area-denial tool. Your raw output approaches the limit of what a human frame—reinforced by magic—can channel without self-injury.</em>",
    "Tier 9: Overwhelming enhancement provides twenty-fold improvement. <em>Example: You can tear through reinforced bunker walls with sustained effort, lift and throw heavy vehicles one-handed, and your strikes generate shockwaves that shatter windows across a block. A focused barrage can collapse a large structure—given time and a clear angle. Your grip can crush military-grade composites, and you can hold your ground against forces that would send lesser mages flying. You represent a mobile demolition force, bounded by the time and leverage needed to apply your strength to large targets.</em>",
    "Tier 10: Ultimate strength pushes the practical ceiling of personal-scale force multiplication. <em>Example: You can lift and throw objects weighing dozens of tons, your strikes can destabilize multi-story structures through transferred force, and your grip crushes anything short of high-tier magically reinforced materials. Shockwaves from your full-power blows are a tactical weapon in their own right. You represent the practical ceiling of device-augmented physical strength—powerful enough to demolish any personal-scale obstacle or opponent, but not so strong that you level city blocks with a punch. Further investment beyond this tier yields diminishing returns as device processing and mana-channel capacity become the binding constraints.</em>"
    ],
    sense: [
        "Tier 0: Baseline human sensory capabilities. <em>You perceive the world through normal human senses—reading standard text clearly, hearing conversations in quiet rooms, distinguishing common scents and flavors, feeling obvious textures and temperatures.</em>",
        "Tier 1: Slight sensory enhancement providing 10% improvement. <em>Example: You can read smaller text without squinting, hear whispered conversations from across a room, detect subtle scents others miss (like gas leaks before they become obvious), and feel the grain patterns in wood through touch. You notice when people are approaching before they appear.</em>",
        "Tier 2: Moderate enhancement grants 25% improvement. <em>Example: You can read license plates from 100+ yards away, hear distinct conversations through thin walls, identify specific ingredients in complex dishes by taste, and detect temperature differences of a few degrees by touch. You can see well enough in moonlight to navigate without artificial light.</em>",
        "Tier 3: Significant enhancement provides 50% improvement. <em>Example: You can read street signs from quarter-mile distances, hear heartbeats of people standing near you, track animals by scent like a bloodhound, and feel air currents with enough precision to sense when someone moves nearby. Your night vision rivals that of nocturnal predators.</em>",
        "Tier 4: Substantial enhancement grants 75% improvement. <em>Example: You can read newspapers from across football fields, hear conversations through concrete walls, detect individual chemical components in the air by smell, and sense vibrations through your feet well enough to detect approaching vehicles blocks away. You can see infrared heat signatures with concentration.</em>",
        "Tier 5: Major enhancement doubles your senses. <em>Example: You perceive individual raindrops in a storm, hear cell phone conversations from blocks away, identify people by their unique scent from rooms they left hours ago, and sense electrical fields around active devices. You can see ultraviolet spectrum patterns invisible to normal humans.</em>",
        "Tier 6: Exceptional enhancement triples your senses. <em>Example: You can count individual blades of grass in a distant lawn, hear someone's pulse rate and detect lies from subtle changes, smell emotional states through pheromone changes, and feel air pressure changes that predict weather hours in advance. You perceive electromagnetic fields and radio waves as tangible sensations.</em>",
"Tier 7: Extraordinary enhancement quintuples your senses. <em>Example: You can track individual mana signatures across a district, hear conversations through concrete walls, and identify chemical compounds by scent alone. Your night vision is flawless—you navigate pitch-darkness as easily as daylight. You can detect the faint mana traces left behind by spellcasting, reading the residue to determine what kind of magic was used and roughly how long ago. Magical phenomena within your range register as clearly as a sound or a color.</em>",
    "Tier 8: Tremendous enhancement increases senses ten-fold. <em>Example: You perceive magical energy as a vivid overlay on the physical world—ley lines glow like rivers, active spells shine with distinct colors, and mana signatures stand out like beacons across city-scale ranges. You can see through most illusions by detecting the discrepancy between the magical construct and the underlying reality. Subtle environmental cues—air pressure shifts, minute vibrations, thermal gradients—provide a comprehensive tactical picture that makes ambush extremely difficult against you.</em>",
    "Tier 9: Overwhelming enhancement provides twenty-fold improvement. <em>Example: Your magical perception extends across wide operational ranges, detecting spell routines, dimensional disturbances, and mana fluctuations at considerable distance. You can identify and catalog magical signatures on contact, and your device cross-references observed patterns against known spell databases in real time. Physical senses are equally sharp—you can track individuals by scent through a crowded city, detect the electromagnetic emissions of active devices, and read the mana flow in a living body well enough to diagnose injuries or assess combat readiness.</em>",
    "Tier 10: Ultimate sensory enhancement approaches the practical ceiling of device-mediated perception. <em>Example: You maintain comprehensive awareness of both physical and magical phenomena across your entire operational range simultaneously. Your device processes sensory input from the full electromagnetic spectrum alongside magical detection, delivering a fused awareness that leaves few gaps. You can detect hidden threats, track multiple targets, and analyze magical phenomena in real time. Further investment beyond this tier yields diminishing returns as your perception is limited primarily by your device's sensory processing throughput and mana-channel bandwidth rather than the sensitivity of your augmented senses.</em>"
    ],
    dexterity: [
        "Tier 0: Baseline human dexterity and coordination. <em>You can perform everyday tasks like tying shoes, writing, using utensils, and maintaining balance on flat surfaces without difficulty.</em>",
        "Tier 1: Slight enhancement providing 10% improvement to fine motor control. <em>Example: Your handwriting becomes noticeably neater, you can thread needles without effort, perform card tricks with practice, and maintain balance on narrow ledges (6+ inches wide). You rarely drop things accidentally and can catch objects tossed to you more reliably.</em>",
        "Tier 2: Moderate enhancement grants 25% improvement. <em>Example: You can pick locks with basic tools given time, perform sleight-of-hand convincingly, walk across 2-inch wide beams confidently, and type 100+ WPM with minimal errors. Your knife skills in the kitchen approach professional chef level, and you can juggle three objects indefinitely.</em>",
        "Tier 3: Significant enhancement provides 50% improvement. <em>Example: You can perform precision work requiring steady hands (like microsurgery or watchmaking), walk across tightropes, execute complex gymnastics routines, and catch arrows from the air with practice. Your hand-eye coordination allows you to hit moving targets with thrown weapons reliably.</em>",
        "Tier 4: Substantial enhancement grants 75% improvement. <em>Example: You can perform acrobatic feats that defy normal human ability\u2014running along clotheslines, catching bullets (with proper tools), performing mid-air flips with perfect rotation control, and walking on icy surfaces without slipping. You could defuse bombs manually or perform surgery while the patient is in a moving vehicle.</em>",
        "Tier 5: Major enhancement doubles your dexterity. <em>Example: You can walk across single wires, dodge attacks while performing backflips, juggle a dozen objects in complex patterns, and perform precision tasks that seem superhuman\u2014like removing individual grains of sand from a pile without disturbing others. Your balance is so perfect you could stand on a basketball while someone rolls it.</em>",
        "Tier 6: Exceptional enhancement triples your dexterity. <em>Example: You can walk on water briefly by distributing weight perfectly across surface tension, dodge automatic weapon fire by reading bullet trajectories, perform gymnastics that would make Olympic athletes seem clumsy, and manipulate objects with toes as precisely as most people use fingers. You could walk across a taut thread while juggling knives.</em>",
        "Tier 7: Extraordinary enhancement quintuples your dexterity. <em>Example: You can walk across a taut wire in a windstorm, deflect thrown knives out of the air with a blade, and perform acrobatic sequences that would make Olympic gymnasts stare. Your fine motor control allows you to disassemble and reassemble a mechanical watch in under a minute, pick locks by touch, and execute surgical procedures under combat conditions. Your balance is superhuman—any surface that can bear your weight is stable ground.</em>",
        "Tier 8: Tremendous enhancement increases dexterity ten-fold. <em>Example: You can deflect individual bullets with a blade by reading firing patterns and positioning your weapon in their path—predictive parrying rather than raw reaction. You can run across narrow surfaces—pipes, railings, fence lines—at full speed without breaking stride. Precision tasks that normally require tools can be performed freehand: shaping metal by bending it with perfectly applied force, threading a needle on the first try while sprinting. Your movements flow with an economy of motion that makes every action look effortless.</em>",
        "Tier 9: Overwhelming enhancement provides twenty-fold improvement. <em>Example: You can parry automatic weapons fire with a melee weapon through a combination of pattern prediction and blade positioning, maintain perfect equilibrium during acrobatics that would disorient any unaugmented human, and perform precision actions—defusing explosives, surgical procedures, lock manipulation—at combat speed without error. You can fight effectively in zero-visibility conditions, relying on tactile feedback and spatial memory to track your surroundings and opponents. Your body simply does what you intend, every time.</em>",
        "Tier 10: Ultimate dexterity enhancement approaches the practical ceiling of physical coordination. <em>Example: Your body responds to intent with near-zero effective latency for combat purposes—thought and action are effectively simultaneous. You can perform precision tasks at the limits of what your device's motor-control augmentation allows, dodge supersonic projectiles through predictive movement reading and pre-positioning, and maintain perfect balance on any surface that can physically support you. Further investment beyond this tier yields diminishing returns as your coordination approaches the theoretical maximum of what device-augmented humanoid motor systems can achieve.</em>"
    ],
    intelligence: [
        "Tier 0: Baseline human intelligence. <em>You learn and think at normal human speeds, might master a new skill in months to years of practice, and remember important information with typical human recall (sometimes forgetting names, dates, or details).</em>",
        "Tier 1: Slight enhancement providing 10% improved cognition. <em>Example: You can learn new skills noticeably faster than before—picking up new languages with a few months of dedicated study, remembering most of what you read the first time, and solving puzzles more quickly. You rarely forget important appointments or names after being introduced.</em>",
        "Tier 2: Moderate enhancement grants 25% improvement. <em>Example: You can read and comprehend college textbooks at twice normal speed with full retention, learn new languages in weeks rather than months, solve complex math problems mentally that others need calculators for, and remember specific details from conversations weeks ago. You could get a PhD in 2-3 years.</em>",
        "Tier 3: Significant enhancement provides 50% improvement. <em>Example: You can speed-read entire books in an hour with complete comprehension, master new skills in days rather than months, devise complex strategies considering dozens of variables simultaneously, and recall specific dates, names, and details from years past. You could become an expert in a new field within months.</em>",
        "Tier 4: Substantial enhancement grants 75% improvement. <em>Example: You can read entire libraries in weeks, learn new languages in days, perform complex calculations faster than computers for certain problems, and possess near-photographic memory. You grasp advanced physics concepts that take normal humans years to understand within hours. You could master multiple doctorates simultaneously.</em>",
        "Tier 5: Major enhancement doubles intelligence. <em>Example: You can absorb and integrate information at superhuman speeds—reading entire encyclopedias in a day with perfect recall, becoming fluent in languages overnight, seeing patterns in chaos that elude others, and possessing truly photographic memory. You could revolutionize multiple scientific fields.</em>",
        "Tier 6: Exceptional enhancement triples intelligence. <em>Example: You process information like a supercomputer—analyzing millions of data points simultaneously, predicting outcomes with eerie accuracy, mastering any skill in hours, and never forgetting anything you experience. You could solve problems that stump entire research teams in moments and comprehend alien technologies or magic systems almost immediately.</em>",
        "Tier 7: Extraordinary enhancement quintuples intelligence. <em>Example: You process tactical situations with the speed and depth of a seasoned command staff. Complex problems that stump research teams can be cracked in days of focused effort. You learn new fields rapidly—a few weeks of study brings you to professional competence. Your memory is near-perfect for everything you consciously attend to, and your device maintains a cross-referenced knowledge base that makes connections across disciplines a normal human could never see.</em>",
        "Tier 8: Tremendous enhancement increases intelligence ten-fold. <em>Example: You can coordinate multiple simultaneous operations in your head—tracking a firefight, planning a spell sequence, and analyzing an opponent's weaknesses all at once. You synthesize information from unrelated fields into novel insights, reverse-engineer unfamiliar magical systems given sufficient observation, and predict opponent behavior with high accuracy. Learning a new discipline takes days rather than months, and your analytical capability exceeds what any unaugmented human—no matter how brilliant—could achieve.</em>",
        "Tier 9: Overwhelming enhancement provides twenty-fold improvement. <em>Example: Your cognitive processing handles thousands of variables simultaneously, running complex probability assessments and tactical evaluations in real time. You can reverse-engineer foreign magical systems given study samples, identify patterns in chaotic data sets that would elude conventional analysis, and maintain perfect recall of everything you have personally experienced or studied. Your mind operates as a strategic asset—you see the shape of conflicts and problems before others have finished framing them.</em>",
        "Tier 10: Ultimate intelligence approaches the practical ceiling of cognition enhancement. <em>Example: You comprehend and integrate complex systems across multiple disciplines simultaneously. You can predict outcomes of large-scale events through exhaustive probability modeling, learn and master new fields of study within days, and your memory retains everything with perfect fidelity across your entire lifespan. You could make significant contributions to multiple scientific fields in parallel. Further investment beyond this tier yields diminishing returns as your cognitive enhancement approaches the theoretical maximum of what mana-channel-mediated neural augmentation can achieve.</em>"
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
        "Tier 0 represents baseline processing capabilities without any enhancement, allowing for basic spell routine execution and simple AGI functions appropriate for entry-level Intelligent Devices. <em>Example: Your device can run one spell routine at a time with noticeable lag between cast and effect. The AGI provides simple voice confirmations and basic status readouts but cannot offer tactical advice or real-time analysis.</em>",
        "Tier 1 provides slight enhancement to processing speed and computational power, allowing for approximately 10% faster spell routine execution and slightly improved AGI responsiveness. <em>Example: Your device shaves precious milliseconds off spell activation, noticeable in rapid-fire situations where every moment counts. The AGI begins to anticipate basic requests, preloading commonly used routines before you consciously command them.</em>",
        "Tier 2 provides moderate enhancement to processing speed and computational power, allowing for approximately 25% faster spell routine execution and noticeably improved AGI responsiveness. <em>Example: Spell routines execute smoothly enough that you can chain two spells in quick succession without the device needing a cooldown cycle. The AGI can track multiple targets simultaneously and provide basic threat assessment.</em>",
        "Tier 3 provides significant enhancement to processing speed and computational power, allowing for approximately 50% faster spell routine execution and substantially improved AGI responsiveness. <em>Example: Your device executes combat spells at half the normal casting time, giving you a decisive edge against opponents with lower-tier processing. The AGI analyzes enemy patterns mid-combat and offers tactical recommendations in real-time.</em>",
        "Tier 4 provides substantial enhancement to processing speed and computational power, allowing for approximately 75% faster spell routine execution and dramatically improved AGI responsiveness. <em>Example: Spell routines execute so quickly that the delay between your intent and the magical effect becomes nearly imperceptible. Your AGI manages environmental data, threat vectors, and friendly positioning simultaneously, presenting tactical overlays directly to your perception.</em>",
        "Tier 5 provides major enhancement to processing speed and computational power, allowing for approximately twice the spell routine execution speed and nearly instantaneous AGI responsiveness. <em>Example: Your device executes spell routines twice as fast as baseline. Combat calculations that once took fractions of a second are now near-instant, and the AGI can manage three to four concurrent spell effects without performance degradation.</em>",
        "Tier 6 provides exceptional enhancement to processing speed and computational power, allowing for approximately three times the spell routine execution speed and supernatural AGI responsiveness. <em>Example: Your device processes multiple spell routines in parallel, allowing you to maintain defensive barriers while casting offensive spells simultaneously with no performance hit. The AGI predicts enemy actions based on micro-expressions and combat patterns, warning you before attacks begin.</em>",
        "Tier 7 provides extraordinary enhancement to processing speed and computational power, allowing for approximately five times the spell routine execution speed and highly responsive AGI capabilities. <em>Example: Your device processes complex multi-target engagements fluidly, tracking a dozen threats and optimizing your spell output against each. The AGI anticipates your tactical intent with impressive accuracy, preloading spell routines and adjusting defensive parameters before you consciously command them. Enemy spell patterns are analyzed and countermeasures suggested in real time—though you still make the final call on deployment.</em>",
        "Tier 8 provides tremendous enhancement to processing speed and computational power, allowing for approximately ten times the spell routine execution speed and sophisticated AGI capabilities. <em>Example: Your device operates as a genuine tactical partner, handling spell-routine management, environmental monitoring, and defensive coordination autonomously while you focus on strategy. The AGI can run predictive models on opponent behavior based on observed patterns, flagging likely attack vectors before they develop. Multiple concurrent spell effects are managed seamlessly—barriers, offensive routines, and utility spells all maintained without performance degradation.</em>",
        "Tier 9 provides overwhelming enhancement to processing speed and computational power, allowing for approximately twenty times the spell routine execution speed and near-autonomous AGI capabilities. <em>Example: Your device executes spell routines with near-zero latency between intent and effect. The AGI manages the tactical layer of combat—spell selection, defensive positioning, resource allocation—while you operate at the strategic level. Enemy spell routines are identified and categorized the moment they begin forming, and optimal counter-responses are queued and waiting for your confirmation. You think about what you want to achieve; the device handles how.</em>",
        "Tier 10 provides ultimate enhancement to processing speed and computational power, allowing for the practical ceiling of spell routine execution speed. <em>Example: Your device processes spell routines at the practical limits of magical computation. Casting and effect become near-simultaneous—the latency between spell conception and manifestation approaches the physical minimum. The AGI functions as a seamless extension of your tactical cognition, processing thousands of combat variables in parallel and executing optimized responses with sub-millisecond reaction times. Further investment beyond this tier yields diminishing returns as your processing speed approaches the hard limits of mana-channel throughput and computational architecture that current magitech theory permits.</em>"
    ],
    weave: [
        "Tier 0 represents baseline spell construction capabilities without any enhancement, allowing for basic spell routine weaving and simple mana manipulation appropriate for entry-level Intelligent Devices. <em>Example: Your device constructs spell routines with significant mana bleed—roughly 30% of each casting's energy dissipates as waste. Sustained casting drains your Mana Reactor rapidly, limiting engagements to short bursts.</em>",
        "Tier 1 provides slight enhancement to spell construction quality and mana efficiency, allowing for approximately 10% more efficient spell routines and slightly improved mana utilization. <em>Example: Your device tightens mana channel pathways enough that you notice your reactor lasting longer in sustained casting—perhaps one extra spell before needing recovery. The weave quality improvement means fewer misfires and less mana lost to environmental bleed.</em>",
        "Tier 2 provides moderate enhancement to spell construction quality and mana efficiency, allowing for approximately 25% more efficient spell routines and noticeably improved mana utilization. <em>Example: Spells manifest with cleaner edges and tighter energy containment. Fireballs maintain coherent shape longer in flight, barrier spells distribute impact force more evenly across their surface, and your reactor sustains combat for noticeably longer before depletion warnings trigger.</em>",
        "Tier 3 provides significant enhancement to spell construction quality and mana efficiency, allowing for approximately 50% more efficient spell routines and substantially improved mana utilization. <em>Example: Your device constructs spell routines that waste half as much mana as baseline devices. In practical combat, this means you can maintain sustained offensive or defensive operations roughly twice as long as comparably ranked mages with lesser weave optimization before your reactor needs recovery time.</em>",
        "Tier 4 provides substantial enhancement to spell construction quality and mana efficiency, allowing for approximately 75% more efficient spell routines and dramatically improved mana utilization. <em>Example: Mana bleed from your spell routines becomes negligible. Your device constructs spells so cleanly that you can cast continuously for extended engagements without reactor strain, and your spells hit with noticeably more impact because less energy dissipates during formation and travel.</em>",
        "Tier 5 provides major enhancement to spell construction quality and mana efficiency, allowing for approximately twice the spell routine efficiency and nearly perfect mana utilization. <em>Example: Spells cast with approximately half the normal mana cost. Your device optimizes mana channel pathways so efficiently that what once exhausted your reactor in minutes can now be sustained through extended engagements with reserves to spare.</em>",
        "Tier 6 provides exceptional enhancement to spell construction quality and mana efficiency, allowing for approximately three times the spell routine efficiency and supernatural mana utilization. <em>Example: Your device constructs spell routines of such quality that they visibly outperform identical spells cast through lesser devices—fire burns hotter, barriers hold longer, and phenomena manifest with sharper, more defined edges. Ambient mana in the environment is drawn into your spells, partially subsidizing their cost.</em>",
        "Tier 7 provides extraordinary enhancement to spell construction quality and mana efficiency, allowing for approximately three times the spell routine efficiency and highly optimized mana utilization. <em>Example: Your spell routines achieve efficiency ratios that noticeably outperform baseline devices. Each unit of mana produces roughly three times the effect, allowing you to sustain combat operations significantly longer than mages with comparable reactors but lesser weave optimization. Your spells manifest with tighter energy containment and sharper definition—fire burns hotter, barriers hold firmer, and phenomena manifest with cleaner edges. Ambient mana in the environment is drawn in to partially supplement your casting, reducing effective mana cost for routine operations.</em>",
        "Tier 8 provides tremendous enhancement to spell construction quality and mana efficiency, allowing for approximately four times the spell routine efficiency and exceptional mana utilization. <em>Example: Mana waste from your spell routines is minimal. You can sustain high-output casting through extended engagements with reserves to spare—what would exhaust a mage with a lesser device in minutes becomes a manageable expenditure. Your device actively recovers ambient mana from your own spell emissions, creating a partial feedback loop that stretches your effective mana pool considerably. Spell quality is visibly superior: barriers are denser, attacks are more focused, and utility effects operate with precision that lesser devices cannot replicate.</em>",
        "Tier 9 provides overwhelming enhancement to spell construction quality and mana efficiency, allowing for very high spell routine efficiency and near-optimal mana utilization. <em>Example: Your device constructs spell routines of such quality that every unit of mana produces close to its maximum possible effect. Mana waste is reduced to negligible levels, and environmental mana recovery substantially subsidizes your casting cost. You can cast at magnitudes that would normally require reactors a rank or two higher than yours, and sustained high-output operations remain viable through long engagements. The difference between your spell output and a comparable mage's is dramatic—same mana, dramatically more effect.</em>",
        "Tier 10 provides ultimate enhancement to spell construction quality and mana efficiency, allowing for the practical ceiling of spell routine optimization. <em>Example: Your device achieves near-optimal weave efficiency—every unit of mana produces very close to its theoretical maximum effect with minimal loss. Spells cast through your device are works of precision engineering, manifesting with consistently optimal parameters. You can sustain high-output casting for extended periods, limited primarily by your reactor's generation rate rather than consumption efficiency. Further investment beyond this tier yields diminishing returns as your mana utilization approaches the hard limits of spell-routine optimization that current magitech theory permits.</em>"
    ],
    barrier: [
        "Tier 0 represents baseline defensive capabilities without any enhancement, allowing for basic barrier spell routine execution and simple protective functions appropriate for entry-level Intelligent Devices. <em>Example: Your Barriers can deflect small arms fire and blunt physical impacts but will shatter under sustained automatic weapons or direct magical attacks. Barrier deployment requires conscious activation and cannot respond to surprise attacks.</em>",
        "Tier 1 provides slight enhancement to defensive strength and barrier durability, allowing for approximately 10% stronger barriers and slightly improved protection against attacks. <em>Example: Your Barriers survive a few extra rounds of gunfire or glancing spell impacts before failing. The AGI begins monitoring for incoming threats and suggests barrier activation when it detects imminent danger, shaving reaction time off your defensive responses.</em>",
        "Tier 2 provides moderate enhancement to defensive strength and barrier durability, allowing for approximately 25% stronger barriers and noticeably improved protection against attacks. <em>Example: Your Barriers can withstand sustained small arms fire for several seconds before showing stress fractures. Low-tier offensive spells (Tier 1-2) deflect harmlessly, and the barrier's regeneration cycle means minor damage repairs itself between attacks rather than accumulating.</em>",
        "Tier 3 provides significant enhancement to defensive strength and barrier durability, allowing for approximately 50% stronger barriers and substantially improved protection against attacks. <em>Example: Your Barriers absorb roughly half again as much punishment as baseline before failing. You can survive direct hits from Tier 3 offensive spells that would breach lesser barriers instantly, and the AGI proactively shifts barrier density toward incoming attack vectors for optimal deflection.</em>",
        "Tier 4 provides substantial enhancement to defensive strength and barrier durability, allowing for approximately 75% stronger barriers and dramatically improved protection against attacks. <em>Example: Your Barriers shrug off rifle-caliber rounds entirely and absorb Tier 4 offensive spells with manageable strain. The barrier's multi-layer construction means attacks must breach several defensive layers before reaching you, buying precious seconds for counter-attacks or repositioning.</em>",
        "Tier 5 provides major enhancement to defensive strength and barrier durability, allowing for approximately twice the barrier strength and nearly impenetrable protection. <em>Example: Your Barriers withstand twice the punishment of baseline defensive constructs. Tier 5 offensive spells, which would vaporize an unprotected human, strike your barrier and dissipate with enough remaining integrity to absorb follow-up attacks. Your AGI automatically deploys localized barrier reinforcement against each incoming attack vector independently.</em>",
        "Tier 6 provides exceptional enhancement to defensive strength and barrier durability, allowing for approximately three times the barrier strength and supernatural protection. <em>Example: Your Barriers can absorb sustained bombardment from multiple opponents simultaneously—three or four mages casting Tier 5 spells together cannot overwhelm your defenses before you eliminate them one by one. The barrier actively disperses absorbed energy rather than letting it accumulate as stress fractures.</em>",
        "Tier 7 provides extraordinary enhancement to defensive strength and barrier durability, allowing for very strong barriers that protect against serious magical threats. <em>Example: Your Barriers withstand sustained Tier 4-5 offensive fire without collapsing, and can absorb Tier 6 attacks with manageable strain. The barrier extends to protect nearby allies within a short radius, projecting a defensive dome that covers your immediate squad. The AGI proactively adjusts barrier density and composition against incoming attack vectors, and the barrier's regeneration cycle means minor damage is repaired between impacts rather than accumulating.</em>",
        "Tier 8 provides tremendous enhancement to defensive strength and barrier durability, allowing for exceptionally strong barriers that rival military-grade defensive installations. <em>Example: Your Barriers absorb Tier 5-6 offensive spells with manageable strain, and lower-tier attacks are effectively neutralized on contact. The device proactively intercepts incoming spell signatures and reinforces barrier sectors before attacks arrive, creating a dynamically adaptive defense that shifts strength to where it is needed most. Multi-layer barrier construction means attacks must punch through several defensive shells before reaching you, buying critical seconds for counterattacks or repositioning. The barrier can be extended to protect a full squad at reduced individual strength.</em>",
        "Tier 9 provides overwhelming enhancement to defensive strength and barrier durability, allowing for exceptionally durable barriers that withstand sustained heavy magical assault. <em>Example: Your Barriers represent the pinnacle of personal-scale defensive magic. Sustained bombardment from Tier 6-7 offensive spells can be absorbed with significant strain, and anything below that tier struggles to make meaningful progress against your defenses. The defensive matrix operates on multiple layers—kinetic absorption, thermal dispersion, mana-charge dissipation, and reactive reinforcement—each independently regenerating. Against overwhelming force, the barrier degrades gracefully rather than shattering, buying time for tactical retreat or reinforcement.</em>",
        "Tier 10 provides ultimate enhancement to defensive strength and barrier durability, allowing for the practical ceiling of barrier protection. <em>Example: Your Barriers represent the theoretical maximum of personal-scale defensive spell-routine architecture. Even high-tier offensive spells expend significant energy against your defensive layers before achieving penetration. Your barrier maintains integrity against sustained focus fire from multiple powerful opponents simultaneously, degrading under weight of fire but recovering during lulls. Further investment beyond this tier yields diminishing returns as your defensive constructs approach the hard limits of mana-channel throughput and spell-routine complexity that current magitech theory permits.</em>"
    ],
    structural: [
        "Tier 0 represents baseline structural integrity without any enhancement, allowing for basic device durability and simple repair capabilities appropriate for entry-level Intelligent Devices. <em>Example: Your device can survive everyday wear—drops, temperature fluctuations, and minor impacts—but a direct strike from a Knight's blade or a focused spell would shatter it beyond self-repair capacity. Damage requires external repair at a qualified facility.</em>",
        "Tier 1 provides slight enhancement to structural durability and repair rate, allowing for approximately 10% greater durability and slightly faster self-repair. <em>Example: Your device survives glancing blows and near-misses that would have chipped or cracked a baseline device. Surface-level damage like scratches and minor dents begins healing within minutes, and the device can self-repair superficial damage without external assistance.</em>",
        "Tier 2 provides moderate enhancement to structural durability and repair rate, allowing for approximately 25% greater durability and noticeably faster self-repair. <em>Example: Your device withstands moderate impacts—dropping it onto concrete from shoulder height leaves cosmetic marks that repair within the hour. Small cracks from combat stress seal themselves between engagements, and the device can continue operating with minor structural damage that would disable lesser units.</em>",
        "Tier 3 provides significant enhancement to structural durability and repair rate, allowing for approximately 50% greater durability and substantially faster self-repair. <em>Example: Your device survives impacts that would shatter baseline units into non-functional fragments. A direct strike from a Knight's weapon might crack the casing but won't penetrate to the core components, and the crack begins sealing within seconds while combat functions continue uninterrupted.</em>",
        "Tier 4 provides substantial enhancement to structural durability and repair rate, allowing for approximately 75% greater durability and dramatically faster self-repair. <em>Example: Your device endures battlefield conditions that would destroy lesser devices within minutes. Sustained magical bombardment, extreme temperatures, and physical impacts cause damage that repairs visibly fast—you can watch cracks seal and material regenerate in real-time during combat pauses.</em>",
        "Tier 5 provides major enhancement to structural durability and repair rate, allowing for approximately twice the durability and nearly instant self-repair. <em>Example: Your device withstands roughly twice the punishment of baseline constructs. Tier 5 offensive spells, which could reduce conventional equipment to slag, leave your device dented but fully functional. Damage that does penetrate begins repairing the moment it occurs, so a crack formed by one attack is half-healed before the follow-up lands.</em>",
        "Tier 6 provides exceptional enhancement to structural durability and repair rate, allowing for approximately three times the durability and supernatural self-repair. <em>Example: Your device approaches the durability of military-grade armored equipment while remaining palm-sized. It can be struck directly by Tier 6 offensive spells and remain operational, with the damage visibly regenerating in seconds. The device actively draws ambient Mana to fuel constant low-level structural regeneration even when not damaged.</em>",
        "Tier 7 provides extraordinary enhancement to structural durability and repair rate, allowing for extreme device toughness and very fast self-repair. <em>Example: Your device survives direct hits from Tier 5-6 offensive spells with severe but repairable damage—cracked casings seal within seconds, and the core components remain protected even when the outer shell is compromised. The device draws ambient mana to fuel constant low-level structural maintenance, keeping minor wear and stress damage from accumulating. Combat functionality is maintained through all but the most catastrophic impacts, and the device can re-establish full operational capacity from significant damage within minutes of disengagement.</em>",
        "Tier 8 provides tremendous enhancement to structural durability and repair rate, allowing for exceptional device resilience and near-instant self-repair. <em>Example: Your device withstands battlefield conditions that would destroy lesser devices several times over. Even when badly damaged—cracked, dented, or with components exposed—the self-repair protocols aggressively reconstruct critical pathways and structural elements. The device remains operational through sustained magical bombardment, with damaged sections being reinforced and rebuilt faster than new damage accumulates in most combat scenarios. Only a direct, focused attack specifically targeting the device's core stands a realistic chance of taking it offline.</em>",
        "Tier 9 provides overwhelming enhancement to structural durability and repair rate, allowing for extreme device survivability and self-repair capabilities. <em>Example: Your device sustains hits from high-tier offensive spells and remains functional, with severe damage being rapidly reconstructed by the self-repair matrix. Even when the device is partially shattered, the surviving fragments maintain core functionality and aggressively rebuild lost sections from available material and ambient mana. The device is effectively immune to destruction through incidental damage—only a concentrated, deliberate effort to destroy it from a comparably powered opponent poses a realistic threat. Recovery from near-destruction takes minutes rather than hours.</em>",
        "Tier 10 provides ultimate enhancement to structural durability and repair rate, allowing for the practical ceiling of device resilience. <em>Example: Your device represents the theoretical maximum of magitech structural engineering. It withstands sustained high-tier spell impacts, extreme environmental conditions, and heavy physical abuse while maintaining core functionality. The self-repair protocols reconstruct severe damage rapidly, and the device recovers from near-catastrophic harm within minutes given sufficient mana. Further investment beyond this tier yields diminishing returns as your device's durability approaches the hard limits of known material science and mana-channel structural reinforcement that current magitech theory permits.</em>"
    ]
};

// Spell Routines Data - This will be extensive with 90 spells (30 per category)
// Due to the large amount of content, I'll create a structure that can be easily expanded

const spellCategories = {
    physical: 'Physical',
    elemental: 'Elemental',
    esoteric: 'Esoteric'
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
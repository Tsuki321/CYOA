// Device Shape Descriptions for Mages CYOA
// Detailed descriptions for all 60 device shapes

const deviceShapeDescriptions = {
    // Knight Class Device Shapes
    knight: {
        longsword: {
            description: `The Longsword represents the classic weapon of the Knight class, a perfectly balanced blade combining reach, power, and versatility. Its form as an Intelligent Device allows for optimal mana channeling through its length, with the fuller serving as a conduit for magical energy that enhances cutting power and defensive capabilities.

The Longsword configuration emphasizes balanced combat, equally effective at offense and defense. Its design incorporates traditional sword geometry optimized for the channeling of Physical Enhancement spells, particularly those focused on blade enhancement and cutting power. The cross-guard functions as a spell focus, allowing for rapid barrier deployment during defensive maneuvers.

Knights who choose the Longsword often value adaptability and the ability to respond to any situation. The weapon's classical design carries cultural weight in mage society, representing traditional values and martial discipline that have defined the Knight class for centuries.`
        },
        katana: {
            description: `The Katana configuration presents a refined, single-edged blade optimized for drawing strikes and precision cutting. Its curved geometry creates a natural flow channel for mana, allowing for exceptionally fluid spell integration during combat. The blade's design emphasizes speed and technique over brute force.

As an Intelligent Device, the Katana excels at rapid-fire spell execution and smooth transitions between offensive and defensive modes. Its construction allows for iaido-style drawing techniques that incorporate spell casting into the motion of unsheathing, enabling devastating surprise attacks enhanced by accumulated magical energy.

Knights who favor the Katana typically embrace a combat philosophy emphasizing precision over power, using the blade's enhanced cutting ability to defeat opponents with a single, perfectly executed strike. The aesthetic elegance of this configuration appeals to those who view combat as an art form.`
        },
        broadsword: {
            description: `The Broadsword configuration produces a wide, powerful blade designed for overwhelming force and durability. Its broad surface area provides excellent mana distribution, creating a weapon capable of channeling massive amounts of magical energy for devastating strikes. The weapon's weight and construction emphasize power over finesse.

This Intelligent Device configuration excels at barrier-breaking and armor penetration, incorporating spell routines that increase striking force exponentially with each swing. The wide blade can also function as a mobile barrier, deflecting attacks and spells when properly enchanted through the device's defensive protocols.

Knights who choose the Broadsword typically embrace a direct, aggressive combat style. The weapon's construction favors those with high Mana Reactor ranks who can sustain the increased mana consumption required by its power-focused spell arrays.`
        },
        rapier: {
            description: `The Rapier configuration presents a long, slender thrusting blade optimized for precision strikes and agile combat. Its needle-like point concentrates mana into extremely focused attacks, allowing for armor penetration and precise targeting of enemy weak points. The weapon's light construction enables rapid, precise movements.

As an Intelligent Device, the Rapier specializes in speed-based combat protocols, enabling rapid succession attacks that overwhelm opponents before they can react. Its design incorporates advanced targeting assistance that guides the blade toward optimal strike points, making each thrust maximally effective.

Knights who favor the Rapier typically prioritize finesse, speed, and tactical precision. The weapon's elegant appearance belies its deadly effectiveness, and its users often combine physical prowess with strategic thinking to dismantle opponents systematically.`
        },
        scimitar: {
            description: `The Scimitar configuration features a curved, single-edged blade designed for sweeping cuts and mounted combat applications. Its distinctive curve creates a unique mana flow pattern that enhances slashing attacks, adding supernatural cutting power to each swing. The blade's geometry excels at drawing cuts that maximize wound damage.

This Intelligent Device configuration incorporates spell routines optimized for mobile combat, maintaining effectiveness even during rapid movement or while mounted. The curved blade's natural drawing motion integrates seamlessly with speed enhancement spells, creating a synergy between physical technique and magical augmentation.

Knights who choose the Scimitar often favor dynamic, mobile combat styles that emphasize constant movement and momentum. The weapon's exotic appearance sets its users apart, and its unique capabilities attract those who appreciate unconventional solutions.`
        },
        greatsword: {
            description: `The Greatsword configuration produces an enormous two-handed blade of devastating power. Its massive size allows for unprecedented mana capacity, creating a weapon capable of channeling magic on a scale that smaller configurations cannot match. The blade's construction emphasizes raw power and area denial capabilities.

As an Intelligent Device, the Greatsword incorporates siege-level spell routines capable of affecting large areas and multiple opponents simultaneously. Its weight, normally a hindrance, becomes an asset through strength enhancement protocols that allow wielders to swing the massive blade with supernatural speed and control.

Knights who wield the Greatsword embrace overwhelming force as their primary tactic. The weapon's appearance alone can intimidate opponents, and its capabilities justify that intimidation. Users typically possess high physical enhancement investments to maximize the blade's potential.`
        },
        dagger_pair: {
            description: `The Dagger Pair configuration manifests as twin short blades designed for close-quarters combat and dual-wielding techniques. The paired construction allows for synchronized spell casting between blades, creating combination attacks that exceed what either weapon could achieve alone. Their compact size enables exceptional speed and maneuverability.

This Intelligent Device configuration excels at rapid, aggressive offense, with both blades sharing processing resources to execute complex combat patterns. The pair can function independently or in perfect synchronization, adapting to combat situations with flexibility impossible for single-weapon configurations.

Knights who favor the Dagger Pair typically embrace an aggressive, high-speed combat style that overwhelms opponents with a flurry of enhanced strikes. The weapons' utility in stealth and assassination applications also attracts those who appreciate versatility in approach.`
        },
        spear: {
            description: `The Spear configuration creates an extended polearm with exceptional reach and versatile combat applications. Its length provides significant tactical advantages in maintaining distance from opponents while enabling powerful thrusting attacks. The shaft serves as an extended mana conduit, with the head concentrating magical energy for devastating piercing strikes.

As an Intelligent Device, the Spear incorporates reach-focused combat protocols that maximize the weapon's length advantage. The configuration excels at both offense and defense, with the shaft serving as an effective blocking tool while the head provides precise, deadly attacks.

Knights who choose the Spear often favor measured, tactical combat that controls engagement range. The weapon's association with ancient warrior traditions carries cultural significance, and its practical effectiveness justifies its continued use in modern magical combat.`
        },
        halberd: {
            description: `The Halberd configuration combines axe blade, spear point, and hook into a versatile polearm with exceptional tactical flexibility. Its complex head design allows for multiple attack modes, each with distinct spell enhancements. The weapon excels at adapting to various combat situations through mode-switching capabilities.

This Intelligent Device configuration incorporates multi-modal combat protocols that shift between axe strikes, spear thrusts, and hooking techniques based on combat conditions. The different blade sections can carry distinct enchantments, providing a weapon system rather than a single tool.

Knights who wield the Halberd appreciate versatility and tactical depth. The weapon's complex nature requires significant training but rewards skilled users with options for any situation. Its imposing appearance and historical significance add to its appeal.`
        },
        battle_axe: {
            description: `The Battle Axe configuration produces a heavy, devastating chopping weapon designed to deliver maximum impact force. Its weighted head creates momentum that mana enhancement can amplify to tremendous levels, enabling strikes that shatter barriers and armor alike. The weapon's design prioritizes single, decisive blows.

As an Intelligent Device, the Battle Axe incorporates momentum-based spell protocols that build power through swing arcs, culminating in strikes of extraordinary force. The configuration excels at breaking through defenses and dealing massive damage to hardened targets.

Knights who favor the Battle Axe embrace a philosophy of overwhelming offense. The weapon's appearance projects strength and aggression, and its capabilities deliver on that promise. Users typically invest heavily in strength enhancement to maximize impact potential.`
        },
        whip_sword: {
            description: `The Whip Sword configuration creates a segmented blade that can shift between rigid sword form and flexible whip form at will. This unique construction requires advanced Device processing but provides unparalleled tactical flexibility. In sword form, it functions as a capable blade, while whip form extends reach and enables impossible attack angles.

This Intelligent Device configuration incorporates transformation protocols that manage the complex mechanics of form-shifting seamlessly. The weapon can attack from unexpected directions, trap enemy weapons, and transition between forms mid-combat for unpredictable offense.

Knights who choose the Whip Sword value unconventional tactics and the ability to surprise opponents. The weapon requires significant training to master but rewards skilled users with a combat tool unlike any other, capable of creating openings where none should exist.`
        },
        lance: {
            description: `The Lance configuration produces an extended thrusting weapon optimized for charging attacks and mounted combat. Its length exceeds even standard spears, providing maximum reach for powerful impact strikes. The weapon's design channels mana into devastating penetrating attacks delivered with momentum.

As an Intelligent Device, the Lance incorporates charge-focused spell protocols that accumulate power during approach and release it on impact. The configuration can integrate with barrier jacket flight capabilities to deliver devastating dive attacks from above or at high speed.

Knights who wield the Lance often specialize in high-mobility combat, using movement as a core tactical element. The weapon's association with classical cavalry traditions carries prestige, and its effectiveness in modern magical combat validates traditional techniques.`
        },
        saber: {
            description: `The Saber configuration presents a curved, single-edged blade designed for swift, slashing attacks. Its light construction and optimized balance enable rapid, flowing combat that chains multiple strikes together seamlessly. The blade's design emphasizes speed and technique over raw power.

This Intelligent Device configuration excels at aggressive offense through continuous assault protocols. The weapon enables rapid attack combinations that don't allow opponents recovery time, overwhelming defenses through accumulated pressure rather than single heavy blows.

Knights who favor the Saber typically embrace an aggressive, fast-paced combat style. The weapon's elegant appearance and swift performance appeal to those who view combat as a flowing dance of blade and magic, where momentum and initiative determine victory.`
        },
        cutlass: {
            description: `The Cutlass configuration creates a short, slightly curved blade optimized for close combat and confined spaces. Its compact design enables effective fighting in situations where longer weapons would be impractical, while still providing full Intelligent Device capabilities. The blade's construction emphasizes durability and reliability.

As an Intelligent Device, the Cutlass incorporates compact combat protocols designed for efficiency in restricted environments. The weapon excels in shipboard combat, urban environments, and other close-quarters situations where larger weapons would be disadvantaged.

Knights who choose the Cutlass often operate in environments that demand compact weaponry. The weapon's practical design appeals to those who prioritize effectiveness over appearance, and its association with naval traditions gives it distinct cultural character.`
        },
        claymore: {
            description: `The Claymore configuration produces a massive Scottish-style great sword with distinctive cross-guard and two-handed grip. Its imposing size provides extensive mana capacity while its construction emphasizes both power and reach. The weapon's design combines the advantages of great swords with unique handling characteristics.

This Intelligent Device configuration incorporates power-striking protocols that leverage the weapon's weight and length for devastating effect. The distinctive guard also functions as a spell focus, enabling defensive casting even during offensive maneuvers.

Knights who wield the Claymore embrace the heritage of ancient warrior traditions while enjoying modern magical enhancement. The weapon's imposing presence and devastating capabilities make it a statement of power and determination in combat.`
        },
        naginata: {
            description: `The Naginata configuration creates a curved-blade polearm combining the reach of a spear with the cutting power of a sword. Its distinctive design enables sweeping strikes that control large areas while maintaining the ability to thrust. The blade's curve creates unique mana flow patterns ideal for cutting enhancement.

As an Intelligent Device, the Naginata incorporates sweeping attack protocols that maximize the weapon's area coverage while enhancing each strike with magical cutting power. The configuration excels at controlling space and engaging multiple opponents simultaneously.

Knights who favor the Naginata often appreciate its unique combination of capabilities. The weapon's historical association with certain warrior traditions gives it cultural significance, while its practical effectiveness ensures continued relevance in modern magical combat.`
        },
        war_hammer: {
            description: `The War Hammer configuration produces a heavy impact weapon designed to crush through armor and barriers through concentrated force. Its head construction focuses all striking power into a small surface area, creating devastating penetrating impacts. The weapon prioritizes armor-defeating capability over versatility.

This Intelligent Device configuration incorporates crushing protocols that enhance impact force and barrier penetration. The weapon excels at defeating heavily armored opponents and breaking through magical barriers that would deflect edged weapons.

Knights who choose the War Hammer face opposition through direct overwhelming force. The weapon's brutal efficiency appeals to practical combatants who value results over elegance, and its effectiveness against magical defenses makes it valuable against certain opponent types.`
        },
        dual_blades: {
            description: `The Dual Blades configuration manifests as a matched pair of medium-length swords designed for synchronized two-weapon combat. Unlike the Dagger Pair, these full-sized swords provide greater reach and power while maintaining dual-wielding flexibility. The paired construction enables complex coordinated attack patterns.

As an Intelligent Device, the Dual Blades share processing resources to execute synchronized combat protocols with perfect timing. The configuration can attack, defend, and cast spells using different blades simultaneously, providing tactical options impossible with single weapons.

Knights who wield Dual Blades embrace the complexity and reward of two-weapon combat. The configuration demands high skill but provides exceptional offensive and defensive options for those who master its potential.`
        },
        energy_blade: {
            description: `The Energy Blade configuration creates a weapon of pure condensed magical energy rather than physical material. The blade manifests from a compact hilt when activated, producing a cutting edge of adjustable length and intensity. This unique construction provides capabilities impossible with physical blades.

This Intelligent Device configuration incorporates projection protocols that shape and maintain the energy blade's form. The weapon can adjust its length, intensity, and even split into multiple blades based on combat needs, providing unprecedented adaptability.

Knights who favor the Energy Blade embrace cutting-edge magical technology. The weapon's unique nature appeals to those who value innovation, and its capabilities reward creative tactical thinking in combat situations.`
        },
        ancient_relic_blade: {
            description: `The Ancient Relic Blade configuration represents a legendary weapon form passed down through magical traditions, incorporating designs and capabilities from ages past. These weapons carry historical power that modern Devices can channel, combining ancient magic with contemporary enhancement. Each Relic Blade has unique characteristics from its heritage.

As an Intelligent Device, the Ancient Relic Blade incorporates legacy protocols that access ancient magical techniques otherwise lost to time. These weapons often possess unique abilities tied to their history, providing capabilities that cannot be replicated through modern means.

Knights who wield Ancient Relic Blades carry the weight of history into battle. The weapons' legendary nature demands respect and responsibility, while their unique capabilities provide advantages that no other configuration can match.`
        }
    },
    
    // Bombardment Class Device Shapes
    bombardment: {
        standard_staff: {
            description: `The Standard Staff represents the foundational weapon of the Bombardment class, a versatile magical conduit optimized for long-range spell casting. Its traditional design incorporates centuries of refined magical theory, creating an efficient channel for offensive spell routines. The staff's construction balances power output with mana efficiency.

As an Intelligent Device, the Standard Staff provides reliable performance across all bombardment spell types without specializing in any particular area. The configuration excels as a general-purpose platform capable of adapting to various combat situations through its flexible spell routing.

Bombardment mages who choose the Standard Staff often value reliability and versatility over specialized performance. The weapon's classical appearance carries cultural weight in mage society, and its proven effectiveness justifies its continued popularity.`
        },
        high_power_cannon: {
            description: `The High-Power Cannon configuration produces an artillery-style weapon designed for maximum spell output at the cost of rate of fire and mobility. Its enlarged focusing chamber allows for spell charging far beyond standard capacity, enabling devastating single shots that can level fortifications. The weapon prioritizes damage per shot above all else.

This Intelligent Device configuration incorporates siege-level bombardment protocols capable of storing and releasing massive amounts of magical energy. The weapon excels at destroying hardened targets and dealing with threats too powerful for conventional approaches.

Bombardment mages who favor the High-Power Cannon embrace the role of heavy artillery. The weapon's impressive power comes with handling challenges, but its ability to eliminate targets with single shots makes it invaluable in appropriate situations.`
        },
        sniper_rifle: {
            description: `The Sniper Rifle configuration creates a precision long-range weapon optimized for accurate spell delivery at extreme distances. Its extended focusing array provides exceptional accuracy while its specialized chamber enables shots that maintain full power over vast ranges. The weapon prioritizes precision and range over rate of fire.

As an Intelligent Device, the Sniper Rifle incorporates enhanced targeting protocols that account for distance, environmental factors, and target movement. The configuration excels at eliminating priority targets from beyond counterattack range, providing strategic value disproportionate to its limited rate of fire.

Bombardment mages who choose the Sniper Rifle often prefer calculated, methodical approaches to combat. The weapon rewards patience and precision, appealing to those who value a single perfect shot over sustained firefights.`
        },
        gatling_gun: {
            description: `The Gatling Gun configuration produces a multi-barrel rapid-fire weapon capable of sustained spell output at rates impossible for single-barrel designs. Its rotating barrel array distributes heat and stress, enabling continuous operation during extended engagements. The weapon sacrifices precision for overwhelming volume.

This Intelligent Device configuration incorporates suppression-focused protocols that enable continuous fire while maintaining targeting and power management. The configuration excels at area denial, target saturation, and overwhelming defensive barriers through accumulated hits.

Bombardment mages who favor the Gatling Gun embrace volume-of-fire tactics. The weapon's distinctive appearance and constant barrage intimidate opponents while its actual effectiveness justifies that intimidation through relentless magical assault.`
        },
        missile_launcher: {
            description: `The Missile Launcher configuration creates a guided projectile system capable of tracking and striking targets around obstacles. Unlike direct-fire weapons, missiles can navigate to their targets, enabling engagement of concealed or mobile opponents. The weapon prioritizes tactical flexibility over raw power.

As an Intelligent Device, the Missile Launcher incorporates advanced guidance protocols that enable independent target tracking for each projectile. The configuration excels at engaging multiple targets simultaneously and striking enemies who believe themselves safely in cover.

Bombardment mages who choose the Missile Launcher value tactical options over simple firepower. The weapon's ability to strike from unexpected angles and engage multiple threats simultaneously provides strategic advantages impossible with direct-fire weapons.`
        },
        orbital_cannon: {
            description: `The Orbital Cannon configuration represents the pinnacle of bombardment weapon development, a massive weapon system capable of calling down devastating attacks from above. Its unique design creates a connection to orbital-range striking capability, enabling attacks that descend from the sky with tremendous force.

This Intelligent Device configuration incorporates stratospheric bombardment protocols that create and launch attacks from extreme altitude. The configuration excels at area destruction and striking targets that believe themselves protected by overhead cover.

Bombardment mages who wield the Orbital Cannon embrace ultimate destructive power. The weapon's devastating capability comes with significant casting requirements, but its ability to destroy entire battlefields justifies the investment.`
        },
        railgun: {
            description: `The Railgun configuration produces an electromagnetic acceleration weapon that launches projectiles at hypersonic velocities. Its design eliminates traditional focusing chambers in favor of acceleration rails that add kinetic energy to magical projectiles. The weapon prioritizes velocity and penetration over raw magical power.

As an Intelligent Device, the Railgun incorporates linear acceleration protocols that build projectile speed through successive enhancement stages. The configuration excels at barrier penetration and long-range strikes where travel time matters.

Bombardment mages who favor the Railgun appreciate the marriage of magical and physical principles. The weapon's unique approach to offense provides capabilities different from purely magical alternatives, adding valuable diversity to engagement options.`
        },
        particle_beam: {
            description: `The Particle Beam configuration creates a continuous-fire energy weapon capable of sustained beam output rather than discrete shots. Its design focuses on maintaining constant energy flow, creating cutting or burning effects that persist as long as the beam remains active. The weapon prioritizes sustained damage over burst power.

This Intelligent Device configuration incorporates beam maintenance protocols that manage power flow for extended operation. The configuration excels at cutting through barriers over time and maintaining pressure on targets who cannot simply dodge individual shots.

Bombardment mages who choose the Particle Beam embrace sustained engagement tactics. The weapon's constant output pressure opponents in ways impossible with discrete-shot weapons, wearing down defenses through relentless application.`
        },
        plasma_cannon: {
            description: `The Plasma Cannon configuration produces superheated matter projectiles capable of extreme thermal damage and area effects on impact. Its sophisticated containment systems allow for plasma generation and launching without harming the wielder. The weapon prioritizes thermal damage and area effects.

As an Intelligent Device, the Plasma Cannon incorporates thermal management protocols that handle the extreme temperatures involved in plasma weaponry. The configuration excels at area-denial, anti-barrier operations, and dealing with enemies vulnerable to extreme heat.

Bombardment mages who favor the Plasma Cannon appreciate its unique damage profile. The weapon's thermal and splash damage capabilities provide tactical options different from conventional magical attacks, particularly against massed opponents.`
        },
        gravity_well_generator: {
            description: `The Gravity Well Generator configuration creates localized gravitational anomalies that pull, push, or crush targets through focused gravitational force. Unlike direct-damage weapons, it controls the battlefield through force manipulation, enabling crowd control and environmental hazard creation.

This Intelligent Device configuration incorporates gravity manipulation protocols that create and maintain artificial gravity fields. The configuration excels at area control, enemy positioning, and enabling allies through tactical gravity manipulation.

Bombardment mages who choose the Gravity Well Generator embrace battlefield control over direct damage. The weapon's unique capabilities provide tactical options impossible with conventional weapons, rewarding creative tactical thinking.`
        },
        energy_staff: {
            description: `The Energy Staff configuration creates a staff of pure condensed magical energy rather than physical material. Like its Knight-class counterpart, it manifests from a compact focus when activated, producing a bombardment weapon of adjustable configuration. This unique construction enables rapid adaptation.

As an Intelligent Device, the Energy Staff incorporates projection protocols that can reshape the weapon's form based on tactical needs. The configuration can shift between focused and wide-spread modes, adjust power density, and modify range characteristics during combat.

Bombardment mages who favor the Energy Staff embrace adaptability as their primary tactical advantage. The weapon's shapeshifting nature provides options for any situation, rewarding those who think creatively during combat.`
        },
        twin_cannons: {
            description: `The Twin Cannons configuration produces a paired weapon system capable of synchronized or independent fire. Its dual-barrel design provides tactical flexibility beyond single-weapon configurations, enabling split targeting or concentrated fire as situations demand. The weapons share power systems for efficiency.

This Intelligent Device configuration incorporates dual-targeting protocols that manage both weapons simultaneously. The configuration excels at engaging multiple targets or concentrating fire for enhanced damage, providing tactical options in any engagement.

Bombardment mages who choose the Twin Cannons value versatility in engagement options. The weapon's paired nature provides tactical depth, enabling responses to situations that would challenge single-weapon configurations.`
        },
        tri_barrel_cannon: {
            description: `The Tri-Barrel Cannon configuration extends the multi-weapon concept to three synchronized barrels, providing enhanced tactical options and sustained fire capability. Its triangular barrel arrangement enables rotation during sustained fire, distributing heat and wear while maintaining output.

As an Intelligent Device, the Tri-Barrel Cannon incorporates multi-barrel management protocols that coordinate all three weapons seamlessly. The configuration excels at sustained fire, multi-target engagement, and overwhelming concentrated assault on single targets.

Bombardment mages who favor the Tri-Barrel Cannon embrace maximum firepower with tactical flexibility. The weapon's three-barrel design provides options impossible with fewer weapons while maintaining the coordination benefits of a unified system.`
        },
        floating_orb: {
            description: `The Floating Orb configuration creates an autonomous spherical weapon platform that operates independently of the mage's hands. Its self-mobile design provides unique tactical positioning options, enabling attacks from angles impossible with hand-held weapons. The orb maintains position relative to the mage.

This Intelligent Device configuration incorporates autonomous operation protocols that enable independent movement and targeting while coordinating with the mage's tactical intentions. The configuration excels at flanking attacks, surprise angles, and maintaining offensive pressure while the mage focuses on defense.

Bombardment mages who choose the Floating Orb value the tactical advantages of weapon independence. The orb's autonomous capability provides options impossible with hand-held weapons, particularly for mages who must divide attention between offense and other concerns.`
        },
        crystal_staff: {
            description: `The Crystal Staff configuration incorporates crystalline components that enhance spell amplification and storage capabilities. Its crystalline structure provides natural mana amplification, enabling more powerful outputs with the same input. The weapon prioritizes power efficiency over raw output.

As an Intelligent Device, the Crystal Staff incorporates resonance protocols that optimize mana flow through its crystalline structure. The configuration excels at efficient operation, providing maximum effect for minimum mana expenditure.

Bombardment mages who favor the Crystal Staff appreciate efficiency in combat. The weapon's amplification capabilities enable sustained operation in extended engagements and provide maximum effectiveness for mages with limited mana reserves.`
        },
        mechanical_arm: {
            description: `The Mechanical Arm configuration integrates the Intelligent Device directly into an articulated limb extension, providing bombardment capability through a wearable platform. Its integrated design frees both hands while still providing full weapon functionality. The arm can reconfigure for different operation modes.

This Intelligent Device configuration incorporates integrated operation protocols that coordinate the mechanical limb with the mage's natural movements. The configuration excels at hands-free operation and rapid response, enabling casting while performing other activities.

Bombardment mages who choose the Mechanical Arm value integration and convenience. The weapon's wearable nature provides practical advantages in many situations, and its mechanical precision enables accurate attacks even during mobile operation.`
        },
        drone_controller: {
            description: `The Drone Controller configuration creates a network of autonomous attack drones coordinated through a central control unit. Unlike single-weapon configurations, this system distributes firepower across multiple mobile platforms, providing tactical flexibility and survivability through redundancy.

As an Intelligent Device, the Drone Controller incorporates swarm coordination protocols that manage multiple drones simultaneously. The configuration excels at distributed attacks, environmental awareness, and sustained capability even when individual drones are lost.

Bombardment mages who favor the Drone Controller embrace modern technological approaches to magical warfare. The system's distributed nature provides unique tactical options and practical advantages in complex combat environments.`
        },
        satellite_uplink: {
            description: `The Satellite Uplink configuration establishes connection with orbital magical infrastructure, enabling coordination of strikes from space-based platforms. Its design focuses on targeting and guidance rather than direct generation, directing external power sources against designated targets.

This Intelligent Device configuration incorporates orbital coordination protocols that manage targeting and timing for space-based bombardment assets. The configuration excels at precision strikes with external power sources, enabling effects beyond portable weapon capabilities.

Bombardment mages who choose the Satellite Uplink leverage infrastructure beyond personal capacity. The weapon's ability to call upon external resources provides devastating capabilities, though dependency on orbital assets creates unique tactical considerations.`
        },
        void_cannon: {
            description: `The Void Cannon configuration manipulates dimensional energy to create attacks that bypass conventional defenses by partially existing outside normal space. Its unique design enables projectiles that phase through barriers and affect targets in impossible ways. The weapon prioritizes barrier penetration.

As an Intelligent Device, the Void Cannon incorporates dimensional manipulation protocols that create and control void-touched projectiles. The configuration excels at defeating heavily protected targets and engaging enemies who rely on dimensional defenses.

Bombardment mages who favor the Void Cannon appreciate its ability to ignore conventional protection. The weapon's unique attack profile provides capabilities that complement rather than replace conventional bombardment options.`
        },
        ancient_relic_staff: {
            description: `The Ancient Relic Staff configuration represents a legendary bombardment weapon form passed down through magical traditions. Like its Knight-class counterpart, it incorporates designs and capabilities from ages past, providing access to ancient techniques combined with modern enhancement.

This Intelligent Device configuration incorporates legacy protocols that access historical magical techniques. The weapon's unique historical powers provide capabilities impossible to replicate through modern means, though they may require specialized knowledge to fully utilize.

Bombardment mages who wield Ancient Relic Staffs carry significant heritage into battle. The weapons' legendary nature provides both privilege and responsibility, while their unique capabilities reward those who master their historical techniques.`
        }
    },
    
    // Thaumaturge Class Device Shapes
    thaumaturge: {
        standard_cube: {
            description: `The Standard Cube represents the foundational Device form for the Thaumaturge class, a compact geometric shape optimized for data processing and spell routine management. Its regular geometry provides stable mana flow patterns ideal for complex support calculations. The cube's construction balances processing power with efficiency.

As an Intelligent Device, the Standard Cube provides reliable performance across all support spell types without specializing in any particular area. The configuration excels as a general-purpose platform for healing, buffing, and coordination support.

Thaumaturges who choose the Standard Cube value reliability and versatility. The device's compact form enables easy carrying while its balanced capabilities provide options for any support situation.`
        },
        floating_book: {
            description: `The Floating Book configuration manifests as an enchanted tome that hovers near the mage, its pages turning automatically to relevant spell information. The book format provides extensive spell storage and rapid reference, enabling quick access to complex support routines. Its pages display spell matrices and tactical information.

This Intelligent Device configuration incorporates bibliographic protocols that organize and access vast spell libraries efficiently. The configuration excels at supporting complex spell routines and providing tactical information during combat.

Thaumaturges who favor the Floating Book appreciate ready access to their complete spell repertoire. The device's traditional appearance carries cultural significance while its practical capabilities justify continued preference among support mages.`
        },
        ancient_grimoire: {
            description: `The Ancient Grimoire configuration represents a venerable magical text enhanced with Intelligent Device capabilities. Unlike modern Floating Books, these devices incorporate genuinely ancient magical knowledge, providing access to historical techniques and wisdom accumulated over centuries or millennia.

As an Intelligent Device, the Ancient Grimoire incorporates legacy protocols that access historical magical knowledge and techniques. The configuration excels at specialized applications where ancient methods surpass modern alternatives.

Thaumaturges who wield Ancient Grimoires carry living history into their work. The devices' accumulated wisdom provides insights impossible through modern training, though understanding ancient methods requires dedicated study and practice.`
        },
        digital_tablet: {
            description: `The Digital Tablet configuration manifests as a modern electronic-style interface optimized for data processing and magical information management. Its screen displays dynamic spell matrices, tactical data, and support coordination information in an intuitive format. The device embraces contemporary aesthetics.

This Intelligent Device configuration incorporates digital processing protocols that enable rapid calculation and information display. The configuration excels at data-intensive support operations and coordination of complex tactical situations.

Thaumaturges who favor the Digital Tablet embrace modern approaches to magical support. The device's contemporary interface appeals to those who value efficiency and clarity in information presentation.`
        },
        crystal_ball: {
            description: `The Crystal Ball configuration creates a spherical scrying focus optimized for perception and divination support. Its crystalline construction enhances magical sensing and information gathering, providing superior awareness of tactical situations. The sphere's geometry enables omnidirectional perception.

As an Intelligent Device, the Crystal Ball incorporates enhanced perception protocols that gather and process sensory information. The configuration excels at situational awareness, enemy detection, and providing tactical intelligence to allies.

Thaumaturges who choose the Crystal Ball prioritize information and awareness in their support role. The device's sensory capabilities enable informed decision-making that can prove more valuable than direct magical intervention.`
        },
        floating_runes: {
            description: `The Floating Runes configuration manifests as an array of magical symbols that orbit the mage, each rune carrying specific spell routines and support functions. The distributed design enables parallel processing and multiple simultaneous support effects. Individual runes can be deployed to allies.

This Intelligent Device configuration incorporates distributed processing protocols that manage multiple runes simultaneously. The configuration excels at affecting multiple allies with different support effects and maintaining area-wide enhancement.

Thaumaturges who favor Floating Runes embrace distributed support capabilities. The device's multi-element nature provides tactical flexibility and persistent effects that continue even when the mage's attention is elsewhere.`
        },
        mechanical_gauntlet: {
            description: `The Mechanical Gauntlet configuration integrates support capabilities into a wearable armored glove, enabling hands-on healing and buffing through direct touch. Its construction provides protection while maintaining sensitivity for precise magical work. The gauntlet enhances both offense and support through integrated design.

As an Intelligent Device, the Mechanical Gauntlet incorporates touch-based protocols optimized for direct magical intervention. The configuration excels at personal healing, targeted buffing, and situations requiring physical contact for maximum effect.

Thaumaturges who choose the Mechanical Gauntlet value direct, hands-on support. The device's integrated nature enables combat participation while maintaining support capabilities, suiting those who operate alongside front-line fighters.`
        },
        holographic_interface: {
            description: `The Holographic Interface configuration creates projected display systems that provide tactical information and spell control through visual and gestural interaction. Its design enables complex information management through intuitive interface methods. The display adapts to user preferences and situations.

This Intelligent Device configuration incorporates augmented display protocols that overlay tactical and magical information onto the user's perception. The configuration excels at information management, coordination support, and complex tactical operations.

Thaumaturges who favor the Holographic Interface appreciate advanced information systems. The device's comprehensive displays enable management of complex situations that would overwhelm simpler interfaces.`
        },
        spirit_orb: {
            description: `The Spirit Orb configuration creates a glowing sphere of spiritual energy that contains a fragment of otherworldly consciousness. Unlike purely mechanical Devices, the Spirit Orb provides guidance and support through a sapient partner with independent thought. The orb can communicate and advise.

As an Intelligent Device, the Spirit Orb incorporates genuine consciousness protocols that enable independent reasoning and advice. The configuration excels at situations requiring judgment and provides companionship alongside practical support.

Thaumaturges who choose the Spirit Orb value partnership over mere tools. The device's conscious nature provides unique benefits including genuine advice, emotional support, and perspectives beyond the mage's own experience.`
        },
        tome_of_knowledge: {
            description: `The Tome of Knowledge configuration creates an enhanced grimoire specifically optimized for information storage and retrieval. Unlike standard Floating Books, this device prioritizes encyclopedic knowledge storage, providing access to vast libraries of magical and mundane information. The tome's contents expand dynamically, creating new pages as information is added.

This Intelligent Device configuration incorporates comprehensive knowledge protocols that enable rapid access to extensive information archives. The configuration excels at research support, problem-solving, and providing answers to complex questions.

Thaumaturges who favor the Tome of Knowledge embrace information as their primary resource. The device's vast stores of knowledge enable solutions to problems beyond normal experience and provide answers that would otherwise require extensive research.`
        },
        mystic_mirror: {
            description: `The Mystic Mirror configuration creates a reflective surface with enhanced perception and reflection capabilities. Its design enables both visual scrying and spell reflection, providing dual utility for information gathering and defensive support. The mirror can display remote locations and reflect hostile magic.

As an Intelligent Device, the Mystic Mirror incorporates reflection protocols that enable both scrying and spell turning. The configuration excels at situational awareness and protecting allies from magical attacks through reflection.

Thaumaturges who choose the Mystic Mirror value both perception and protection. The device's dual nature provides capabilities in multiple support areas, enabling flexible response to varied combat situations.`
        },
        scroll_array: {
            description: `The Scroll Array configuration manifests as multiple floating scrolls that deploy around the mage, each containing pre-prepared spell routines. The design enables rapid access to numerous support spells without requiring real-time casting. Scrolls can be sent to allies for remote activation.

This Intelligent Device configuration incorporates pre-loading protocols that prepare spells for instant deployment. The configuration excels at rapid response support and providing magical effects without casting time.

Thaumaturges who favor the Scroll Array appreciate preparation and rapid response. The device's pre-loaded spells enable instant support when timing is critical, trading flexibility for speed in emergency situations.`
        },
        neural_interface: {
            description: `The Neural Interface configuration connects directly to the mage's nervous system, enabling thought-speed Device control and enhanced magical coordination. Its design enables intimate connection between mage and Device, blurring the line between tool and extension of self.

As an Intelligent Device, the Neural Interface incorporates direct neural protocols that enable unprecedented response speed and intuitive control. The configuration excels at rapid reaction support and situations requiring seamless mage-Device coordination.

Thaumaturges who choose the Neural Interface embrace deep integration with their Device. The intimate connection provides capabilities beyond conventional interfaces, though the close bond requires adjustment and carries unique considerations.`
        },
        floating_cards: {
            description: `The Floating Cards configuration manifests as a deck of enchanted cards that orbit the mage, each card carrying specific spell routines or effects. The design enables rapid selection and deployment of prepared effects through intuitive card selection. Cards can be sent to targets for effect delivery.

This Intelligent Device configuration incorporates card-based protocols that organize spells into easily-accessible units. The configuration excels at rapid support selection and provides a natural randomization option for mages who embrace chance.

Thaumaturges who favor Floating Cards appreciate the intuitive organization and rapid deployment the format enables. The device's card-based nature suits those who think in discrete effects rather than continuous processes.`
        },
        ancient_codex: {
            description: `The Ancient Codex configuration represents a venerable bound text of immense historical and magical significance. Unlike standard Ancient Grimoires, Codexes contain foundational magical knowledge that shapes how magic itself operates. These devices carry the weight of magical tradition.

As an Intelligent Device, the Ancient Codex incorporates foundational protocols that access fundamental magical principles. The configuration excels at situations where basic magical laws must be understood or manipulated.

Thaumaturges who wield Ancient Codexes carry responsibility for preserving and applying foundational magical knowledge. The devices' fundamental nature provides understanding that extends beyond specific techniques, offering insight into fundamental magical principles.`
        },
        magical_circle: {
            description: `The Magical Circle configuration creates a geometric array that projects around the mage, defining an area of enhanced magical effect. Unlike mobile devices, the circle creates a stationary zone of power that amplifies support effects for allies within its bounds.

This Intelligent Device configuration incorporates zone-based protocols that enhance magical effects within defined areas. The configuration excels at defensive positions and situations where allies remain within a defined area.

Thaumaturges who favor the Magical Circle embrace positional support. The device's zone-based nature provides powerful effects within its bounds, rewarding tactical positioning and coordinated team movement.`
        },
        spirit_compass: {
            description: `The Spirit Compass configuration creates a specialized navigational and divination tool optimized for finding people, places, and things. Its design enables locating anything the mage seeks, whether physical, magical, or spiritual. The compass needle responds to the mage's intent.

As an Intelligent Device, the Spirit Compass incorporates seeking protocols that locate targets based on various criteria. The configuration excels at tracking, navigation, and finding things that don't want to be found.

Thaumaturges who choose the Spirit Compass value the ability to find what they seek. The device's location capabilities provide invaluable support for search operations and tracking down fleeing enemies or lost allies.`
        },
        rune_stone: {
            description: `The Rune Stone configuration manifests as an ancient carved stone bearing powerful magical symbols. Unlike more complex devices, the Rune Stone provides focused, powerful effects through its permanent inscriptions. The stone's simplicity belies its potential power.

This Intelligent Device configuration incorporates runic protocols that channel magic through ancient symbol meanings. The configuration excels at powerful, focused effects that draw on ancient magical traditions.

Thaumaturges who favor the Rune Stone appreciate focused power over versatility. The device's simple but potent nature suits those who prefer depth over breadth, mastering specific effects rather than spreading attention widely.`
        },
        astral_projection_device: {
            description: `The Astral Projection Device configuration enables the mage to project consciousness and magical effects across dimensional barriers. Its design creates stable connections to other planes, enabling support effects that reach allies regardless of physical location.

As an Intelligent Device, the Astral Projection Device incorporates dimensional protocols that bridge gaps between planes. The configuration excels at supporting allies at extreme range or in inaccessible locations.

Thaumaturges who choose the Astral Projection Device embrace support without physical limits. The device's dimensional capabilities enable assistance regardless of barriers, providing unique tactical options.`
        },
        ancient_relic_grimoire: {
            description: `The Ancient Relic Grimoire configuration represents the most venerable and powerful of support Devices, legendary texts of immense magical significance. These devices contain knowledge and power accumulated across ages, providing capabilities impossible to replicate through modern means.

This Intelligent Device configuration incorporates legacy protocols that access historical magical knowledge and power. The weapons' legendary nature demands respect and careful use, while their unique capabilities reward those who earn their secrets.

Thaumaturges who wield Ancient Relic Grimoires carry the accumulated wisdom of magical tradition. The devices' legendary nature provides both immense capability and significant responsibility, suitable only for those ready for both.`
        }
    }
};

// Function to get device shape description
function getDeviceShapeDescription(classId, shapeId) {
    if (deviceShapeDescriptions[classId] && deviceShapeDescriptions[classId][shapeId]) {
        return deviceShapeDescriptions[classId][shapeId].description;
    }
    return "Description not available.";
}

// Update device shapes with descriptions
function updateDeviceShapesWithDescriptions() {
    for (const classId in deviceShapes) {
        for (const shape of deviceShapes[classId]) {
            if (deviceShapeDescriptions[classId] && deviceShapeDescriptions[classId][shape.id]) {
                shape.description = deviceShapeDescriptions[classId][shape.id].description;
            }
        }
    }
}

// Initialize on load
if (typeof deviceShapes !== 'undefined') {
    updateDeviceShapesWithDescriptions();
}

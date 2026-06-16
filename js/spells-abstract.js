// Abstract Category Spells for Mages CYOA
// All 34 spells of the Abstract Category with 5 proficiency levels each
// Abstract spells (Tier 6-10) manipulate reality's underlying frameworks

// Initialize spell data object if it doesn't exist
if (typeof spellData === 'undefined') {
    var spellData = {
        physical: [],
        elemental: [],
        abstract: []
    };
}

// Base Abstract Spells (1-5)
const baseAbstractSpells = [
    {
        id: 'cognitive_fortress',
        name: 'Cognitive Fortress',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device constructs a layered psychic barrier by reinforcing neural pathways with structured mana flows, creating interference patterns that disrupt incoming mental scans. The fortress forms in roughly three seconds after activation and sustains for up to five minutes per cast. Mana cost allows four to six casts per cycle on a Malkuth reactor, with forty-second recovery between activations.

The barrier operates within a two-meter personal sphere, deflecting surface thought-reading and emotional manipulation attempts. Casual psychic probes encounter static; focused interrogation slows noticeably but can breach the defense with sustained effort over two minutes. The device alerts the mage to intrusion attempts with a cold pressure behind the temples. Direct eye contact with the attacker is not required for the barrier to function. A Rank 3 reactor supports eight casts per cycle with twenty-second recovery.

At Beginner level Cognitive Fortress provides reliable protection against opportunistic mental scans and buys critical time during active interrogation. The spell cannot shield others, block master-tier psychics indefinitely, or prevent all information leakage under sustained expert-level assault. The barrier weakens progressively under continuous attack and requires recasting to restore full strength.`,

            apprentice: `Cast time drops to one second with sustained duration reaching twelve minutes. The device now layers three distinct defensive shells: an outer scrambler generating white noise, a reactive middle layer that intercepts targeted probes with feedback bursts, and a core vault protecting critical memories. Mana efficiency improves to seven casts per cycle on Malkuth, three on Yesod with sub-second recast capability.

Operational range extends to five meters, allowing the mage to grant Beginner-level protection to one ally in direct contact. The reactive layer automatically counters memory-reading attempts by injecting plausible false data—decoy rendezvous points, fabricated operational details—that register as genuine for up to ninety seconds. Emotional attacks such as rage curses or fear projections are dampened to manageable irritation. The device tracks all intrusion attempts and provides tactical data on attacker methodology. A coordinated assault by two skilled psychics can stress the system but requires sustained focus from both attackers.

Apprentice-tier Cognitive Fortress functions as squad-level psychic defense during extractions and negotiations. The spell blocks most Adept-level mental attacks, significantly delays Expert-level intrusions, and maintains effectiveness in high-stress environments. It cannot prevent Master-tier psychics from eventual breakthrough or extend full protection beyond one ally.`,

            adept: `The fortress operates autonomously with the device managing all defensive responses in real-time. Activation is reflexive; sustained duration reaches thirty minutes with negligible performance degradation. Malkuth supports twelve casts per cycle, Hod supports twenty with overlapping coverage possible. Mana cost per activation drops by forty percent.

Protection radius expands to fifteen meters, granting all allies within range Apprentice-level shielding with automatic threat prioritization. The device constructs full false-consciousness layers that contain believable fabricated memories, surface emotions, and tactical deceptions. Intruders invest minutes extracting seemingly genuine intelligence before recognizing the forgery. Active retaliatory strikes deliver surgical neural shocks that disrupt attacker focus and impose fifteen-second disorientation. The system purges implanted suggestions, compulsions, and subliminal commands automatically within eight seconds of detection.

At Adept level the spell provides comprehensive team psychic defense for field operations. It counters Expert-level mental attacks effectively, forces Master-tier psychics to commit significant effort to breach defenses, and enables the mage to operate confidently in hostile psychic environments. The fortress cannot block reality-altering mental manipulations, prevent all breakthroughs by determined Master-tier opponents working in concert, or extend beyond fifteen-meter operational range.`,

            expert: `Full cognitive integration creates a seamless defense-cognition hybrid. The device routes all mental traffic through predictive filters that identify hostile intent before the attack manifests. Reflexive activation occurs automatically when psychic threat signatures register within one hundred meters. Duration becomes effectively unlimited with continuous low-level mana draw. Tiferet reactors sustain the fortress indefinitely as a background process.

Protection radius reaches two hundred meters, granting all allies within range Adept-level shielding with individual threat-response customization. Failed intrusion attempts are reverse-traced, providing real-time location data on attackers and feeding absorbed hostile mana back into the fortress structure. The device delivers concentrated psychic burnout strikes that disable attacking telepaths for hours. Selective permeability allows trusted individuals through the barrier while automatically blocking and countering all unauthorized mental contact. The mage designates up to ten trusted psychic contacts whose signatures bypass all defensive layers.

Expert-tier Cognitive Fortress represents the practical maximum for personal-scale mental defense as a Tier 1 spell. It blocks or severely impedes all mortal psychic attacks, provides comprehensive protection for large teams, and functions reliably against sustained multi-attacker assaults. The spell cannot prevent conceptual or reality-based mental manipulation, defend against Tier 5 Abstract mental attacks, or extend protection beyond the two-hundred-meter operational ceiling.`,

            master: `The system operates at design ceiling with zero conscious oversight required. All defensive functions—threat detection, response calibration, ally shielding, counter-attacks—run as optimized autonomous processes. Reflexive activation occurs within twenty milliseconds of threat detection across the full operational range. Mana efficiency reaches the theoretical maximum for a Tier 1 defensive spell, with Keter reactors sustaining the fortress and all auxiliary functions with less than five percent total capacity draw.

Protection extends to three hundred meters with all allies receiving persistent Adept-level shielding and priority targets receiving Expert-level protection. The device maintains a continuously updated threat database, logging every attack pattern encountered and auto-generating optimal counter-responses. Trusted contact lists scale to fifty individuals with instant permeability adjustments. Psychic burnout counter-strikes disable attackers for days rather than hours, and reverse-tracing provides detailed attacker profiles including probable identity and base location.

This represents the absolute ceiling for Cognitive Fortress as a Tier 1 spell: maximum-efficiency personal and team mental defense across a three-hundred-meter sphere. The fortress handles all conventional psychic threats at mortal scale with zero exploitable vulnerabilities. It cannot defend against divine-scale mental powers, Tier 5 reality-warping mental attacks, or extend beyond the three-hundred-meter hard limit imposed by Tier 1 operational physics.`
        }
    },
    {
        id: 'spatial_displacement',
        name: 'Spatial Displacement',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device calculates a direct spatial translation by mapping origin and destination coordinates, then collapses the intervening distance through controlled spacetime folding. Lock-on requires three seconds of visual confirmation on the target location. The displacement occurs instantaneously from the user's perspective with a brief sensation of discontinuity. Malkuth reactors support three jumps per cycle at ranges up to twenty meters, with forty-second recovery between displacements.

Visual line-of-sight is mandatory; obscured or smoke-filled destinations abort the jump automatically to prevent materialization inside solid matter. Each displacement drains roughly fifteen percent of Malkuth capacity. The mage can carry up to twenty kilograms of equipment but cannot transport additional personnel. Consecutive jumps in rapid succession cause cumulative spatial disorientation—nausea and balance disruption after the third jump. Hod reactors extend capacity to six jumps per cycle with fifteen-second recovery.

At Beginner level Spatial Displacement serves as tactical repositioning during combat or infiltration. The spell enables rapid cover-to-cover movement, flanking maneuvers, and obstacle bypass when destinations are clearly visible. It cannot support sustained mobility chains, transport allies, or function in zero-visibility conditions. Maximum effective range remains twenty meters regardless of reactor rank.`,

            apprentice: `Lock-on time reduces to one second with partial visualization now sufficient—the device accepts destination coordinates from memory or brief prior observation within the last minute. Range extends to sixty meters with Malkuth supporting five jumps per cycle, Yesod supporting nine. Mana cost per jump drops to ten percent of base capacity. Recovery time decreases to ten seconds between displacements.

The mage can now transport one additional person in direct physical contact, with total mass limit of one hundred kilograms including equipment. The device compensates for minor destination errors, automatically adjusting emergence coordinates by up to one meter to avoid hazards detected during the translation phase. Spatial disorientation effects are suppressed through improved device calibration, enabling sustained combat mobility. The system stores up to three frequently-used coordinates for instant recall and sub-second activation.

Apprentice-tier Spatial Displacement becomes viable for extended chase sequences and dynamic combat repositioning. The spell supports small-team extraction under fire, sustained tactical movement through complex terrain, and emergency evacuation with a single ally. It cannot transport more than two people total, function without at least partial destination knowledge, or overcome heavy spatial interference from enemy countermeasures.`,

            adept: `The device maintains a persistent spatial map of all locations the mage has directly observed, storing up to fifty waypoints with instant-recall capability. Range extends to two hundred meters with reflexive activation from the stored coordinate database. Malkuth supports ten jumps per cycle, Tiferet supports twenty-five with near-zero recovery delay. Mana cost per jump drops to five percent of base capacity.

Mass transport limit increases to three hundred kilograms, allowing extraction of up to three additional personnel or equivalent equipment. The mage can create stable three-second portals at a single fixed location, enabling squad members to pass through without direct contact. Fractional displacement becomes possible—transporting only part of the mage's body through barriers to trigger internal mechanisms while the rest remains safely outside. The device also intercepts hostile displacement attempts within ten meters, either blocking them entirely or redirecting the intruder to a designated location.

At Adept level the spell becomes a core tactical system for team operations. It provides reliable squad transport, portal-based infiltration, defensive spatial interception, and surgical precision displacement for complex objectives. The spell cannot maintain portals longer than three seconds, transport more than three allies simultaneously, or operate effectively beyond two-hundred-meter range.`,

            expert: `Global coordinate storage expands to five hundred waypoints with instant access. The device accepts abstract location data—photographs, verbal descriptions, transmitted coordinates—and calculates valid displacement paths across distances up to one hundred kilometers. Translation occurs with zero subjective transit time and zero disorientation regardless of distance. Geburah reactors support fifty displacement operations per cycle with sub-second recovery.

Portal capacity increases dramatically: the mage sustains up to five simultaneous portals linking fixed positions, each remaining stable for ten minutes. Total throughput reaches fifty personnel over the network duration. Incoming projectiles and hostile spells can be intercepted mid-flight and redirected through portals back toward their origin or into prepared kill zones. Local space compression creates temporary geometric distortions—stretching a straight corridor into a kilometer-long loop or compressing a city block into a ten-meter walk—that persist for up to five minutes and dramatically alter tactical geometry.

Expert-tier Spatial Displacement handles large-scale logistics, rapid force deployment, and battlefield geometry manipulation within urban operational theatres. The spell enables city-wide teleportation networks, intercontinental displacement to known locations, and sophisticated spatial defense. It cannot function across planar boundaries, transport more than fifty people within a single operation cycle, or overcome Master-tier spatial locks.`,

            master: `The device maintains a permanent spatial database of every location the mage has visited, with instant-access storage exceeding two thousand waypoints. Continental-scale displacement operates with the same reliability and precision as room-scale jumps—zero error, zero disorientation, sub-second execution. Keter reactors sustain one hundred displacements per cycle with effectively unlimited portal throughput. Mana efficiency reaches theoretical maximum for Tier 1 spatial manipulation.

All advanced functions operate at design ceiling: ten simultaneous portals with thirty-minute stability, two hundred personnel throughput, automatic interception and redirection of spatial attacks, and sustained geometric distortions across multi-block areas. Allies within three hundred meters receive limited autonomous displacement capability to pre-designated safe points through device-granted emergency beacons. The system handles all calculations, coordinate management, and threat interception as background processes requiring zero conscious input.

This represents the absolute ceiling for Spatial Displacement as a Tier 1 spell: reliable translocation at continental scale, comprehensive portal networks, spatial defense, and mass deployment. The spell provides the maximum throughput, range, and precision achievable within Tier 1 spatial manipulation physics. It cannot cross dimensional boundaries, exceed light-speed effective displacement, or operate beyond the continental range ceiling imposed by Tier 1 limitations.`
        }
    },
    {
        id: 'temporal_distortion',
        name: 'Temporal Distortion',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device manipulates local time-flow by adjusting the rate at which entropy progresses within a defined spatial boundary, creating zones where subjective time passes faster or slower relative to baseline reality. Field generation requires two seconds of device calibration and projects a spherical distortion zone up to three meters in diameter. Malkuth reactors sustain a single field for thirty seconds with ten-percent differential—targets inside experience time ten percent faster or slower than external observers. Recovery time between casts is sixty seconds.

The distortion applies uniformly within the boundary—the mage cannot selectively accelerate allies while decelerating enemies in overlapping space. Projectiles entering the field adjust velocity proportionally: bullets slow if time is decelerated inside, or accelerate slightly if time is faster. The field remains stationary once deployed; moving more than five meters from the anchor point causes immediate collapse. Hod reactors support two simultaneous fields with forty-five-second duration and twenty-percent differential.

At Beginner level Temporal Distortion provides measurable but modest tactical advantage. The spell creates brief windows for repositioning, grants reaction-time edges in close combat, or delays incoming attacks fractionally. It cannot create dramatic time differentials, move with the mage, or selectively affect targets within the same field. Maximum sustainable differential remains twenty percent regardless of reactor investment.`,

            apprentice: `Cast time drops to one second with field diameter expanding to eight meters. Differential increases to forty percent—targets inside the acceleration zone experience time at 1.4x normal speed, granting them substantial reaction and movement advantages. Malkuth supports three casts per cycle with sixty-second duration each, Yesod supports six casts with ninety-second duration. Recovery between deployments decreases to twenty seconds.

The device now supports selective time-flow within the same field: allies accelerate while enemies decelerate, or vice versa. The mage can anchor the field to their own position, creating a mobile distortion zone that moves with them during combat. Boundary shimmer is suppressed, rendering the field's edge nearly invisible to casual observation. Temporal anchors can be deployed on specific objects or locations, forcing them to maintain baseline time-flow regardless of surrounding distortion. Projectiles fired from inside an acceleration field retain excess velocity after exiting, striking with accumulated kinetic force.

Apprentice-tier Temporal Distortion functions as sustained force multiplication for squad-level engagements. The spell creates decisive speed mismatches in close combat, protects high-value assets by placing them in deceleration zones, and enhances ally reflexes during breaches. It cannot exceed forty-percent differential, extend beyond eight-meter radius, or maintain more than three simultaneous fields.`,

            adept: `Field diameter reaches twenty-five meters with differential increasing to seventy-five percent (1.75x or 0.25x time-flow). The mage maintains up to five simultaneous fields with independent configurations—acceleration, deceleration, or oscillating patterns. Malkuth supports eight field-minutes of total uptime per cycle, Tiferet supports twenty field-minutes with overlapping coverage. Cast time becomes reflexive at sub-second speed.

Personal temporal acceleration allows the mage to operate at double baseline speed for up to two minutes, independent of area fields. Temporal stutter fields oscillate rapidly between acceleration and deceleration, inducing severe disorientation, nausea, and vertigo in targets exposed for more than thirty seconds. The device selectively accelerates specific processes—healing rates, chemical reactions, or structural decay—without affecting the target's overall time-flow. Multiple large mobile fields can be chained to cover extended operational areas during running engagements.

At Adept level the spell fundamentally alters battlefield tempo wherever the mage operates. It enables rapid healing through accelerated biological processes, structural sabotage through targeted decay acceleration, and overwhelming speed advantages in direct combat. The spell cannot exceed seventy-five-percent differential, reverse time, or maintain personal acceleration beyond two-minute bursts.`,

            expert: `District-scale deployment becomes possible with field diameter reaching one hundred meters and differential increasing to five-to-one (5x or 0.2x time-flow). The mage sustains up to ten simultaneous fields across the operational theater with independent targeting and differential settings. Geburah reactors support thirty field-minutes of sustained deployment per cycle with automatic field management. Personal acceleration reaches triple baseline speed with ten-minute sustainable duration and brief spikes to quintuple speed lasting fifteen seconds.

Specialized stasis fields freeze targets in near-zero time-flow for up to sixty minutes, effectively removing them from combat while maintaining their life functions. Ten-second temporal reversal becomes possible within a five-meter zone, undoing recent damage or resetting local conditions to their state ten seconds prior. The device provides intuitive probability projections by modeling immediate-future time-flows, manifesting as certain tactical knowledge of likely threat vectors over the next five seconds. This pre-cognitive awareness operates continuously during combat.

Expert-tier Temporal Distortion delivers battlefield-scale time manipulation with localized reversal and predictive capability. The spell creates overwhelming tactical advantages through dramatic time differentials, removes key threats via stasis, and provides split-second foresight. It cannot reverse more than ten seconds, create true precognition beyond immediate tactical intervals, or exceed five-to-one differential ratios.`,

            master: `The device maintains permanent personal acceleration at double baseline speed as a passive enhancement requiring zero ongoing mana cost. Combat surge acceleration reaches quintuple speed for thirty-second bursts with five-second cooldown between surges. All field types operate at design ceiling: one-hundred-meter radius, five-to-one differential, sixty-minute stasis, ten-second reversal. Keter reactors sustain fifty field-minutes per cycle with unlimited field count within the available time budget.

Allies within three hundred meters receive automatic thirty-percent acceleration with coordinated surge capability on demand—the device synchronizes team time-flow for perfect tactical coordination. Precognitive probability modeling runs as continuous background process, providing the mage with five-second tactical foresight at all times without conscious query. Temporal anchors protect critical assets from all time manipulation, friendly or hostile. The system handles all field deployment, differential management, and surge timing autonomously.

This represents the absolute ceiling for Temporal Distortion as a Tier 1 spell: comprehensive local time manipulation at the highest differential and throughput sustainable within Tier 1 physics. The spell provides maximum tempo control, brief reversal, stasis, and tactical precognition. It cannot exceed ten-second reversal limits, create true long-range precognition, surpass five-to-one differentials, or manipulate time on scales beyond local battlefield range.`
        }
    },
    {
        id: 'spirit_link_protocol',
        name: 'Spirit Link Protocol',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device establishes a resonant spiritual connection between two willing participants by synchronizing their soul frequencies through structured mana channels. Link formation requires five minutes of physical contact and mutual meditation while the device etches the connection pattern into both spiritual signatures. The protocol transmits emotional state and vital condition data across distances up to two kilometers. Malkuth reactors support one active link with negligible maintenance cost once established.

The connection carries only broad emotional context—tension, calm, pain, relief—without specific thoughts or sensory data. Both participants perceive the other as a warm, persistent presence in background awareness. The link severs automatically if either party moves beyond range for more than ten minutes or if one participant actively rejects the connection. No override capability exists; consent remains mandatory throughout. The device alerts both parties when proximity limits are approached. Yesod reactors extend range to five kilometers and support two simultaneous links.

At Beginner level Spirit Link Protocol provides reliable silent coordination for paired operatives during infiltration and reconnaissance. The spell enables emotional state monitoring, vitality tracking, and non-verbal presence confirmation without communication devices. It cannot transmit detailed information, override consent, function beyond two-kilometer range, or support more than two simultaneous links on lower-tier reactors.`,

            apprentice: `Link establishment time reduces to two minutes with range extending to fifteen kilometers. The protocol now transmits basic telepathic communication—short verbal phrases and simple visual images—when both parties actively consent to the exchange. Emotional context enriches automatically, providing nuance and intent behind transmitted words. Malkuth supports three simultaneous links, Hod supports seven with independent range and bandwidth per connection.

Minor mana sharing becomes possible: the mage can lend up to twenty percent of their current reserves to a linked ally over thirty seconds, or draw equivalent amounts from willing linked partners. Sensory glimpses—brief flashes of what the other sees or hears—transmit when both parties consent and actively focus. The link persists through brief unconsciousness and resists casual disruption; enemy psychics attempting to sever the connection must commit sustained effort and the attempt alerts both linked parties immediately. The protocol includes encrypted spiritual signatures to prevent eavesdropping.

Apprentice-tier Spirit Link Protocol supports small-team tactical coordination with shared awareness and emergency resource pooling. The spell provides reliable telepathic communication, emotional intelligence, limited mana logistics, and secure connection integrity. It cannot force transmission against resistance, extend beyond fifteen kilometers, or support more than seven simultaneous links on mid-tier reactors.`,

            adept: `Range becomes effectively unlimited on the same dimensional plane, with the device routing connections through local mana-field resonances regardless of physical distance. The protocol supports ten simultaneous links on Malkuth, twenty on Tiferet, each with full bandwidth. Link formation drops to thirty seconds of contact. Mana cost remains negligible as the connections become self-sustaining through ambient field resonance.

Linked partners pool mana reserves, allowing any member to draw up to forty percent of another's reserves per minute for sustained high-intensity casting. When one linked ally suffers mortal injury, the device anchors their soul to their body for eight minutes, maintaining life functions and consciousness while field medics apply treatment. Full sensory and cognitive sharing occurs with group consent—all linked members perceive through each others' senses and access surface thoughts simultaneously, creating temporary gestalt awareness. The network cannot be jammed, intercepted, or eavesdropped by conventional means; only Master-tier spiritual intrusion poses a threat.

At Adept level Spirit Link Protocol becomes a resilient spiritual command lattice for large-unit operations. It enables perfect tactical coordination through shared awareness, distributed mana logistics, and emergency soul stabilization. The spell cannot override individual autonomy, force unwilling connections, or support more than twenty simultaneous links on high-tier reactors.`,

            expert: `The protocol merges up to thirty linked participants into temporary gestalt awareness during critical operations. All members experience the combined sensory input of the network while retaining individual identity and decision-making capability. Any member can exit the gestalt instantly without disrupting others. Coordinated strikes land with perfect synchronization across multi-block operational areas. Geburah reactors support forty simultaneous links with full gestalt capability and unlimited planetary range.

The device prepares soul-fragment backups for key linked allies—partial spiritual copies stored within the mage's reactor that can guide a soul back to its body if mortal trauma occurs and a compatible vessel exists within thirty minutes. The mage senses and can reinforce distant bonds—familial connections, sworn oaths, spiritual pacts—that exist outside the direct Spirit Link network, providing supplementary awareness of allies' overall spiritual well-being even when not actively linked. Network security resists all but divine-scale intrusion attempts.

Expert-tier Spirit Link Protocol delivers comprehensive multi-party spiritual coordination with emergency resurrection support and extended spiritual awareness. The spell creates perfect tactical unity for large teams, provides robust backup for critical personnel, and maintains absolute security. It cannot create souls from nothing, restore souls that have fully dispersed, or support more than forty simultaneous links.`,

            master: `The device maintains fifty simultaneous links with negligible mana overhead as permanent background capability. All functions operate at design ceiling: gestalt awareness for the full network, forty-percent reserve pooling with instant transfer, eight-minute soul anchoring with automatic activation on detected trauma, and planetary-range communication with zero latency. Keter reactors optimize all spiritual traffic routing, making the network functionally immune to disruption short of Tier 5 Abstract attacks.

Soul fragments for linked allies remain stable indefinitely with routine monthly maintenance, providing persistent resurrection insurance. Allies within the network gain collective resistance to soul-targeting magic—attacks must overcome the combined spiritual mass of all linked members. The device handles all connection maintenance, bandwidth allocation, gestalt coordination, and emergency response autonomously. Distant familial and oath-based bonds are monitored continuously, alerting the mage to threats or significant changes in linked allies' spiritual state.

This represents the absolute ceiling for Spirit Link Protocol as a Tier 1 spell: a robust fifty-party spiritual coordination network with comprehensive communication, resource sharing, emergency stabilization, and security. The spell provides maximum throughput and reliability for mortal-scale spiritual links. It cannot create new souls, span dimensional boundaries indefinitely, judge or modify souls beyond stabilization, or erase spiritual essence.`
        }
    },
    {
        id: 'phase_breach',
        name: 'Phase Breach',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device identifies weak points in local dimensional membrane structure and forces temporary apertures to adjacent subspace layers. Breach formation requires four seconds of spatial analysis and creates fist-sized openings lasting twelve seconds before dimensional pressure collapses them. Malkuth reactors support three breaches per cycle at ranges up to five meters. The device displays detected weak points as shimmering distortions visible only to the mage.

The breach provides visual and limited physical access to shallow subspace pockets—parallel spaces offset slightly from baseline reality where small objects sometimes slip during spatial anomalies. The mage can retrieve items lodged in these pockets or store small objects temporarily. Breach diameter cannot exceed fifteen centimeters at this proficiency; larger apertures destabilize immediately. The device also detects nearby dimensional anomalies within ten meters, alerting the mage to natural tears or hostile breach attempts. Yesod reactors extend to five breaches per cycle with twenty-second stability.

At Beginner level Phase Breach serves as utility and detection capability for dimensional phenomena. The spell enables retrieval of lost items from subspace pockets, detection of spatial instabilities, and basic dimensional reconnaissance. It cannot create breaches large enough for personnel transit, access deep dimensional layers, or maintain apertures longer than twenty seconds.`,

            apprentice: `Breach diameter expands to one meter with stability duration reaching ninety seconds. The device can now pierce two adjacent dimensional layers simultaneously, allowing short-range translocation through shallow subspace—step into the breach, cross through the pocket dimension, emerge from a second breach fifty meters away in baseline reality. Malkuth supports five breaches per cycle, Hod supports twelve with controlled sequential deployment. Cast range extends to twenty-five meters.

Breaches intercept incoming projectiles and hostile spells, shunting them into dimensional voids where they dissipate harmlessly. The device stabilizes natural dimensional tears before they expand into hazardous rifts, preventing environmental accidents. Dimensional topography mapping reveals thickness variations in local membrane structure, helping the mage identify optimal breach points for specific operations. Basic pocket dimensions—spaces the size of small closets—can be created and accessed repeatedly for secure storage.

Apprentice-tier Phase Breach supports tactical translocation, defensive interception, and accident containment. The spell enables short-range personnel transport via subspace, reliable projectile defense, and creation of secure dimensional storage. It cannot maintain breaches longer than ninety seconds, access deep dimensional layers, or create pocket dimensions larger than closet-size.`,

            adept: `Breach diameter reaches three meters with stability extending to three hours for anchored apertures. The device creates vehicle-sized stable breaches allowing entire strike teams and equipment to transit through prepared pocket dimensions. These pockets reach the size of large rooms with basic environmental control—adjustable gravity, temperature, and atmosphere composition. Malkuth supports eight breaches per cycle, Tiferet supports twenty with sustained multi-breach networks.

The mage redirects hostile dimensional escape portals, rerouting enemy teleportation or planar-shift attempts into prepared kill zones or containment pockets. Dimensional tracking detects extra-planar entities moving through hidden layers within five hundred meters, providing advance warning of infiltration attempts. The device constructs custom pocket dimensions with specific parameters rather than using existing subspace pockets. Multiple pocket dimensions can be maintained simultaneously, each accessible via dedicated breach coordinates.

At Adept level the spell enables large-scale dimensional logistics and fortress construction. It provides reliable team transport through subspace, custom pocket dimension creation for FOBs or prisons, and comprehensive dimensional security. The spell cannot create pocket dimensions larger than large rooms, maintain breaches indefinitely without anchor investment, or access dimensions beyond near-space layers.`,

            expert: `Breach diameter expands to fifteen meters with stability reaching forty-eight hours for anchored installations. The device maintains simultaneous access to five pocket dimensions, each up to the size of small buildings with full environmental customization. City-block-scale breach networks link multiple fixed points in baseline reality through dimensional shortcuts. Geburah reactors support thirty breaches per cycle with complex multi-layer routing.

The mage achieves partial phase-shift, folding partially into adjacent dimensional layers to become intangible to baseline-reality attacks while maintaining the ability to cast outward. This state lasts up to five minutes per activation. Hostile entities can be forcibly banished through breaches opened directly in their occupied space, ejecting them into hostile near-dimensions with sealed return paths. Dimensional dead zones suppress all rift-magic within fifty-meter radii, preventing enemy dimensional transit or planar manipulation. The device tracks all rift activity across city-scale operational theaters, providing comprehensive dimensional awareness.

Expert-tier Phase Breach delivers city-scale dimensional networks, multi-building pocket dimensions, intangibility, and forced banishment. The spell enables fortress-scale installations, comprehensive dimensional defense, and strategic translocation infrastructure. It cannot create pocket dimensions larger than small buildings, achieve permanent intangibility, or access deep-planar layers beyond near-space.`,

            master: `The device maintains five stable building-sized pocket dimensions and twelve permanent gateway breaches across the operational theater as persistent background infrastructure. Continental-scale translocation becomes reliable through optimized multi-layer routing. Keter reactors support fifty breach operations per cycle with all dimensional functions—gateways, pockets, tracking, dead zones, banishment—operating at design ceiling with negligible overhead.

All advanced capabilities function at maximum efficiency: thirty-meter breach apertures, seventy-two-hour stability without maintenance, full environmental control in pocket dimensions, ten-minute intangibility duration, and one-hundred-meter dimensional dead zones. Extra-dimensional entities trigger automatic detection and preemptive sealing of weak points before intrusion occurs. Allies within three hundred meters receive emergency breach access—device-granted dimensional beacons that open escape portals to designated safe pocket dimensions on command.

This represents the absolute ceiling for Phase Breach as a Tier 1 spell: reliable near-dimensional access, building-scale pocket creation, permanent gateway networks, intangibility, and comprehensive dimensional security. The spell provides maximum throughput and stability achievable within Tier 1 dimensional manipulation physics. It cannot access deep-planar layers beyond near-space, create pocket dimensions exceeding building scale, or function across true multiversal boundaries.`
        }
    }
];

// Merge base spells into main spell data structure at the beginning
if (typeof spellData !== 'undefined' && spellData.abstract) {
    spellData.abstract = baseAbstractSpells.concat(spellData.abstract);
}

const additionalAbstractSpells = [
    {
        id: 'sensory_override',
        name: 'Sensory Override',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device projects structured mana fields that refract ambient light into false visual patterns, creating convincing phantasms within twelve meters. Generation requires two seconds of device calibration per illusion. The override produces purely visual deception—still images, simple moving shapes, basic camouflage—that collapses on physical contact. Malkuth reactors sustain three simultaneous illusions for five minutes each with sixty-second recovery between new deployments.

Visual fidelity deceives casual observation but fails under close inspection within one meter—trained observers detect edge shimmer, lighting inconsistencies, and shadow mismatches. The device handles photon-routing calculations autonomously while the mage provides conceptual direction. Common applications include false cover positions, decoy duplicates, disguised doorways, or cosmetic alterations to the mage's appearance. Hod reactors support six illusions with ten-minute duration and improved visual stability at half-meter inspection distance.

At Beginner level Sensory Override provides tactical misdirection and infiltration support. The spell creates believable visual deceptions for short-duration operations but cannot withstand physical interaction, produce sound or thermal signatures, or fool trained countermeasure specialists. Maximum range remains twelve meters regardless of reactor investment.`,

            apprentice: `Range extends to forty meters with full audio-visual synchronization. The device now generates coordinated sound—footsteps, voices, environmental noise—timed precisely with visual elements. Illusion duration reaches fifteen minutes with Malkuth supporting five simultaneous overrides, Yesod supporting ten. Cast time drops to one second. Visual fidelity withstands inspection at half-meter distance with audio quality sufficient to fool voiceprint analysis.

Complex dynamic illusions become viable: duplicates that walk and gesture naturally, real-time disguises overlaid on the mage that pass casual conversation, moving environmental features like shifting crowds or patrolling guards. The device maintains all active illusions autonomously, requiring zero ongoing concentration once deployed. Enemies waste ammunition on phantoms, hesitate before illusory barriers, and lose target tracking among multiple decoys. Illusions still lack mass, thermal signature, and tactile presence—physical contact reveals the deception immediately.

Apprentice-tier Sensory Override functions as reliable combat misdirection and infiltration tool. The spell creates convincing audio-visual deceptions that deceive most conventional detection, but cannot produce thermal signatures, withstand physical interaction, or fool thermal imaging or dedicated truth-sight.`,

            adept: `Full five-sense deception becomes operational within one hundred twenty meters: visual, auditory, olfactory, tactile, and thermal components synthesized simultaneously. The device generates psychosomatic feedback through localized neural manipulation—targets perceive illusory heat, texture, smell, and physical resistance as genuine sensory input. An illusory fire radiates believable warmth; an illusory wall provides tactile resistance when touched. Malkuth supports eight simultaneous overrides, Tiferet supports twenty with thirty-minute duration.

Multiple independent environmental illusions operate concurrently: entire phantom rooms with furniture, inhabitants, and ambient details sustained for hours. Targets experience genuine physiological responses to illusory stimuli—sweating from phantom heat, flinching from phantom impacts. The computational load scales with sensory complexity; full five-sense illusions covering large areas demand Tiferet or higher reactors for reliable performance. Detection requires dedicated countermeasures—truth-sight, reality anchors, or sustained analytical scrutiny.

At Adept level the spell creates indistinguishable sensory reality within its operational sphere. It enables comprehensive environmental deception, psychological manipulation through controlled sensory experiences, and reliable concealment from all conventional detection. The spell cannot produce genuine mass, function beyond one-twenty-meter range, or deceive Master-tier truth-sight indefinitely.`,

            expert: `Operational range extends to five hundred meters with sensory fidelity indistinguishable from baseline reality to unaugmented observers. The device models weight distribution, air displacement, subconscious environmental cues, and microscopic texture details that convince even careful scrutiny. Illusions persist independently with behavioral scripting—phantom guards patrol schedules for hours, phantom crowds react naturally to events. Geburah reactors support forty simultaneous overrides with hour-long duration.

Memory integration becomes possible through sustained immersive exposure: targets experiencing illusory events for extended periods form genuine short-term memories of the fabricated stimuli as if they were real. A target spending thirty minutes in an illusory interrogation room genuinely remembers the experience afterward. Individual sensory profiles allow tailored experiences—different targets perceive different illusory realities simultaneously based on their expected perceptions. Detection requires Master-tier truth-sight or specialized reality-filtering equipment.

Expert-tier Sensory Override creates tactical-scale false reality bubbles indistinguishable from genuine environments. The spell enables mass deception, memory manipulation through controlled experiences, and comprehensive concealment of large operational assets. It cannot fool divine perception, create genuine physical matter, or extend beyond five-hundred-meter operational range.`,

            master: `District-scale deployment reaches two kilometers with perfect sensory synthesis across all active overrides. The device manages all generation, behavioral scripting, memory integration, and individual profile targeting as autonomous background processes. Keter reactors sustain one hundred simultaneous overrides indefinitely with negligible overhead. Cast time becomes reflexive at sub-second deployment for pre-configured illusion templates.

Permanent installations create persistent false environments: buildings appearing perpetually abandoned, streets invisible to casual observation, entire phantom facilities concealing real infrastructure. Mass deployment affects hundreds of targets with individually customized experiences—each observer sees what they expect or what tactically benefits the mage. All functions operate at design ceiling: perfect sensory fidelity, behavioral autonomy, memory integration, and individual targeting. The system handles computational loads that would overwhelm lower-tier reactors through optimized parallel processing.

This represents the absolute ceiling for Sensory Override as a Tier 2 spell: district-scale perfect sensory deception with comprehensive autonomy and customization. The spell provides maximum fidelity and throughput achievable within Tier 2 perceptual manipulation physics. It cannot create genuine matter, fool Tier 4+ reality filtering, exceed two-kilometer range, or deceive divine-scale perception.`
        }
    },
    {
        id: 'predictive_analysis',
        name: 'Predictive Analysis',
        tier: 4,
        cost: 20,
        proficiency: {
            beginner: `The device constructs probabilistic models by processing environmental data streams, historical pattern databases, and observed behavioral trends to generate predictive projections of near-future events. Analysis requires three minutes of meditation while the device runs simulation matrices. Output manifests as symbolic visions—fragmented imagery representing likely outcomes rather than literal future-sight. Malkuth reactors support two predictions per cycle with fifty to sixty percent accuracy for personal-scale events within seven days.

Visions present abstractly: a shattered blade represents likely combat failure, rising water suggests emotional overwhelm or logistical breakdown. Temporal precision remains vague—"soon" rather than specific timestamps. Each prediction drains significant mana and leaves the mage with mild cognitive fatigue. The spell cannot interrogate specific questions; it surfaces whatever the probabilistic models identify as significant upcoming decision points. Hod reactors improve accuracy to sixty-five percent and support three predictions per cycle.

At Beginner level Predictive Analysis functions as an early warning system rather than tactical intelligence. The spell provides advance notice of major personal threats or opportunities but lacks precision for detailed planning. It cannot predict specific enemy actions, provide exact timing, or exceed seven-day forecast windows.`,

            apprentice: `Cast time reduces to sixty seconds with vision clarity improving significantly. The device generates branching probability trees showing multiple potential futures based on current trajectory and decision points. Accuracy reaches seventy to seventy-five percent for personal events within two weeks. Symbolic abstraction shifts toward literal imagery: a broken sword now depicts the actual weapon at risk rather than metaphorical failure. Temporal resolution improves to "tomorrow afternoon" rather than "soon."

Visions can be shared through physical contact, allowing allies to experience predictive imagery directly though with reduced clarity. The device cross-references predictions against accumulated outcome data, continuously refining its models. Malkuth supports four predictions per cycle, Yesod supports eight with reduced cognitive fatigue. The mage can now query specific decision points: "What happens if we breach through the east entrance versus the roof?" The device provides comparative probability assessment.

Apprentice-tier Predictive Analysis becomes viable for tactical mission planning. The spell identifies dangerous decision points before commitment, compares probable outcomes of strategic choices, and provides actionable near-term intelligence. It cannot guarantee outcomes, predict beyond two weeks, or forecast events outside the mage's sphere of influence.`,

            adept: `Vision resolution reaches ninety percent accuracy for personal and local events within thirty days. The device maintains continuous low-level background scanning, flagging significant probability shifts without conscious activation. Predictive awareness manifests as intuitive certainty about immediate tactical decisions—knowing instinctively which corridor leads to danger, which ally faces imminent betrayal. Cast time for focused predictions drops to ten seconds.

Causal-chain tracing reveals not just predicted outcomes but the specific sequence of causes leading to them—and which minimal interventions alter the chain most efficiently. The mage perceives probability landscapes as navigable terrain during meditation: multiple branching paths with visible likelihood ratings, key decision nodes highlighted. Tiferet reactors support continuous background monitoring with twelve focused predictions per cycle and negligible fatigue.

At Adept level the spell transforms from passive warning system to active strategic planning tool. It enables probability-informed decision-making, efficient intervention targeting, and continuous threat awareness. The spell cannot predict events beyond thirty days, guarantee specific outcomes against active opposition, or function reliably when hostile diviners actively obscure probability streams.`,

            expert: `Accuracy exceeds ninety-five percent for personal and local events within ninety days, with reliable strategic forecasting for regional events (government actions, economic shifts, large-scale threats) within sixty days. The device models civilizational-scale trends with useful accuracy—predicting political collapses, military buildups, or magical catastrophes with sufficient lead time for intervention. Geburah reactors support twenty focused predictions per cycle plus continuous background awareness.

The mage perceives all significant probable futures simultaneously during meditation, navigating the probability manifold as integrated awareness rather than sequential visions. Hostile divination interference is detected automatically—the device flags deliberately obscured futures and models around the obstruction. Predictions extend to non-personal subjects: the mage forecasts probable movements of enemy units, likely outcomes of ongoing conflicts, or impending natural disasters affecting the operational theater.

Expert-tier Predictive Analysis delivers strategic intelligence across theater-scale operations. The spell provides near-certain tactical forecasting, reliable strategic warning for regional threats, and detection of probability manipulation. It cannot predict beyond ninety days with useful accuracy, guarantee outcomes against concentrated opposition, or perceive deliberately hidden futures protected by Master-tier obscuration.`,

            master: `The device maintains continuous predictive awareness across all probability streams relevant to the mage's operational sphere. Personal and local events are forecasted with near-certainty for months; regional events achieve ninety-percent accuracy for similar timeframes. Keter reactors support fifty focused predictions per cycle with zero cognitive load—all processing occurs as autonomous background function. The system alerts automatically to significant probability shifts requiring immediate attention.

Shared predictive capability extends to all linked allies—the mage broadcasts relevant predictions to team members in real-time during operations. Strategic interventions based on predictive intelligence become routine: identifying threats before they manifest, steering events through minimal precisely-targeted actions, and exploiting emerging opportunities with perfect timing. Hostile probability manipulation triggers immediate counter-analysis and the device traces interference back to its source.

This represents the absolute ceiling for Predictive Analysis as a Tier 4 spell: highly accurate probabilistic forecasting for personal, local, and regional scales with continuous autonomous monitoring and counter-divination capability. The spell provides maximum foresight achievable within Tier 4 information-gathering physics. It cannot predict beyond theater-scale geographic regions, guarantee outcomes against peer-tier opposition, exceed ninety-day windows with reliable accuracy, or perceive all possible futures across existence.`
        }
    },
    {
        id: 'consciousness_projection',
        name: 'Consciousness Projection',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device separates consciousness from the physical body by establishing a secondary awareness anchor point through a stabilized mana tether. Projection requires two minutes of meditation to achieve safe disconnection. The astral form manifests as intangible, invisible presence within one hundred fifty meters. Malkuth reactors sustain projection for fifteen minutes per cycle with thirty-minute recovery before re-projection is safe.

The silver mana tether anchors consciousness and routes sensory data back to the physical body, which remains unconscious and vulnerable during projection. The astral form passes through physical barriers—walls, floors, locked doors—observing any location within range undetected by mundane means. Magical wards specifically designed to block spiritual intrusion terminate the projection immediately. Beings with truth-sight or spiritual perception can detect the tether and potentially trace it to the undefended body. The experience causes mild spatial disorientation initially.

At Beginner level Consciousness Projection serves as pure reconnaissance capability. The spell enables undetected observation through physical barriers, intelligence gathering in secured areas, and remote surveillance. It cannot interact physically, communicate with observed subjects, or function beyond one-fifty-meter range.`,

            apprentice: `Range extends to two kilometers with projection duration reaching thirty minutes on Malkuth, sixty minutes on Hod. Cast time reduces to forty-five seconds. The tether gains redundancy through secondary mana strands, resisting casual disruption attempts. The physical body receives basic defensive wards that alert the mage to threats and provide minimal protection during vulnerability.

The astral form now perceives spiritual echoes—emotional residues, recent violence, concentrated magical activity—as luminous impressions revealing an area's recent history. Communication with spirits, ghosts, and other projected consciousnesses becomes possible through spiritual resonance. Basic physical interaction manifests: pushing lightweight objects (under one kilogram) through concentrated will, creating faint audible whispers, causing minor environmental disturbances. The mage reads spiritual impressions left on objects and locations from events within the past forty-eight hours.

Apprentice-tier Consciousness Projection gains investigative utility beyond pure observation. The spell enables spiritual forensics, limited physical influence, and cross-realm communication. It cannot transport physical objects, affect living beings directly, or extend beyond two-kilometer range.`,

            adept: `Range becomes planetary—the device maintains tether integrity across continental distances through nested dimensional routing. Projection duration extends to six hours on Tiferet reactors. The astral form interacts with physical reality at roughly ten percent of the mage's normal physical capability—enough to flip switches, open unlocked doors, or leave written messages. Cast time drops to fifteen seconds.

Selective visibility allows the mage to appear to specific individuals while remaining invisible to others. The astral plane becomes navigable as a dark-mirror dimension overlaid with spiritual impressions and luminous magical threads—the mage perceives the spiritual infrastructure underlying physical reality. Movement occurs at thought-speed across mapped areas. The mage can carry up to three allies' consciousnesses as passengers within the projection. The physical body rests in protective stasis with active defensive wards that repel intruders and alert the projected consciousness to threats.

At Adept level the spell provides planetary reconnaissance with limited interaction capability. It enables multi-person projection for group reconnaissance, spiritual-plane navigation, and remote observation at any planetary distance. The spell cannot manifest full physical presence, transport material objects, or function across dimensional boundaries reliably.`,

            expert: `Full physical manifestation becomes possible at roughly thirty percent combat capability—sufficient to delay attackers, neutralize mundane threats, or execute simple combat actions. Manifestation drains mana rapidly, limiting sustained physical presence to five-minute bursts. The device maintains projection integrity across dimensional boundaries, enabling reconnaissance into elemental planes, subspace layers, and near-dimensional regions. Geburah reactors support eight-hour projection duration with multiple simultaneous forms.

Up to five independent projections operate concurrently, each with autonomous awareness and separate mission parameters. All forms share consciousness with the primary awareness but function independently. The physical body rests under heavy ward protection with automated defensive protocols that can repel Expert-tier threats. Dimensional travel through the astral plane provides access to locations otherwise unreachable through conventional means. Each projection can carry two passengers for multi-team reconnaissance operations.

Expert-tier Consciousness Projection delivers multi-theater reconnaissance with limited combat capability and dimensional access. The spell enables simultaneous multi-front observation, cross-dimensional intelligence gathering, and distributed tactical presence. It cannot achieve full combat capability in astral form, maintain more than five simultaneous projections, or manifest permanently outside the physical body.`,

            master: `The device maintains planetary-range projection with up to ten simultaneous forms operating independently. Physical manifestation reaches forty percent combat capability with ten-minute sustainable duration per manifestation. Keter reactors support twelve-hour continuous projection with all forms active simultaneously. The physical body rests in maximum protective stasis—automated defenses repel Master-tier threats and emergency protocols recall all projections instantly on detected danger.

Permanent low-level astral awareness runs continuously without requiring full projection—the mage passively senses spirits, dimensional disturbances, strong emotional residues, and spatial anomalies within one kilometer as background perception. All forms share perfect coordination through quantum-entangled consciousness. Dimensional transit operates reliably across all accessible planes. Each projection carries up to three passengers with independent sensory feeds managed autonomously by the device.

This represents the absolute ceiling for Consciousness Projection as a Tier 3 spell: planetary reconnaissance with multiple independent forms, limited physical manifestation, cross-dimensional access, and continuous spiritual awareness. The spell provides maximum projection capability achievable within Tier 3 consciousness manipulation physics. It cannot achieve full permanent existence outside the body, exceed ten simultaneous forms, maintain full combat capability indefinitely, or project beyond accessible dimensional planes.`
        }
    },
    {
        id: 'essence_scanner',
        name: 'Essence Scanner',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device analyzes the unique spiritual signature emitted by all ensouled beings, rendering it as a visual overlay within twelve meters. Activation requires one second with the overlay persisting for five minutes per cast. Malkuth reactors support six scans per cycle with thirty-second refresh intervals. The display appears as luminous auras whose color, intensity, and texture reflect emotional state, spiritual health, and approximate magical capacity.

The overlay penetrates most physical barriers but not magical concealment wards or lead-lined structures. Analysis provides surface-level spiritual data: anxiety without its cause, magical capability without specific spell knowledge, spiritual corruption without diagnosis. The mage instantly distinguishes mages from mundanes, identifies disguised spirits, and detects active possession or spiritual manipulation. Hod reactors extend range to twenty meters and support twelve scans per cycle with fifteen-second refresh.

At Beginner level Essence Scanner provides threat assessment and social intelligence for close-range operations. The spell identifies magically active individuals, reveals emotional states, and detects spiritual abnormalities. It cannot penetrate sophisticated concealment, diagnose specific conditions, or function beyond twelve-meter range.`,

            apprentice: `Range extends to forty meters with significantly improved resolution. Cast refresh drops to five seconds with Malkuth supporting continuous overlay for fifteen-minute durations, Yesod supporting thirty minutes. The device now performs deep spiritual analysis revealing personality traits (compassionate, ruthless, diligent, deceitful), major life experiences that left spiritual marks (trauma, victory, betrayal), and active magical effects on the soul—curses, blessings, bonds, compulsions.

Basic spiritual disguises and simple concealment become transparent. Possession manifests as misaligned aura layers; active telepathic influence appears as intrusive tendrils in the target's signature. The device identifies specific curse or blessing types through signature matching against its magical database. Residual spiritual footprints remain visible for up to six hours after a target leaves an area. The mage conducts spiritual background checks during negotiations, identifies subtle magical tampering, and tracks recent spiritual activity.

Apprentice-tier Essence Scanner functions as comprehensive spiritual forensics tool. The spell provides detailed personality profiles, detects active magical manipulation, and tracks spiritual movements. It cannot penetrate Master-tier concealment, reveal deeply hidden past events, or extend beyond forty-meter range.`,

            adept: `Range reaches one hundred twenty meters with temporal depth—the device reads major spiritual events from a being's past (initiations, corruption moments, redemptions, trauma) as ghostly underlayers in their aura. Continuous overlay operates for two hours on Tiferet reactors with zero refresh delay. The scan pierces all but Master-tier spiritual concealment and cross-references signatures against known magical traditions, pacts, and bloodline markers.

Spiritual connections between beings appear as luminous threads stretching across space—the mage perceives bonds, oath-ties, familial links, and spiritual contracts visually. Inanimate objects gain spiritual readability: murder weapons glow with dark residue accumulated from violent use, family heirlooms radiate love, battlefield artifacts pulse with violence echoes. The device reads object histories through spiritual impressions for events within the past month. Environmental spiritual pollution becomes visible as colored mists or shadowy presences.

At Adept level the spell becomes invaluable for investigation, artifact authentication, and spiritual archaeology. It reveals personal histories, spiritual relationships, object provenance, and environmental magical residue. The spell cannot pierce divine-scale concealment, read souls across dimensional boundaries, or extend beyond one-twenty-meter range.`,

            expert: `Line-of-sight range across five kilometers—if the mage can see a location through any means, the overlay applies. Spectral resolution distinguishes nearly identical signatures, tracks specific individuals' spiritual trails through residue, and detects disturbances from decades past. Geburah reactors sustain continuous overlay for six hours with planetary-range capability for known signatures—the mage can check the spiritual state of linked allies anywhere on the planet.

The overlay reveals spiritual architecture and geography: ley lines as rivers of light beneath terrain, consecrated ground as elevated luminous zones, ambient spiritual energy flowing through cities like weather patterns, areas of corruption as dark stains. The mage identifies optimal ritual locations, tracks spiritual pollution sources, and detects slow spiritual decay in neighborhoods. Historical spiritual events appear as faded after-images—the device reconstructs past spiritual configurations from residual traces.

Expert-tier Essence Scanner provides theater-scale spiritual perception with temporal depth and environmental analysis. The spell enables geomantic surveying, long-range ally monitoring, and deep historical spiritual forensics. It cannot function across dimensional boundaries reliably, perceive souls that have fully dispersed, or extend beyond five-kilometer line-of-sight limits.`,

            master: `The overlay operates permanently with negligible mana cost, providing continuous spiritual awareness at maximum resolution across the mage's full perceptual range. Keter reactors integrate the scanner with all other sensory systems—physical, magical, and spiritual sight merge into coherent unified awareness. The device maintains an automatically updated catalog of all observed signatures, flagging anomalies and unknown patterns for immediate attention.

Spiritual trails remain readable for up to one week after passage. Allies receive shared Essence Scanner capability at Apprentice-level resolution through device-granted sensory extensions. Planetary tracking for all cataloged signatures operates as background function—the device monitors linked allies, known enemies, and flagged individuals continuously and alerts on significant spiritual state changes. All analysis occurs autonomously with zero conscious overhead.

This represents the absolute ceiling for Essence Scanner as a Tier 2 spell: permanent comprehensive spiritual perception integrated with unified sensory awareness and automated cataloging. The spell provides maximum spiritual detection achievable within Tier 2 perception physics. It cannot perceive across dimensional boundaries indefinitely, penetrate divine-scale concealment, or extend beyond planetary range for known signatures.`
        }
    },
    {
        id: 'stability_field',
        name: 'Stability Field',
        tier: 4,
        cost: 20,
        proficiency: {
            beginner: `The device establishes a localized reality reinforcement zone by projecting structured mana that resists alterations to baseline physical and magical laws within a three-meter radius. Field generation requires four seconds with Malkuth reactors sustaining the zone for forty seconds before depletion forces shutdown. The field remains anchored to its deployment point—movement beyond ten meters from the anchor causes immediate collapse.

The stability field forces reality-altering effects to revert toward baseline: illusions dissolve within nine seconds of exposure, minor probability manipulations fail to take effect, transmutations slowly reverse. Low-grade curses and minor spatial distortions are suppressed but not dispelled—they resume function once targets exit the field. The zone provides no defense against conventional physical attacks or elemental magic that doesn't violate baseline physics. Hod reactors extend duration to seventy seconds and support two simultaneous fields.

At Beginner level Stability Field counters localized reality manipulation during critical moments. The spell disrupts illusions, suppresses probability nudges, and stabilizes minor spatial anomalies. It cannot move with the mage, block physical threats, affect high-tier reality manipulation, or sustain beyond seventy seconds.`,

            apprentice: `The field follows the mage at five-meter radius during movement, though this doubles mana consumption and limits runtime to ninety seconds. Yesod reactors support three simultaneous fields with one mobile and two stationary. Cast time drops to two seconds. The stability threshold increases significantly—teleportation attempts within the field boundary collapse entirely, depositing attempted transporters disoriented but unharmed just outside the perimeter.

Transmuted objects fully revert to original states after twenty-five seconds of exposure. Small spatial ripples and dimensional tears stabilize and seal within the field. The device can be configured with exception protocols, allowing designated allied reality-manipulations to function normally while suppressing hostile effects. Two minor curses or probability fields are suppressed simultaneously on targets within the zone. The field actively resists reality-warping attempts rather than passively reverting them.

Apprentice-tier Stability Field provides mobile reality protection for small teams. The spell blocks teleportation intrusion, reverses hostile transmutation, and maintains baseline physics during reality-warping attacks. It cannot sustain mobile operation beyond ninety seconds, handle more than three simultaneous fields, or counter Master-tier reality manipulation.`,

            adept: `Radius expands to twenty-five meters with stationary fields lasting up to six hours when extra mana is invested during deployment. The field prevents all illusion formation within the zone and forces teleportation attempts to fail catastrophically at the boundary—attackers attempting to teleport in suffer severe spatial disorientation. Tiferet reactors support five simultaneous fields with two mobile and three permanent installations.

Complex exception configurations allow allied speed enhancements, healing magic, and approved spatial manipulation while blocking all hostile reality alteration. A reality tear from failed experimental magic is repaired over ninety seconds, restoring normal physics to the affected area. Permanent anchors last up to ten days with sufficient mana investment and can be networked—overlapping fields reinforce each other, creating no-manipulation zones. The device logs all reality-warping attempts within the field, providing forensic data on attack types and origins.

At Adept level the spell enables secure facility establishment and sustained reality protection. It creates manipulation-free zones for sensitive operations, repairs dimensional damage, and provides comprehensive magical defense. The spell cannot counter Tier 5 reality manipulation, extend beyond twenty-five-meter radius, or maintain more than five simultaneous fields.`,

            expert: `District-scale deployment reaches one hundred meters radius with stationary installations lasting thirty days. The field intercepts and nullifies incoming spatial attacks—dimensional rifts, teleport strikes, spatial compression assaults—before they manifest within the protected zone. Domination effects, mental compulsions, and spiritual manipulations on protected subjects are purged within four seconds. Geburah reactors support eight simultaneous fields with comprehensive coverage across multi-block operational areas.

Remote projection establishes stability fields at any location within one kilometer without requiring the mage's physical presence. The reference frame counters advanced reality-warping techniques cataloged in the device's database—the system adapts to known manipulation methods and develops countermeasures. Allied mages within the field experience improved spell stability and reduced miscast probability. The field can be configured to suppress specific reality-manipulation types while permitting others, allowing fine-grained control.

Expert-tier Stability Field delivers theater-scale reality protection with adaptive countermeasures and remote deployment. The spell creates fortress-grade manipulation resistance, purges ongoing reality alterations, and provides strategic denial zones. It cannot counter divine-scale reality manipulation, extend beyond one-kilometer projection range, or maintain more than eight simultaneous fields.`,

            master: `The device sustains up to twelve simultaneous fields across district-scale operational areas with radii reaching two hundred meters each. Permanent installations persist for months with routine maintenance, forming overlapping network coverage that creates comprehensive manipulation-denial zones. Keter reactors optimize all field operations as background processes—automatic threat detection neutralizes reality violations within protected zones without requiring conscious input.

Keyed allies retain full magical access through exception protocols that recognize friendly signatures automatically. Unkeyed enemies experience complete reality-manipulation suppression—all Abstract spell categories, spatial manipulation, temporal distortion, and probability alteration fail within the zones. The device maintains adaptive counter-databases that learn from each encountered manipulation attempt, improving suppression effectiveness against repeated attack patterns. Remote projection reaches five kilometers with instant deployment.

This represents the absolute ceiling for Stability Field as a Tier 4 spell: district-scale overlapping reality-protection networks with adaptive countermeasures and comprehensive suppression. The spell provides maximum stability-enforcement achievable within Tier 4 defensive physics. It cannot suppress Tier 5 reality-warping indefinitely, extend beyond district-scale coverage, exceed twelve simultaneous fields, or prevent all reality manipulation from divine-tier sources.`
        }
    },
    {
        id: 'neural_rewrite',
        name: 'Neural Rewrite',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device interfaces with a target's neural memory structures through physical contact, reading encoded memory patterns as sensory data streams. Memory reading requires two minutes of sustained contact with a cooperative or restrained subject. The interface extracts the last six hours as fragmented sensory impressions—visual snapshots, auditory fragments, emotional context—without full narrative coherence. Malkuth reactors support three reading sessions per cycle.

Simple memory editing becomes possible: reducing clarity of specific recalled images, adjusting emotional weight attached to events, or slightly altering peripheral details. A witness's memory of the mage's face becomes blurrier and less useful for identification. Modified memories revert to original fidelity after six hours unless the target consciously reinforces the altered version. Complex memories remain untouchable—no fabrication, deletion, or structural reorganization. The target must remain still and non-resistant or neural interface fails.

At Beginner level Neural Rewrite provides limited interrogation and temporary memory obfuscation. The spell extracts recent sensory data and makes minor temporary modifications. It cannot create false memories, permanently delete information, operate at range, or function on resistant subjects.`,

            apprentice: `Contactless operation at eight meters allows memory access without physical touch. Reading expands to forty-eight hours with full narrative coherence and sensory fidelity. Hod reactors support six operations per cycle with two-minute processing time per target. The device now edits specific details permanently: changing a remembered face to someone else's, altering heard passwords by one or two characters, modifying environmental details.

False memory implantation becomes viable for simple scenarios: the target genuinely believes they already searched a room, spoke with a person they never met, or witnessed an event that didn't occur. Emotional context adjusts automatically to make new memories feel authentic. Complex edits require sustained focus over four minutes. Extracted memories can be stored in the device for later review or implantation into other subjects. The spell bypasses conventional interrogation entirely by reading operational intelligence directly.

Apprentice-tier Neural Rewrite functions as comprehensive intelligence extraction and memory manipulation tool. The spell reads extended memories with full clarity, implants simple false memories, and edits specific details permanently. It cannot rewrite entire life histories, operate beyond eight-meter range, or function on Expert-tier mental defenses.`,

            adept: `Complete memory restructuring becomes possible over thirty minutes of focused work. The device rewrites entire biographical sections: a captured operative receives new childhood in a different location with different family and altered training history. The operative genuinely believes the new biography and demonstrates corresponding personality traits. Skill copying operates at eighty-percent fidelity—observing a target's memory of their marksmanship training allows the mage to extract and implant similar patterns in an ally who then shoots at reduced proficiency.

Full archival copies of all extracted memories are maintained in device storage, allowing complete reversal of any edit. Multiple targets can be processed simultaneously—Tiferet reactors handle three concurrent rewrites. Range extends to fifteen meters with line-of-sight requirement. The mage reads environmental memories—residual neural impressions left on objects by strong emotional events—extracting a victim's final moments from a bloodstained weapon.

At Adept level the spell enables complete identity restructuring and skill transfer. It rewrites personal histories, copies expertise between individuals, and reads psychometric impressions from objects. The spell cannot exceed eighty-percent skill transfer fidelity, operate beyond fifteen meters, or overcome Master-tier mental protection.`,

            expert: `Range extends to sixty meters with simultaneous editing of twelve targets. The device coordinates mass memory modification—a group of witnesses all receive identical altered memories of an incident, ensuring perfect story consistency. Collective memory editing becomes possible: a community's shared recollection of historical events is adjusted to support revised narratives. Geburah reactors process twenty operations per cycle with five-minute average completion time per complex rewrite.

Environmental memory reading extends to locations and architectural spaces: the mage experiences critical events that occurred in a room within the past month through residual impressions. Skill transfer fidelity increases to ninety percent with refined neural pattern matching. The device maintains comprehensive archives of every extracted, modified, or implanted memory with instant access for reversal or analysis. Bloodline memories—ancestral recollections passed through family lines—become accessible and modifiable.

Expert-tier Neural Rewrite delivers theater-scale memory manipulation with mass coordination capability. The spell enables collective narrative control, high-fidelity skill transfer, and deep environmental memory forensics. It cannot exceed ninety-percent skill fidelity, operate beyond sixty-meter range, or modify memories protected by Master-tier defenses.`,

            master: `District-scale operations reach two hundred meters with unlimited simultaneous targets within range. The device processes all memory operations autonomously—reading, editing, archiving—as background functions requiring zero conscious oversight. Keter reactors handle fifty complex rewrites per cycle with optimized neural pattern recognition. Skill transfer reaches ninety-five-percent fidelity—near-perfect expertise replication.

Any number of targets receive coordinated memory modifications in single mass operations. Organizational collective memories—shared institutional knowledge, corporate culture, community traditions—are adjusted with surgical precision. Every operation maintains complete archival backup with instant reversal capability. The system tracks all modifications, flags potential contradictions, and suggests optimal editing strategies for maintaining consistency. Environmental memory reading extends to three months with full sensory reconstruction.

This represents the absolute ceiling for Neural Rewrite as a Tier 3 spell: district-scale comprehensive memory manipulation with mass coordination and near-perfect skill transfer. The spell provides maximum neural editing capability achievable within Tier 3 mind-manipulation physics. It cannot alter what actually occurred in reality, create genuine expertise from nothing, exceed ninety-five-percent skill transfer fidelity, or operate beyond two-hundred-meter range.`
        }
    },
    {
        id: 'hex_protocol',
        name: 'Hex Protocol',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device constructs hostile mana parasites that attach to a target's spiritual signature, creating persistent negative interference patterns. Hex deployment requires line-of-sight within twenty meters and three seconds of targeting calculation. The parasite causes minor inconveniences: misplaced items three times daily, persistent dull headaches, slight clumsiness. Malkuth reactors sustain one active hex with natural decay after four to seven days. The hex manifests as a small drain on the target's ambient luck and biological baseline. Any competent mage can detect and remove the hex with fifteen minutes of counter-ritual work. Physical signs include faint darkening at the attachment point and slight temperature drop. At Beginner level the spell provides harassment and minor disruption, creating persistent but non-lethal interference that cannot cause direct harm, resist skilled dispelling, or affect more than one target.`,

            apprentice: `Conditional activation becomes possible: hexes trigger only when targets perform specific actions like drawing weapons or entering restricted zones. Duration extends to two weeks with Hod reactors supporting three simultaneous hexes. Physical manifestations become more pronounced. The hex resists casual removal, requiring thirty-minute dedicated counter-ritual. Hexes can be delivered through prepared cursed objects allowing indirect application. Layered effects cause initial symptoms to worsen after forty-eight hours: mild headaches escalate to migraines, clumsiness progresses to coordination loss. The device tracks all active hexes with real-time monitoring. Apprentice-tier Hex Protocol creates escalating disruption through proxy objects and resists casual removal but cannot cause immediate lethal harm or affect more than three targets.`,

            adept: `Death-curse protocols activate under specific triggers: speaking a true name during a full moon causes severe hemorrhaging. Ability degradation hexes target skills: swordsmen's grips tremble in combat, mages' accuracy drops forty percent. Effects develop over hours allowing countermeasures. Tiferet reactors track six hexes with independent trigger logic. Permanent bloodline hexes descend three generations unless dispelled. The mage chains effects so one hex triggers another in sequence. Hex removal requires the mage's cooperation or comparable specialists. At Adept level the spell delivers combat degradation and multi-generational effects including conditional death curses and bloodline contamination, but cannot cause instant death or exceed three-generation persistence.`,

            expert: `Existential hexes cause progressive memory erasure within seventy-two hours—everyone forgets the target existed. Obscurity hexes make spoken words unheard, achievements misattributed, presence ignored. Conceptual targeting affects entire organizations without individual curses. Soul-binding hexes anchor spirits to locations post-mortem. Geburah reactors track fifteen hexes with complex conditional chains. Breaking requires original caster cooperation, Master-tier specialists, or months of counter-ritual. Expert-tier Hex Protocol delivers strategic malefic effects with existential targeting and soul-binding but cannot affect more than fifteen targets or cause instant guaranteed death.`,

            master: `The device tracks twenty-five simultaneous hexes with autonomous monitoring. Complex conditional chains execute without oversight. Bloodline hexes persist across unlimited generations. Conceptual targeting affects large organizations and bloodlines precisely. Full monitoring provides real-time status, progression predictions, and removal attempt tracking. The device suggests optimal chains and auto-adjusts based on resistance. This represents the ceiling for Hex Protocol as a Tier 3 spell: comprehensive malefic targeting with unlimited bloodline persistence and autonomous management, but cannot reliably cause instant death, affect entire populations, exceed twenty-five concurrent hexes, or overcome divine protection.`
        }
    }
];
// Append to additionalAbstractSpells
additionalAbstractSpells.push(
    {
        id: 'boon_protocol',
        name: 'Boon Protocol',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device constructs beneficial mana augmentation patterns that integrate with a target's spiritual signature through physical contact. Boon bestowal requires three minutes of focused channeling while the device weaves supportive interference patterns. The boon manifests as gentle warmth and lasts four days. Malkuth reactors sustain one active boon at a time. The augmentation reinforces natural recovery processes, improves sleep quality, and provides subtle luck enhancement—a patrolling scout discovers useful tracks by chance. The device accelerates existing capabilities without creating new ones. At Beginner level the spell provides wellness and minor fortune enhancement but cannot grant new abilities or sustain multiple simultaneous boons.`,

            apprentice: `Conditional activation becomes possible: boons trigger when recipients perform specific virtuous actions like protecting civilians or healing wounded. Duration extends to two weeks with Hod reactors supporting three simultaneous boons. Boons can be transferred via prepared token amulets for indirect bestowal. A blessed healer experiences noticeably faster patient recovery rates through enhanced natural healing processes. The device tracks active boons with status monitoring. Apprentice-tier Boon Protocol creates conditional beneficial effects and supports token-based distribution but cannot grant supernatural abilities or affect more than three targets.`,

            adept: `Transformative permanent boons become possible. A blessed field medic gains steady hands that never tremble during surgery and patients experience accelerated recovery from chronic conditions over months. The blessing becomes permanent unless actively revoked by the mage. Tiferet reactors track six simultaneous boons with independent configurations. Bloodline boons pass to direct children as genetic enhancements. The device monitors all active boons and adjusts parameters based on recipient behavior. At Adept level the spell delivers permanent personal enhancement and bloodline benefits but cannot create supernatural powers or extend beyond six targets.`,

            expert: `Existential boons affect fundamental aspects of existence. A blessed engineer's designs gain lasting recognition across generations and historical significance. Abstract subjects receive boon effects: a community's collective morale increases, an organization gains resistance to internal corruption. Geburah reactors track fifteen boons with complex beneficial logic chains. Boons create foundational metaphysical properties requiring Master-tier magic to undo. Expert-tier Boon Protocol delivers strategic-scale beneficial alteration with abstract targeting but cannot override free will or affect more than fifteen subjects.`,

            master: `The device maintains twenty-five simultaneous boons with autonomous management. Conditional logic activates benefits when recipients defend key positions or perform valued actions. Bloodline boons persist through unlimited generations with genetic integration. Organizations receive moral and ethical reinforcement that deters corruption structurally. Complete archives allow instant revocation when needed. The system handles all monitoring, activation, and adjustment autonomously. This represents the ceiling for Boon Protocol as a Tier 3 spell: comprehensive beneficial augmentation with unlimited bloodline persistence and autonomous management, but cannot override consent, create godlike powers, or exceed twenty-five concurrent boons.`
        }
    },
    {
        id: 'entity_binding',
        name: 'Entity Binding',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device opens calibrated pathways across dimensional boundaries by calculating resonant frequencies and broadcasting voluntary summons. Summoning requires two minutes of ritual preparation to establish stable transit vectors. Minor elemental wisps and lesser spirits answer the call, manifesting as intangible presences or small physical forms. Malkuth reactors sustain one entity for ten minutes before the pathway collapses and the entity returns home. Summoned beings provide illumination, minor distractions, or simple message delivery but lack combat capability. The summons is voluntary—entities choose to answer based on offered terms. At Beginner level the spell provides utility summons for non-combat applications.`,

            apprentice: `Combat-capable entities become accessible. The device negotiates basic contracts ensuring service terms and preventing betrayal through binding clauses. A summoned warrior-spirit fights with trained-soldier equivalency for fifty minutes. Hod reactors sustain three simultaneous entities with overlapping service periods. Entities answer from greater astral distances but deep-planar layers remain inaccessible. Binding contracts establish duration, behavior parameters, and dismissal conditions. Apprentice-tier Entity Binding supplies genuine combat support and utility assistance through contracted spirits.`,

            adept: `Permanent entity binding becomes possible through substantial mana investment and extended ritual work. An elemental guardian from an adjacent plane serves indefinitely once the binding finalizes and obeys contractual terms enforced by the device. The mage summons entities by true name when known, establishing direct communication. Tiferet reactors maintain twelve simultaneous bound entities. The device assembles unique servant constructs by combining elemental essences rather than summoning existing beings. At Adept level the spell creates permanent servant forces and custom constructs.`,

            expert: `Powerful intelligent entities become negotiable. The mage establishes fair terms with spirit nobility and elemental lords—beings with genuine power and autonomy who cooperate through respect rather than coercion. Aspects of abstract concepts manifest temporarily: accumulated battlefield courage takes physical form as a valorous avatar. The device accesses deep-planar layers most summoners cannot reach. Geburah reactors coordinate twenty entities simultaneously. Expert-tier Entity Binding enables high-tier summons through diplomatic negotiation and conceptual manifestation.`,

            master: `The device maintains twenty-five bound entities with autonomous contract management. Standing pacts allow instant deployment without repeated negotiation. Contract violations trigger automatic banishment and penalty extraction. Summoned beings operate independently for extended missions lasting days. The system handles all pathway calculations, contract enforcement, and entity coordination as background processes. This represents the ceiling for Entity Binding as a Tier 3 spell: comprehensive summoning capability with permanent forces and diplomatic access to powerful entities, but cannot summon divine-tier beings, exceed twenty-five simultaneous entities, or bypass entity consent for powerful summons.`
        }
    },
    {
        id: 'forced_expulsion',
        name: 'Forced Expulsion',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device analyzes extra-planar entities' dimensional signatures, calculates return pathways to origin planes, and applies repulsive force that ejects them from current reality. Expulsion requires line-of-sight within fifteen meters and four seconds of signature analysis. The spell affects only beings that originated from other planes—native creatures are immune. Malkuth reactors support three expulsions per cycle. Stronger entities resist through greater spiritual mass; the effect either succeeds completely or fails entirely. At Beginner level the spell banishes minor extra-planar entities back to their home dimensions.`,

            apprentice: `Persistent banishment wards establish area denial. The device projects protective fields around locations that automatically reject specified entity types. Partially manifested or possessing entities are fully ejected while hosts remain intact. Hod reactors support six expulsions per cycle plus two persistent ward zones. Banished entities receive return prohibitions lasting weeks to months depending on the entity's power. The mage can banish entities to sealed pocket prisons rather than home planes, containing them indefinitely. Apprentice-tier Forced Expulsion provides area protection and containment options.`,

            adept: `Universal extra-planar expulsion becomes possible regardless of entity power level. The ejection field scales force proportionally to the target's spiritual mass. Even native beings can be forcibly sent to other dimensions at increased mana cost. Tiferet reactors support twelve expulsions per cycle with multi-target simultaneous banishment. Permanent expulsion severs the entity's pathway to current reality at the root, preventing future return without extreme effort. Selective partial expulsion removes possessing spirits' control over specific body parts without full exorcism. At Adept level the spell banishes any extra-planar presence and forcibly displaces native beings.`,

            expert: `Mass expulsion affects all entities of specified types within one hundred meters in a single casting. Concepts and influences become valid targets: dark presences eject from consecrated ground, accumulated despair clears from trauma sites. Geburah reactors coordinate twenty simultaneous expulsions across theater-scale areas. Dimensional suspension holds entities in temporal stasis for months before optional release. Banishment dead zones create permanent areas where specified entity types cannot exist. Expert-tier Forced Expulsion delivers strategic entity denial and conceptual purification.`,

            master: `The device expels any sensed entity instantly with autonomous signature analysis and force scaling. Category-level banishment affects entire classes across operational areas simultaneously. Permanent dead zones cover districts with minimal overhead. Complex conditional rules enforce automatically: all beings aligned with a specific hostile entity are expelled from a continent for a century. The system handles all analysis, force application, and ward maintenance as background functions. This represents the ceiling for Forced Expulsion as a Tier 3 spell: comprehensive banishment with permanent area denial and conceptual purification, but cannot banish divine-tier entities indefinitely, exceed district-scale dead zones, or prevent all dimensional incursion.`
        }
    },
    {
        id: 'oath_enforcement',
        name: 'Oath Enforcement',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device constructs metaphysical contract frameworks between willing participants by establishing magically binding agreements monitored through spiritual signature tracking. Contract formation requires all parties to understand terms fully and consent freely—coerced agreements are magically void. Simple two-party contracts with clear deliverables function reliably: 'Party A delivers the artifact by sunset; failure triggers mild compulsion to return payment.' Malkuth reactors sustain three active contracts. The device detects intentional violations through direct action and intent reading; genuine accidents or impossible circumstances don't trigger penalties. At Beginner level the spell creates basic enforceable agreements with simple penalty structures.`,

            apprentice: `Complex multi-party agreements become possible with conditional terms, escalating penalties, and beneficial outcomes. 'If Party A secures the pass before the army arrives, they receive a month of enhanced physical capability; failure through negligence causes equivalent weakness.' The device interprets ambiguous terms based on parties' stated intent at signing. Contracts extend to heirs if explicitly acknowledged. Hod reactors maintain twelve active contracts with automatic interpretation. Apprentice-tier Oath Enforcement creates sophisticated conditional agreements with inherited obligations.`,

            adept: `Reality-enforced agreements make violations physically difficult. The device applies spatial manipulation making it increasingly difficult for contracted bodyguards to stray beyond ten meters from their charge. Contracted couriers find routes to destinations unusually clear while alternatives block. Penalties manifest as automatic magical effects: promise-breakers lose mana access until restitution, contract violators find their own spells backfiring. Tiferet reactors track twenty contracts. Organizations and bloodlines bind as collective entities. At Adept level the spell enforces agreements through reality manipulation.`,

            expert: `Agreements bind supernatural entities through willing contract participation. Contracts with winter spirits specify seasonal severity and duration in regions. City guardian spirits bind to protect specific individuals within their borders. Terms manipulate probability through contract-channeled power: guaranteeing the next arrow finds its mark. Geburah reactors manage thirty-five contracts with complex entity negotiations. Expert-tier Oath Enforcement binds supernatural forces and manipulates probability through contractual frameworks.`,

            master: `The device maintains fifty active contracts with autonomous monitoring, interpretation, and enforcement. Contract terms incorporate complex logic chains and conditional clauses referencing external events. Perfect archives track all contracts, terms, and enforcement history. Standing contracts with allies, organizations, and supernatural entities manage as routine background processes. This represents the ceiling for Oath Enforcement as a Tier 3 spell: comprehensive magical legal framework with supernatural binding and probability manipulation, but cannot override free will, exceed fifty simultaneous contracts, or bind divine-tier entities without their willing cooperation.`
        }
    },
            expert: `During a city reconstruction the mage bestows an existential blessing on the lead engineer. The engineer's designs gain lasting recognition across generations and violence never erupts inside the new district hall. Abstract subjects such as a community's morale receive similar treatment. The effects form foundational properties that require major magic to undo.`,
            master: `During a multi-year campaign the mage maintains twenty blessings across allied units with the device handling tracking. Conditional logic activates reserves when units defend key positions and bloodline blessings persist through generations. Organizations receive moral weight that deters corruption. Full archives allow instant revocation. This reaches the ceiling for a tier three benefic spell.`
        }
    },
    {
        id: 'vitality_siphon',
        name: 'Vitality Siphon',
        tier: 4,
        cost: 20,
        proficiency: {
            beginner: `The device creates a one-way bioenergy conduit through physical contact, extracting life force—the ambient biological and spiritual energy sustaining living organisms—and channeling it into the mage's reserves. Siphon activation requires three seconds of sustained contact. The extraction is equivalent to a full night's rest worth of vitality: targets feel sudden exhaustion, the mage experiences revitalization and minor wound closure. Malkuth reactors support four siphons per cycle with negligible mana cost since energy is harvested rather than expended. The effect cannot kill at this proficiency—the device safety-limits extraction to prevent lethal drain. Drained vitality provides temporary physical restoration but cannot cure serious injuries. The spell requires willing, restrained, or incapacitated targets. At Beginner level the spell provides emergency field restoration but cannot sustain combat healing, drain at range, or affect multiple targets.`,

            apprentice: `Range extends to twelve meters with contactless siphoning. Drain intensity scales significantly causing genuine debilitation. Hod reactors support three simultaneous conduits with independent flow management. Drained energy stores in the device's buffer for later use, functioning as emergency reserves up to forty percent of base capacity. The mage can drain through thin barriers and transfer drained vitality directly to allies. Yesod reactors extend range to twenty meters and support five simultaneous siphons. Apprentice-tier Vitality Siphon functions as tactical energy redistribution enabling combat healing through enemy-to-ally transfer.`,

            adept: `Range reaches sixty meters with lethal-drain capability when deliberately activated. The device extracts specific qualities: youth, strength, or biological functions like sight. Tiferet reactors support eight simultaneous siphons with selective quality extraction. The mage gains drained qualities partially: aging a twenty-year-old by ten years provides days of youth restoration. Environmental siphoning drains vitality from forests or crowds. The device stores up to one hundred percent additional capacity as buffer reserves. At Adept level the spell delivers targeted quality theft and environmental draining.`,

            expert: `District-scale deployment reaches three hundred meters with mass simultaneous draining—hundreds of targets through parallel conduits. Absorbed life force grants temporary functional immortality: the mage's body halts aging and regenerates from fatal damage while drain sustains. Geburah reactors coordinate twenty quality-theft operations plus environmental mass drain. Abstract vitality becomes targetable: draining collective energy from organizations, ecosystem collapse, or spiritual momentum from movements. Quality theft becomes semi-permanent: weeks of youth extension, days of stolen strength. Expert-tier Vitality Siphon delivers strategic-scale life force manipulation.`,

            master: `District-scale coverage reaches six hundred meters with hundreds of simultaneous conduits managed autonomously. The energy buffer stores enough vitality to fully heal the mage and twenty-five allies from near-death multiple times. Keter reactors optimize all operations with discriminating precision: drain disease while preserving health, extract poison, remove magical contamination without affecting souls. Quality extraction operates surgically. Semi-permanent gains extend to months. This represents the ceiling for Vitality Siphon as a Tier 4 spell: comprehensive life-force manipulation at district scale with surgical precision, but cannot grant permanent immortality or restore the fully dead.`
        }
    },
    {
        id: 'death_command',
        name: 'Death Command',
        tier: 4,
        cost: 20,
        proficiency: {
            beginner: `The device animates deceased biological matter by embedding mana constructs into residual nervous systems, creating simple undead servants. Animation requires physical contact with the corpse and fifteen seconds of mana infusion. The constructs follow basic verbal commands and possess roughly the physical capability of their living bodies minus coordination and initiative. Malkuth reactors sustain three simultaneous undead with natural degradation over one week as tissue breaks down. The original soul is not involved—these are biological puppets powered by magic. The mage can also stabilize departing souls of the recently deceased (within twelve hours) for five-minute questioning sessions. At Beginner level the spell provides basic undead labor and recent-death interrogation.`,

            apprentice: `Sophisticated undead become viable: reinforced skeletons with extended longevity, ghouls with enhanced physical capability and autonomous hunting instincts, intelligent undead retaining fragments of living memories for tactical decisions. The device interfaces with residual neural patterns to access muscle memory and learned skills. Hod reactors sustain twelve undead with preservation preventing tissue degradation for months. The mage communicates with spirits from any era by reaching across the life-death boundary to contact souls not yet fully dissipated. Apprentice-tier Death Command creates tactically capable undead forces and enables historical spirit consultation.`,

            adept: `Undead armies—dozens to hundreds—operate under device tactical coordination. The mage creates permanent undead lieutenants (vampires, liches, death knights) by embedding fragments of their own spiritual essence in prepared vessels, granting genuine intelligence and autonomy. These lieutenants command lesser undead independently. Tiferet reactors coordinate one hundred undead simultaneously. Temporary death reversal becomes possible: stabilizing fatally wounded allies' souls within bodies for six hours, or briefly restoring corpses to life for extended interrogation. The boundary between life and death becomes manipulable within the mage's operational sphere. At Adept level the spell provides localized mortality control and permanent intelligent undead forces.`,

            expert: `Permanent undeath as transformation creates immortal beings that persist indefinitely, bound by spiritual contract. True resurrection becomes possible: restoring deceased individuals to full life by retrieving souls and anchoring them to repaired or replacement bodies. This requires intact willing souls not yet reincarnated. Geburah reactors coordinate three hundred undead plus five intelligent lieutenants. The mage creates and governs afterlife pocket-realms where bound souls persist as reservoirs of spiritual power and knowledge. Expert-tier Death Command provides genuine dominion over death and undeath at tactical scale with resurrection and afterlife management capabilities.`,

            master: `The device manages one thousand undead simultaneously with autonomous tactical coordination through the spiritual-lieutenant network. Permanent undead forces deploy at scale—immortal legions bound to eternal service. Resurrection success exceeds ninety percent for souls retrieved within one year of death. Keter reactors maintain five pocket afterlife realms housing hundreds of souls with full spiritual ecosystem management. All functions operate at design ceiling as background processes. This represents the ceiling for Death Command as a Tier 4 spell: genuine dominion over death and undeath at regimental scale, but cannot end death itself, create afterlives for all existence, or resurrect souls that have fully dispersed or reincarnated.`
        }
    },
    {
        id: 'consciousness_override',
        name: 'Consciousness Override',
        tier: 4,
        cost: 20,
        proficiency: {
            beginner: `The mage channels awareness through the device into a willing ally ten meters away during a tense standoff. They inhabit the host's body, directing a hand to draw a hidden blade while feeling the ally's heartbeat and hearing through their ears. The mage's own form slumps in a nearby chair, defenseless until the link ends after twenty minutes of strain. The host stays fully aware and cooperative; any hint of resistance ejects the connection immediately.`,
            apprentice: `Stronger spiritual pressure lets the mage override a weaker unwilling target in a dark corridor. The device suppresses the host's soul reflex, granting motor control for nearly an hour while the original mind goes dark. The mage's body rests under a basic ward that deters casual threats. Memories surface as flashes during the possession, readable but unchangeable. Movements feel smoother as the device stores the host's walking patterns. Range reaches twenty-five meters.`,
            adept: `The mage manages two hosts at once in a nighttime infiltration. One body scouts ahead while the second stands guard, with the device splitting focus across both. The original form stays in stasis. A captured animal serves as temporary vessel after several minutes of sensory recalibration. Consciousness parks briefly in an enchanted locket between switches. Sessions last hours before cumulative fatigue demands release.`,
            expert: `Prepared vessels enable rapid switches. From a collapsing soldier's form the mage jumps to a reinforced construct across the street in under a second, keeping combat edge. Three hosts coordinate through device background handling. Loss of one vessel pulls awareness to the nearest backup without gap. Coordinated attacks on every vessel leave only moments to locate a replacement anchor before the consciousness has nowhere to attach.`,
            master: `The spell operates at its intended maximum. Transfers between prepared vessels happen with no awareness loss. Four simultaneous hosts function across a skirmish line under device management. Multiple backups protect against isolated losses. Total destruction of every prepared vessel ends the mage with no remaining options. This marks the ceiling of Possession as a Tier 4 spell: dependable switching among limited vessels, not endless life.`
        }
    },
    {
        id: 'emotional_resonance',
        name: 'Emotional Resonance',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device detects and analyzes emotional mana-field fluctuations from sentient beings within twelve meters, translating them into intuitive color-coded impressions. Red indicates anger, blue represents sorrow, gold signals joy. Malkuth reactors sustain passive detection for thirty minutes per cycle with negligible cost. The mage perceives emotional spikes in real-time: liars show anxiety surges, aggression builds as visible tension before violence. Gentle emotional nudges become possible—easing nervous allies' tension or sharpening distracted guards' focus costs minimal mana. At Beginner level the spell provides emotional intelligence and minor mood adjustment for close-range social operations.`,

            apprentice: `Range extends to forty meters with layered emotional analysis revealing underlying causes: current anger rooted in grief, calm facade masking terror. Hod reactors support hour-long detection with active manipulation capability. Specific states dial up or down: rage cools to irritation, hesitation grows into resolve. Temporary artificial trust forms between strangers during negotiations. Group emotional projection shifts overall mood across small crowds. Residual emotional impressions linger in locations for hours, readable as faint echoes. Apprentice-tier Emotional Resonance provides tactical empathy and active mood manipulation for small-group operations.`,

            adept: `Range reaches one hundred twenty meters with complete emotional dominance. The mage imposes any emotional state: soldiers facing death feel calm resolve, trusted partners experience sudden hatred. Tiferet reactors support eight simultaneous targets with independent emotional programming. Repeated manipulation sessions rewire habitual emotional responses over weeks: cowardice transforms into steady courage, aggression retrains as restraint. Emotional qualities transfer through device buffering: veteran courage extracted and implanted in frightened civilians. Non-human sentients receive species-appropriate emotional stimulation. At Adept level the spell grants direct emotional control and personality modification.`,

            expert: `District-scale emotional influence reaches five hundred meters affecting thousands simultaneously. Calm spreads across rioting streets, hope broadcasts through disaster zones, despair saturates enemy formations breaking their will. Geburah reactors coordinate emotional manipulation for entire crowds. Collective emotions manifest physically: grief condenses as visible cold mist, rage forms heat shimmer. Emotional anchors attach to locations—anyone entering experiences the programmed emotion (overwhelming sorrow, protective warmth, paralyzing fear) indefinitely. Expert-tier Emotional Resonance delivers strategic mood control and environmental emotional programming.`,

            master: `The device tracks millions of emotional signatures across district-scale operational areas simultaneously. Keter reactors sustain indefinite emotional states in large populations: cities feel genuinely hopeful for decades, fortresses never experience fear. Precision calibration delivers exact emotional manipulation: measured doubt in commanders causes critical hesitation, calculated confidence carries allies through exhaustion without recklessness. All functions operate as autonomous background processes. This represents the ceiling for Emotional Resonance as a Tier 2 spell: comprehensive emotional manipulation at population scale with permanent environmental anchoring, but cannot override conscious logical reasoning completely, affect truly emotionless beings, or extend beyond district-scale range.`
        }
    }
);
additionalAbstractSpells.push(
    {
        id: 'reality_filter',
        name: 'Reality Filter',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The mage sees through active illusions and disguises within ten meters. The device compares visual input against physical and magical analysis, highlighting mismatches as visual artifacts. An illusory wall shows shimmering edges. An invisible figure registers as a faint heat outline. A magical disguise shows overlay distortions where the false appearance fails to match the true form. Stronger illusions may appear warped rather than fully transparent. Mana cost supports sustained viewing for minutes at a time.`,
            apprentice: `Range extends to thirty meters. Shapeshifters appear in their base form regardless of current shape. Possessing entities register as misaligned spiritual layers on their hosts. Transformed objects display both current and original states at once. Physical barriers up to four meters thick become partially transparent to the sight. Lies create visible distortions around the speaker as the device registers cognitive dissonance. The spell functions as a reliable personal-scale truth tool.`,
            adept: `At one hundred meters the mage perceives deeper layers. A carved wooden object reveals the tree it came from, the hands that shaped it, and decades of wear as spiritual residue. Complex magical effects display every mana thread and routing path. Divine concealment is pierced enough to confirm a god's presence even when full details stay hidden. History and intent become visible on objects and people.`,
            expert: `Line-of-sight extends across kilometers whenever the mage can perceive a location through any sense. All illusions and disguises fail within that range. A fresh wound reveals the blade, the hand that swung it, and the intent behind the strike. Accumulated evidence reconstructs recent past events directly. The mage functions as a living fact-checker whose observations hold weight in magical courts.`,
            master: `The spell runs at its design ceiling. True Sight stays active across the mage's full perceptual range with negligible mana. The device automatically flags deceptions and inconsistencies against its database of known truths. The mage experiences truth as naturally as color. Nearby allies receive a weaker shared version through device processing. This marks the limit of True Sight as a Tier 3 spell: comprehensive perception at personal range, not universal knowledge.`
        }
    },
    {
        id: 'destiny_weaving',
        name: 'Destiny Weaving',
        tier: 5,
        cost: 25,
        proficiency: {
            beginner: `The device visualizes probability pathways as faint luminous threads connecting individuals to decision points and outcomes. Weaving requires three minutes of focused analysis to map local fate-threads within ten meters. The mage applies gentle statistical nudges increasing specific outcome probabilities by roughly ten percent. A coin toss biased toward heads, a guard more likely to wave someone through a checkpoint. Malkuth reactors support three weavings per cycle with effects indistinguishable from ordinary luck. The spell offers marginal statistical edges on single discrete events without guaranteeing outcomes.`,

            apprentice: `Thread visualization extends to thirty meters with active severing and weaving capability. The device models fate-webs weeks ahead identifying minimal intervention points. Hod reactors support six operations per cycle. The mage severs fate-threads redirecting pursuing patrols away from extraction routes or weaves new guaranteed-outcome threads ensuring couriers reach destinations despite obstacles. Single guaranteed outcomes cost significant mana and slightly decrease probability of alternative paths. Apprentice-tier Destiny Weaving provides tactical probability manipulation and limited outcome guarantees.`,

            adept: `Sustained campaign-scale manipulation becomes possible over weeks. The mage targets pivotal individuals whose fate-threads influence large systems—supply officers, key commanders, infrastructure managers. Tiferet reactors coordinate twelve simultaneous weavings. Over three weeks of persistent thread-severing and weaving, a critical supply shortage is averted through strings of fortunate coincidences experienced by the target. Large-scale outcomes shift through accumulated small probability adjustments rather than single dramatic events. At Adept level the spell enables strategic fate-manipulation through sustained pressure on key decision-makers.`,

            expert: `Persistent fate-webs wrap small teams with strong favorable bias. Strike team members bound to courses making intelligence discoveries likely and detection unlikely experience strings of useful coincidences. Geburah reactors maintain twenty simultaneous fate-webs. Fate-wards deflect hostile probability manipulation. The influence remains strong tendency not absolute certainty—enemy fate-mages or determined resistance disrupts patterns. The device traces hostile fate-magic back to sources. Expert-tier Destiny Weaving delivers team-scale favorable outcome bias with counter-manipulation capability.`,

            master: `Province-scale fate-webs sustain over months covering entire resistance cells or allied units. Keter reactors coordinate fifty simultaneous weavings with self-reinforcing personal fate-webs. Fate-wards provide comprehensive protection against hostile manipulation with automatic source-tracing. Every outcome remains strong probability not certainty—extraordinary effort or counter-magic still averts heavily weighted fates. The device handles all thread monitoring, weaving maintenance, and defensive warding autonomously. This represents the ceiling for Destiny Weaving as a Tier 5 spell: regional sustained probability manipulation with defensive capability, but cannot override free will completely, guarantee outcomes against peer opposition, or manipulate fate on continental scales.`
        }
    },
    {
        id: 'abstract_manipulation',
        name: 'Abstract Manipulation',
        tier: 5,
        cost: 25,
        proficiency: {
            beginner: `The device interfaces with platonic conceptual frameworks underlying physical reality, allowing minor emphasis or suppression of existing qualities. Manipulation requires two minutes of focused visualization. The mage reinforces the concept of 'sharpness' in a blade, improving cutting efficiency by ten percent. The effect manifests as subtle enhancement of the quality's expression within the object. Malkuth reactors support four manipulations per cycle lasting several hours before natural conceptual drift reverses changes. The spell provides fine-tuning of existing qualities without creating new concepts.`,

            apprentice: `Temporary concept removal becomes possible. The mage strips 'visibility' from their body for three minutes, becoming functionally invisible as the device maintains conceptual void against reality's restoration pressure. Hod reactors support six manipulations per cycle. The mage applies concept of 'finding' to lost objects making them drift toward searchers. Both removal and application require continuous device reinforcement ending when concentration lapses. Apprentice-tier Abstract Manipulation enables temporary conceptual modification for tactical advantage.`,

            adept: `Permanent concept imbuing affects objects and localized areas. A sword permanently gains the concept of 'seeking' autonomously finding gaps in armor. The mage suppresses gravity-concept in a fifty-meter room making movement require enormous effort. Tiferet reactors sustain ten simultaneous manipulations. Living targets receive persistent conceptual compulsions (honesty, loyalty) resistible but never fully escapable. Environmental concept alterations (impregnable walls, warning corridors) persist with ongoing device investment. At Adept level the spell delivers permanent conceptual enhancement and area-scale concept modification.`,

            expert: `District-scale conceptual influence affects entire building sections or large zones. The mage invents temporary new concepts imposing them on reality: corridor footsteps trigger echoing alarms, wall sections gain 'impregnable' requiring sustained high-tier assault to breach. Geburah reactors coordinate twenty conceptual alterations. Abstract systems (organizational corruption, community trust) become targetable requiring sustained investment to maintain pressure. Created concepts decay without active maintenance—only modifications to existing concepts persist independently. Expert-tier Abstract Manipulation delivers strategic-scale conceptual modification with invented concept deployment.`,

            master: `The device maintains district-scale conceptual influence indefinitely across fifty simultaneous targets. Keter reactors optimize all conceptual pressure as background processes. Physical targets receive persistent concept imbuing within their scope. Invented concepts sustain with minimal overhead while device maintains them. All functions operate autonomously. This represents the ceiling for Abstract Manipulation as a Tier 5 spell: comprehensive conceptual modification at district scale with permanent imbuing and temporary invention, but cannot rewrite fundamental physical laws, create truly indestructible matter, or extend beyond district-scale influence.`
        }
    },
    {
        id: 'true_name_protocol',
        name: 'True Name Protocol',
        tier: 4,
        cost: 20,
        proficiency: {
            beginner: `The device analyzes spiritual signatures to derive true names—unique metaphysical identifiers intrinsic to each entity's existence. Analysis requires twenty minutes of focused observation on a cooperative or restrained subject. The derived name provides minor magical leverage: truth-detection spells against the named target gain fifteen-percent accuracy boost, general location within a building becomes sensible. Simple objects require five minutes to name, complex sentients require extended analysis. Malkuth reactors support three namings per cycle. At Beginner level the spell provides basic magical targeting enhancement through name-knowledge.`,

            apprentice: `Name derivation time reduces to five minutes for sentients. Known true names function as targeting keys bypassing spiritual defenses when spoken during spell-casting—binding spells double effectiveness, mental attacks ignore surface protections. Hod reactors support six namings per cycle. The mage erects name-cipher wards masking their own true name from enemy name-mages. Changing a target's true name is possible but leaves them disoriented for days as reality adjusts to their new identifier. The device maintains protected archives of all known true names. Apprentice-tier True Name Protocol provides significant combat advantage and defensive name-protection.`,

            adept: `Speaking a known true name while issuing commands creates magical compulsion the target must actively resist with willpower. Intelligent entities remain aware and can fight the pressure but sustained commands exhaust resistance within minutes. Tiferet reactors track thirty known names with instant recall. The mage names newly constructed golems into existence, giving them true names that grant independent identity and vulnerability to name-magic. The device maintains comprehensive protected name-libraries with cross-referencing and encryption. At Adept level the spell enables command-magic and entity creation through naming.`,

            expert: `Weeks of study allow learning true names of powerful resistant entities through indirect analysis—observing their effects, studying their history, analyzing spiritual residue. Geburah reactors archive one hundred names with complex protection schemes. With the true name, the mage summons entities, issues binding commands, or erects wards specifically targeting them. The mage gives true names to custom magical constructs investing them with genuine independent existence. Learning actively resistant entities requires extended study and sustained device analysis. Expert-tier True Name Protocol enables high-tier entity command and custom creation.`,

            master: `The device maintains comprehensively warded name-libraries exceeding five hundred entries with automatic defense against hostile name-targeting. Keter reactors optimize all name-derivation, storage, and command protocols as background functions. True-name command magic operates at peak efficiency against all catalogued entities. Named creations function as fully autonomous agents. The mage learns true names of actively resistant entities through sustained analysis over weeks. This represents the ceiling for True Name Protocol as a Tier 4 spell: comprehensive name-magic capability with extensive libraries and command authority, but cannot instantly derive names of powerful resistant beings, exceed five hundred archived names practically, or override divine-tier name protection.`
        }
    },
    {
        id: 'oneiric_interface',
        name: 'Oneiric Interface',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device establishes neural-dreamscape interface by synchronizing with a sleeping target's brain activity within fifty meters. Interface requires two minutes of calibration while the target remains in REM sleep. The mage enters the dream as a participant, able to observe and make minor alterations—adjusting lighting, placing symbolic objects, appearing as non-threatening dream characters. Malkuth reactors support four-minute dream sessions with three per cycle. Simple symbols left in dreams surface as subconscious impressions upon waking. The target accepts minor changes without suspicion unless alterations become too dramatic. At Beginner level the spell provides dream observation and subtle suggestion implantation.`,

            apprentice: `Full dream-shaping becomes possible within one-hundred-meter range. The device reconstructs entire dreamscapes—the mage transforms a nightmare into therapeutic childhood home, appears as trusted figures, guides targets through emotional processing scenarios. Hod reactors support twenty-minute sessions with six per cycle. The mage brings one additional dreamer into shared dream-space for counseling or coordination. Dream-content agreements made sincerely by targets influence waking decisions. Hostile dream-projectors attempting infiltration can be trapped in defensive loop-constructs. Apprentice-tier Oneiric Interface enables therapeutic intervention and counter-dream-infiltration.`,

            adept: `Persistent dream-realms anchored to the device function as accessible training spaces. The mage creates stable dream-zones where up to eight individuals practice skills, conduct meetings, or undergo therapy for four subjective hours nightly. Tiferet reactors maintain three persistent realms simultaneously. Time dilation allows accelerated skill practice—four dream-hours per one sleep-hour. Traumatic memory reprocessing through controlled dream-resolution measurably reduces waking psychological burden. Enemy dream-attacks are detected and countered through defensive dream-architecture. At Adept level the spell creates persistent training and therapeutic infrastructure.`,

            expert: `Global dream-access operates across continental distances—the device navigates collective dreamscape locating any known target within seconds. Geburah reactors support twelve persistent realms with varied configurations. Inside constructed dream-spaces, subjective time dilates dramatically: three subjective days pass during six waking hours enabling extended interrogation or training. Dream-prisons contain high-value targets indefinitely—bodies in medical stasis while minds experience constructed realities. The mage splits consciousness operating inside dream-realms while simultaneously directing waking operations. Expert-tier Oneiric Interface delivers strategic dream-manipulation with imprisonment and multi-tasking capability.`,

            master: `The device maintains fifteen persistent dream-realms simultaneously configured for diplomacy, training, therapy, and detention. Keter reactors optimize all dream-access, realm maintenance, and consciousness-splitting as background functions. Global dream-access locates and enters any known target's dreams within seconds. Dream-prison maintenance runs autonomously with psychological stability monitoring. All operations occur with zero conscious overhead. This represents the ceiling for Oneiric Interface as a Tier 3 spell: comprehensive dream-manipulation with persistent infrastructure and global access, but cannot affect non-dreaming targets, maintain more than fifteen persistent realms, or override conscious will permanently.`
        }
    },
    {
        id: 'spatial_anchoring',
        name: 'Spatial Anchoring',
        tier: 4,
        cost: 20,
        proficiency: {
            beginner: `In a forward command post the mage establishes a five-meter Spatial Lock around the communications room. The device projects a continuous reinforcement field that thickens local spacetime, rendering dimensional routing impossible for standard teleportation protocols. When an enemy scout attempts to teleport directly into the room, the device detects the incoming signature and the jump fails with a sharp spatial feedback pulse that disorients the scout on the origin side. The lock remains stationary and requires steady mana draw. At this level the spell denies basic teleportation and portal creation within small secured areas.`,
            apprentice: `During an extraction operation the mage expands the lock to twenty meters and configures it to block all forms of dimensional transit including plane-shifting and spiritual movement. The device keys the lock to permit two specific allied operatives to teleport through while denying all others. When an enemy teleporter attempts entry, the device logs the attempted destination coordinates and the attacker's magical signature for later tracking. The mage also activates a mobile variant centered on their own position during the retreat, maintaining the lock while moving through contested streets. At this level the spell provides reliable spatial security for small operational zones.`,
            adept: `In a contested urban district the mage creates a fifty-meter permanent Spatial Lock anchored by a mana reservoir invested into a structural pillar. The reinforcement makes space itself rigid; even the minor dimensional fluctuations that accompany electrical storms are suppressed within the zone. No translocation of any kind functions inside the lock regardless of the teleporter's power level. The lock serves as a prison cell for a captured enemy teleporter whose device cannot breach the reinforced boundary. The permanent fixture maintains itself for months with only routine recharging. At this level the spell enables building-scale containment and long-term secure facilities.`,
            expert: `During a city-wide containment operation the mage projects a two-hundred-meter Spatial Lock onto a distant enemy safehouse from three kilometers away. Inside the locked zone all spatial manipulation fails: warping, compression, expansion, and dimensional folding are impossible. The device registers the locked area as blank space to enemy sensors, so teleporters attempting to jump into the zone receive no valid target coordinates. The mage configures a non-standard geometry inside one corridor so that any attempt to bypass it spatially loops the intruder back to the entrance. At this level the spell delivers city-block denial with remote projection and defensive geometry.`,
            master: `The device sustains a five-hundred-meter district-scale Spatial Lock as a permanent background capability. Multiple independent locks operate simultaneously across the operational theater, each with distinct exception lists and configurations. Authorized personnel pass through without restriction while all unauthorized transit attempts are logged with full signature and destination data. At-range projection reaches targets up to ten kilometers distant, and mobile locks centered on the mage or allied units function at full strength. Permanent anchor networks maintain district-wide containment with negligible ongoing cost. This represents the design ceiling for Spatial Lock as a Tier 4 spell.`
        }
    },
    {
        id: 'suppression_field',
        name: 'Suppression Field',
        tier: 4,
        cost: 20,
        proficiency: {
            beginner: `The device broadcasts interference patterns that introduce static into mana-flow modulation within a six-meter zone, degrading spell effectiveness by fifty percent. Field projection requires three seconds with Malkuth reactors sustaining forty-second duration. Enemy barrier spells form as flickering membranes that collapse easily. Incoming spells from outside weaken dramatically upon entering. The mage maintains the zone at moderate mana cost. The field weakens rather than fully nullifies hostile magic. At Beginner level the spell functions as active countermeasure reducing enemy casting effectiveness.`,

            apprentice: `Field radius expands to twenty-five meters with near-total disruption—most spellcasting fails entirely as interference prevents completion. Hod reactors sustain ninety-second duration with selective filtering allowing allied magic while suppressing hostiles. Magical constructs sustaining through active mana lose cohesion and collapse inside the field. Mobile zones centered on the mage function during movement. Apprentice-tier Suppression Field makes the mage credible anti-mage asset shutting down conventional casting.`,

            adept: `Permanent sixty-meter zones anchored by mana reservoirs suppress all supernatural powers regardless of caster strength. Dragon breath becomes harmless warm gusts, spirit telekinesis loses force, vampire mesmerism produces mild confusion. Tiferet reactors support six zones. Permanent item enchantments suspend: flaming swords become ordinary steel, teleportation rings turn inert. Directed suppression beams target individual casters at range shutting down their magic for minutes without affecting surroundings. At Adept level the spell enables building-scale magic suppression and targeted removal.`,

            expert: `District-scale two-hundred-meter fields suppress all mortal spellcasting. Innate abilities disrupt rather than extinguish: dragon fire sputters to pilot lights, vampire influence fails. Geburah reactors coordinate twelve zones with configurable exceptions. Sustained rituals permanently sever specific magical connections from targets with archival backup allowing reversal. Surgical ability removal strips necromantic powers while preserving defensive magic. Expert-tier Suppression Field delivers block-scale suppression with precision targeting.`,

            master: `The device sustains six-hundred-meter district-scale permanent fields across operational theaters. Keter reactors manage twenty zones with exception lists allowing allied magic while denying hostiles. Directed suppression reaches eight kilometers. Surgical ability removal with archival backup operates at design ceiling. All zone monitoring and exception management occur autonomously. This represents the ceiling for Suppression Field as a Tier 4 spell: district-scale magic denial with permanent infrastructure and precision targeting, but cannot suppress divine-tier magic indefinitely, exceed twenty zones, or prevent all casting against peer opposition.`
        }
    },
    {
        id: 'energy_redistribution',
        name: 'Energy Redistribution',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device establishes mana conduits through physical contact, channeling energy between the mage and an ally. Conduit formation requires eight seconds of focused connection. The mage transfers up to forty percent of current reserves restoring depleted allies. Malkuth reactors manage feedback preventing reactor spikes in either party. The transfer sustains allies through several additional casts. At Beginner level the spell provides emergency field support through direct mana sharing.`,

            apprentice: `Contactless conduits function at twelve meters linking up to six teammates into shared mana pools. Hod reactors coordinate automatic redistribution preventing any member from dropping below critical levels. The device draws from nearby ley lines supplementing transfers. Small mana batteries store twenty-percent reserves in focus crystals for later use. Apprentice-tier Energy Redistribution supports sustained team logistics through pooled resources and ley line tapping.`,

            adept: `Hostile mana extraction forces conduits into enemy casters draining their reserves despite resistance. Extraction rates reach noticeable depletion over thirty seconds. Tiferet reactors overcharge allies with fifty-percent extra reserves for decisive strikes though temporary reactor fatigue follows. The device converts excess kinetic energy, heat, and light into mana for emergency use. Permanent mana wells anchor at strong ley points for persistent reserves. At Adept level the spell enables hostile extraction and environmental energy conversion.`,

            expert: `District-scale operations tap multiple ley lines redistributing energy from hostile territory to allied positions. Geburah reactors harvest natural mana storms making personal reserves effectively unlimited during short periods. Artificial ley lines establish persistent magical infrastructure between fixed points. Enemy ritual sites drain to power large allied barrier networks. Expert-tier Energy Redistribution delivers theater-scale logistical energy management.`,

            master: `Regional mana management runs as autonomous background function with ley line tapping, energy redistribution, and team pooling automatic. Keter reactors optimize all operations. Permanent mana wells and artificial ley lines persist with routine oversight. Energy conversion handles thermal, luminous, and kinetic forms. Effective reserves exceed normal reactor limits through continuous environmental harvesting. This represents the ceiling for Energy Redistribution as a Tier 2 spell: logistical-scale magical energy management, but not infinite mana generation or universal energy control.`
        }
    },
    {
        id: 'quantum_bias',
        name: 'Quantum Bias',
        tier: 5,
        cost: 25,
        proficiency: {
            beginner: `During a tense standoff the mage nudges local probability so coin flips favor the team and close calls trend positive. A ricocheting bullet misses by centimeters instead of striking. The device adjusts quantum distributions within a five meter sphere making generally lucky outcomes twenty percent more likely without creating impossible results. Mana cost is moderate for the sustained edge. At this level the spell provides a reliable minor advantage the mage is noticeably luckier than baseline but truly improbable events remain improbable.`,
            apprentice: `In a multi day pursuit the mage curses an enemy scout with bad luck causing equipment failures and wrong turns at double the normal rate. An ally receives a blessing that turns one in ten chances into reliable outcomes. The device models exact probability distributions telling the mage the mana investment needed for a desired result. Probability zones are established in key areas making specified outcomes artificially likely or unlikely. At this level genuinely unlikely events become reliable tactical options.`,
            adept: `During a collapsing building fight the mage makes a one in a thousand structural failure certain so a support beam gives way exactly when needed. A falling debris field is shifted to miss the team and strike pursuers instead. Cascading coincidences are chained to produce outcomes no single event could achieve. Failure conditions are blocked so all probability flows into favorable channels. At this level near impossible but physically possible events occur reliably through sufficient mana investment.`,
            expert: `In a district scale ambush the mage turns a one percent ambush success rate into an eighty percent likelihood while making an eighty percent escape route near certain. A bullet is made to ricochet perfectly into an enemy weapon. A target's heart is made likely to falter under stress. Sustained luck fields bias events across a block for hours but require continuous device computation. Impossible outcomes remain impossible. At this level probability shifts are dramatic but bounded by physical possibility.`,
            master: `The spell operates at design ceiling. Wide area probability distributions across the operational range make desired outcomes highly likely and undesirable ones correspondingly improbable. Sustained fields maintain favorable conditions for extended periods with continuous device management. Probability cannot override physics impossible things remain impossible. The device guarantees only likelihood not certainty. This is the ceiling of Probability Manipulation as a Tier 5 spell powerful wide area luck manipulation a strategic force multiplier not the ability to dictate reality or make the physically impossible occur.`
        }
    }
);
// Merge additional spells into main spell data structure
if (typeof spellData !== 'undefined' && spellData.abstract) {
    spellData.abstract = spellData.abstract.concat(additionalAbstractSpells);
}
// Next batch continues below
const additionalAbstractSpells2 = [
    {
        id: 'cause_effect_restructure',
        name: 'Cause-Effect Restructure',
        tier: 5,
        cost: 25,
        proficiency: {
            beginner: `The device visualizes causal threads as luminous connections linking events, causes, and effects within ten meters. Perception requires two minutes of focused analysis. The mage traces causal chains backward identifying root causes and forward predicting consequences. Minor adjustments delay effects by minutes or weaken causal links. Major causal connections cannot be severed or redirected at this proficiency. Malkuth reactors support three restructure attempts per cycle. At Beginner level the spell provides causal perception and minor temporal adjustments without breaking causality.`,

            apprentice: `Active causal manipulation becomes possible within twenty-five meters. The mage severs causal links between noises and guard investigations—guards forget to check despite hearing sounds. Hod reactors support six operations per cycle. Apparent cause reassignment makes bridge collapses appear from material fatigue instead of sabotage. The device prevents paradoxes through local temporal stabilization. Short non-standard cause-effect chains create within immediate areas. Apprentice-tier Cause-Effect Restructure manipulates the 'why' of events creating tactical misdirection without breaking forward causality.`,

            adept: `Temporal reversal within constrained spheres allows effects before causes: windows break before rocks are thrown, healing occurs before spells cast. Tiferet reactors maintain eight simultaneous restructures. Causal loops form where spells power themselves from their own output but require continuous device stabilization or collapse under paradox pressure. Any cause can lead to any effect within fifty-meter spheres with active management. All manipulation remains within forward causality—causes still precede effects from absolute timeline perspective. At Adept level the spell creates localized causal flexibility within physical constraints.`,

            expert: `Conditional causal relationships establish across two-hundred-meter zones: when barriers are struck, attacker weapons shatter from enforced recoil causality. Geburah reactors coordinate fifteen causal architectures. Cascading trigger chains where one event predictably causes the next operate autonomously. All relationships maintain forward causality from external frame—the cause precedes the effect universally. True retrocausality remains impossible. Expert-tier Cause-Effect Restructure delivers strategic causal architecture with complex trigger chains.`,

            master: `Complex causal architectures of enforced cause-effect relationships sustain across district-scale operational ranges. Keter reactors manage twenty-five architectures autonomously. Conditional triggers with logical branching embed in locations, objects, and organizations creating reliable causal patterns. These function as contracts between events but always within forward causality—causes precede effects from absolute timeline. The device handles all architecture maintenance as background processes. This represents the ceiling for Cause-Effect Restructure as a Tier 5 spell: sophisticated forward causal architecture at district scale, but cannot reverse causation absolutely, create true paradoxes, or redefine fundamental causality laws.`
        }
    },
    {
        id: 'null_signature',
        name: 'Null Signature',
        tier: 5,
        cost: 25,
        proficiency: {
            beginner: `The device isolates target existential signatures and inverts them, removing objects from spacetime without debris or traces. Erasure requires three minutes of focused analysis targeting small simple objects within eight meters—pebbles, papers, cups. Surrounding reality adjusts seamlessly. Malkuth reactors support three erasures per cycle at high mana cost. The device enforces strict safety limits preventing unintended removals. At Beginner level the spell provides precise controlled removal for discrete objects unsuited for combat applications.`,

            apprentice: `Larger targets become viable: furniture, vehicles, small structures within fifteen meters. Partial erasures remove specific properties while preserving objects—color from surfaces, sound from objects, weight from items. Hod reactors support six erasures per cycle. The device stores signature backups before erasure enabling restoration at equivalent mana cost. Automatic safeguards protect the mage and critical environmental elements. Apprentice-tier Null Signature enables property removal and larger object erasure with restoration capability.`,

            adept: `Physical objects and beings of any size within sixty-meter perception can be erased with mana scaling by complexity and magical resistance. Tiferet reactors coordinate ten erasures per cycle. Erasure becomes permanent when backup signatures are discarded. Properties strip from physical entities while conceptual or abstract elements remain unaffected. The spell functions as targeted removal tool with tactical flexibility. At Adept level any perceived physical target becomes erasable with permanent option.`,

            expert: `Building-scale targets including heavily protected entities erase with sustained focus and high expenditure. Geburah reactors support fifteen erasures per cycle managing massive complexity. Temporary property removal—sharpness from blades, structural integrity from buildings—requires less investment than permanent erasure. The device logs all events supporting full restoration from comprehensive backups. Expert-tier Null Signature delivers strategic-scale removal with property manipulation.`,

            master: `Any physical target the device isolates—objects, beings, constructs—erases with mana optimized for complexity and resistance. Keter reactors coordinate twenty erasures per cycle with full logging. Properties permanently remove from physical entities. Comprehensive backup restoration and safety protocols against cascade effects operate autonomously. This represents the ceiling for Null Signature as a Tier 5 spell: targeted physical removal at building scale with full support features, but cannot erase concepts, affect abstract existence, or operate beyond physical reality layer.`
        }
    },
    {
        id: 'information_synthesis',
        name: 'Information Synthesis',
        tier: 5,
        cost: 25,
        proficiency: {
            beginner: `The mage receives factual information through the device's broad-spectrum analysis and cross-referencing of accessible magical and mundane data sources. Concentration on a subject yields relevant details such as the contents of a sealed document, the identity of an unknown person, or the layout of an unfamiliar building. Information is drawn only from existing records or reasonable inference; the spell does not create new knowledge. Each query requires several seconds and significant mana.`,

            apprentice: `Access expands to comprehensive, reliable retrieval. Any question with an answer in available sources returns accurate results from environmental sensors, magical archives, surface-level memories of nearby individuals (with consent protocols), and historical records. Hidden details become perceivable, such as the contents of a locked container or recent events at a location. Multiple sources are cross-checked for consistency. The mage functions as a mobile intelligence asset.`,

            adept: `Full synthesis of information on any chosen subject occurs through integration of all accessible sources and gap-filling via probabilistic modeling. The mage obtains complete details on a target's recorded history, tracked movements, and inferred intentions. Future events within modeled parameters can be anticipated with high reliability. The device maintains an internal database of all prior investigations, updating continuously against new data. Concealment within the operational area becomes difficult.`,

            expert: `Near-complete information coverage is achieved across the operational theater at continental scale for digital and magical records. Simultaneous queries to every accessible source are processed through advanced algorithms, delivering comprehensive answers to questions about observable reality. Recorded secrets—including documents, reconstructed conversations, and accessible memories—are retrievable when protocols permit. The mage accesses everything that has been recorded, observed, or inferred by reachable sources.`,

            master: `The spell operates at its design ceiling. A continuously updated knowledge base covers the entire operational theater, returning instant answers with full source citations. Tactical awareness reaches near-omniscient levels within the sphere: enemy positions, movements, hidden assets, and derived strategic intentions are all available. This represents the limit of Information Synthesis as a Tier 5 spell: comprehensive synthesis of accessible, observable data at continental scale, not absolute knowledge of unrecorded or nonexistent information.`
        }
    },
    {
        id: 'direct_manifestation',
        name: 'Direct Manifestation',
        tier: 5,
        cost: 25,
        proficiency: {
            beginner: `The mage converts intent into localized reality adjustment through a generalized protocol that bypasses specialized spell forms. The device calculates the minimal change required and applies it directly. Effects are small and confined to immediate proximity, such as levitating a cup, igniting a candle without flame, or briefly reinforcing a door. Generalized manipulation costs more mana than equivalent specialized spells, making this level a utility option rather than a primary casting method.`,

            apprentice: `The protocol becomes more efficient and can replicate low-to-mid-tier specialized spell effects. Within roughly twenty meters, the mage's will produces telekinetic movement, ambient mana barriers, and adjustments to local temperature, light, or sound. Multiple effects can be sustained and coordinated simultaneously. Direct Manifestation trades the efficiency of specialized casting for flexibility in producing any device-calculable effect without a dedicated spell form.`,

            adept: `Full local reality control extends to roughly fifty meters. Effects equivalent to high-tier spells become available, including building-scale transmutation, mass telekinesis, localized gravity changes, and moderate matter creation or destruction. The device manages computational load at efficiency comparable to specialized casting. Physical parameters can be temporarily altered, such as reversing gravity in a room or accelerating time for a specific object.`,

            expert: `A roughly two-hundred-meter radius of direct will-based manipulation is achieved. Any physical effect the device can model is possible, from transmutation of large masses to creation of complex constructs or localized force alterations. Generalized manipulation reaches parity with specialized efficiency for most effects. The mage can reshape the immediate environment at will, limited by mana reserves and processing capacity for intricate calculations.`,

            master: `The spell operates at its design ceiling with a roughly five-hundred-meter (district-scale) radius of comprehensive reality manipulation at optimized efficiency. Intent translates to effect with minimal mana overhead while the device handles calculations in the background. Any physically coherent outcome—construction, destruction, transmutation, force manipulation, or environmental control—is achievable through direct will. This represents the limit of Direct Manifestation as a Tier 5 spell: district-scale generalized manipulation bounded by scale, mana, device power, and physical coherence requirements.`
        }
    },
    {
        id: 'transcendent_enhancement',
        name: 'Transcendent Enhancement',
        tier: 5,
        cost: 25,
        proficiency: {
            beginner: `During a multi-day reconnaissance patrol through hostile wilderness, the mage activates Transcendent Enhancement for the first time. The device begins rewriting cellular structures during rest periods. By the third day the mage notices aging symptoms reversing and a minor toxin from a venomous bite produces no symptoms. Physical endurance improves enough to maintain pace without fatigue. Mana efficiency rises by twenty percent, letting the mage sustain a low-level barrier longer than expected. The changes feel gradual and natural, like the body optimizing itself under device guidance. At this level Transcendent Enhancement is comprehensive self-optimization toward peak mortal limits, not transcendence.`,
            apprentice: `During a nighttime extraction through an enemy checkpoint the mage's enhanced reflexes allow a split-second dodge of a sniper round that should have been impossible. Wounds from shrapnel close within minutes instead of hours. The mage perceives the mana flow of nearby enemy casters as visible threads and sidesteps a prepared ambush. A secondary mana core activates, letting the mage cast an extra high-cost spell without draining the primary reactor. The transformation now pushes physical metrics fifty percent past normal human maxima while regeneration handles field injuries. At this level the mage operates as a recognizably post-human operative.`,
            adept: `In the middle of a three-hour urban siege the mage's body restructures on the fly. Dense bone and reinforced muscle let the mage smash through a reinforced door that previously required breaching charges. Neural transmission speeds allow tracking of incoming projectiles and precise counter-moves. The parallel mana network doubles throughput, sustaining a city-block barrier while simultaneously healing three wounded allies. The enhancement maintains itself as the new baseline, requiring mana only during combat spikes. At this level Transcendent Enhancement produces a being transcendent by mundane standards though still within advanced magical self-enhancement.`,
            expert: `During a pitched battle against a superior force the mage projects a passive enhancement field that grants nearby squad members apprentice-level strength and speed. Physical capabilities reach five times normal maxima, allowing the mage to intercept and redirect a collapsing support beam single-handed. The permanent enhancement substrate woven through body, magic, and spirit resists a direct dispel attempt and continues operating. The device maintains the architecture without degradation under sustained fire. At this level the mage stands among the most individually capable operatives in the setting, the pinnacle of magical self-enhancement for a Tier 5 spell.`,
            master: `The spell operates at design ceiling during a final defensive stand. The enhancement architecture is permanent and self-optimizing within the mage's biological substrate. Physical metrics stabilize at five to six times normal human maxima with regeneration that closes near-fatal trauma in hours. The allied enhancement field extends Adept-level benefits to an entire squad within proximity. All functions run at peak efficiency with minimal overhead. This is the ceiling of Transcendent Enhancement as a Tier 5 spell: comprehensive post-human transformation with squad-scale projection, the ultimate expression of magical self-enhancement.`
        }
    }
];

// Add second batch of abstract spells
if (typeof spellData !== 'undefined' && spellData.abstract) {
    spellData.abstract = spellData.abstract.concat(additionalAbstractSpells2);
}

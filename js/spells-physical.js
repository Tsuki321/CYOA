// Physical Category Spells for Mages CYOA
// All 30 spells of the Physical Category with 5 proficiency levels each

// Initialize spell data object if it doesn't exist
if (typeof spellData === 'undefined') {
    var spellData = {
        physical: [],
        elemental: [],
        esoteric: []
    };
}

// Base Physical Spells (1-5)
const basePhysicalSpells = [
    {
        id: 'combat_reflex_enhancement',
        name: 'Combat Reflex Enhancement',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The mage's reflexes are sharpened by roughly twenty percent—enough to notice an incoming strike a fraction sooner and react before an untrained opponent can adjust. The device accelerates neural signal transmission and filters irrelevant sensory noise, letting the mage focus on immediate threats without being overwhelmed. The effect is subtle but tangible: a trained fighter suddenly finds their timing just a little better than usual.

Maintaining the spell requires moderate concentration; the mage must consciously feed intent into the device, which does the heavy lifting of processing combat-relevant stimuli. Under sustained pressure—multiple attackers, chaotic environments—the spell can falter if the mage loses focus. Still, for a mage with a few weeks of combat experience, the edge is real.

At this level, the enhancement is strictly reactionary. The mage cannot predict what an opponent will do, only respond faster once the attack begins. Skilled adversaries can still land hits through superior technique or overwhelming speed. The spell lays the groundwork, nothing more.`,
            apprentice: `Reaction speed now sits at roughly one-and-a-half times the mage's baseline. The device begins reading opponent body language—shifts in stance, micro-expressions, tension in the shoulders—and flags threats before the opponent commits. It is not precognition, but it feels close: the mage reacts to a punch when the shoulder twitches, not when the fist is already in flight.

The device can maintain the spell with less conscious input, freeing the mage to assess tactics, coordinate with allies, or layer additional enhancements. Spatial awareness extends to tracking three or four combatants at once, though juggling more than that still demands a high-rank Mana Reactor.

The spell's weakness is sustained pressure from a superior opponent. The device's predictive models fail against fighters whose body language is erratic, trained to deceive, or simply inhuman. At Apprentice, the mage is a formidable duelist but not yet elite.`,
            adept: `Reaction time approaches double baseline, and the device now cross-references opponent patterns in real time—stance, breathing, even mana flow tells. The mage experiences combat as a slowed-down sequence of options; the device filters thousands of micro-cues into a handful of likely attack vectors and optimal counters.

This is professional combat-grade. The spell can be shared with a small team, creating a synchronized network where allies benefit from each other's sensory input. The device handles the load autonomously—the mage no longer needs to consciously direct it, only provide mana and intent.

The ceiling at Adept is the device's processing power and the mage's raw reaction baseline. A Keter-rank reactor mage at this proficiency can duel multiple opponents simultaneously, but they are still bound by the speed of their own limbs. The spell makes them faster, not instantaneous.`,
            expert: `Reaction times push three to five times baseline. The device now models probable futures based on environmental data, opponent vitals, and even ambient mana fluctuations. The mage appears to move before attacks are launched—not because they can see the future, but because the device has calculated the attack down to the millisecond and triggered the counter-response before conscious thought is needed.

This is a rare level of mastery. The spell functions seamlessly in chaotic combat—explosions, magical interference, dozens of opponents—and requires no conscious attention. The device handles everything. Mages who reach Expert with this spell are often veterans of decades of warfare.

Even at Expert, the spell remains bounded by the mage's physical body. The device can calculate the perfect response, but if the mage's limbs cannot move fast enough to execute it, the advantage is wasted. Mastery here is about closing that gap as tightly as physics allows.`,
            master: `The spell is executed so flawlessly and efficiently that it becomes second nature—as natural as breathing. Reaction speed peaks at roughly four to five times baseline, the hard ceiling of what the mage's nervous system and device can process before diminishing returns set in. The device maintains a constant 360-degree threat model, updating thousands of times per second.

At this level, the mage no longer thinks about the spell at all. It is always active, always computing, always ready. Multiple opponents, surprise attacks, environmental hazards—all are catalogued and countered in the same instant. The mage moves through combat as if they have already fought it a hundred times.

This is the limit of Combat Reflex Enhancement as a Tier 2 spell. The mage is not omniscient, not precognitive, and cannot react to attacks that move faster than their body can respond. But within those bounds, their reflexes are as close to perfect as a human mage—working through an Intelligent Device—can achieve.`,
        }
    },
    {
        id: 'iron_skin',
        name: 'Iron Skin',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `A thin layer of hardened mana forms just beneath the skin, roughly equivalent to thick leather armor in protective value. The mage can shrug off light slashes and reduce the impact of blunt strikes, though a determined blade or a heavy blow will still break through. The reinforcement is invisible and weightless, so mobility is not compromised.

The device maintains the barrier passively, but it depletes steadily under sustained assault. A few solid hits in quick succession can overwhelm the mana lattice before the device has time to reinforce it. The mage feels the drain as a growing pressure at the edges of their awareness.

At Beginner, Iron Skin is a layer of insurance—not a guarantee. It will not stop a committed attack from a skilled opponent, but it buys the mage the split-second margin needed to counter or retreat.`,
            apprentice: `The reinforcement extends deeper, hardening muscles, bones, and connective tissues alongside the skin. Protection now approximates chain mail with full body coverage. Small-arms fire and standard melee weapons cause bruising rather than penetration, and the device actively reinforces the point of impact when a blow lands.

The spell becomes semi-autonomous. The mage can split their attention—fighting while the device handles defensive calculations in the background. Mana drain increases but remains sustainable for a mage with a mid-rank reactor through a typical skirmish.

Minor wounds close faster as a side effect of the constant mana infusion—the device reroutes healing energy to damaged tissue. Still, a sustained barrage from heavy weaponry or a high-tier offensive spell will punch through. Apprentice Iron Skin makes the mage difficult to injure, not impossible.`,
            adept: `Protection reaches the equivalent of heavy plate armor across the entire body, with no weight or mobility penalty. The device hardens the mage's body at the cellular level: rifle rounds bruise instead of penetrate, direct hits from explosive spells cause fractures rather than dismemberment. The mana lattice regenerates between impacts, so prolonged defense becomes viable.

The spell runs fully in the background. The device handles all defensive calculations without the mage's conscious input, adjusting resistance dynamically based on incoming attack vectors. Mages with high-rank reactors can maintain this indefinitely during combat.

Adept Iron Skin will not stop anti-tank weaponry or sustained bombardment from multiple mages. The mage is exceptionally durable—a walking tank—but they are not invulnerable. Repeated hits to the same area still accumulate damage over time.`,
            expert: `The device reinforces the body at a molecular level. Protection now exceeds any conventional armor: the mage can withstand artillery-grade explosives, sustained magical bombardment, and strikes from building-sized constructs. Environmental hazards—fire, extreme cold, corrosive atmospheres—are mitigated significantly.

The spell's adaptive defense now shifts composition mid-impact, matching hardness to the specific threat. A kinetic round meets a hardened surface; a cutting spell meets a flexible, energy-dispersing lattice. The mana cost is substantial but well within the budget of a Keter-rank reactor maintained indefinitely.

At Expert, the mage is extraordinarily difficult to harm by any conventional military standard. However, strategic-grade attacks—the kind that level city blocks—can still overwhelm the defense if sustained. This represents the practical upper limit of what most career mages ever achieve with Iron Skin.`,
            master: `The spell runs at its maximum designed efficiency. Protection is uniform, adaptive, and regenerates faster than most attacks can deplete it. The mage can wade through sustained gunfire, explosive ordinance, and mid-tier offensive magic with minimal injury. The device has perfected the mana lattice to its theoretical optimum—no wasted energy, no weak points.

At this level, the spell is always active, a permanent feature of the mage's combat state. The device manages it without any drain on the mage's conscious attention. Allies within close proximity can receive a weaker version of the protection, though maintaining it for a full squad strains even the best reactors.

This is the ceiling of Iron Skin as a Tier 2 spell. The mage is not indestructible—a direct hit from a Tier 5 offensive spell or sustained strategic bombardment will still break through. But within the bounds of personal combat, they are about as durable as a human frame, supported by an Intelligent Device, can be made.`,
        }
    },
    {
        id: 'muscle_overcharge',
        name: 'Muscle Overcharge',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device floods the mage's muscles with compressed mana, forcing them to contract with roughly triple normal force for one to two seconds at a time. The burst is explosive—a punch that shatters concrete, a leap that clears a one-story building, a kick that sends a grown opponent flying across a room.

The trade-off is severe. After each burst, the muscles need several seconds of recovery before another can be triggered. Overuse causes deep fatigue, and the mage must consciously time each activation—fire too early and the spell fizzles; fire too late and the window closes. The device handles the power calculations, but the mage provides the timing and intent.

At Beginner, this is a finisher's tool, not a sustained combat style. A well-placed overcharged strike can end a fight; a missed one leaves the mage vulnerable and winded.`,
            apprentice: `Strength bursts now reach roughly five times baseline and last three to five seconds. The device layers in protective mana to prevent the muscles from tearing themselves apart during contraction, which means the mage can chain bursts with shorter recovery windows. A skilled apprentice can maintain a rhythm—strike, recover, reposition, strike again—that keeps pressure on an opponent.

The spell can be focused on specific muscle groups: legs for a sprint or leap, arms for a throw or strike, core for withstanding a tackle. This precision conserves mana and reduces the risk of collateral strain. Total fatigue is still a factor after prolonged combat, but the mage can push through two or three extended exchanges before needing a real break.

At Apprentice, Muscle Overcharge is a legitimate combat tactic. The mage is dangerous in melee range, capable of breaking through reinforced barriers or armored opponents with direct hits.`,
            adept: `The device pushes strength to roughly ten times baseline for bursts lasting up to ten seconds, and the protective mana envelope now fully prevents self-injury. This is combat-grade output: a punch can demolish a reinforced wall, a throw can send an object with cannon-like velocity, and the mage can maintain the enhanced state through continuous mana expenditure for minutes at a time.

Recovery between bursts is negligible. The device has optimized the mana-to-force conversion to the point where the mage can fight at enhanced strength almost continuously, dropping into baseline only when mana reserves dip dangerously low. Shockwaves from strikes become a secondary weapon—a ground slam can stagger enemies in a radius.

Adept Muscle Overcharge turns the mage into a melee wrecking ball. At this level, they are a serious threat to fortified positions and armored vehicles, though sustained output still drains mana faster than most mages can replenish mid-combat.`,
            expert: `Strength output reaches roughly twenty to thirty times baseline with no hard time limit—the device maintains the overcharge as long as mana flows. The mage can level small buildings with sustained strikes, punch through military-grade armor, and leap tens of meters. The spell now projects force at short range: a punch thrown at the air creates a concussive blast that hits targets a few meters away.

The device handles all force calculations with surgical precision. The mage can dial output down to crack an egg or up to cave in a bunker door. This level of control is rare—it requires a high-rank Mana Reactor, years of dedicated practice, and an Intelligent Device sophisticated enough to modulate force at the molecular level.

At Expert, the mage can face armored battalions alone and win—not because they are invincible, but because they can deliver enough force to neutralize any conventional target before it becomes a threat.`,
            master: `The spell hits its theoretical optimum: roughly thirty to forty times baseline strength, sustained indefinitely while mana holds, with perfect control across all output levels. The device's force modulation is so precise that the mage can thread the gap between a hostage and their captor with a single finger strike—the force hits the target and nothing else.

The spell runs as a perpetual background process. The mage does not consciously activate bursts; the device reads intent and applies exactly the force needed for each action. A handshake is normal; a punch moments later could level a wall. The transition is seamless.

This is the ceiling of Muscle Overcharge as a Tier 3 spell. The mage can demolish buildings, punch through military fortifications, and clear entire squads with shockwaves—but they cannot punch through mountains or shatter geological features. That scale belongs to higher-tier spells. What Master offers is not infinite power, but absolute precision and endurance within the spell's designed thresholds.`,
        }
    },
    {
        id: 'martial_arts_mastery',
        name: 'Martial Arts Mastery',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device imprints basic hand-to-hand and weapon forms directly into the mage's muscle memory—stances, strikes, blocks, and simple combinations from a handful of common martial traditions. It is the equivalent of a few years of dedicated training compressed into the duration of the spell, giving a complete novice functional combat instincts.

The knowledge is purely technical. The mage knows how to throw a proper punch, how to hold a guard, how to angle a blade for a parry—but their body is not conditioned for combat. Muscles tire, joints scream, and the device cannot provide the physical stamina that real training ingrains. Smart opponents exploit this.

At Beginner, the spell is a crutch that bridges the gap between civilian and soldier. It will not win duels against experienced fighters, but it will keep a mage alive long enough to land a spell or escape.`,
            apprentice: `The device expands its library to dozens of martial traditions and adds tactical reasoning to the imprint. The mage reads opponent movement patterns, identifies weaknesses in real time, and adapts techniques on the fly—not through conscious analysis, but through the device feeding optimized responses directly into motor commands. Proficiency now approximates a decade of focused study.

Physical conditioning improves alongside technique. The device reinforces joints, boosts circulation, and maintains flexibility, so the mage can execute techniques that would strain an unconditioned body. Weapon proficiency covers swords, staves, spears, and common firearms with equal competence.

The mage is now a skilled combatant. Against unenhanced opponents, they dominate. Against another mage with combat training, the fight becomes a chess match—tactics, stamina, and reactor output decide the outcome.`,
            adept: `The device draws on the collected combat experience of legendary warriors throughout recorded history, distilling centuries of martial evolution into a single combat style tailored to the mage's body and reactor. Every technique from every tradition is available, and the device synthesizes optimal counters to any observed fighting style within seconds of exposure.

This is professional combat-grade. The mage can fight multiple opponents simultaneously, predict and counter techniques from traditions they have never seen, and improvise new sequences on the fly. The spell now conditions the body continuously, so the mage does not tire mid-engagement and can execute techniques at full power through extended combat.

At Adept, the mage is among the most technically proficient fighters alive. The limitation is no longer knowledge—it is the mage's physical speed, strength, and the device's processing ceiling. Against a mage with a stronger reactor and better physical enhancements, technique alone cannot carry the day.`,
            expert: `The device possesses a complete model of combat as a system: every known martial art, every historical duel, every possible permutation of human biomechanics. It generates techniques that have never been formally taught, blending disciplines into a seamless, personalized flow. The mage no longer thinks about what technique to use—the device reads intent and selects the optimal sequence before conscious thought catches up.

This level requires decades of practice and a high-rank reactor. The mage can read an opponent's style within moments, counter their signature moves on their first attempt, and adapt to multiple opponents with independent fighting styles simultaneously. The spell conditions the body to execute techniques at maximum efficiency with zero wasted movement.

Expert Martial Arts Mastery is the practical peak of technical combat skill as a Tier 2 spell. The mage is not unbeatable—speed, raw power, and overwhelming magical force still trump technique. But within the realm of physical combat skill, they have almost nothing left to learn.`,
            master: `The spell runs at peak technical perfection. Every technique the device knows is available instantly, executed with flawless form and zero conscious overhead. The mage does not plan, does not hesitate, does not second-guess—their body simply moves correctly, every time, against any opponent. The device's combat model is so refined that it can predict an opponent's next action with near-certainty based on micro-cues and combat context.

The spell is permanently active, a background process that requires negligible mana and no attention. Allies benefit from directed tactical guidance—the device highlights optimal formations, warns of flanking maneuvers, and suggests coordinated strikes.

This is the ceiling of Martial Arts Mastery as a Tier 2 spell. The mage possesses perfect technique within the bounds of human-compatible combat. They cannot fight abstract concepts, cannot defeat reality itself through kung fu, and will still lose to an opponent who is simply too fast or too strong. What Master offers is the ultimate refinement of skill—every movement optimal, every decision correct, every technique executed at the limits of what the spell was designed to do.`,
        }
    },
    {
        id: 'pain_suppression',
        name: 'Pain Suppression',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `Pain signals are intercepted and weakened by a mana filter woven into the nervous system, reducing their intensity by roughly half. The mage knows they have been hit—the device preserves pressure and impact awareness—but the sharp, debilitating edge of pain is blunted. A broken rib becomes a dull ache; a deep gash registers as a firm squeeze.

The spell does nothing to prevent actual damage. This is its most dangerous flaw: a mage who cannot feel their injuries properly may push past the point of no return. The device provides no injury assessment at this level—only the suppression itself.

At Beginner, Pain Suppression is pure endurance. The mage can continue functioning through injuries that would normally force retreat, but they must rely on visual checks and instinct to gauge how badly they are hurt.`,
            apprentice: `Pain reduction reaches roughly three-quarters, and the device adds a passive threat assessment that flags the severity of injuries without reintroducing the pain. A deep wound triggers a dull pressure alert; a fractured bone sends a sharp ping rather than agony. The mage can assess their own condition mid-combat through this feedback system.

The spell gains selective control. The mage can keep sensation in their hands and eyes for precision work while suppressing pain everywhere else, or maintain full sensation in specific regions for diagnostic purposes. Limited touch-based relief for allies becomes possible—useful for stabilizing a wounded teammate long enough to reach a healer.

At Apprentice, the spell balances endurance with awareness. The mage is not invincible, but they can make calm, informed decisions about when to continue fighting and when to withdraw—a significant tactical advantage.`,
            adept: `Pain is eliminated entirely. The device intercepts all pain signals before they reach the brain, replacing them with a clean, dispassionate status report: location, type, estimated severity. The mage experiences combat as a stream of tactical data rather than a cascade of suffering. Psychological protection against pain-induced shock is included—the mage's mind stays sharp regardless of what their body endures.

The spell now extends to allies within a short radius. Up to three teammates receive the same suppression and status reporting, making coordinated retreats and triage far more effective. Minor healing acceleration accompanies the spell, as the body heals more efficiently when not devoting resources to processing pain.

At Adept, the mage is a reliable field medic and a combatant who will not flinch. Injuries still accumulate and still kill—Pain Suppression cannot save a mage from blood loss or organ failure—but pain will never be the reason they stop.`,
            expert: `The device provides complete immunity to all forms of pain: physical, magical, and psychological. Pain-based attacks, torture spells, and effects that directly target the brain's pain centers are nullified before they register. The mage functions at full combat capacity regardless of injury severity, guided entirely by the device's impartial damage reports.

The spell can redirect suppressed pain into enemies. The device converts the pain signals it intercepts into a concentrated burst of psychic discomfort, delivering a fraction of the mage's suffering directly into an opponent's nervous system. It is not a significant damage source, but it is deeply disorienting.

Expert Pain Suppression makes the mage immune to one of combat's most fundamental deterrents. The only remaining concern is structural damage—a spine severed at the neck still paralyzes, regardless of whether it hurts.`,
            master: `The spell is so thoroughly integrated that the mage no longer needs to activate it—it is a permanent, background feature of their nervous system. Pain simply does not exist for this mage. The device maintains a continuous injury map, updated faster than conscious thought, providing perfect real-time awareness of every wound, strain, and stress point without a flicker of discomfort.

The spell can be shared with any number of allies in proximity, though the protection is weaker at the edges of the radius. The redirected pain capability becomes precise and scalable: the device can feed specific amounts of discomfort to specific targets for purposes ranging from distraction to interrogation.

This is the ceiling of Pain Suppression as a Tier 1 spell. The mage is not a masochistic demigod—they cannot convert suffering into power, cannot manipulate the concept of pain itself. They have simply optimized one of the oldest and simplest defensive spells to the point where pain is no longer a variable in combat. The body still breaks; it just does not bother the mage when it does.`,
        }
    },
    {
        id: 'endurance_enhancement',
        name: 'Endurance Enhancement',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device boosts the efficiency of oxygen transport and cellular energy conversion, letting the mage sustain physical activity about fifty percent longer before fatigue sets in. A two-hour march feels like three; a five-minute sprint becomes seven. The effect is passive—once activated, the device handles metabolic optimization in the background.

Recovery is not accelerated. Once the mage does hit exhaustion, they rest at normal speed. Food and water needs remain unchanged, and the spell does nothing to protect against environmental factors like extreme heat or thin air.

At Beginner, Endurance Enhancement is a convenience spell. It stretches the mage's operational window without eliminating the fundamental limitations of human biology. Useful for scouts, messengers, and anyone who needs to cover ground efficiently.`,
            apprentice: `Stamina roughly doubles, and the device now accelerates recovery: the mage bounces back from exhaustion in half the normal time. Mental endurance is included—extended concentration on other spells or tactical analysis causes less strain. The device can pull a small amount of supplemental energy from ambient environmental sources, slightly reducing food and water requirements.

The mage can push through an eight-hour forced march at a run, fight multiple skirmishes in a single day, and still have reserves left for an emergency. The spell runs with minimal conscious overhead—the device handles the metabolic math while the mage focuses on objectives.

At Apprentice, Endurance Enhancement becomes a force multiplier for extended field operations. The mage is not tireless, but they outlast any unenhanced soldier by a wide margin.`,
            adept: `Stamina stretches to roughly five times baseline. The device can sustain peak physical output for days by redirecting mana into biological energy production when caloric reserves run dry. The mage can fight continuously through a 72-hour engagement without sleep, food, or a meaningful drop in performance. A suspended-animation mode is available for conserving energy in prolonged static situations while maintaining full environmental awareness.

The device optimizes all biological processes—waste heat is managed, lactic acid is cleared in real time, and metabolic by-products are processed faster than they accumulate. Environmental protection extends to temperature extremes and low-oxygen atmospheres, though not to vacuum or underwater environments.

At Adept, the mage is special forces tier. They can operate where logistics cannot follow for days at a time, and they will not collapse from exhaustion mid-operation.`,
            expert: `The device sustains peak performance indefinitely while mana holds. The mage no longer needs sleep, food, or recovery periods in any practical sense—the mana-to-energy conversion is efficient enough to power the entire body with surplus to spare. Fatigue immunity extends to magical exhaustion; the mage can cast back-to-back spells all day without the mental fog that normally accompanies mana depletion.

The spell can be shared with a small team, creating a unit that operates at peak performance around the clock. The device also protects against fatigue-inducing magical effects—sleep spells, exhaustion curses, and drain auras are mitigated or nullified.

At Expert, the mage is a logistical singularity. They can operate alone behind enemy lines for weeks, maintain combat readiness through sieges, and push through operations that would break any normal unit through sheer attrition.`,
            master: `The spell runs at maximum efficiency, a permanent background process with negligible mana cost. The mage's body never accumulates fatigue—the device catches and processes metabolic waste before it can affect performance. The mage is functionally tireless, capable of maximum exertion from the moment they wake until they choose to rest, and recovery is measured in minutes rather than hours.

Allies within proximity benefit from a reduced version of the effect—not enough to make them tireless, but enough to extend their operational window significantly and accelerate their recovery between engagements.

This is the ceiling of Endurance Enhancement as a Tier 1 spell. The mage is not a perpetual motion machine—without mana, the body reverts to normal biology—but as long as the reactor holds, fatigue is irrelevant. The spell does not grant infinite energy, does not allow the mage to "sustain hope" or "endure concepts." It simply ensures that running out of steam is never the reason they lose.`,
        }
    },
    {
        id: 'bone_reinforcement',
        name: 'Bone Reinforcement',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device weaves a lattice of hardened mana through the mage's bone structure, roughly doubling fracture resistance. A fall that would snap a femur causes a deep bruise instead; a baton strike to the forearm hurts but does not break. The reinforcement is uniform—skull, spine, ribs, and limbs all benefit equally.

The spell does nothing for surrounding tissue. A heavy impact can rupture blood vessels, tear ligaments, or bruise organs even if the bone holds. The mana lattice also takes a moment to re-form after a major impact, so rapid successive hits to the same location can still cause a break.

At Beginner, Bone Reinforcement is injury prevention for the most common skeletal damage. It will not save the mage from being crushed by falling debris, but it significantly reduces downtime from fractures and keeps them fighting through impacts that would otherwise end engagements.`,
            apprentice: `Bone density increases to roughly five times normal, and the spell extends to joints and connective tissues—tendons and ligaments are reinforced alongside bones. The entire musculoskeletal chain is hardened, allowing the mage to channel and withstand forces that would dislocate or tear an unprotected body.

The device now actively repairs micro-fractures as they occur. A crack that would take weeks to heal naturally seals within hours under the spell's influence. The enhanced skeleton can support greater muscular force, making the spell an excellent foundation for strength-enhancement magic.

At Apprentice, the mage's skeleton is effectively immune to conventional blunt-force damage. A sledgehammer blow bruises; a two-story fall is survivable. Penetrating weapons—armor-piercing rounds, magical blades—can still crack bone if they concentrate enough force in a small area.`,
            adept: `The device restructures bone at a microscopic level, creating a composite material that exceeds the tensile strength of steel while remaining lightweight and flexible. Bones can withstand forces that would pulverize concrete. Direct hits from anti-material rounds or building-level magical impacts cause hairline fractures rather than catastrophic breaks.

The spell can extend bone mass temporarily—the mage can sprout bladed spurs from their knuckles, reinforce their forearms into shields, or extend a bone spike from their palm as an improvised weapon. These projections are as durable as the enhanced skeleton itself and retract seamlessly.

At Adept, Bone Reinforcement turns the mage's skeleton into a structural asset. The device handles all reinforcement autonomously, and the spell runs indefinitely with sufficient mana. The mage is not unbreakable—a direct hit from a collapsing building will still cause damage—but they can absorb forces that would liquefy a normal human skeleton.`,
            expert: `The device achieves near-perfect molecular reinforcement. Bones are effectively indestructible by any conventional weapon below strategic-grade ordnance. The skeleton can absorb kinetic energy from impacts and store it, releasing the accumulated force into the mage's next strike—a punch that hits like a freight train after absorbing a grenade blast.

The bone projection ability becomes sophisticated: the mage can extrude full-length blades, articulated armor plates, or structural supports for climbing and bracing. The device can even operate the skeleton independently of muscles for short bursts, moving the mage's body through pure mana actuation if the muscular system is temporarily disabled.

Expert Bone Reinforcement represents years of dedicated refinement. The skeleton is a weapon, a shield, and an energy capacitor—all running on the device's computation in the background.`,
            master: `The spell runs at its designed absolute optimum. The skeleton is as durable as the device can make biological material—resistant to virtually any conventional personal-scale attack and capable of supporting any force the mage's body can generate. The mana lattice self-repairs faster than most damage can accumulate.

The bone projection system is fully integrated into the mage's combat reflexes. Extruding a blade is as natural as clenching a fist; raising a defensive plate is as fast as flinching. Allies receive a persistent skeletal reinforcement buff while in proximity, equivalent to a Beginner-level effect.

This is the ceiling of Bone Reinforcement as a Tier 2 spell. The mage's bones are not conceptual structures that exist "in abstract spaces"—they are extremely well-reinforced biological material. The spell cannot make the skeleton indestructible against strategic-scale attacks, and it does not decouple the mage from physical anatomy. Master means the spell has been pushed to the limit of what a Tier 2 structural enhancement can achieve.`,
        }
    },
    {
        id: 'vital_organ_protection',
        name: 'Vital Organ Protection',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device wraps each vital organ in a thin mana membrane that activates on impact, absorbing the force of penetrating attacks before they reach the tissue beneath. A blade that slips past the ribs hits the heart's barrier and stops; a bullet that penetrates the skull meets the brain's shield and flattens. The barriers are strongest around the heart, brain, and lungs, weaker around the liver and kidneys.

Each barrier can stop one or two substantial hits before depleting. Successive attacks to the same organ breach the membrane, and the barriers regenerate slowly—roughly a minute of uninterrupted concentration to restore full coverage. The device prioritizes which barriers to reinforce based on threat assessment.

At Beginner, Vital Organ Protection is a last line of defense. It will not save a mage from sustained fire or a dedicated assassin, but it turns an instantly lethal hit into a survivable wound—enough time for a healing spell or a tactical retreat.`,
            apprentice: `All organs receive equal protection, and the barriers regenerate actively—a depleted heart membrane reforms within seconds. The device now redistributes incoming damage across multiple barriers, preventing any single organ from being overwhelmed while others remain intact. If the lungs take a heavy hit, the device spreads the force across the heart and liver membranes as well.

The spell includes a passive threat-detection system. If the device processes an incoming attack with enough force to breach a barrier, it pre-emptively reinforces the target area before impact. The mage does not need to perceive the threat—the device handles threat assessment and response autonomously.

At Apprentice, the mage can survive what would be multiple fatal wounds in quick succession. The spell buys time—not invulnerability—but the margin is wide enough that a skilled mage can capitalize on it.`,
            adept: `The barriers are now layered and adaptive. Each organ is protected by three concentric mana membranes that regenerate independently; breaching all three requires sustained, focused firepower. The device can fabricate temporary mana constructs to replace a damaged organ's function—if the heart is disabled, a mana pump maintains circulation; if a lung is destroyed, a mana filter oxygenates blood.

Integrated healing magic works alongside the barriers, repairing organ damage as it occurs rather than simply blocking new hits. The combined effect makes the mage exceptionally difficult to kill through organ trauma alone. Poisons and diseases that target internal organs are filtered and neutralized.

At Adept, the mage is combat-operational through injuries that would require immediate surgery. The spell compensates for the body's weakest points—the soft, vulnerable organs that even heavily armored mages must protect.`,
            expert: `The device achieves near-impenetrable organ protection with instantaneous regeneration. Even total destruction of an organ is survivable—the mana constructs maintain function while the healing magic rebuilds tissue, a process that takes seconds to minutes depending on the damage. The mage's life is not severed by organ failure.

The spell can be extended to allies through proximity or touch. The device creates a linked field where damage to any protected individual is shared and mitigated across the group, making coordinated team kills exceptionally difficult. Redundant mana organs operate in parallel with biological ones, so the mage functions at full capacity even mid-regeneration.

At Expert, the mage is extraordinarily survivable. A point-blank explosive round to the chest cavity is survivable. Organ damage remains a tactical concern—it still hurts, still costs mana—but it is rarely the thing that kills them.`,
            master: `The spell runs at its design limit. All organs are protected by regenerating multi-layer barriers, backed by mana construct redundancy, supported by continuous healing. The device handles every aspect of the spell autonomously, and the mana cost is optimized to the point where maintaining it during combat is trivial.

The spell can be projected to protect the full organ systems of a squad-sized unit simultaneously, though the protection is reduced at the edges. Allies gain the equivalent of Apprentice-level organ protection while in the mage's proximity.

This is the ceiling of Vital Organ Protection as a Tier 3 spell. The mage is not immortal—the barriers do not protect against total bodily annihilation, and if every organ is destroyed simultaneously faster than the barriers can regenerate, the mage will die. "Decoupled from physical organs," "consciousness persists through magical means" — these are beyond what a Tier 3 spell can achieve. Master means the spell's defensive architecture is so refined that organ failure has been eliminated as a realistic cause of death in combat.`,
        }
    },
    {
        id: 'adrenaline_surge',
        name: 'Adrenaline Surge',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device triggers a controlled chemical and mana surge that boosts strength, speed, and pain tolerance by roughly thirty percent for about thirty seconds. The mage feels a wave of heat, tunnel vision tightens to the target, and their body moves faster than conscious thought would normally permit. It is the body's fight-or-flight response, refined and weaponized.

The cost comes after. Once the surge fades, the mage crashes—muscles tremble, reflexes slow, and mana reserves dip as the device scrambles to clear the metabolic byproducts of the forced burst. Two or three surges in quick succession leave the mage combat-inneffective from exhaustion.

At Beginner, Adrenaline Surge is a panic button. It turns a losing exchange around—or creates an opening to escape—but it is not a sustained combat strategy. The mage fires it, acts decisively, and pays the price after.`,
            apprentice: `Strength, speed, and pain tolerance boost to roughly fifty percent, and the surge lasts a full minute. The device preloads protective mana that mitigates the metabolic crash, so recovery between surges shrinks to minutes rather than hours. Mental processing accelerates alongside the physical boost—the mage perceives threats with heightened clarity and makes tactical decisions faster.

The spell can be set to trigger automatically when the device detects a life-threatening situation: a bullet inbound that the mage has not yet seen, a blade at the throat, a sudden drop from a great height. This reflex function has saved countless mages who would otherwise have been killed before they could consciously react.

At Apprentice, Adrenaline Surge becomes a tactical tool. The mage plans around surge windows, using the boost to overwhelm opponents or reposition, then recovering while the device handles defense.`,
            adept: `All combat capabilities roughly double for several minutes per surge, and the device eliminates the post-surge crash entirely. The mage can chain surges back-to-back, maintaining near-peak performance through extended engagements. The enhancement is not just physical—sensory processing accelerates to the point where incoming threats appear to slow down, giving the mage significantly more subjective time to react.

The spell can synchronize across a team. The device triggers coordinated surges on up to three allies simultaneously, creating bursts of synchronized offensive capability that can break enemy formations or overwhelm superior numbers.

At Adept, the mage controls the rhythm of combat. Surge windows become the tempo—every engagement is structured around when the mage chooses to push and when they choose to recover. The spell makes the mage significantly more dangerous than their baseline suggests.`,
            expert: `Combat capabilities push to roughly three to four times baseline for durations measured in minutes, with no crash and no upper limit on consecutive activations beyond mana availability. The enhancement is now purely magical—the device has replaced the biological adrenaline pathway with a mana-driven combat state that achieves greater effects without the physiological trade-offs of chemical stimulation.

Perception of time slows to roughly a quarter of normal speed during surges. The mage experiences four seconds of subjective time for every real second, allowing for assessment, planning, and execution that appears instantaneous to outside observers. Fear, confusion, and psychological debuffs are suppressed entirely during the enhanced state.

At Expert, the mage is a one-person shock troop. They can surge through an enemy line, process the tactical situation at bullet-time speeds, and neutralize threats before opponents register what happened.`,
            master: `The spell is a permanent, always-on enhancement running at roughly double baseline combat capabilities with negligible mana cost. The mage no longer activates surges consciously—the device maintains a continuous enhanced state and can spike output to three or four times baseline instantly when combat conditions warrant it, without warning, without recovery penalty.

The entire team—up to a squad—receives the permanent enhancement at roughly 1.5x baseline while in proximity. Burst spiking is available to allies on an individual basis when the device detects a critical threat.

This is the ceiling of Adrenaline Surge as a Tier 2 spell. The mage is not "of unlimited combat power" and does not fight on "conceptual or abstract levels." The spell provides a consistent, optimized enhancement to physical and mental combat performance that makes the mage and their team significantly more lethal and survivable—but it is still a multiplier on human capability, not an ascension beyond it.`,
        }
    },
    {
        id: 'weapon_bond',
        name: 'Weapon Bond',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device etches a sympathetic mana signature into a single weapon. Once bonded, the mage can sense its location within a hundred meters and recall it to their hand from up to ten meters away with a thought. The weapon handles a little better—roughly a ten percent improvement in accuracy, balance, and cutting power—as the device subtly adjusts its trajectory mid-swing based on the mage's intent.

The bond takes several minutes to establish and requires the weapon to be in physical contact with the mage during the process. Breaking a bond to form a new one takes roughly the same amount of time. While bonded, the weapon cannot be permanently lost—if taken, the mage can track it; if thrown, it can be recalled.

At Beginner, Weapon Bond is a convenience spell for mages who rely on a specific tool. Disarming becomes a minor inconvenience rather than a tactical loss. The bond does not make the weapon indestructible or magical—it is still steel, still breakable, still mundane.`,
            apprentice: `Recall range extends to fifty meters, and tracking works across an entire city. Up to three weapons can be bonded simultaneously, and the combat improvement rises to roughly twenty-five percent. The device can now channel defensive spells through the bonded weapon—a parry with a bonded blade carries the mage's Iron Skin or similar reinforcement into the block, making the weapon itself harder to break or bypass.

The bond provides passive durability enhancement. The device infuses a thin protective coating into the weapon's structure, reducing wear and resisting shattering from impacts that would normally destroy it. The mage can also use the weapon as a mana conduit, firing spell effects through the blade or haft rather than from their hands—useful for extending reach or adding cutting power to ranged spells.

At Apprentice, a bonded weapon is more than a tool. It is a protected, enhanced extension of the mage's arsenal that shares in their magical defenses.`,
            adept: `The weapon can be teleported directly to the mage's hand from anywhere on the same continent. Combat effectiveness improves by roughly fifty percent—the device actively adjusts the weapon's orientation, angle, and force application in real time to optimize every strike. The weapon can act with limited autonomy, parrying incoming attacks while the mage is focused elsewhere or even floating beside them as a sentry when not actively held.

Defensive magic is shared bidirectionally. Reinforcement spells applied to the mage extend to the weapon, and impact absorption on the weapon feeds into the mage's defensive lattice. The weapon becomes an energy battery—it can store excess mana during lulls in combat and release it as a burst of force on the next strike.

At Adept, the bond approaches symbiosis. The weapon is not technically alive, but it responds with what feels like instinct, and the mage operates it with fluidity that takes non-bonded fighters years to develop.`,
            expert: `The bond is near-perfect. The weapon can be called from any distance the mage can conceptualize—across oceans, between dimensions accessible through the device's calculations. Combat effectiveness doubles: the device handles every micro-adjustment, every angle correction, every force optimization, so the mage's movements are always optimally aligned with the weapon's capabilities.

The weapon can be merged into the mage's body for storage, dematerializing into mana and re-forming instantly on command. While merged, the bond cannot be severed, and the weapon cannot be destroyed by any means available at the personal combat scale. The device can even reconstruct the weapon from a mana template if the physical object is annihilated—a process that takes hours but guarantees the bond survives.

At Expert, the weapon is essentially a permanent part of the mage. The bond operates across any distance, survives destruction, and provides a level of combat integration that most warriors never approach.`,
            master: `The spell runs at its design ceiling. Bonding with up to five weapons is maintained simultaneously, and each operates at the full combat enhancement the device's processing power allows. The mage can juggle multiple bonded weapons telekinetically, coordinating independent attacks with different tools against different targets while the device handles all trajectory and force calculations in the background.

Bonding a new weapon takes seconds—the device has refined the signature-imprinting process to an automated routine. The mana cost for maintaining bonds is negligible, and the weapons are always available, always optimized, always reporting their status and position to the mage's awareness.

This is the absolute limit of Weapon Bond as a Tier 2 spell. The mage cannot "bond with abstract concepts" or "wield ideas as weapons." They cannot turn anything they see into a perfect weapon. The spell bonds physical weapons to a physical mage, and at Master, it does so with flawless precision and zero overhead—but that is all it does.`,
        }
    }
];

// Merge base spells into main spell data structure
if (typeof spellData !== "undefined" && spellData.physical) {
    spellData.physical = basePhysicalSpells.concat(spellData.physical);
}

// Additional spells continued (11-20)
const additionalPhysicalSpells2 = [
    {
        id: 'enhanced_senses',
        name: 'Enhanced Senses',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device recalibrates the mage's sensory processing pathways, sharpening visual acuity, auditory discrimination, olfactory sensitivity, and tactile resolution by roughly twenty-five percent across the board. It is not that the eyes or ears physically change—the device simply processes the raw sensory data more efficiently, filtering out noise and amplifying signal before it reaches conscious awareness. A whisper across a crowded room becomes legible; a shift in air pressure from a closing door registers as a distinct event rather than background static.

The effect is passive once initialized. The device runs the enhancement as a low-priority background process that consumes negligible mana, allowing the mage to maintain heightened perception through an entire operation without draining reserves. The trade-off is bandwidth—a sudden overload of sensory input, such as an explosion or flashbang, can briefly overwhelm the device's filtering algorithms, causing disorientation until the processor catches up.

At Beginner, Enhanced Senses is a quality-of-life and situational-awareness upgrade. The mage notices details that others miss, picks up on environmental tells that signal danger or opportunity, and generally operates with sharper awareness than an unenhanced human. It will not let them see through walls or hear thoughts, but it makes them harder to surprise and easier to inform.`,
            apprentice: `The device doubles sensory acuity relative to baseline and introduces selective amplification—the mage can mentally request that specific senses receive priority processing while others are temporarily dampened to prevent overload. In a surveillance scenario, hearing might be boosted to isolate a single conversation amid a crowd while vision is dialed back to peripheral monitoring; in a firefight, visual tracking of fast-moving threats takes precedence while auditory processing focuses on gunfire direction and teammate callouts.

A rough magical-emission detection layer is added. The device can sense ambient mana disturbances—the signature left by an active spell, a concealed magical item, or another mage's device running high-output calculations—and flag them as translucent highlights in the mage's visual field. This is not a detailed analysis; it cannot identify the spell or its source, only that magic is present nearby. False positives occur around natural mana concentrations, and the detection range is modest—roughly the span of a large room.

At Apprentice, the mage's sensory toolkit expands from passive enhancement to active utility. They can tailor their perception to the mission, and the addition of magical detection adds a layer of defensive awareness that pure physical senses cannot provide. Sustained use still requires conscious allocation—the device cannot fully automate priority switching yet.`,
            adept: `Sensory acuity reaches roughly five times baseline, and the device begins synthesizing entirely new sensory modalities from existing data streams. Low-light conditions are compensated through enhanced photon-counting and thermal gradient analysis, granting effective night vision without visible-spectrum illumination. The device processes minute electrical field fluctuations through the mage's skin, providing a crude electroreception sense that can detect living creatures through thin walls or concealed in darkness by their bioelectric signatures.

The magical detection layer matures into a directional mana-sight overlay. Active spells register as distinct color-coded signatures based on their magical category—Physical, Elemental, or Esoteric—and the device can estimate spell tier with improving accuracy as it accumulates data. Passive magical items, enchanted objects, and trace mana residues from recently cast spells all become visible within a radius of several dozen meters.

At Adept, the mage's perception begins to exceed what unaugmented biology can offer. They see in darkness, sense life through barriers, and perceive the magical landscape as a layer of reality parallel to the physical. The processing overhead is significant—maintaining all these modalities simultaneously requires a mid-rank Mana Reactor—but the intelligence gathered is worth the cost.`,
            expert: `The device pushes sensory processing to the practical limits of its computational architecture. Full electromagnetic-spectrum vision is synthesized—infrared, ultraviolet, and select radio frequencies are translated into visual overlays the mage can interpret in real time. Ultrasonic hearing detects frequencies far above and below human range, useful for echolocation-style spatial mapping in zero-visibility environments. A dimensional awareness module flags spatial anomalies, teleportation signatures, and proximity to pocket-dimension boundaries as subtle pressure anomalies that the device correlates with known dimensional physics.

The magical detection layer becomes comprehensive: spell identities, casting origins, mana flow patterns, and the approximate Mana Reactor rank of nearby mages are estimated and displayed. The device builds a persistent tactical map that updates continuously, overlaying sensory data onto a three-dimensional awareness sphere centered on the mage.

At Expert, the mage perceives a vastly richer world than any unaugmented human. The information density is immense, and the device shoulders the burden of processing, compressing it into intuitive overlays rather than raw data streams. Only mages with high-rank reactors and years of dedicated practice reach this level—the neural adaptation required to interpret the expanded sensory palette is not trivial.`,
            master: `The device achieves the theoretical ceiling of sensory augmentation as a Tier 1 spell. All sensory modalities run at maximum fidelity simultaneously, with the device dynamically allocating processing power based on situational relevance faster than the mage can consciously redirect attention. The dimensional awareness layer becomes precise enough to detect teleportation targets mid-transit, and the magical detection module can identify spell routines in progress with near-certain accuracy before they are fully cast.

The spell can be projected to allies within close proximity, sharing sensory overlays as compressed data packets through the device network. Teammates receive a simplified version—visual highlights for threats, magical emission warnings, and directional cues—rather than the full multi-spectrum experience the mage processes. This shared awareness dramatically improves squad coordination and threat response.

This is the ceiling of Enhanced Senses as a Tier 1 spell. The mage cannot grant themselves omniscience, cannot "perceive abstract concepts" through sensory data, and cannot extend their awareness beyond what the device's sensors and mana-detection radius can physically sample. The spell provides the maximum sensory bandwidth a Tier 1 enhancement can deliver—no more, no less.`,
        }
    },
    {
        id: 'joint_flexibility',
        name: 'Joint Flexibility',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device synthesizes a mana-based lubricant that coats every synovial joint while simultaneously reinforcing connective tissues—tendons, ligaments, and fascia—against the strain of extended range. The result is roughly fifty percent more articulation at every major joint without the pain or injury risk that normally accompanies such flexion. Shoulders rotate past the anatomical norm; hips open to angles that would dislocate an unprotected body; the spine arches and twists with contortionist-level freedom.

The spell runs continuously once activated, consuming minimal mana in exchange for constant, passive enhancement. The mage does not need to think about flexibility—it is simply there, available whenever they need to reach, bend, or twist beyond normal human limits. The device handles the real-time adjustments to tension and lubrication autonomously.

At Beginner, Joint Flexibility removes the physical friction from unconventional movement. The mage can squeeze through tight maintenance ducts, escape from most physical restraints through contortion alone, and execute grapples or holds that rely on joint manipulation with significant advantage. It is not supernatural—a joint locked at the extremes of its enhanced range can still be forced further and damaged—but it is a substantial edge in any situation where range of motion matters.`,
            apprentice: `Flexibility doubles relative to baseline, and the device now permits controlled joint dislocation and reformation without injury. The mage can pop a shoulder out of its socket to slip a restraint, then guide it back into place with the spell's assistance—no tearing, no inflammation, no recovery time. This extends to every joint in the body: wrists, ankles, hips, vertebrae can all temporarily separate and reconnect on command.

Strength is now maintained throughout the extended range. A normal body loses power at the extremes of flexibility because muscles operate at mechanical disadvantage when joints are fully stretched; the device compensates by reinforcing the connective architecture at those angles, allowing the mage to strike, lift, or hold with full force in positions that would leave an unenhanced fighter weak and vulnerable. An arm bent backward at the shoulder can still deliver a meaningful punch.

At Apprentice, the mage becomes exceptionally difficult to restrain or pin. Traditional joint locks, handcuffs, ropes, and even straitjackets are escapable through a combination of unnatural flexibility and controlled dislocation. Combat advantage comes from unpredictability—an opponent never knows from what angle the mage can strike effectively.`,
            adept: `The device achieves near-maximum biological flexibility for the mage's frame. The body can compress and contort to squeeze through openings as small as the width of the mage's skull and ribcage—a technique the device facilitates by temporarily shifting organ position, collapsing the ribcage within safe parameters, and lubricating the entire musculoskeletal chain for frictionless movement. The mage can navigate ducts, vents, and structural gaps that would be impassable to any unenhanced human of similar build.

Strength optimization reaches its practical peak. The device ensures that every muscle group can generate full contractile force from any joint angle, eliminating the mechanical disadvantage that normally limits power at extreme ranges. A kick thrown from a hip rotated nearly backward hits with the same force as a kick thrown from a neutral stance. This makes the mage lethally unpredictable in close-quarters combat—they can attack from angles that should not be possible and defend positions that should not be reachable.

At Adept, the mage is an escape artist and close-quarters specialist of the highest order. The spell runs efficiently enough that a mid-rank reactor can sustain it through extended operations. Restraint, confined spaces, and grappling-focused opponents all become manageable rather than threatening.`,
            expert: `The device pushes contortion capability to the practical ceiling of the mage's anatomy. Joints operate with near-zero friction across their full enhanced range, and the spell can temporarily relax the structural integrity of connective tissues to an extraordinary degree—the mage's body flows through openings, wraps around obstacles, and folds into configurations that appear to disregard skeletal constraints. The device maintains a real-time anatomical model to ensure no movement exceeds safe structural limits, even when the position looks impossible.

Full strength is maintained at every conceivable angle, and the device now optimizes leverage dynamically—if the mage needs to apply force from an awkward position, the spell redistributes muscle activation patterns and connective tension to maximize mechanical advantage in real time. A grapple initiated from an inverted, contorted position is executed with the same biomechanical efficiency as one launched from a textbook stance.

At Expert, the mage's flexibility is a dedicated asset rather than a passive convenience. They can infiltrate through routes that no security system would consider viable, engage opponents from directions that defy tactical expectation, and endure physical manipulation that would reduce a normal body to a pile of dislocated joints. The spell requires a high-rank reactor to sustain at full output through extended combat.`,
            master: `The spell runs at its design optimum as a permanent background process with negligible mana cost. Every joint, tendon, and ligament is maintained in a state of maximum safe flexibility at all times, with the device continuously recalculating structural integrity parameters to keep the mage at peak contortion readiness without conscious input. The transition between normal movement and extreme flexibility is seamless—the body simply does what is needed, when it is needed.

Allies within close proximity receive a reduced version of the enhancement through device synchronization, gaining roughly double-normal flexibility while near the mage. This is particularly useful for squad infiltration through compromised infrastructure or rescue operations requiring unconventional access.

This is the ceiling of Joint Flexibility as a Tier 1 spell. The mage is not a shapeshifter—they cannot change their body mass, alter their bone structure, or transform into a pool of liquid to flow through a crack. The spell enhances the flexibility of the existing body to the limits of what the device can safely manipulate, and that boundary is absolute. What Master offers is the most efficient, most reliable, most combat-integrated version of that enhancement possible at Tier 1.`,
        }
    },
    {
        id: 'impact_absorption',
        name: 'Impact Absorption',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device projects a thin mana cushion that envelops the mage's body, intercepting incoming kinetic energy and converting it into diffuse heat before it reaches tissue. The conversion is roughly fifty percent efficient at this level—a baseball bat to the ribs delivers the force of a firm shove; a two-story fall causes bruising and windedness rather than shattered legs. The cushion activates reactively, flaring to full density at the point of impact within microseconds of detection.

The spell is not armor—it does not stop cutting, piercing, or energy-based attacks. A knife slips through the cushion unimpeded, and a fireball's thermal component bypasses it entirely. The device prioritizes blunt trauma mitigation because kinetic transfer is the most computationally tractable form of damage to intercept; other vectors require dedicated defensive spells.

At Beginner, Impact Absorption turns blunt force from a fight-ender into a survivable inconvenience. The mage can take hits that would floor an unprotected combatant and remain operational. The mana cost is moderate but spikes dramatically under sustained assault—a beating from multiple opponents drains reserves faster than the device can optimize the conversion process.`,
            apprentice: `Efficiency climbs to roughly seventy-five percent, and the device now captures a portion of the converted kinetic energy in a temporary mana capacitor rather than venting it all as waste heat. The stored energy can be channeled into the mage's next physical strike, adding the force of an absorbed blow to their own attack within a narrow window—roughly three to five seconds before the capacitor bleeds off. A mage who absorbs a tackle can return the favor with interest.

The cushion extends to cover allies within arm's reach, though the protection is diluted when spread across multiple bodies. Two teammates partially shielded is usually more useful than perfect protection on one, but the mage must be in physical contact with them when the impact lands. The device manages threat prioritization—if an incoming attack is detected early enough, the spell thickens at the predicted impact point of the most vulnerable target.

At Apprentice, Impact Absorption becomes a tactical tool rather than a passive defense. The energy-redirection mechanic rewards aggressive responses to absorbed hits, and the ally-protection capability makes the mage a mobile defensive anchor for their squad. The spell still performs poorly against sustained kinetic bombardment—artillery barrage or repeated heavy strikes drain the mana capacitor and overwhelm the cushion's regeneration rate.`,
            adept: `The cushion achieves roughly ninety percent kinetic-to-heat conversion efficiency. A building-level impact—a collapsing floor, a direct hit from a wrecking machine, an explosive that would pulp an unarmored body—is reduced to survivable levels of blunt trauma. The device maintains multiple redundant cushion layers that regenerate independently, so a single overwhelming impact depletes one layer while the others remain intact for follow-up hits.

The energy capacitor now stores enough force for a significant counter-strike and can release it in one of two modes: a focused kinetic lance that concentrates the absorbed energy into a piercing blow, or a wide-area shockwave that staggers multiple opponents in close proximity. The capacitor bleed-off window extends to roughly fifteen seconds, giving the mage tactical flexibility in choosing when to discharge.

At Adept, the mage can walk through environments that would instantly kill an unprotected human—collapsing structures, vehicular impacts, proximity to industrial-scale explosives—and return the borrowed force with interest. Sustained artillery-grade kinetic assault still eventually overwhelms the system, and the mana cost at this level demands a mid-to-high-rank reactor for extended operations.`,
            expert: `The cushion efficiency approaches its design maximum, and the device now pre-computes impact mitigation strategies based on environmental scanning—if a building is about to collapse, the spell pre-loads reinforcement at the predicted debris trajectory before the first brick falls. The mage can survive direct hits from anti-material rounds, proximity detonation of aircraft-grade ordnance, and strikes from building-sized constructs. The heat venting from absorbed impacts becomes weaponizable in close quarters—an opponent who grapples the mage mid-absorption gets a faceful of flash-vented thermal discharge.

The redirected energy can be released as controlled force blasts at short range, functioning as a secondary offensive tool that scales with the damage the mage absorbs. A heavy hit charges a heavy response; a light tap charges a warning shot. Allies within a short radius benefit from roughly sixty to seventy percent of the mage's absorption efficiency without physical contact, and the device manages their individual capacitor states independently.

At Expert, the mage is a kinetic sponge—they absorb punishment, convert it, and return it. The spell demands a high-rank reactor and significant device processing power, and mages who reach this level have typically spent years refining the absorption-to-redirection cycle into an intuitive combat rhythm.`,
            master: `The spell operates at peak optimization as a perpetual background defense. Kinetic conversion efficiency hovers at the theoretical ceiling the device's architecture can support, and the multiple redundant cushion layers regenerate faster than all but the most sustained strategic-grade bombardment can deplete them. The mage can absorb building-level impacts back-to-back with minimal degradation in protection.

The energy redirection system is fully integrated into the mage's combat instincts. Absorbed force flows into strikes, blasts, or shockwaves without conscious direction—the device reads intent and allocates stored energy to the most tactically relevant output. Allies within the mage's operational radius receive persistent impact mitigation at Apprentice-level efficiency through passive device synchronization.

This is the ceiling of Impact Absorption as a Tier 2 spell. The mage cannot absorb strategic weapons—nuclear-scale kinetic transfer, orbital strikes, or city-buster ordnance exceed the cushion's energy capacity by orders of magnitude. The spell cannot "control kinetic energy as a fundamental force" or grant generalized kinetic manipulation. It is a highly optimized personal-scale impact mitigation system, and at Master, it delivers the best kinetic defense a Tier 2 spell can provide.`,
        }
    },
    {
        id: 'muscle_memory',
        name: 'Muscle Memory Imprint',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device accelerates motor pathway formation by a factor of roughly two, imprinting practiced physical movements into the mage's neural architecture at double the normal rate. A kata that would take a hundred repetitions to ingrain takes fifty; a new weapon grip that would feel awkward for weeks settles into instinct within days. The spell does not teach techniques—the mage must still practice them—but it dramatically compresses the training timeline.

The device achieves this by enhancing the signal-to-noise ratio in the motor cortex during repetitive practice. Each successful execution of a movement pattern reinforces the neural pathway more strongly than unaugmented repetition, while failed attempts are flagged and de-emphasized, reducing the trial-and-error phase of skill acquisition. The effect is passive and requires no conscious management once activated.

At Beginner, Muscle Memory Imprint is a training accelerator. It turns months of dedicated practice into weeks, weeks into days. The mage still needs a competent instructor or reference material—the spell cannot fabricate technique from nothing—but any physical skill within human capability becomes learnable on a practical timeframe even for someone without natural aptitude.`,
            apprentice: `Learning speed accelerates to roughly five times baseline, and the device introduces observational imprinting: watching a skilled practitioner perform a technique once or twice is sufficient for the spell to capture the movement data, extrapolate the underlying muscle activation patterns, and begin imprinting them into the mage's motor pathways. The imitation is not perfect—subtle elements of timing, force modulation, and adaptation to the mage's own body proportions require a few practice attempts to calibrate—but the learning curve is reduced from months to hours.

The spell now tracks all imprinted skills in a persistent motor library maintained by the device. Learned techniques are not forgotten; the device stores the optimized activation patterns and can refresh them on demand, preventing skill decay during extended periods without practice. If the mage learns archery over a summer and then does not touch a bow for five years, the device restores the muscle memory to its peak fidelity within minutes of reactivation.

At Apprentice, the mage becomes a practical polymath—able to acquire and retain diverse physical skills across combat, athletics, craftsmanship, and performance arts without the normal constraints of training time and skill decay.`,
            adept: `The imprinting rate reaches roughly twenty times baseline. The device can capture a technique from a single observation and have the mage executing it at functional proficiency within minutes, approaching full mastery within hours of focused calibration. The motor library expands beyond simple techniques to full movement systems—a complete martial art can be absorbed by observing a master demonstrate its core forms; an entire sport's biomechanics can be internalized from watching a championship match.

The spell now learns from indirect observation. Video recordings, written technical manuals with anatomical diagrams, and even verbal instruction from an expert are sufficient for the device to reconstruct the probable muscle activation patterns and begin imprinting. The fidelity is lower than direct observation—errors creep in when reconstructing from incomplete data—but the ability to learn from any instructional medium dramatically expands the mage's skill acquisition range.

At Adept, the mage is effectively an archive of human physical capability. Any technique they have witnessed or studied is available for recall and execution. The limitation is not knowledge but the mage's physical conditioning—knowing how to execute an Olympic gymnast's routine does not grant the strength and flexibility to perform it without supporting enhancement spells.`,
            expert: `Imprinting becomes near-instantaneous. A technique observed once is available at full proficiency within seconds, and the device continuously refines the motor library as the mage executes skills in live situations—each use of a technique generates data that improves the stored pattern. The mage maintains perfect recall of every physical action they have ever witnessed, studied, or practiced, with the device serving as an external motor memory archive of effectively unlimited capacity.

The spell can now imprint multi-body coordination sequences. Team maneuvers, partner acrobatics, and synchronized combat tactics are learned as integrated patterns rather than as individual roles, giving the mage instinctive awareness of timing windows and spatial positioning for cooperative physical actions.

At Expert, the mage's motor library is a comprehensive database of human movement. The spell runs as a permanent background process with minimal mana overhead, continuously updating stored patterns and maintaining imprint fidelity. This level requires a mid-to-high-rank reactor and years of dedicated device calibration—the neural pathways involved are numerous, and poor imprinting can cause motor confusion if not managed carefully.`,
            master: `The spell reaches its design optimum. Imprinting is functionally instantaneous, and the motor library maintains every learned skill at peak fidelity with zero conscious overhead. The device continuously cross-references stored patterns, synthesizing new techniques from the mage's accumulated motor knowledge—a strike from one martial art combined with the footwork of another, calibrated to the mage's exact body proportions and current physical condition.

The spell can share imprinted skills with allies through physical contact. The device transmits compressed motor patterns to a teammate's device, which unpacks and imprints them at an accelerated rate. The recipient gains functional proficiency within minutes and full mastery within hours of focused practice—roughly equivalent to the spell's Apprentice-level imprinting speed for the original skill.

This is the ceiling of Muscle Memory Imprint as a Tier 1 spell. The mage does not possess "omniscient skill" or "perfect execution of impossible actions." The spell is limited to human-executable techniques—it cannot imprint a dragon's wingstroke, a fish's swimming pattern, or a technique that requires biological structures the mage does not possess. What Master offers is the most efficient, most comprehensive motor learning acceleration possible at Tier 1, with the ability to share that acceleration with trusted allies.`,
        }
    },
    {
        id: 'battle_focus',
        name: 'Battle Focus',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device suppresses non-combat-relevant sensory input—background noise, peripheral distractions, physiological signals of fear and anxiety—while sharpening threat-assessment pathways by roughly twenty-five percent. The mage experiences a narrowing and clarifying of attention: irrelevant details fade, and the elements that matter in a fight—opponent positioning, weapon trajectories, environmental hazards—resolve with heightened clarity. Two or three opponents can be tracked simultaneously without cognitive overload.

The spell filters emotional noise as well as sensory noise. The device dampens the amygdala's threat-response cascade, reducing the flood of adrenaline and cortisol that degrades fine motor control and tactical reasoning. The mage still feels the physiological rush of combat—heart rate elevates, pupils dilate—but the mental fog that accompanies it is substantially cleared.

At Beginner, Battle Focus is composure under fire. It will not win a fight by itself, but it prevents the mage from losing one to panic, hesitation, or sensory overload. The device must be manually activated and requires the mage to consciously maintain the filtered state—if their attention fractures, the filter degrades.`,
            apprentice: `Focus enters a sustained flow state. The device maintains the sensory filter autonomously, freeing the mage from conscious management, and threat processing accelerates to the point where combat decisions feel intuitive rather than analytical. The mage is immune to intimidation effects—magical fear, psychological warfare, and the sheer presence of a superior opponent all bounce off the device's emotional dampening as irrelevant noise.

Multiple combat vectors are processed in parallel. The device tracks opponents, allies, environmental hazards, and magical signatures simultaneously, compressing the data into intuitive threat overlays rather than a stream of raw information. The mage can engage one target while maintaining awareness of three others, switch targets mid-combo without losing flow, and recognize flanking maneuvers before they develop.

At Apprentice, the mage fights with the calm precision of someone who has already seen the engagement play out. The spell transforms combat from a chaotic scramble of reactions into a structured problem to be solved. It does not guarantee victory—a superior opponent is still superior—but it eliminates the cognitive errors that cause most fighters to lose fights they should have won.`,
            adept: `The device can track any number of threats within sensor range, building a persistent tactical model that updates faster than the mage can consciously process. Several moves ahead are planned and contingency-branched: if opponent A feints left, the device has already queued responses for opponents B and C's most likely follow-ups. The mage experiences this not as conscious chess-thinking but as a smooth flow of correct decisions—their body seems to know what to do before their mind catches up.

The focus state can be shared with a squad through device synchronization. Up to five allies receive a simplified threat overlay and emotional dampening, creating a coordinated tactical network where each member benefits from the group's combined awareness. The device manages traffic, prioritizing critical alerts and suppressing redundant information.

At Adept, Battle Focus becomes a force multiplier beyond the individual mage. A squad operating under synchronized focus fights with the cohesion of a single organism, reacting to threats as a unit rather than as individuals. The mana cost scales with the number of allies connected, demanding a high-rank reactor for full-squad coverage during extended engagements.`,
            expert: `Tactical clarity approaches a computational optimum. The device models opponent behavior with high-fidelity predictive algorithms—stance, breathing, eye movement, mana flow, and combat history are synthesized into probability-weighted threat forecasts that update continuously. The mage perceives the fight several moves ahead not through precognition but through the device's statistical modeling, which is accurate enough against predictable opponents to feel indistinguishable from foresight.

Threat modeling extends beyond immediate combat to tactical-level assessment. The device evaluates positioning, terrain, sightlines, cover availability, and escape routes, presenting the mage with optimized tactical options in real time. A complex engagement involving dozens of combatants across multiple rooms resolves into a manageable decision tree.

At Expert, the mage is a tactical singularity—a commander and combatant whose situational awareness exceeds any unaugmented strategist. The spell runs with minimal conscious overhead, leaving the mage's attention free for high-level decision-making while the device handles the computational grunt work. This level requires a high-rank reactor and extensive combat data for the device's predictive models to train on.`,
            master: `The spell is a permanent background process consuming negligible mana. The mage no longer enters or exits Battle Focus—it is simply always on, always processing, always modeling threats with the full computational resources the device can spare. The transition from civilian awareness to combat readiness is seamless; the device detects threat indicators before the mage consciously registers danger and activates the full tactical overlay in milliseconds.

Allies within the mage's operational radius receive a permanent reduced version of the focus state—roughly Apprentice-level threat filtering and emotional dampening—through passive device synchronization. No conscious activation is required from either the mage or their teammates.

This is the ceiling of Battle Focus as a Tier 2 spell. The mage does not possess "combat omniscience" or "prescience." The device models probable futures based on available data; it cannot predict the unpredictable. The spell is bounded by the mage's own reaction speed—if the device calculates an optimal response faster than the mage's body can execute it, the advantage is theoretical. Bounded also by the device's processing power: a high-rank reactor can sustain the full suite; a low-rank reactor can only run a subset of the threat models simultaneously. What Master offers is the best threat-processing and focus-enhancement a Tier 2 spell can deliver.`,
        }
    },
    {
        id: 'cellular_control',
        name: 'Metabolic Control',
        tier: 4,
        cost: 20,
        proficiency: {
            beginner: `The device interfaces with the mage's endocrine and autonomic systems, allowing conscious adjustment of metabolic rate within a band of roughly plus or minus twenty percent. A faster metabolism accelerates healing, increases energy availability, and raises body temperature; a slower metabolism conserves resources, suppresses inflammation, and extends the mage's operational window without food or rest. The device handles the complex biochemical feedback loops that would otherwise make manual metabolic control lethal within minutes.

Minor healing is accelerated—shallow cuts close visibly within hours, bruises fade in a day, and the immune response to common pathogens is substantially boosted. Hair and nail growth can be consciously directed, allowing the mage to maintain grooming or grow out useful features without waiting on natural cycles. These are surface-level effects; the spell does not yet reach deep tissue or organ-level repair.

At Beginner, Metabolic Control is a quality-of-life and field-survival tool. The mage can push through minor injuries faster, adapt to food scarcity, and fine-tune their body's baseline performance. The mana cost is moderate but sustainable for a low-to-mid-rank reactor through extended use.`,
            apprentice: `The device gains access to deeper biological regulation. Body composition can be reshaped over weeks—muscle mass increased, fat redistributed, bone density improved—by directing the metabolic resources that the body would normally allocate on autopilot. This is not instant transformation but a guided optimization that produces results far faster than diet and exercise alone.

Toxin processing is substantially enhanced. The device directs the liver and kidneys to prioritize and accelerate the breakdown of common poisons, venoms, and metabolic waste products. Mild to moderate toxins are neutralized before symptoms manifest; severe toxins are mitigated to survivable levels. The immune system operates with heightened discrimination—pathogens are targeted more aggressively while autoimmune overreactions are suppressed.

At Apprentice, Metabolic Control becomes a comprehensive biological management system. The mage can engineer their own physiology toward specific goals—combat readiness, endurance, recovery from illness—and maintain those optimizations indefinitely. The spell requires a mid-rank reactor to sustain the continuous biochemical interventions.`,
            adept: `Comprehensive biological optimization becomes the default state. Every system—cardiovascular, respiratory, immune, endocrine, neurological—runs at the device's calculated optimum for the mage's current circumstances. In combat, oxygen delivery and energy metabolism spike; during rest, repair and regeneration dominate; under threat of disease, the immune system shifts to maximum readiness. These transitions are automatic—the device reads context and adjusts the mage's biology in real time.

Severe injuries heal at dramatically accelerated rates. Deep tissue damage, organ lacerations, and complex fractures that would require weeks of hospitalization resolve in days. The device can maintain an organ's function through mana-construct redundancy if the biological organ is temporarily disabled—a damaged liver is supplemented by a mana filter; a struggling heart is assisted by a mana pump. These constructs are energy-intensive and temporary but buy crucial time for biological repair.

At Adept, the mage is largely independent of medical infrastructure. They heal faster, resist disease, process toxins, and maintain peak biological performance through conditions that would degrade any unaugmented human. This requires a high-rank Mana Reactor—the level of continuous cellular intervention demanded by this proficiency is not sustainable on lower ranks.`,
            expert: `The device achieves near-instant metabolic state transitions. The mage can shift from rest to full combat output in seconds, with all biological systems synchronized for peak performance. Moderate tissue loss—fingers, strips of muscle, sections of non-critical organs—regenerates over hours to days as the device directs stem-cell reservoirs and accelerates mitosis with mana-assisted precision.

Disease and poison become effectively irrelevant. The immune system, directed by the device's real-time pathogen analysis, neutralizes infections before they establish. The metabolic purification system processes any toxin faster than it can accumulate, and the device maintains a library of immunological data that allows pre-emptive defense against pathogens the mage has encountered before. Resistance to biological warfare agents, magical plagues, and engineered pathogens is comprehensive.

At Expert, the mage's biology is a managed system rather than a set of independent processes. The device runs the show, and the show runs at peak efficiency. Sustaining this level demands a Keter-rank reactor or near it—the computational overhead of managing an entire organism's biochemistry in real time is immense.`,
            master: `The spell operates at its design ceiling as a permanent background process. Every aspect of the mage's metabolism is continuously optimized with negligible conscious overhead. The device maintains a complete biological model of the mage's body, updated faster than cellular processes can deviate from optimal parameters, and corrects deviations before they accumulate into symptoms. Aging slows to a crawl as the device catches and repairs the cellular errors that drive senescence.

Allies in physical contact receive touch-based healing that operates at the spell's Apprentice-level efficacy—deep wounds accelerate, toxins are processed, immune response is boosted. The mage cannot project this healing at range; it requires direct contact for the device to interface with the recipient's biological systems through their own device network.

This is the ceiling of Metabolic Control as a Tier 4 spell. The mage cannot "create life from nothing"—the spell optimizes and repairs existing biology, it does not generate new organisms. The mage cannot "transform into any biological form"—reshaping is limited to the mage's own genetic template and cannot produce features outside that blueprint. Control over others' biology is limited to touch-based healing; the mage cannot seize control of another person's metabolism at range. What Master offers is the most refined, most comprehensive self-biological-management a Tier 4 spell can achieve.`,
        }
    },
    {
        id: 'kinetic_amplification',
        name: 'Kinetic Amplification',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device accelerates mana through the mage's limbs at the moment of impact, amplifying the force delivered by roughly fifty percent. A punch that would stagger becomes a punch that sends an opponent sprawling; a kick that would bruise ribs cracks them. The amplification is applied at the point of contact, so the mage's swing and follow-through feel normal—the extra force manifests only in the target.

Protective mana envelopes the mage's own skeletal and muscular structures during amplification to prevent recoil injury. A normal human throwing a punch with fifty percent more force than their body is conditioned for would tear tendons and fracture knuckles; the device absorbs and disperses the reaction forces, leaving the mage unharmed. This recoil dampening is as important as the amplification itself—without it, the spell would be self-destructive.

At Beginner, Kinetic Amplification turns the mage's unarmed strikes from nuisance to genuine threat. Armed strikes benefit proportionally—a baton swing that would bruise now breaks bone—but the spell does not yet scale to the level where it changes the tactical calculus of an engagement.`,
            apprentice: `Force multiplication reaches roughly double baseline, and the device introduces output modulation: amplification can be focused into a narrow impact zone for penetration—punching through armor or reinforced barriers—or spread across a wider area for concussive effect—staggering multiple opponents with a single ground slam. The protective envelope strengthens accordingly, ensuring the mage's own body can withstand the forces it generates.

The spell now amplifies force applied through held objects and weapons. A knife thrust gains armor-piercing capability; a thrown rock hits with the force of a small-arms round; a shield bash becomes a structural threat. The device calculates the object's material limits and caps amplification before the object itself shatters, so the mage does not need to guess at safe thresholds.

At Apprentice, the mage is dangerous at melee range—not just to unarmored opponents but to reinforced positions and light vehicles. The mana cost is significant during active amplification, and sustained output drains a low-to-mid-rank reactor within minutes of continuous combat.`,
            adept: `Sustained force output reaches roughly five times baseline, with the device capable of ten-times bursts for critical strikes lasting one to two seconds. The protective envelope is now fully redundant—multiple layers of recoil absorption ensure that even a miscalculated amplification or an unexpected counter-force does not injure the mage. Shockwaves from strikes become a secondary weapon: a punch thrown at the air creates a concussive blast that hits targets up to a few meters away.

The amplification extends to full-body movements. A leap that would clear a fence now clears a building; a tackle that would knock someone down now sends them through a wall. The device manages the complex force distribution required for full-body amplification—balancing output across dozens of muscle groups and joint angles to maintain the mage's stability during extreme maneuvers.

At Adept, the mage is a melee specialist capable of engaging military vehicles and fortified emplacements. The spell demands a mid-to-high-rank reactor for sustained Adept-level output, and mages who reach this proficiency have typically integrated Kinetic Amplification into a broader suite of physical enhancement spells.`,
            expert: `Sustained force output reaches roughly twenty times baseline, with burst capability extending to thirty times for fractions of a second. A punch punches through military-grade vehicular armor; a kick deforms structural steel; a shoulder tackle brings down a reinforced concrete wall. The device projects force at range—a strike thrown at empty air creates a kinetic lance that travels several meters and hits with a significant fraction of the direct-impact force.

Output modulation becomes surgical. The device can reduce amplification to near-zero for delicate handling and scale it up to full combat output in the same motion—the mage can pick up an egg, hand it to someone, and backhand an armored opponent through a wall within the same second. This precision is what separates an Expert from an Adept: raw force is common among high-tier mages, but the ability to toggle between zero and maximum output with zero latency is rare.

At Expert, the mage operates as a one-person demolition team and anti-armor asset. The mana cost is substantial, and sustained Expert-level output requires a Keter-rank reactor or dedicated mana-conservation techniques.`,
            master: `The spell operates at its theoretical force-multiplication optimum. Sustained output settles at roughly twenty to twenty-five times baseline, with burst capability extending to roughly thirty-five times—the hard ceiling imposed by the device's mana-channeling architecture and the mage's reinforced physiology. The protective envelope regenerates faster than amplification-induced stress can accumulate, so the mage can fight at full output indefinitely while mana holds.

Force projection at range becomes a primary combat tool rather than a secondary effect. The device can shape kinetic lances, wide-area shockwaves, and precision strikes that thread through gaps in cover—all modulated seamlessly across the full output range. Allies within physical contact receive a reduced version of the amplification on their strikes, equivalent to the spell's Apprentice-level output.

This is the absolute limit of Kinetic Amplification as a Tier 3 spell. The mage cannot amplify force to "geological or cosmic scale"—the device's mana-channeling pathways have a maximum throughput, and the mage's reinforced body has a maximum force tolerance before the protective envelope itself becomes the point of failure. The spell multiplies the force of physical actions within the bounds of what a Tier 3 spell-engine can support, and at Master, it delivers the ceiling of that multiplication.`,
        }
    },
    {
        id: 'nerve_enhancement',
        name: 'Nerve Enhancement',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device accelerates neural signal transmission along the mage's existing nerve pathways by roughly fifty percent. Action potentials that normally travel at a fixed speed—dictated by axon diameter and myelination—receive a mana-assisted boost that cuts transmission latency by a third. The mage's reaction time improves noticeably: a stimulus that would take two hundred milliseconds to process and respond to now resolves in about one hundred thirty. In combat terms, this is the difference between blocking a punch and catching it mid-extension.

The device also improves the signal-to-noise ratio in the nervous system. Background neural chatter—random firing, sensory crosstalk, the static of an overworked brain—is suppressed, making intentional signals cleaner and more distinct. Fine motor control improves accordingly: stitching a wound, picking a lock, or lining up a shot at range all benefit from the reduction in neural jitter.

At Beginner, Nerve Enhancement is a speed buff. The mage reacts faster, moves with more precision, and operates at the upper edge of human neural performance. The spell does not accelerate thought—only signal transmission—so the mage still needs time to process what they perceive before the device can translate intent into motor commands.`,
            apprentice: `Neural transmission speed roughly doubles, pushing reaction time into superhuman territory. The device now pre-processes sensory data along accelerated pathways, shaving additional milliseconds off the perception-to-action loop. The mage reacts to a drawn weapon before the wielder finishes the draw; they dodge a strike that an unaugmented fighter would not have seen coming until it landed.

Machine-like precision becomes the norm. The device suppresses the micro-tremors and positional errors inherent in biological motor control, ensuring that every movement lands exactly where the mage intends. A shot fired under stress hits where it is aimed; a blade thrust terminates at exactly the desired depth; a landing from a height places the feet within a centimeter of the intended position. This precision applies to all voluntary movement, conscious or reflexive.

At Apprentice, the mage operates at speeds that unenhanced humans cannot match and with a consistency that makes every action reliable. The mana cost is moderate but sustainable for a mid-rank reactor through extended engagements.`,
            adept: `Neural transmission reaches roughly five times baseline speed. Reaction time drops low enough that the mage effectively responds at the speed of conscious intent—the gap between deciding to act and initiating the action shrinks to near-zero. The device coordinates all four limbs independently with perfect synchronization, so the mage can execute complex multi-limb sequences—striking high with one hand while blocking low with the opposite leg while repositioning for a follow-up—without the motor conflicts that normally plague untrained multi-tasking.

The spell provides partial redundancy against nerve damage. If a nerve pathway is severed, crushed, or chemically blocked, the device can route signals around the damaged section through adjacent pathways or, for critical motor functions, transmit commands directly through mana-conductance rather than biological nerve tissue. This mana-conduction mode is slower and less precise than natural transmission but keeps limbs operational through injuries that would otherwise paralyze.

At Adept, the mage is a blur of coordinated motion. The mana cost scales with the number of redundant pathways maintained, so mages operating with nerve damage consume more resources. A mid-to-high-rank reactor is recommended for sustained Adept-level output.`,
            expert: `Neural transmission approaches the practical speed limit of biological nerve tissue enhanced by mana—the device has extracted nearly all available latency from the signal path. Reaction times are indistinguishable from instantaneous to human observers, and the mage experiences the world as a slowed-down sequence of clearly resolved moments even during high-speed combat. Full motor control is maintained through any nerve damage short of complete spinal severance, with the device routing commands through an extensive mana-conduction backup network.

The spell can extend limited enhancement to allies through device synchronization. Teammates receive roughly double-speed neural transmission and basic motor-precision cleaning while in proximity, creating a squad that operates at noticeably accelerated tempo. The device manages the network traffic, prioritizing combat-critical motor commands and deprioritizing non-essential signals to conserve bandwidth.

At Expert, the mage's nervous system is as fast as the device can make it. The remaining latency is in the biological tissue itself—axon chemistry, synaptic gaps, the physical propagation of ions—and cannot be compressed further without replacing the biological substrate entirely, which is beyond the scope of a Tier 2 spell.`,
            master: `The spell operates at its design ceiling as a permanent background process with minimal mana overhead. Neural transmission runs at maximum enhanced speed continuously, and the precision-cleaning and damage-redundancy systems are always active. The mage no longer thinks about the spell—it is a fundamental property of how their nervous system functions.

Allies within the mage's operational radius receive persistent Apprentice-level nerve enhancement through passive device synchronization, improving squad-wide reaction time and motor precision without any conscious activation. The device manages the extended network efficiently, scaling bandwidth allocation based on combat intensity.

This is the ceiling of Nerve Enhancement as a Tier 2 spell. The mage cannot "untether consciousness from the body" or achieve thought-speed independent of neural architecture—the spell accelerates transmission along physical nerve pathways, which remain the limiting factor. The mage cannot "interface with any information source" beyond their own sensory organs and device network. What Master offers is the most refined, most reliable acceleration of biological neural transmission a Tier 2 spell can provide, applied persistently to the mage and shared with their team.`,
        }
    },
    {
        id: 'physical_perfection',
        name: 'Peak Conditioning',
        tier: 5,
        cost: 25,
        proficiency: {
            beginner: `The device begins a continuous optimization routine that brings the mage's body to its current functional peak—the best possible state of their specific frame given their genetics, age, and training history. Minor aches, old micro-injuries, and chronic low-grade inflammation are systematically identified and resolved. The mage wakes up feeling rested; joints that have been stiff for years loosen; nagging injuries that never quite healed finally close.

This is not transformation. The device is not building muscle where there was none or reshaping bone where the blueprint does not allow. It is calibrating the existing body to its optimum—eliminating inefficiencies, clearing accumulated damage, and tuning metabolic and structural parameters to their ideal setpoints. The mage looks like the best version of themselves, not a different person.

At Beginner, Peak Conditioning is foundational. It establishes a clean biological baseline from which all other physical enhancement spells operate more effectively. The mana cost is low, and the spell is designed to be maintained indefinitely—it is a background maintenance routine, not a combat toggle.`,
            apprentice: `The device pushes the mage's body toward the human maximum for their specific frame and genetic inheritance. Muscle density approaches the upper limit of what the mage's bone structure can support; cardiovascular efficiency reaches elite-athlete levels; flexibility, balance, and proprioception all tune toward the ceiling of human performance. This is not superhuman—it is the very top edge of what a naturally gifted human could achieve with perfect training and nutrition, compressed into weeks of device-directed optimization.

The spell now actively resists degradation. Injuries that would normally take weeks to rehabilitate are repaired by the optimization routine before they become chronic. Fatigue from extended exertion is cleared faster as the device prioritizes recovery processes. The mage can train at maximum intensity every day because the optimization routine is essentially a perfect coach, nutritionist, and physical therapist running in the background.

At Apprentice, the mage operates at the human performance ceiling. They are not yet doing anything impossible—but they are doing everything possible. The mana cost increases but remains sustainable for a mid-rank reactor as a permanent background process.`,
            adept: `The device pushes the mage's body marginally beyond the normal human ceiling for their frame. Where the unaugmented human maximum is fixed by genetics, the spell uses mana-assisted biological reinforcement to exceed it by a modest margin—roughly ten to fifteen percent in all physical parameters. The mage is stronger, faster, and more durable than any natural athlete of equivalent build could ever be, and this enhanced state is maintained indefinitely without degradation.

The spell now resists environmental and magical degradation. Toxins, radiation, extreme temperatures, and magical effects that cause physical deterioration are identified by the device's monitoring systems and countered by the optimization routine before they can accumulate damage. The mage's body is a maintained system actively defended against entropy.

At Adept, the mage is physically superior to any unenhanced human of their build. The mana cost is significant—this level of continuous biological reinforcement demands a high-rank reactor—but the output is correspondingly valuable. Most career mages who invest in Peak Conditioning plateau at Adept; the jump to Expert requires years of additional calibration and a reactor powerful enough to sustain the demands.`,
            expert: `The mage operates at roughly one-and-a-half times the human maximum for their specific frame—the theoretical limit of what their genetic blueprint can support when reinforced by continuous, high-intensity mana optimization. Strength, speed, endurance, flexibility, recovery, and durability all sit well beyond natural human potential, and the device maintains this state as the permanent baseline. There is no "peak" to maintain—the peak is always now.

Degradation resistance becomes comprehensive. The device catches and repairs cellular damage faster than it accumulates, effectively freezing the mage's biological age. Injuries that would require hospitalization are resolved by the optimization routine within hours. Magical effects that target physical degradation—aging curses, withering spells, entropy manipulation—are substantially resisted as the device's repair systems outpace the damage they attempt to inflict.

At Expert, the mage is a physical specimen that biology alone cannot produce. Sustaining this level permanently demands a Keter-rank reactor—the mana throughput required for continuous, whole-body biological optimization at 1.5x human maximum is immense.`,
            master: `The spell reaches its design ceiling. The mage's body is permanently maintained at the theoretical optimum of their genetic potential plus the maximum mana-assisted enhancement the Tier 5 spell-engine can sustain—roughly one-and-a-half to two times the natural human maximum for their frame. Every physical parameter sits at this ceiling simultaneously; there is no trade-off between strength and endurance, speed and durability. The device has optimized all systems in parallel to the limits of the spell's architecture.

The spell is a permanent, always-active state. There is no activation, no maintenance cost beyond the baseline mana draw, no degradation over time. The mage's body is simply this good, all the time, as a fundamental property of their existence. Allies in proximity receive a reduced version of the optimization—roughly Apprentice-level conditioning—through passive device synchronization.

This is the absolute limit of Peak Conditioning as a Tier 5 spell. The mage is not "absolutely perfect" in any abstract sense—their body is optimized within its genetic potential, which varies from person to person. A mage with a naturally slight frame will not become a heavyweight powerhouse; they will become the best possible version of their slight frame. The spell cannot "transcend biology" or achieve forms that the mage's DNA does not encode. What Master offers is the most refined, most comprehensive biological optimization a Tier 5 spell can provide—perfection as defined by the mage's own genetic ceiling, not by an external ideal.`,
        }
    },
    {
        id: 'physical_recovery',
        name: 'Physical Recovery',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device accelerates cellular repair roughly fifty percent beyond natural rates. A deep cut that would take a week to close seals in four days; a sprained ankle that would sideline the mage for a fortnight heals in ten days. The spell does not regenerate lost tissue—it speeds up what the body already knows how to do.

Mana cost is low and the spell can be maintained passively during rest. It is not combat healing—the acceleration is too slow for mid-battle recovery—but it dramatically reduces downtime between engagements.

At Beginner, Physical Recovery is a logistics spell. It keeps the mage operational across a campaign without the constant need for medical support.`,
            apprentice: `Healing speed doubles relative to baseline, and the spell extends to conditions the body normally struggles with: infections, mild poisonings, and moderate tissue damage are addressed alongside surface wounds. Rest quality improves—four hours of sleep delivers the recovery of a full night's rest, and the device optimizes nutrient processing to support accelerated repair.

Internal injuries that require medical intervention begin closing on their own. The mage does not need a surgeon to recover from a punctured lung or a lacerated kidney, provided they have time and mana. The spell purges mild toxins and fights off common illnesses.

At Apprentice, Physical Recovery keeps the mage in the field. They are not regenerating limbs or ignoring fatal trauma, but they recover from the kind of injuries that would medically discharge a normal soldier.`,
            adept: `Healing speed reaches roughly five times normal. The device reconstructs damaged tissue directly rather than merely accelerating natural processes. Serious wounds close in hours; fractures set and knit within a day. Minor lost tissue—the tip of a finger, a strip of skin, a crushed earlobe—regenerates over the course of a week.

The mage can recover from exhaustion in minutes of rest rather than hours. The spell now handles severe diseases, magical infections, and most non-lethal toxins without external treatment. Chronic conditions caused by cellular degradation are arrested and reversed.

At Adept, the mage is largely independent of medical infrastructure. They can operate in hostile environments, take significant punishment, and self-repair between engagements.`,
            expert: `The device can regenerate significant lost tissue: entire fingers, hands, toes, and destroyed sections of non-vital organs regrow over days. Fatal injuries—a severed artery, a crushed trachea—are stabilized within seconds and fully repaired within minutes. The spell preserves life through trauma that would kill any unenhanced human.

Aging is slowed dramatically. The device continuously corrects accumulated cellular errors, maintaining the body in peak biological condition. The mage does not become immortal, but their effective lifespan extends by decades, and their physical prime is preserved throughout.

At Expert, the mage is extraordinarily resilient. Death from physical trauma becomes difficult to achieve without sustained, catastrophic damage that outpaces the regeneration entirely.`,
            master: `The device achieves the theoretical maximum of biological repair optimization. All non-lethal injuries heal within minutes; life-threatening trauma stabilizes automatically and resolves within hours. Significant tissue loss—limbs, major organs—can be regenerated over days to weeks, though the process is costly in mana and requires the mage to be in a safe, resting state.

The spell is always active, a permanent background process. The mage's body is maintained in an optimized state of cellular health, resistant to disease, and slow to age. Allies in proximity receive a weaker version—roughly double-speed healing—while the mage is conscious.

This is the ceiling of Physical Recovery as a Tier 1 spell. The mage is not immortal and cannot "regenerate from total destruction." The spell cannot "recall the spirits of the recently deceased." It is a highly optimized biological repair acceleration—the best that a Tier 1 healing spell can offer, but bounded by the limits of the body it is repairing.`,
        }
    }
];

// Merge additional spells into main spell data structure
if (typeof spellData !== "undefined" && spellData.physical) {
    spellData.physical = spellData.physical.concat(additionalPhysicalSpells2);
}
const additionalPhysicalSpells3 = [
    {
        id: 'toxin_resistance',
        name: 'Toxin Resistance',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device accelerates the body's natural detoxification pathways—liver enzymes spike, kidneys filter faster, and a thin mana mesh in the bloodstream binds to foreign compounds and escorts them out. The net effect is roughly a fifty percent reduction in the potency of common poisons: sedatives, irritants, mild venoms, and low-grade chemical agents. A dose of tranquilizer that would knock out a normal human leaves the mage groggy but functional; a snakebite that would cause tissue necrosis swells and itches but does not kill.

The spell is reactive, not proactive. It activates when the device detects a toxin entering the bloodstream, which means there is a brief lag—half a second to two seconds—between exposure and neutralization. Fast-acting nerve agents or direct injection of venom into a major vessel can outpace the response and cause partial damage before the device catches up. The mana cost is moderate but climbs with the volume and complexity of the toxin load.

At Beginner, Toxin Resistance is a safety net. It will not save the mage from a dedicated assassination attempt using military-grade chemical weapons, but it handles the kind of environmental and opportunistic poisoning that claims careless operatives in the field.`,

            apprentice: `The device's detoxification routine achieves near-immunity to all naturally occurring biological toxins and strong resistance to synthetic and magical ones. Snake venom, plant alkaloids, bacterial neurotoxins, heavy metals—the device identifies each compound's molecular signature and deploys a tailored mana-neutralization agent within a fraction of a second of detection. The mage can walk through a gas attack with mild respiratory irritation, eat food laced with lethal doses of common poisons, and shrug off envenomated weapon strikes.

A purge function is now available. The device can actively extract toxins already embedded in tissues, reversing hours-old poisonings over the course of minutes. This includes cumulative toxins and slow-acting agents that would normally kill days after exposure. The mage experiences a brief fever-like flush as the device flushes contaminants—uncomfortable but survivable.

The spell now extends to magical poisons. Alchemically-enhanced toxins, curse-laced venoms, and mana-infused biological agents are identified and countered, though the device requires more processing power and a higher mana draw to neutralize the magical component. An Apprentice can survive a run-in with a dedicated poison-mage, provided the dose is not overwhelming.`,

            adept: `The device achieves complete immunity to all naturally occurring venoms, toxins, and biological contaminants. No snake, spider, plant, or bacterial agent can harm the mage—the response is instantaneous and total, with the body's own immune chemistry amplified by the device's mana-filtration grid to destroy anything flagged as foreign. The mage could swim in a vat of cobra venom and emerge with nothing worse than dry skin.

The spell now neutralizes toxins on contact. Venom on a blade never reaches the bloodstream—the device projects a thin detoxification field through the skin that breaks down harmful compounds the moment they touch the mage. Ingested poisons are decomposed in the mouth and esophagus before they reach the stomach. This contact-level defense operates passively, with zero conscious input from the mage.

Magical toxin resistance is robust. Curses that mimic poisoning, alchemical weapons, and biologically-targeted spell effects are identified and dismantled at the mana-structural level. The device cross-references all incoming compounds against an internal library of known magical and mundane toxins, and the library is self-updating—new threats are catalogued after the first exposure. At Adept, the mage is medically classified as toxin-proof under MAB standards, a designation that carries significant operational clearance.`,

            expert: `The device can process and safely neutralize any ingestible or injectable toxin, including those of strategic military grade. Nerve agents, weaponized hemorrhagic toxins, magically-enhanced bioweapons—the detoxification response is now pre-emptive, launching before the toxin even completes dispersal through the bloodstream. The mana-filtration grid has been optimized to the point where the mage's body treats hostile compounds as a resource, breaking them down into neutral metabolic byproducts that are either excreted or repurposed as trace mana.

Protection extends to allies through direct physical contact. The device can project a detoxification field through the mage's hands, purging toxins from a wounded teammate's bloodstream at close range. The process is slower for others and demands the mage's active focus, but it turns the spell from a personal defense into a field-medical capability. A squad exposed to a chemical attack can be stabilized by the mage moving from member to member.

Chronic toxin accumulation—heavy metal poisoning, radiation damage, persistent chemical exposure—is fully arrested and reversed. The device performs continuous cellular cleanup, removing contaminants that would shorten lifespan or degrade long-term health. At Expert, the mage is functionally immune to the entire category of chemical and biological poisoning, and they serve as a mobile detoxification point for their unit.`,

            master: `The device's biochemical defense suite runs at its designed maximum. All detoxification processes are fully automated and always active—the spell is a permanent background function of the mage's physiology. The mana-filtration grid has been refined to the point where it intercepts toxins at the molecular level before they interact with any biological receptor. Even previously unknown synthetic compounds are identified by structural analysis and neutralized within microseconds of contact.

The protective field now extends to allies within a short radius, granting them Apprentice-level toxin resistance without requiring physical contact. The device manages the collective detoxification load autonomously, prioritizing the mage's own defenses while distributing protection to squad members based on threat assessment. A team operating under this field can move through chemical warfare environments with substantially reduced risk.

This is the ceiling of Toxin Resistance as a Tier 2 spell. The mage cannot achieve "conceptual immunity to poisoning"—they cannot survive direct injection of a magically-enhanced strategic-grade toxin at a volume and concentration designed to kill a city. The spell defends against compounds that interact with biology; it does not provide protection against magical effects that bypass biochemistry entirely. But against any poison, venom, or chemical agent that operates through biological mechanisms, the mage is about as well-defended as a Tier 2 spell can make them.`,
        }
    },
    {
        id: 'physical_adaptation',
        name: 'Physical Adaptation',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device accelerates the body's natural acclimatization processes, compressing weeks of physiological adjustment into hours. When the mage enters a new environment, the device monitors temperature, humidity, atmospheric pressure, and oxygen concentration, then issues targeted instructions to the mage's regulatory systems—blood vessel dilation or constriction, sweat rate adjustments, metabolic heat production—to stabilize internal homeostasis. The effective range covers roughly plus or minus twenty degrees Celsius from the mage's baseline comfort zone.

The spell is not instantaneous. A mage dropped from room temperature into arctic conditions will shiver for an hour as the device ramps up metabolic heating and constricts peripheral circulation. After that hour, they function as if they had spent a week acclimatizing. The same applies in reverse for desert heat, though the device prioritizes preventing hyperthermia over comfort—the mage will be functional before they are comfortable.

At Beginner, Physical Adaptation handles weather extremes and moderate altitude. It will not prepare the mage for a high-altitude drop without supplementary oxygen, and it does nothing for pressure differentials like deep-sea diving. It is a field-readiness spell, reducing the vulnerability window when transitioning between operational environments.`,

            apprentice: `Adaptation time drops from hours to minutes. The device has gathered enough physiological data from the mage's body to pre-calculate the necessary adjustments for most common biomes, deploying the full acclimatization response within sixty to ninety seconds of environmental change. The temperature envelope expands significantly: the mage can operate comfortably in arctic conditions down to roughly negative forty degrees Celsius and in desert heat exceeding fifty degrees, provided they have adequate hydration.

Thin-atmosphere operation becomes viable. The device enhances red blood cell efficiency and oxygen uptake, allowing the mage to function at altitudes where unenhanced humans would suffer acute hypoxia. The spell does not create oxygen from nothing—at sufficient altitude, supplementary breathing gear is still required—but the mage's effective altitude ceiling is roughly doubled relative to baseline.

The device now maintains a running log of environmental adaptations, so returning to a previously experienced climate triggers the full adaptation instantly. A mage who has operated in Arctic conditions once will never need to re-acclimatize to them. The mana cost is moderate but well within the budget of a mid-rank reactor for sustained deployment.`,

            adept: `Adaptation is near-instantaneous—the device processes and deploys a full physiological adjustment within seconds of environmental change. Every natural Earth biome is survivable without specialized equipment. From tropical rainforest humidity to high-desert aridity, from thin mountain air to sea-level pressure differentials, the mage's body maintains optimal internal conditions through continuous device-managed regulation. No single environment can degrade operational capacity through environmental stress alone.

The spell can now maintain multiple concurrent adaptations. A mage entering a coastal cave system that transitions from warm, humid exterior to cold, dry interior to high-pressure underwater sections will adapt to each zone seamlessly, with the device switching profiles as fast as the environment changes. This makes the mage effective in complex, multi-zone operational theatres where unenhanced personnel would need staged gear and acclimatization rotations.

The mana cost for sustained operation is low enough that the spell functions as a semi-permanent background process. The mage's body becomes a platform that the device continuously tunes to its surroundings—no conscious management, no interruption to other spell routines. At Adept, the mage is cleared for global deployment without environmental restriction per MAB operational doctrine.`,

            expert: `The device can now handle environments that push past the boundaries of terrestrial biology. Vacuum exposure becomes survivable for brief periods—the device creates a thin mana film over exposed tissues, prevents ebullism through pressure regulation, and manages internal gas balance to prevent decompression sickness. This is not space-flight capability; the mage can survive a minute or two of hard vacuum before mana drain and cellular damage accumulate beyond the device's compensation. It is emergency survival, not operational doctrine.

Extreme pressure environments—deep ocean trenches, high-gravity zones—are survivable with mana support. The device reinforces cellular membranes against compression and manages gas solubility in the bloodstream to prevent nitrogen narcosis and oxygen toxicity. Corrosive atmospheres—ammonia-rich, highly acidic, chlorine-heavy—are mitigated through a combination of the detoxification engine and a reinforced dermal barrier, though the mage still suffers surface irritation and their gear will degrade.

The spell now runs a continuous environmental threat-assessment background process that predicts and pre-adapts to shifting conditions before they fully manifest. If a storm front is about to drop ambient temperature by thirty degrees, the device begins the adaptation seconds before the cold hits. At Expert, the mage can operate anywhere on Earth—and briefly survive just beyond it—without environmental attrition.`,

            master: `The device runs a fully optimized environmental adaptation suite that covers every terrestrial condition and most near-terrestrial extremes without conscious input from the mage. The spell is a permanent background process—always sampling, always adjusting, always maintaining the mage's body exactly where it needs to be for the current environment. The adaptation library has been refined to the point where the device can extrapolate responses to entirely novel conditions by combining elements from previously encountered profiles.

Protection extends to nearby allies through a shared adaptation field. The device broadcasts the most critical physiological adjustments—temperature regulation, pressure compensation, basic atmospheric filtering—to squad members within close range, providing them with Apprentice-level environmental resistance. The field is weaker for others than for the mage, but it substantially extends the operational envelope of an entire team.

This is the ceiling of Physical Adaptation as a Tier 3 spell. The mage cannot claim "universal environmental compatibility." They cannot survive inside a star, at the bottom of an ocean trench without additional barrier magic, or in environments where the fundamental physics are incompatible with human biology. The spell optimizes biological adaptation to environmental stress—it does not transcend biology. But within the domain of habitable and near-habitable environments, the mage requires nothing but their device and their mana reserves to function at full capacity.`,
        }
    },
    {
        id: 'equilibrium',
        name: 'Equilibrium',
        tier: 1,
        cost: 5,
        proficiency: {
            beginner: `The device interfaces with the mage's vestibular system and proprioceptive nerves, sharpening the body's natural balance mechanisms into something approaching superhuman. The inner ear's fluid dynamics are supplemented by a mana-based inertial reference frame calculated in real time by the device; muscle tension is micro-adjusted hundreds of times per second to maintain center of gravity over the feet. The mage can walk a narrow ledge as confidently as a sidewalk, recover from a trip before their body hits the ground, and maintain stable footing with their eyes closed on uneven terrain.

The spell is not infallible. Sudden, violent displacement—an explosion's shockwave, a vehicle collision—can overwhelm the device's correction window, sending the mage tumbling before the vestibular model can recompute. Slippery surfaces still cause slips; the device can maintain balance on a surface only if there is sufficient friction to work with. Ice is ice, no matter how good the mage's inner ear is.

At Beginner, Equilibrium eliminates the everyday indignities of poor balance and provides a meaningful edge in urban and wilderness traversal. The mage will not fall off a rooftop during a chase, will not stumble during a tactical retreat over broken ground, and will not lose their footing in a hand-to-hand exchange because they stepped on a loose stone.`,

            apprentice: `The device expands its balance model to handle dynamic motion on extreme surfaces. The mage can run along angled slopes that would send a normal human sliding, sprint across narrow beams without breaking stride, and execute short wall-runs—four to six strides along a vertical surface—before gravity reclaims them. Fall recovery becomes reflexive: the device calculates an optimal landing posture during the descent and adjusts limb position in flight to hit the ground in a roll that dissipates impact across the body.

Safe landing distances increase significantly. A fall from roughly ten meters—a third-story window, a cliff ledge—is survivable with controlled technique. The device does not make the mage lighter or reduce the impact force; it ensures they land in a way that minimizes structural damage to bones and joints. Higher falls will still break things, but the mage survives what would kill an untrained person.

The spell now operates without conscious attention. The device maintains a continuous balance overlay that runs in the background while the mage focuses on combat, spellcasting, or navigation. At Apprentice, Equilibrium is a practical mobility tool—parkour, urban traversal, and tactical repositioning all become dramatically safer and more fluid.`,

            adept: `The device achieves full three-axis equilibrium mastery. The mage can balance on ropes and cables as if they were solid ground, stand on surfaces in motion—the back of a moving truck, the deck of a ship in heavy seas, a collapsing structure—and maintain perfect stability through explosions and shockwaves that would throw unenhanced personnel across a room. The vestibular model has absorbed enough motion data to predict displacement forces and pre-empt them, adjusting posture before the blast wave arrives.

The spell enables static balance on surfaces with minimal support area. A two-centimeter-wide beam, a rolling barrel, a sphere the size of a basketball—the device manages the mage's center of mass so precisely that they can stand motionless on any surface that can physically support their weight. This has combat applications: maintaining a firing stance on unstable ground, holding a defensive position during an earthquake, fighting from a perch that opponents cannot even reach.

Water-surface stability becomes possible with assistance from surface tension and careful foot placement, though true water-walking requires supplementary spells. The difference is that Adept Equilibrium keeps the mage from falling when they do find a surface—the concern is whether the surface itself holds, not whether the mage slips off it.`,

            expert: `The device constructs a continuous three-dimensional spatial awareness model that maps the mage's position, velocity, and orientation relative to every surface within range. The mage instinctively knows their body's exact position in space at all times—not through conscious calculation, but through the device feeding a refined proprioceptive sense that feels as natural as knowing where their own hand is. Blindfolded, upside-down, spinning through the air after an explosion, the mage knows exactly which way is down and where every stable surface is.

The spell enables acrobatic feats that appear physically impossible. The mage can land on a single toe-hold, pivot their entire body around a single point of contact, and maintain stable posture on surfaces that barely register as solid—a thin sheet of ice, a crumbling wall, a ladder rung with one bolt remaining. The device manages the body's mass distribution so efficiently that even surfaces with minimal load-bearing capacity can support the mage if approached with the correct technique.

At Expert, the mage is functionally immune to environmental displacement. They can be thrown, blasted, or dropped from altitude and will find their feet before anything resembling a fall occurs. The spell has become a reflexive extension of the mage's body, running continuously with trivial mana cost.`,

            master: `The device's equilibrium engine runs at its designed optimum. The three-dimensional spatial model is updated thousands of times per second, and the mage's body responds to displacement forces before conscious awareness catches up. The spell is a permanent background process with no activation cost, no concentration requirement, and no mana drain beyond what the device consumes for baseline operations.

The mage can teach their balance to others—the device can broadcast equilibrium corrections to allies within close range, stabilizing teammates who would otherwise stumble during critical moments. This is not full equilibrium transfer; allies receive a simplified version that prevents catastrophic loss of balance, enough to keep a wounded squad member upright or help a teammate hold a firing position on unstable ground.

This is the ceiling of Equilibrium as a Tier 1 spell. The mage cannot "stand on light beams," cannot "redefine gravity," and cannot walk on surfaces that physically cannot support their weight. The spell optimizes the mage's interaction with physical surfaces—if the surface can hold them, they will not fall. If it cannot, no amount of balance will keep them up. But within those bounds, the mage's mastery of their own body in space is as close to flawless as a Tier 1 spell permits.`,
        }
    },
    {
        id: 'mass_modulation',
        name: 'Mass Modulation',
        tier: 4,
        cost: 20,
        proficiency: {
            beginner: `The device adjusts the mage's effective mass by modulating the mana-density field permeating their body at the molecular level. By tightening or loosening this field, the device can raise or lower the mage's inertial resistance without changing their physical volume—they look the same but interact with the world as if they were twenty percent lighter or heavier. At minimum mass, the mage jumps higher, falls slower, and moves with reduced ground impact. At maximum mass, they resist being pushed, deliver heavier strikes, and anchor themselves against recoil or incoming force.

The mass shift is not instant. The device needs roughly one to two seconds to reconfigure the mana-density field across the body's entire molecular lattice. During this window, the mage exists in an intermediate state—their mass is in flux, and impacts or movements feel unpredictable. Skilled opponents who recognize the spell can exploit this transition window.

At Beginner, Mass Modulation is a utility tool. Lighter for traversal, heavier for combat stability—the mage picks a mode and commits to it for the duration of an engagement phase. The twenty percent shift is meaningful but subtle; it will not let the mage walk on water or shrug off a vehicle collision. It makes the difference between a good jump and a great one, a solid stance and an immovable one.`,

            apprentice: `The mass modulation range expands to roughly plus or minus fifty percent of the mage's baseline. At minimum mass, the mage can walk on water by dispersing their weight across surface tension, leap across streets in a single bound, and fall from significant heights with the gentle drift of a falling leaf—terminal velocity is meaningfully reduced. At maximum mass, the mage becomes a human anchor, resisting impacts that would send a normal body tumbling and delivering strikes that land with the combined force of their muscles plus their increased inertial mass.

Transition speed improves to roughly half a second, and the device can now perform partial mass modulation—making the mage's feet heavy for stability while keeping the upper body light for rapid arm movement and spellcasting. This hybrid mode is tactically powerful but requires significant device processing power to maintain two separate density zones simultaneously.

The mana cost increases with the degree of modulation, but a mid-rank reactor can sustain a fifty-percent shift through a typical engagement. At Apprentice, Mass Modulation begins to feel like a genuine superpower rather than a minor physics tweak—the mage can move in ways that violate an observer's intuitive expectations about weight and inertia.`,

            adept: `The device achieves near-weightlessness at the low end and several times baseline mass at the high end. At minimum mass—roughly five percent of baseline—the mage can drift across surfaces, ride air currents in a controlled glide, and deliver rapid flurry attacks with negligible inertia behind each strike. At maximum mass—roughly five times baseline—the mage becomes functionally immovable against personal-scale attacks. A speeding vehicle hits them and crumples; a tackle from a strength-enhanced opponent rebounds off them as if they struck a steel pillar embedded in bedrock.

The device can now focus mass into specific body regions with surgical precision. A punch can carry the full force of the mage's maximum mass concentrated into a fist-sized impact zone, multiplying striking power far beyond what muscle alone can deliver. A defensive stance can root the mage's feet to the ground at peak mass while the rest of the body remains light enough to dodge and parry. This precision is what separates Adept practitioners from those who simply toggle heavy and light.

Transition between mass states is seamless—the device maintains a continuous modulation gradient rather than switching between discrete settings. The mage can ramp mass up or down mid-motion, adjusting inertia on the fly to match tactical needs. A leap begins light for height and ends heavy for a crushing impact landing.`,

            expert: `The mass range reaches from near-intangible—roughly five percent of baseline mass—to extremely dense, approximately ten times baseline. At the low end, the mage can phase through thin barriers: drywall, wooden doors, chain-link fences. The device maintains the mage's structural integrity while allowing their attenuated mass to slip through the interstitial spaces in solid materials. This is not true intangibility—concrete walls and steel plates remain impassable, and the process is slow and mana-intensive—but it opens tactical options that no amount of strength or speed can replicate.

At peak mass, the mage becomes a localized gravity well. Nearby loose objects drift toward them; incoming projectiles curve slightly off trajectory due to the mage's gravitational pull. A ground-pound at maximum density creates a localized seismic shockwave that can destabilize structures and stagger enemies in a radius. The mage's physical strikes carry the kinetic energy of a falling boulder.

The device handles all mass calculations in the background, and the mana cost—while substantial at the extremes—is sustainable for a Keter-rank reactor in sustained combat. The mage transitions between mass states instantly, shifting from dodge-light to strike-heavy in the span of a single punch. At Expert, Mass Modulation is a defining combat capability, fundamentally changing how the mage interacts with physics.`,

            master: `The device's mass modulation engine runs at its theoretical ceiling. The full range from near-intangible to ten times baseline mass is accessible instantly, with transitions measured in milliseconds. The spell is always active as a background process—the mage no longer consciously adjusts their mass; the device reads intent and modulates density continuously to optimize every action. A punch lightens mid-swing for speed and densifies at the moment of impact for force; a dodge shifts to minimal mass for evasion then anchors to normal mass for the counter-strike.

The phase-through ability has been refined to pass through most non-structural barriers at the mage's minimum density, though sealed metal bulkheads and magically-reinforced walls remain impassable. The mage can also modulate the mass of handheld objects, temporarily lightening a heavy weapon for rapid swings or densifying a thrown object for impact force.

This is the ceiling of Mass Modulation as a Tier 4 spell. The mage cannot achieve "black hole density" or "infinite mass"—the spell maxes out at roughly ten times baseline, constrained by the device's mana-field capacity and the structural limits of the mage's reinforced body. The mage cannot become completely intangible—the device must maintain a minimum physical anchor of roughly five percent baseline mass to keep the mage's body coherent and their biological processes functioning. But within those bounds, the mage controls their own relationship with mass so precisely that weight and inertia become tools rather than constraints.`,
        }
    },
    {
        id: 'blood_manipulation',
        name: 'Blood Manipulation',
        tier: 4,
        cost: 20,
        proficiency: {
            beginner: `The device establishes a localized mana field attuned to the mage's own blood, granting fine motor control over the circulatory system from the inside. The most immediate application is wound management: the device pinches severed vessels closed, accelerates platelet aggregation, and forms a mana-reinforced clot that seals even deep lacerations within seconds. The mage can take a blade across the arm mid-combat and keep fighting without meaningful blood loss.

A limited external projection capability exists. The mage can draw a small volume of their own blood from an existing wound and shape it into a short-lived projectile—a crimson dart that flies a few meters before dissipating, more distraction than damage. The projection window is measured in seconds; blood outside the body loses its mana attunement quickly at this proficiency level.

The spell draws on the mage's blood as its medium, so overuse causes anemia and fatigue. Two or three projections from an existing wound are manageable; beyond that, the mage risks compromising their own circulatory function. At Beginner, Blood Manipulation is a survival tool—it keeps the mage alive through injuries that would bleed an unenhanced combatant dry, and it offers a minor offensive option for moments of desperation.`,

            apprentice: `The device gains sufficient blood-control precision to weaponize it. The mage can extrude their own blood from a self-inflicted wound—typically a small cut on the palm or forearm—and shape it into temporary blades, whips, or projectile spikes. These constructs are sharp and dense, capable of cutting flesh and light armor, but they decay within seconds of leaving the mana field. The device manages the creation, shaping, and dissolution of each construct, leaving the mage free to focus on combat tactics.

Circulatory enhancement becomes an active combat buff. The device accelerates blood flow to muscles, boosting oxygenation and clearing metabolic waste faster, which translates to roughly twenty percent improved sustained physical output. The blood-purification routine from the Toxin Resistance spell integrates here, granting overlapping protection against bloodborne agents.

The mana cost for sustained blood projection is moderate but manageable. The real limitation is blood volume—the mage can lose about a liter during an engagement before symptoms of hypovolemia begin. The device monitors blood levels and will refuse projection commands that would push the mage into dangerous territory. At Apprentice, Blood Manipulation is a viable combat style, though one that demands the mage manage their own body as a limited resource.`,

            adept: `The device can sustain blood constructs for extended periods—up to several minutes—and their structural complexity increases significantly. The mage creates semi-solid tendrils that grapple, constrict, and reposition enemies; blood shields that harden on impact to absorb strikes; and prehensile appendages that function as extra limbs for climbing, manipulating objects, or delivering strikes from unexpected angles. The constructs are controlled by the device through the mana field; the mage directs them with intent, not physical gesture.

Blood-pressure manipulation becomes a precision tool. The mage can spike blood pressure in specific muscle groups for enhanced burst strength, route oxygen more efficiently to sustain high-output activity, and depress circulation to non-essential regions when conserving energy or reducing a bleed. This is internal body-hacking at a level that requires a sophisticated device and a high-rank reactor—the calculations involved are comparable to managing a small weather system inside a human body.

Blood-sense emerges as a passive ability. The device can detect the blood signatures of living beings within roughly fifty meters, providing a rough positional awareness that penetrates walls and most cover. The sense is not detailed enough to identify individuals—it reads the presence and movement of circulatory systems, not DNA—but it prevents ambushes from anything with a heartbeat. At Adept, the mage is a hemomantic combatant, dangerous at any range where their blood can reach.`,

            expert: `Blood constructs achieve durations measured in minutes and strength comparable to reinforced steel. The mage can armor themselves in a blood-carapace that hardens on impact and regenerates by drawing from circulating reserves. Tendrils can operate independently as sentries, lashing out at threats the mage hasn't consciously identified; the device handles all construct autonomy. The blood volume requirement is partially offset by the device's ability to recycle projected blood—constructs dissolve back into liquid that is reabsorbed through the skin, reducing net blood loss to a fraction of what earlier proficiency levels required.

Internal blood manipulation reaches emergency levels. The device can reroute circulation around a damaged heart for short periods, oxygenate brain tissue through direct mana-mediated oxygen transfer if the lungs are compromised, and maintain consciousness through catastrophic blood loss by preserving cerebral perfusion. These are emergency measures that drain mana rapidly and cannot be sustained indefinitely, but they mean the mage survives wounds that would be rapidly fatal to anyone else.

Blood-sense range extends to hundreds of meters, and the resolution improves to the point where the mage can distinguish species by circulatory signature and identify specific individuals they have previously scanned. Wounded targets are highlighted with clinical precision—the device reads the flow rate, pressure, and volume signatures to assess enemy combat effectiveness. At Expert, the mage's relationship with blood is symbiotic: their body is a weapon, their weapon is their body, and the device orchestrates both.`,

            master: `The device's hemomantic control suite runs at its designed optimum. Wound-sealing is fully automated and instantaneous—the device detects a vessel breach and closes it before the mage even registers the injury. Blood constructs are sustained indefinitely at a minimal mana draw, recycling continuously through projection and reabsorption. The mage can maintain a full combat array—blades, tendrils, shields, sensory extensions—as a permanent background feature of their combat state.

The internal regulatory systems run continuously. Blood pressure, oxygenation, and toxin filtration are maintained at combat-optimal levels at all times, and the device can compensate for organ damage or failure through direct circulatory intervention. A mage at Master proficiency with Blood Manipulation is extraordinarily difficult to kill through any means that depend on shutting down the cardiovascular system.

This is the ceiling of Blood Manipulation as a Tier 4 spell. The mage cannot control the blood of others without physical contact and direct device interface—the mana field is keyed to their own circulatory system and cannot be imposed on a foreign body without invasive measures. The spell cannot "control all blood in existence" or manipulate blood as a conceptual element. It controls the mage's blood, and it does so with sufficient precision and power to weaponize, defend, and sustain through injuries that would kill any unenhanced human. That is the limit of what a Tier 4 hemomantic spell can achieve.`,
        }
    },
    {
        id: 'predators_instinct',
        name: "Predator's Instinct",
        tier: 5,
        cost: 25,
        proficiency: {
            beginner: `The device integrates the mage's sensory inputs—sight, sound, smell, and the faint mana-signatures all living things emit—into a unified tracking overlay. Low-light vision sharpens through digital contrast enhancement; olfactory data is parsed and tagged with probable sources; and a basic threat-assessment layer highlights targets that the device's combat model flags as hostile or dangerous. The effect is not predatory so much as it is analytical: the mage experiences a heads-up display of the environment, with objects of interest flagged and potential threats ranked by the device's threat matrix.

The spell enhances natural tracking ability significantly. The mage can follow a scent trail hours old over varied terrain, read the disturbance patterns in undergrowth that indicate recent passage, and estimate the size and speed of their quarry from environmental evidence. The device cross-references observed data against its internal database of known species, behaviors, and evasion patterns—it does not create knowledge from nothing, but it organizes sensory input into actionable intelligence.

At Beginner, Predator's Instinct is a hunter's spell for mages who operate in wilderness or urban environments where locating a target is half the battle. It will not turn a civilian into a seasoned tracker overnight, but it substantially closes the gap between novice and expert. The mana cost is low, and the spell runs passively in the background once activated.`,

            apprentice: `The sensory suite expands into non-visible spectra. The device overlays an infrared gradient onto the mage's vision, rendering warm bodies as glowing signatures against cooler backgrounds—invaluable for night operations and tracking prey that thinks darkness is cover. Mana-spectrum vision provides a parallel overlay: active spells, enchanted objects, and beings with high mana signatures glow with a distinct hue, allowing the mage to identify magical threats and shielded targets at a glance.

Target tracking moves from reactive to predictive. The device models the quarry's movement patterns, terrain preferences, and likely destination based on observed behavior, then projects probability cones onto the mage's awareness—"the target is most likely headed toward the river crossing three kilometers northeast." Scent tracking works on residue alone; the mage does not need a continuous trail, just periodic samples to update the model.

Weak-point identification becomes a standardized feature. The device analyzes targets for structural vulnerabilities—joints, sensory organs, breathing apparatus, points where armor gaps or mana reinforcement is thinnest—and highlights them for precision strikes. Against natural creatures, this is straightforward anatomy. Against magically-enhanced opponents, it requires more processing but still produces useful results. At Apprentice, the mage is a tracker and a threat-assessor, dangerous in any encounter where information determines the outcome.`,

            adept: `The device achieves full-spectrum sensory integration. Every sense feeds into a single unified awareness model that the device maintains in real time. The mage does not see with their eyes and hear with their ears as separate channels—they experience a composite environmental map where scent, sound, heat signature, mana signature, and visual data are fused into a coherent whole. This model is accurate enough that the mage can navigate and fight in complete darkness, relying on sound mapping, thermal overlay, and mana-sense alone.

Cross-terrain tracking is perfected. The device can maintain a target lock across urban, wilderness, aquatic, and subterranean transitions, updating the pursuit model as the environment changes. The spell models prey behavior with sufficient sophistication to predict ambush sites, evasion routes, and preferred hiding spots based on species, individual behavior patterns, and tactical context. A target that has run will be found; a target that has hidden will be flushed.

Pack-hunting coordination becomes available. The device can share its tracking data with allied devices in a tactical network, so a squad equipped with compatible hardware operates as a single distributed sensor array. Each member sees what every other member sees; the quarry's position is triangulated from multiple vectors simultaneously. At Adept, Predator's Instinct is the spell that ensures no target remains lost for long.`,

            expert: `The tracking capability scales to urban population centers. The device can isolate a single target signature from a city of millions, filtering out the sensory noise of crowds, traffic, and ambient magic to maintain lock-on over kilometers. Magical concealment is no longer a hard counter—the device cross-references gaps in its sensor coverage against expected continuity to infer the presence of cloaked targets. A mage who vanishes from infrared and mana-spectrum at the same coordinates still leaves a hole in the data, and the device fills in the hole.

The predictive model now accounts for sentient-level tactical reasoning. The device runs a continuous simulation of the target's decision-making, factoring in stress, intelligence level, available resources, and known psychological profile. It does not read minds, but it produces behavioral forecasts accurate enough to set ambushes hours or days in advance of the target's arrival at a predicted location.

Data-sharing extends to coordinated unit-level operations. The device fuses the sensory inputs of all allied mages in the network into a single tactical picture that updates in real time. A squad of fifty mages with Expert-level Predator's Instinct shares sensory data as if they were a single organism distributed across a battlefield. At Expert, the mage is not just a hunter—they are the central nervous system of a hunting formation.`,

            master: `The device's hunting and tracking suite runs at its designed ceiling. All sensory integration, predictive modeling, threat assessment, and target tracking functions are permanently active as background processes with optimized mana efficiency. The mage exists in a state of constant operational awareness—nothing in their sensory range escapes analysis, and the device continuously updates its threat and target models without conscious input from the mage.

The network-sharing capability extends to any authorized allied device within range, creating a distributed sensor mesh that makes the unit exponentially more effective than its individual members. Allies benefit from the mage's tracking data, threat assessments, and target prioritization as a passive buff, freeing them to focus on execution while the device handles intelligence.

This is the ceiling of Predator's Instinct as a Tier 5 spell. The mage cannot "hunt gods or concepts"—the spell tracks physical or magically-manifested targets within the device's sensor range and processing capability. The mage cannot track beings in other dimensions without supplementary dimensional magic to extend the sensor field. The spell is bounded by what the device can detect, process, and model. But within those bounds—which cover any terrestrial or near-terrestrial target that leaves any sensory trace—the mage's ability to find, track, and assess prey is optimized to the limit of what a Tier 5 tracking spell can deliver.`,
        }
    },
    {
        id: 'thermal_regulation',
        name: 'Thermal Regulation',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device manages the mage's core body temperature through controlled mana-mediated heat exchange with the environment. When external temperatures drop, the device accelerates metabolic heat production and restricts peripheral blood flow to conserve warmth. When external temperatures rise, the device ramps up evaporative cooling efficiency and dumps excess heat through mana-conductive pathways in the skin. The effective comfort range extends from roughly negative ten degrees Celsius to forty degrees Celsius—the mage can wear light clothing in a snowstorm or stand in desert heat without heatstroke.

Resistance to thermal magic is included but limited. A minor fire spell singes rather than burns; a frost cantrip chills rather than freezes. The device intercepts a portion of the thermal energy from incoming magical attacks and disperses it through the same heat-exchange system, reducing damage by roughly a third. Sustained magical fire or ice will still overwhelm the system.

The spell runs passively once activated and draws minimal mana for maintenance. At Beginner, Thermal Regulation is a comfort-and-survival tool. It ensures that weather and ambient temperature never become the reason a mission fails, and it provides a modest defensive layer against the most common elemental attack types.`,

            apprentice: `The thermal envelope expands to roughly negative thirty to sixty degrees Celsius, and the device's response to magical thermal attacks strengthens significantly. Fire spells lose roughly half their effective damage—the device preemptively cools the impact zone by pulling heat into the mana-exchange grid faster than the flames can deliver it. Frost spells are countered by localized metabolic heating concentrated at the point of contact, preventing frostbite and tissue crystallization. The mage can take a direct fireball to the chest and walk out singed rather than charred.

Extended operation in extreme environments is now sustainable. The mage can function for hours in arctic conditions without frostbite, provided they have caloric intake to support the device's metabolic boosting. Desert operations are sustainable as long as water is available for the cooling system. The spell now includes a mild humidity-regulating component that prevents dehydration from accelerated sweat response.

The mana cost increases with the severity of the thermal differential—maintaining comfort at negative thirty degrees drains more than at freezing—but a mid-rank reactor handles a full day of extreme-climate operation without strain. At Apprentice, the mage is operationally cleared for polar, desert, and high-temperature industrial environments.`,

            adept: `The device achieves functional thermal independence from the environment. The mage can operate in negative fifty degrees Celsius arctic conditions and in ambient temperatures exceeding one hundred degrees Celsius—the boiling point of water—for sustained periods. The spell's heat-exchange grid has been optimized to the point where the mage's core temperature remains stable regardless of external conditions, limited only by the mana supply. A desert deployment with zero shade becomes a logistics problem (water), not a survival problem.

Thermal camouflage becomes available. The device can suppress the mage's infrared signature to match ambient background temperatures, rendering them effectively invisible to thermal optics and heat-seeking sensors. This is a passive stealth capability—the device continuously adjusts surface temperature to avoid standing out against the thermal landscape. Against creatures or devices that rely on heat-sensing, the mage becomes extraordinarily difficult to detect.

The spell now protects equipment and carried gear from thermal extremes. The mana-exchange field extends a few centimeters beyond the skin, preventing sensitive electronics from freezing or overheating and keeping ammunition stable in environments that would normally compromise it. At Adept, the mage is thermally self-sufficient in any Earth environment short of direct contact with magma or cryogenic liquids.`,

            expert: `The device can protect the mage through brief immersion in extreme thermal environments. A mage at Expert proficiency can survive several seconds of direct flame immersion—walking through a burning building, passing through a firewall—with surface burns rather than fatal tissue damage. Brief immersion in liquid nitrogen is survivable with frost damage limited to the outermost skin layers. These are emergency capabilities, not operational norms; the mana drain during extreme exposure is severe, and the device prioritizes core organ protection over extremities.

A thermal aura projection becomes available. The mage can extend the temperature-regulation field to protect nearby allies—roughly a three-to-five-meter radius—providing Apprentice-level thermal resistance to squad members. The aura also serves as an offensive tool in close quarters: the mage can spike ambient temperature in a localized zone to discomfort or disable unenhanced opponents, or drop it rapidly to induce cold shock.

The device now maintains a thermal threat log that learns the signatures of specific fire and ice spells encountered in combat. Repeated exposure to the same enemy mage's fire magic results in progressively more efficient countermeasures as the device optimizes its heat-dispersal pattern for that specific attack profile. At Expert, the mage is a thermal fortress—not immune to fire and ice, but adapted to them with the precision of a device that has seen everything the element can throw.`,

            master: `The device's thermal management system runs at its designed optimum. Core temperature is maintained with perfect stability across all Earth-environmental conditions and through most magical thermal attacks. The spell is a permanent background process with negligible mana cost during normal operation—the heat-exchange grid has been refined to near-perfect efficiency, recycling waste heat from the mage's own metabolism into the regulation system. The mage no longer notices temperature as a combat variable.

The protective aura operates continuously at Apprentice-level effectiveness for all allies within range, requiring no conscious management. The thermal camouflage is always available and blends seamlessly with environmental shifts. The spell's response to incoming thermal attacks is instantaneous and adaptive—the device recognizes the attack vector, calculates the thermal load, and deploys the optimal counter-dispersal pattern before the heat or cold reaches the mage's body.

This is the ceiling of Thermal Regulation as a Tier 2 spell. The mage cannot claim "immunity to fire and ice"—sustained immersion in molten metal would overwhelm the mana-exchange grid, and direct contact with a cryogenic medium at near-absolute-zero temperatures would outpace the device's metabolic heating capacity. The spell manages heat exchange, not heat negation. But within the thermal range of natural Earth environments and most combat-scale magical attacks, the mage's temperature is simply not a variable that enemies can exploit.`,
        }
    },
    {
        id: 'gravity_step',
        name: 'Gravity Step',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device generates a localized gravity-dampening field beneath the mage's feet, reducing their effective weight relative to local gravitational pull. The immediate effect is a roughly fifty percent reduction in falling speed—the mage descends with the gentle drift of a leaf rather than the terminal velocity of a body in freefall, turning a potentially lethal drop into a controlled landing. Jump height roughly doubles as the dampening field reduces the downward pull during the ascent phase.

A short air-dash becomes available: the device pulses the dampening field asymmetrically, allowing the mage to propel themselves roughly two to three meters horizontally while airborne. This is useful for dodging mid-combat, crossing gaps during traversal, or repositioning without touching the ground. The dash consumes a significant burst of mana and has a brief cooldown while the device recalibrates the field geometry.

At Beginner, Gravity Step is a mobility supplement. It does not enable flight or sustained aerial movement—it makes the mage lighter on their feet, safer in vertical environments, and harder to pin down in open combat. The mana cost for sustained use is moderate; the dash is expensive and should be used sparingly.`,

            apprentice: `The gravity-dampening field strengthens to the point where sustained wall-running becomes viable. The device reduces the mage's effective gravitational pull while maintaining sufficient friction for their feet to grip vertical surfaces, allowing them to sprint along walls for short distances—roughly a dozen strides—before gravity reasserts dominance. Triple normal jump height is achieved, and the mage can control their descent from any altitude: a jump from an aircraft results in a gentle, steerable fall rather than a fatal plummet.

The air-dash gains range and frequency. The mage can chain two or three dashes in quick succession, altering direction between each to create unpredictable aerial movement patterns. The cooldown between dash chains decreases, and the mana efficiency improves—an Apprentice mage can use dashes as a standard part of their combat mobility rather than a precious emergency resource.

Water-running becomes possible through a combination of gravity dampening and surface-tension support. The device reduces the mage's effective weight to nearly zero at the point of foot contact, letting them sprint across calm water surfaces. Rough water or waves disrupt the field geometry, so open-ocean traversal is not reliable, but rivers, lakes, and harbors become traversable. At Apprentice, Gravity Step transforms the mage from a ground-bound combatant into a three-dimensional mobile threat.`,

            adept: `The mage gains limited aerial maneuvering capability. Mid-jump, the device can alter the gravity-dampening field's orientation, allowing the mage to change direction in the air—a sharp turn at the apex of a leap, a sudden lateral shift to dodge a projectile, a controlled spiral during descent to confuse targeting systems. This is not flight; the mage still follows a ballistic trajectory, but the trajectory can be bent within the device's field-manipulation limits.

The dampening field can be projected to create gravity-modified zones. The mage designates a small area—roughly three meters in diameter—where gravity is reduced for everyone within it. Allies can use these zones for assisted jumps, controlled descents, or rapid repositioning. The zones persist for several minutes or until the device cancels them, and the mage can maintain two or three simultaneously depending on reactor output.

The field can also serve as a trap. A zone of increased apparent gravity—roughly double standard—slows enemy movement, hinders jumps, and makes physical exertion exhausting. The effect is not strong enough to pin a determined opponent, but it substantially degrades their mobility and creates openings for the mage or allies to exploit. At Adept, Gravity Step is a battlefield control tool as much as a personal mobility spell.`,

            expert: `The mage achieves sustained low-altitude flight capability. By maintaining a continuous gravity-dampening field beneath their body and pulsing directional thrust through asymmetrical field adjustments, the mage can hover and maneuver at altitudes up to roughly five meters for minutes at a time. This is true controlled aerial movement—the mage can circle a target, strafe during spellcasting, and reposition vertically without needing surfaces or launch points. The flight is slow compared to winged or thrust-based flight—roughly jogging speed—but the tactical advantage of sustained three-dimensional positioning is substantial.

Gravity-assisted strikes become a standard attack pattern. The device reverses the dampening field momentarily during the descent phase of a jump, multiplying the mage's effective weight several times over and delivering a strike that lands with the force of their entire body mass enhanced by artificial gravity. A falling punch or kick from Expert proficiency hits with enough force to crater concrete and punch through vehicle armor.

Gravity traps scale up significantly. The mage can create zones of heavy gravity that effectively immobilize unenhanced opponents and seriously hinder enhanced ones, and zones of light gravity that send enemies stumbling off-balance as their weight suddenly halves. The device manages all field calculations in the background. At Expert, Gravity Step is a full-spectrum mobility and control spell that defines how the mage engages with terrain and opponents.`,

            master: `The device's gravity manipulation engine runs at its designed ceiling. All gravity-dampening and gravity-enhancing functions operate with perfect efficiency as always-active background processes. Fall protection is permanent and requires no conscious activation—the device detects a fall and deploys the dampening field before the mage can think to do so. Low-altitude flight is sustained indefinitely at minimal mana cost, with the device maintaining the field as easily as it maintains any other continuous spell.

Gravity zones—both dampening and enhancing—can be deployed anywhere within the mage's line of effect and maintained indefinitely, with the device cycling field energy to sustain multiple zones simultaneously. Allies operating within the mage's tactical network receive automated fall protection and can request gravity assistance for jumps or repositioning through their own devices.

This is the ceiling of Gravity Step as a Tier 3 spell. The mage cannot achieve true flight—this is gravity dampening and directional pulse propulsion, not levitation or anti-gravity. The spell cannot create "black hole" effects, cannot crush targets with extreme gravitational force, and cannot affect gravity on a scale larger than the device's localized field projection radius. It manipulates perceived weight and fall dynamics within a bounded area around the mage, and at Master, it does so with precision and endurance that makes gravity a tool rather than a constraint—but it remains gravity manipulation, not gravity negation.`,
        }
    },
    {
        id: 'reflexive_dodge',
        name: 'Reflexive Dodge',
        tier: 2,
        cost: 10,
        proficiency: {
            beginner: `The device continuously monitors all incoming threat vectors—projectile trajectories, melee attack arcs, environmental hazards—and autonomously triggers micro-movements to evade attacks the mage has not consciously registered. A punch thrown from the mage's blind spot meets empty air because the device shifted their shoulder three centimeters to the left. A thrown bottle arcs toward the back of their head and the device ducks them forward a fraction of a second before impact.

The spell handles one obvious threat at a time. A telegraphed punch, a slow projectile, a visible melee swing—these are within the device's reaction window. Multiple simultaneous threats or extremely fast attacks (supersonic projectiles, point-blank gunfire) will overwhelm the system. The mage experiences the spell as a series of involuntary twitches and adjustments that feel uncanny the first few times but quickly become background noise.

At Beginner, Reflexive Dodge is a supplementary defense. It catches the attacks the mage misses—the cheap shot, the flanking strike, the projectile they didn't see coming—but it is not a replacement for active defensive technique. The mana cost is low, and the spell runs passively once activated.`,

            apprentice: `The device's threat-processing speed increases to handle supersonic projectiles—bullets, railgun slugs, high-velocity spell projectiles—by tracking launch signatures and muzzle flash before the round arrives. The mage still cannot outrun a bullet, but they can begin moving before the bullet reaches them, and centimeters of displacement are often the difference between a miss and a fatal hit. The spell's evasion window expands to handle attacks from the mage's peripheral vision and auditory cues, not just their direct line of sight.

Chain evasion becomes possible. The device can sequence two or three evasive movements in rapid succession, dodging a strike and immediately repositioning to avoid the follow-up. The mage appears to flow around attacks in a continuous, almost choreographed motion. The spell now factors in the mage's current momentum and stance, so the evasive movements do not throw them off-balance or compromise their ability to counter-attack.

The mana cost increases during chained evasions but remains manageable for a mid-rank reactor. At Apprentice, Reflexive Dodge makes the mage noticeably harder to hit—an opponent accustomed to landing strikes on trained fighters will find their attacks consistently grazing empty air.`,

            adept: `The device handles simultaneous threats from multiple vectors—three attackers closing from different angles, a sniper positioned at a forty-five-degree offset, and a spellcaster launching a projectile from behind cover. Each threat is processed independently, and the device computes an evasion path that avoids all of them in sequence, threading the mage through a web of attacks without a single one connecting. The evasions are economical, using the minimum displacement necessary, which conserves energy and keeps the mage positioned for counter-attacks.

Total-darkness evasion becomes reliable. With visual input removed, the device builds its threat model entirely from spatial audio processing—the sound of footsteps, the whistle of a blade cutting air, the reverberation of movement off walls. The mage can fight blindfolded against multiple opponents and maintain a near-perfect dodge rate through auditory threat mapping alone. This is a specialized capability useful against flash-bangs, smoke screens, and opponents who rely on visual deprivation.

Counter-attack integration is now standard. Each dodge terminates in a position optimized for immediate retaliation—the device places the mage exactly where they need to be to capitalize on the opponent's overextension. At Adept, Reflexive Dodge is no longer a purely defensive spell; it is a positioning tool that sets up offensive windows.`,

            expert: `The device achieves threat processing faster than conscious thought. The mage's body begins evading an attack before the sensory signal reaches their conscious brain—the device intercepts the threat data at the neural interface level, computes the evasion, and triggers the movement directly through motor pathways. The mage experiences this as a strange detachment: they see the attack coming, but their body has already dodged it before they can consciously decide to move.

Blind-spot coverage is complete. Attacks from any angle, at any speed, are processed and evaded. The device maintains a 360-degree threat sphere updated thousands of times per second, factoring in not just the attacks currently in flight but the probable attacks implied by opponent positioning and weapon readiness. Sustained combat against multiple opponents produces a rhythm of evasion and repositioning that the device optimizes in real time—the mage appears to dance through combat untouched.

The spell cannot dodge attacks that fill the entire space the mage occupies—a room-sized explosion, a building collapse, an area-of-effect spell with no safe zone within the mage's movement range. The device computes optimal survival postures rather than evasions in these cases, minimizing exposure rather than avoiding damage entirely. At Expert, Reflexive Dodge makes the mage extraordinarily difficult to hit with any targeted attack, but it remains bounded by physics and space.`,

            master: `The device's evasion engine runs at its designed ceiling. Threat detection, trajectory processing, evasion computation, and motor triggering form a closed loop that operates continuously without conscious input or meaningful mana cost. The mage no longer thinks about dodging—their body simply does not get hit by attacks that can be avoided through movement. Allies within the device's sensor range receive threat warnings and suggested evasion vectors, though they must execute the movements themselves.

The spell's threat model is refined to the point where it can anticipate attacks based on opponent micro-cues—a twitch in the trigger finger, a shift in stance, a mana-flare that precedes spell discharge—and begin the evasion before the attack is launched. This is not precognition; it is the device processing predictive data faster than the opponent can complete their attack sequence. The difference is imperceptible to observers, but it gives the mage a consistent edge in reaction time.

This is the ceiling of Reflexive Dodge as a Tier 2 spell. The mage cannot dodge undetectable attacks—if the device has no sensor data to process, it has nothing to evade. The spell cannot dodge attacks that fill entire spaces beyond the mage's movement range. It cannot evade while incapacitated, restrained, or unconscious—the device still needs a functional body to move. And the evasion speed is bounded by the mage's physical capabilities; the device computes the optimal dodge, but the mage's muscles must execute it. Within those constraints, the mage is about as difficult to hit as a human body managed by a Tier 2 evasion spell can be.`,
        }
    },
    {
        id: 'combat_synchronization',
        name: 'Combat Synchronization',
        tier: 3,
        cost: 15,
        proficiency: {
            beginner: `The device establishes a tactical data-link with allied Intelligent Devices within approximately thirty meters, creating a shared awareness mesh. Each connected mage receives a positional overlay showing allied locations, facing directions, and current threat status—green for engaged but safe, yellow for under pressure, red for critical. The overlay updates in real time as allies move, providing the kind of squad-level situational awareness that normally requires constant radio communication and head-on-a-swivel vigilance.

The shared awareness is basic but transformative. A mage covering a doorway knows when their partner behind them spots a threat without a word being spoken. A flanking element registers the main force's position and adjusts their approach instinctively. Friendly-fire risk drops dramatically because every ally knows where every other ally is at all times, down to the meter.

The spell does not share thoughts, emotions, or complex tactical intent. It is a positional tracking and status-reporting system, nothing more. Allies must opt into the network through their own devices, and the network's bandwidth is limited by the lowest-capability device in the mesh. At Beginner, Combat Synchronization replaces the chaos of uncoordinated combat with the clarity of a shared tactical map.`,

            apprentice: `The tactical mesh expands to include threat data and attack coordination. When an ally spots an enemy, that enemy's position and threat level are broadcast to every connected mage—a sniper on a rooftop identified by one member becomes a marked target on everyone's overlay. Coordinated attack timing becomes possible: the device suggests optimal strike windows based on allied positioning, and mages can time simultaneous engagements with sub-second precision by synchronizing through the mesh.

Basic fire-team synergy emerges. The device monitors the tactical situation and suggests formations, covering fire patterns, and fallback routes based on the combined capabilities of connected allies. A mage with defensive spells is automatically flagged as a shield anchor; a mage with mobility spells is flagged as a flanker; a mage with heavy offensive capability is flagged as a striker. The device does not give orders, but it provides the information framework that makes coordinated small-unit tactics intuitive.

Range extends to roughly one hundred meters, and the mana cost scales with the number of connected allies. A fire team of four operates within standard reactor budgets without strain. At Apprentice, Combat Synchronization turns a group of individual mages into a cohesive tactical unit without requiring hours of drill or shared training.`,

            adept: `The mesh achieves full tactical integration. Allies no longer need to consciously process positional data—the device feeds it directly into their spatial awareness, creating an intuitive sense of where teammates are and what they are doing that feels as natural as knowing where your own limbs are. Blind-spot coverage becomes automatic: if an ally can see a threat that you cannot, your device flags it in your awareness as if you had seen it yourself. Coordinated spell timing reaches the point where two mages can release their spells within milliseconds of each other without verbal communication.

Shared target prioritization is now a standard feature. The device evaluates all visible threats, cross-references them against allied capabilities, and suggests the optimal distribution of firepower. A heavily-armored target gets flagged for the mage with armor-piercing spells. A fast-moving flanker gets flagged for the mage with tracking spells. The device handles the tactical math; the mages pull the triggers.

The mesh can now handle a platoon-scale formation—roughly thirty to forty mages—with the device distributing processing load across the network rather than centralizing it on the origin mage's hardware. At Adept, Combat Synchronization is a force multiplier that makes a coordinated unit exponentially more effective than the sum of its individual members.`,

            expert: `The mesh scales to company-level operations—fifty or more mages operating as a distributed tactical organism. Each member benefits from the collective sensory input of the entire unit: what one mage sees, all mages see; what one device computes, all devices access. The network handles the data throughput by compressing and prioritizing information, ensuring that individual mages are not overwhelmed by the firehose of sensory data from fifty people.

The coordination approaches what would feel like telepathy to an outside observer. Mages move, attack, and reposition with seamless synchronicity—covering fire lifts the instant an ally enters the target zone, flanking elements strike the moment the enemy commits to the frontal engagement, and casualty evacuation happens without anyone needing to call for it because the device has already routed the nearest available medic. The mesh's tactical model is sophisticated enough to predict enemy responses and pre-position allies accordingly.

The spell's mana cost at this scale is significant but manageable for the originating mage, as the device distributes processing across the network to reduce the load on any single reactor. At Expert, a unit synchronized through this spell fights as a single entity with fifty pairs of eyes, fifty tactical minds, and fifty spell arsenals coordinated with machine precision.`,

            master: `The device's tactical synchronization engine runs at its designed ceiling. The mesh is always active for any authorized allied device within range, connecting instantly and requiring no configuration or conscious management. All coordination functions—positional awareness, threat sharing, target prioritization, formation optimization, strike timing—operate as permanent background processes with optimized mana efficiency.

The spell can support a battalion-scale formation—hundreds of mages—with the device handling the data architecture and ensuring that each connected ally receives only the information relevant to their role and position. The mesh is self-healing; if a connected ally goes offline, the device redistributes their tactical responsibilities among remaining members. Allies retain complete individual autonomy throughout; the device suggests, coordinates, and informs, but it never overrides a mage's tactical judgment.

This is the ceiling of Combat Synchronization as a Tier 3 spell. The mage cannot create a "hive mind"—allies retain independent judgment, and the device does not compel action or override decision-making. The mesh cannot connect unwilling participants, and it is bounded by device network range; allies who move beyond transmission range lose synchronization until they return. The spell cannot share information that no ally has perceived—it aggregates and distributes known data, it does not generate intelligence from nothing. But within those bounds, the spell provides the highest level of tactical coordination that a Tier 3 networking spell can deliver—turning a formation of individual mages into something that fights like a single, distributed organism with each member fully aware and fully autonomous.`,
        }
    }
];

// Add third batch of physical spells
if (typeof spellData !== "undefined" && spellData.physical) {
    spellData.physical = spellData.physical.concat(additionalPhysicalSpells3);
}

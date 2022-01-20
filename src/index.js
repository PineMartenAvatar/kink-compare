import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LZString from 'lz-string';

/*
   ______________________________
 / \                             \.
|   |                            |.
 \_ |                            |.
    |  To all ye who view        |.
    |    this document:          |.
    |                            |.
    |  I wanted to make the      |.
    |   source code transparent, |.
    |  but I am super not a      |.
    |   web developer            |.
    |                            |.
    |  This code is jank as      |.
    |   hell, is what I'm        |.
    |  saying. Trust me, I know  |.
    |                            |.
    |  It's honestly a miracle   |.
    |   that any of this works   |.
    |  at all                    |.
    |   _________________________|___
    |  /                            /.
    \_/____________________________/.

*/

/* 
TODO:
    
Low Priority:
    - Make panels work properly (for about)
    - Implement cookies & cookie agreement
    - Break Question up into multiple components
    - Add keyboard input option
    - Fix up tooltips
    - Curate kink list
    - Add donoation link
*/

let kinks = [
    {
        name: "Oral sex",
        left: "Partner's mouth",
        right: "Your mouth",
        tooltip: "Felatio or cunnilingus",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Vaginal sex",
        left: "Partner's vagina",
        right: "Your vagina",
        tooltip: "Penetrative sex involving oner or more vaginas",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Anal sex",
        left: "Partner's anus",
        right: "Your anus",
        tooltip: "Penetrative sex involving one or more anuses/rectums",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },

    {
        name: "Sadomasochism (general)",
        left: "You are sadist",
        right: "You are masochist",
        tooltip: "Scenarios in which one person (the sadist) causes pain (physical, emotional, or otherwise) to the other (the masochist) for pleasure or gratification",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Edging/Teasing",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Getting a partner very close to orgasm, and keeping them on that edge for a long period of time",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Jerk-Off Instruction / Sex Instruction",
        left: "Instructor",
        right: "Pupil",
        tooltip: "Providing or recieving instructions on how to masturbate or have sex, often given remotely as part of long distance play",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Threesomes",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Sex acts involving 3 participants",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Group sex (more than 3 participants)",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Sex in groups larger than 3 people",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Fisting",
        left: "As fist",
        right: "As glove",
        tooltip: "Inserting a whole hand inside the bottom, anally or vaginally. Just, like, all the way up in there. Sometimes a whole forearm.",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Exhibitionism",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Being watched, putting on a show for others. Semi-public play, often at parties or festivals.",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Voyeurism",
        left: "",
        right: "",
        tooltip: "Watching others engaging in kink or sex. Roles don't make sense for this one, just answer the same for both",
        answer_left: "9",
        answer_right: "9",
        type: "single",
        danger_warning: false
    },
    {
        name: "Dirty talk",
        left: "You talk",
        right: "Partner talks",
        tooltip: "Oh baby you love reading this tooltip text don't you? You want me to explain dirty talk to you alllllll night",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Asphyxiation/breath play",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Choking, blocking breath, or other means of restricting oxygen to the brain of the bottom",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: true
    },
    {
        name: "Double penetration (different holes)",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Multiple insertions, including both anal and vaginal at once. If neither partner possesses the bits necessary for this, answer 'Hard Limit'",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Double penetration (same hole)",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Multiple insertions into the vagina or anus of the bottom",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Analingus/rimming",
        left: "You eat",
        right: "Partner eats",
        tooltip: "Stimulating (often referred to as 'eating') the anus or rectum with the tongue and mouth",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Ruined orgasms",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Play in which the top ruins the bottom's orgasm. Achieved via various methods including pain, inducing ejaculation without orgasm, or psychological means",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Food play",
        left: "Topping",
        right: "Bottoming",
        tooltip: "The use of food items in play generally",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Crush",
        left: "As Crusher",
        right: "As Crushed",
        tooltip: "Crushing the bottom under a weight, often the top's own body weight",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Edge/limit play",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Play which flirts with and is liable to accidentally push past people's limits, hard or soft. May include risk or danger and requires a lot of trust and communication between both partners",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Free use",
        left: "Partner is used",
        right: "You are used",
        tooltip: "A set of kinks in which the bottom's body or services are freely used over a period of time, often in semi-public settings such as parties",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Age play",
        left: "As older/caregiver",
        right: "As little/middle/younger",
        tooltip: "A general set of kinks which one or both partners roleplay different ages or maturities from their own- often called 'little' or 'middle' and 'big' or 'mommy/daddy/caregiver (cg)'",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "AB/DL",
        left: "As caregiver",
        right: "As baby",
        tooltip: "Adult Baby/Diaper Lover: a specific fetish community which centers around adults acting and being cared for as if they were babies, especially including the wearing and changing of diapers",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Primal (pred/prey)",
        left: "As pred",
        right: "As prey",
        tooltip: "A complex general set of kinks in which the theme is regression to base instincts",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Consensual non-consent",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Also called CNC: a form of roleplay or power dynamic in which one partner plays as if they do not consent to the scenario, when they have",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Snuff/death roleplay",
        left: "Partner dies",
        right: "You die",
        tooltip: "Not a kink I recommend engaging with outside of roleplay",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Pet play",
        left: "As handler",
        right: "As pet",
        tooltip: "Puppies, kitties, ponies, bunnies, hamsters, lizards, human pets, if one partner is being treated as a pet, it's pet play",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Gender play",
        left: "Partner's gender is played with",
        right: "Your gender is played with",
        tooltip: "One or both partners are treated as a gender other than their usual gender identity. This includes kinks such as sissification and feminization/masculinization",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Role reversal",
        left: "Partner's role is reversed",
        right: "Your role is reversed",
        tooltip: "Scenarios in which you or your partner take on the opposite kink role they usually would. If this does not apply to you, answer hard limit",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Medical play",
        left: "Topping",
        right: "Bottoming",
        tooltip: "A wide range of roleplay and specific kink activies related to medical scenarios",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Orientation play",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Roleplay in which one or both partners pretend to be sexual orientations other than their own",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Neglect play",
        left: "Partner is neglected",
        right: "You are neglected",
        tooltip: "The top neglects the bottom, either by leaving them alone or intentionally ignoring their needs",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Objectification",
        left: "Partner is objectified",
        right: "You are objectified",
        tooltip: "Treating one person as an object, often in the context of sexual use",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Incest roleplay",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Roles are general, as these scenes could be mixed with any other kink",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Remote roleplay (phone/text)",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Roles are general, as these scenes could be mixed with any other kink",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Character roleplay",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Roleplay as characters, fictional or otherwise. Often mixed with other kinks as part of elaborate scenes",
        answer_left: "9",
        answer_right: "9",
        type: "single",
        danger_warning: false
    },
    {
        name: "Piercing",
        left: "Partner is pierced",
        right: "You are pierced",
        tooltip: "Piercings given to one or both partners, often by a professional but at the whim of the top",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Shaving/body hair removal",
        left: "Partner's hair is removed",
        right: "Your hair is removed",
        tooltip: "The removal of the bottom's body hair, often pubic, leg, or underarm hair, but could include full-body hair removal",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Body writing",
        left: "As writer",
        right: "As canvas",
        tooltip: "Writing on the body of the bottom",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Genital pumping",
        left: "Partner is pumped",
        right: "You are pumped",
        tooltip: "The use of a vacuum-drawing device to engorge the genitals, often the penis, clitoris, or labia",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Branding/Scarification",
        left: "As artist",
        right: "As canvas",
        tooltip: "The permanent creation of scar tissue on one participant, often using extreme heat or cold (such as liquid nitrogen)",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Tattooing",
        left: "As artist",
        right: "As canvas",
        tooltip: "It's tatoos, I'm not sure what else to put in this tooltip.",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Impact play (general)",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Hittin' the bottom with stuff, or being hit. There are many, many forms of impact play",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Spanking",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Striking the bottom's bum, often with paddles or bare palms",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Sharps / knives",
        left: "Topping",
        right: "Bottoming",
        tooltip: "The use of edged implements in play",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "CBT/genital torture",
        left: "Topping",
        right: "Bottoming",
        tooltip: "CBT stands for 'Cock & Ball Torture', but this also encompasses the torture of other genital arrangements",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Biting",
        left: "As Biter",
        right: "As person bit",
        tooltip: "From lil nibbles to big chomps",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Clamps",
        left: "Topping",
        right: "Bottoming",
        tooltip: "The use of devices to provide clamping pressure on the bottom's body",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Hair pulling",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Pulling on hair",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Abrasion",
        left: "Topping",
        right: "Bottoming",
        tooltip: "The use of friction from various materials to irritate or cause pain to the bottom",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Water torture",
        left: "Topping",
        right: "Bottoming",
        tooltip: "The use of water to torture the bottom, including waterboarding, asphyxiation play, and more",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Lingerie",
        left: "Partner wears",
        right: "You wear",
        tooltip: "Sexy underwear!",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Heels",
        left: "Partner wears",
        right: "You wear",
        tooltip: "The tall shoes, that is, not the heels of your feet- that's a different kink",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Boots",
        left: "You wear",
        right: "Partner wears",
        tooltip: "Made for walking, but usable for a lot more",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Clothed sex",
        left: "",
        right: "",
        tooltip: "Having sex with your clothes on",
        answer_left: "9",
        answer_right: "9",
        type: "single",
        danger_warning: false
    },
    {
        name: "Leather",
        left: "Partner wears",
        right: "You wear",
        tooltip: "Includes clothing and also general interaction with leather materials",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Latex/rubber",
        left: "Partner wears",
        right: "You wear",
        tooltip: "Includes clothing and also general interaction with later or rubber materials",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Uniforms/Costumes",
        left: "Partner wears",
        right: "You wear",
        tooltip: "Gettin' dressed for the occasion",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Cross-dressing",
        left: "Partner wears",
        right: "You wear",
        tooltip: "Dressing in a manner that does not align with your usual gender identity and presentation. If this does not apply to you, answer 'hard limit'",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Collars",
        left: "Partner wears",
        right: "You wear",
        tooltip: "Worn around the neck, often featuring a ring with tags or other adornments",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Leash or lead",
        left: "Partner is leashed",
        right: "You are leashed",
        tooltip: "A strip of leather or similar material which is affixed to a ring, often on a collar, and used to lead the bottom around or dictate their movement.",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Blindfold",
        left: "Partner wears",
        right: "You wear",
        tooltip: "Any device which is worn over the eyes and blocks the wearer from seeing",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Cock rings/straps",
        left: "Partner wears",
        right: "You wear",
        tooltip: "If neither partner can physically use a cock ring, answer should be hard limit",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Corsets",
        left: "Partner wears",
        right: "You wear",
        tooltip: "",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Gags",
        left: "Partner wears",
        right: "You wear",
        tooltip: "Wearing any form of device that covers the mouth and prevents the wearer from speaking",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Chance of getting caught",
        left: "",
        right: "",
        tooltip: "Play in settings in which you may be caught. Be smart about this one, guys, please.",
        answer_left: "9",
        answer_right: "9",
        type: "single",
        danger_warning: true
    },
    {
        name: "Unsafe sex roleplay",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Roleplay in which you pretend that there is risk of either pregnancy, disease transmission, or other similar complications",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Domination/Submission (general)",
        left: "As Dominant",
        right: "As Submissive",
        tooltip: "An exchange of power in which the submissive gives up power to the dominant. Very, very broad, with many different flavors and variations.",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Service (general)",
        left: "Receiving service",
        right: "Providing service",
        tooltip: "Providing a service as kink, or being serviced. Very, very broad.",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Master/slave",
        left: "As Master",
        right: "As slave",
        tooltip: "A power exchange dynamic in which the slave gives up all or close to all power to a master. Often expressed more in roleplay than in actuality, and intensity of the dynamic varies widely from case to case.",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Affectionate/sensual domination",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Play in which the top is affectionate and kind rather than harsh. This is a spectrum, and so interpretations vary widely",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Behavior restriction/discipline",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Play in which the top dictates the behavior of the bottom, often as part of a lifestyle power exchange dynamic",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Enforced nudity",
        left: "Topping",
        right: "Bottoming",
        tooltip: "The top enforces the bottom to be nude, often in specific scenarios or at specific times",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Orgasm denial",
        left: "Partner is denied",
        right: "You are denied",
        tooltip: "The top denies the bottom from orgasming",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Chastity",
        left: "Partner is chaste",
        right: "You are chaste",
        tooltip: "One or both partners are disallowed from orgasm, often as a power-exchange scenario but not always. Sometimes involves the usage of devices such as chastity cages or belts. A longer-form version of orgasm denial",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Cuckolding",
        left: "Partner is the cuck",
        right: "You are the cuck",
        tooltip: "Scenarios in which one person (the cuck) watches their partner have sex with a third party (oft. the 'bull'), often associated with humiliation but not necessarily",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Bathroom use control",
        left: "Topping",
        right: "Bottoming",
        tooltip: "The top dictates when/where/how the sub is allowed to relieve themselves",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: true
    },
    {
        name: "Speech restriction",
        left: "Topping",
        right: "Bottoming",
        tooltip: "The top restricts how or when the bottom is allowed to speak. Often via gags but also via commands, such as 'you must only bark like a dog', or 'if you whine, I won't count down on that spank'",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Eye contact restriction",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Restricting the bottom from looking in specific directions or at specific things, usually restricting eye contact with the top",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Human furniture",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Play in which the top uses the bottom as a piece of furniture, often a footrest",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Orgasm torture",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Torturing the bottom by making them orgasm repeatedly, to the point of discomfort. Also referred to as 'milking'",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Fire cupping",
        left: "Cupper",
        right: "Cupped",
        tooltip: "A technique in which heat is used to create a vacuum inside a (usually glass) cup when it is applied to the skin and let cool; the vacuum pulls on the skin and leaves distinctive circular marks, and draws blood towards the surface",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Brat play",
        left: "Partner is a brat",
        right: "You are a brat",
        tooltip: "Play in which the bottom intentionally misbehaves, often with the ulterior motive of being repremanded by the top",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Bondage (general)",
        left: "Topping",
        right: "Bottoming",
        tooltip: "The use of various forms of restraint to restrict the bottom's movement, including ropes, cuffs, and predicaments",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Suspension",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Bondage in which the bottom is suspended off of the ground, usually via rope but occasionally via other means such as saran wrap",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Encasement / Mummification",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Play in which the bottom is completely encased in some form-fitting material- often saran wrap, vacuum sealed rubber, or bondage tape",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Caging/confinement",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Confining the bottom to a cage or crate",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Predicament/stress bondage",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Bondage in which the bottom is placed in a predicament in which moving in a specific way causes discomfort (or some other sensation) in another place",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Boot worship",
        left: "As boot wearer",
        right: "As worshipper",
        tooltip: "The bottom worships the top's boots. How this is accomplished varies",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Body/muscle worship",
        left: "Topping",
        right: "Bottoming",
        tooltip: "The bottom worships the body of the top, often focusing on muscles",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Nipple/breast play",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Playing with the bottom's nips! Clamps, impact, pinching, rubbing- there's lots of ways to play with a nipple.",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Armpit play",
        left: "Your pits",
        right: "Partner's pits",
        tooltip: "Play involving armpits, usually having to do with scent",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Feet / Foot fetish",
        left: "Your feet",
        right: "Partner's feet",
        tooltip: "The use of feet in sex and kink, greatly varies in implementation from scene to scene",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Navel play",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Bellybuttons",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Vaginal/anal training/stretching",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Use of increasingly larger insertables to stretch out the anus or vaginal opening of the bottom, such that they can fit more and larger insertables up in there",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Face sitting/smothering",
        left: "You sit",
        right: "Partner sits",
        tooltip: "Exactly what it says on the tin",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Outdoors",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Sex or kink in the great outdoors. Please be responsible and keep it to places where you aren't going to accidentally involve non-consenting strangers in your kink adventures",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Watersports",
        left: "Topping",
        right: "Bottoming",
        tooltip: "It's pee.",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
        {
        name: "Scat",
        left: "Topping",
        right: "Bottoming",
        tooltip: "It's poop.",
        answer_left: "9",
        answer_right: "9",
        type: "double",
            danger_warning: false
    },
    {
        name: "Blood",
        left: "Topping",
        right: "Bottoming",
        tooltip: "It's blood.",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Cum play",
        left: "Topping",
        right: "Bottoming",
        tooltip: "It's cum.",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Lactation",
        left: "Topping",
        right: "Bottoming",
        tooltip: "It's milk.",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Vomit",
        left: "Partner vomits",
        right: "You vomit",
        tooltip: "Sometimes referred to as 'sprinkles'",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Saliva/mucus",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Implementation varies scene to scene, could involve spitting, being covered in spit, spit as lube, etc.",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Sploshing",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Messy play which usually involves covering the bottom in something: mud, food, paint, etc.",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Diapers",
        left: "You wear",
        right: "Partner wears",
        tooltip: "It's diapers",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Dildos",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Insertable toys often made to look like penises, but also of the more abstract sort",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Plugs",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Toys inserted in the bottom's anus or vagina which are made to stay in place. Often are wider around than other insertables",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Vibrators",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Toys which vibrate to stimulate, insertable or otherwise",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Sounding",
        left: "Topping",
        right: "Bottoming",
        tooltip: "The insertion of objects (usually purpose-built rods) into the bottom's urethra",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Sleeves",
        left: "Sleeve is used on partner",
        right: "Sleeve is used on you",
        tooltip: "Toys made to stimulate the penis. If this is not something you can use, answer hard limit",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Strap-ons",
        left: "You wear",
        right: "Partner wears",
        tooltip: "Harnesses which allow a dildo to be used in place of a penis for play",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Fucking machines",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Devices made to mechnically thrust into and out of the bottom",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Hypnosis",
        left: "As hypnotist",
        right: "As subject",
        tooltip: "The use of hypnosis techniques in kink",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: true
    },
    {
        name: "Degradation",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Degrading the bottom, often by name-calling and various other emotional abuses",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Humiliation",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Humiliating the bottom, often by forcing them to do something embarassing",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Drugs/alcohol",
        left: "Topping",
        right: "Bottoming",
        tooltip: "The use of cognitively impairing substances during play",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: true
    },
    {
        name: "Temperature play",
        left: "Topping",
        right: "Bottoming",
        tooltip: "The use of extreme temperatures, hot or cold, as sensation",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Wax play",
        left: "Topping",
        right: "Bottoming",
        tooltip: "The dripping of melted wax onto the bottom's body",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Sensory deprivation",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Play in which one or more of the bottom's senses are impaired, including via blindfolds, earplugs, and various forms of bondage or restraint",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "E-stim",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Electrical stimulation, often via a Violet Wand or Tens Unit device.",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Fire",
        left: "Topping",
        right: "Bottoming",
        tooltip: "It's hot, be careful",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Massage",
        left: "As person massaged",
        right: "As massues",
        tooltip: "A good rub down",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Chemical stimulation",
        left: "Topping",
        right: "Bottoming",
        tooltip: "The use of substances (such as icy-hot) to stimulate or irritate the bottom",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Tickling",
        left: "Topping",
        right: "Bottoming",
        tooltip: "Tee hee hee stop it stop it hee hee I'm going to pee my pants",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Figging",
        left: "Topping",
        right: "Bottoming",
        tooltip: "The insertion of a plug cut from an irritant, traditionally ginger, which is then inserted into the bottom's anus to cause irritation",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    },
    {
        name: "Bored & Ignored",
        left: "Partner is doing the sex",
        right: "You are doing the sex",
        tooltip: "Play in which one partner is preoccupied and not paying attention to the other during a sexual act; similar to objectification or free use",
        answer_left: "9",
        answer_right: "9",
        type: "double",
        danger_warning: false
    }
];

const codes = {
  "0": {"description": "No answer", "outcome": "missing"},
  "1": {"description": "Mutually essential", "outcome": "encourage"},
  "2": {"description": "Mutual kink", "outcome": "encourage"},
  "3": {"description": "Kink vs essential ", "outcome": "encourage"},
  "4": {"description": "Mutual fantasy", "outcome": "encourage_caution"},
  "5": {"description": "Fantasy vs essential", "outcome": "encourage"},
  "6": {"description": "Fantasy vs kink", "outcome": "encourage"},
  "8": {"description": "Mutual curiosity", "outcome": "encourage_caution"},
  "9": {"description": "Curiosity vs essential", "outcome": "encourage"},
  "10": {"description": "Curiosity vs kink", "outcome": "encourage"},
  "12": {"description": "Curiosity vs fantasy", "outcome": "encourage_caution"},
  "16": {"description": "Mutual willingness to try", "outcome": "show_caution"},
  "17": {"description": "Willing to try vs essential", "outcome": "encourage"},
  "18": {"description": "Willing to try vs kink", "outcome": "encourage"},
  "20": {"description": "Willing to try vs fantasy", "outcome": "encourage_caution"},
  "24": {"description": "Willing to try vs curiosity", "outcome": "encourage_caution"},
  "32": {"description": "Mutual limit", "outcome": "ignore"},
  "33": {"description": "Willing to indulge vs essential", "outcome": "show"},
  "34": {"description": "Willing to indulge vs kink", "outcome": "show"},
  "36": {"description": "Willing to indulge vs fantasy", "outcome": "show_caution"},
  "40": {"description": "Willing to indulge vs curiosity", "outcome": "show_caution"},
  "48": {"description": "Willing to indulge vs willing to try", "outcome": "show_caution"},
  "64": {"description": "Mutual limit", "outcome": "ignore"},
  "65": {"description": "Soft limit vs essential", "outcome": "warn"},
  "66": {"description": "Soft limit vs kink", "outcome": "show"},
  "68": {"description": "Soft limit vs fantasy", "outcome": "warn"},
  "72": {"description": "Soft limit vs curiosity", "outcome": "show_caution"},
  "80": {"description": "Soft limit vs willing to try", "outcome": "show_caution"},
  "96": {"description": "Mutual limit", "outcome": "ignore"},
  "128": {"description": "Mutual limit", "outcome": "ignore"},
  "129": {"description": "Hard limit vs essential", "outcome": "warn"},
  "130": {"description": "Hard limit vs kink", "outcome": "ignore"},
  "132": {"description": "Hard limit vs fantasy", "outcome": "warn"},
  "136": {"description": "Hard limit vs curiosity", "outcome": "ignore"},
  "144": {"description": "Hard limit vs willing to try", "outcome": "ignore"},
  "160": {"description": "Mutual limit", "outcome": "ignore"},
  "192": {"description": "Mutual limit", "outcome": "ignore"}
};

// NOTE: implement this, for now I'm just gonna put it in Question for now because I don't know how react works
class Result extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: "React"
        };
    };
    
    render() {
        return (
            <>  
                <div className="result">
                </div>
            </>
        );
    };
};

class Question extends React.Component {
    constructor(i) {
        super();
        this.state = {
            name: "React",
            kink_index: 0,
            left: 9,
            right: 9,
            hash: '',
            show_submit: true,
            classNames: "",
            displayResults: false,
            p1_name: "Person 1",
            p2_name: "Person 2",
            missing_warning_open: false,
            missing_warning_shown: false,
            num_missing: kinks.length*2,
            results: {
                p1_tops: {
                    encourage: [],
                    encourage_caution: [],
                    show: [],
                    show_caution:  [],
                    warn: [],
                    ignore: [],
                    missing: []
                },
                p2_tops: {
                    encourage: [],
                    encourage_caution: [],
                    show: [],
                    show_caution:  [],
                    warn: [],
                    ignore: [],
                    missing: []
                }
            }
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onName1Change = this.onName1Change.bind(this);
        this.onName2Change = this.onName2Change.bind(this);
        this.saveAnswers = this.saveAnswers.bind(this);
        this.setLeft = this.setLeft.bind(this);
        this.setRight = this.setRight.bind(this);
        this.goNext = this.goNext.bind(this);
        this.goPrev = this.goPrev.bind(this);
        this.submit = this.submit.bind(this);
        this.copyHash = this.copyHash.bind(this);
        this.compareHashes = this.compareHashes.bind(this);
        this.your_hash = React.createRef();
        this.partner_hash = React.createRef();
        this.p1_name = React.createRef();
        this.p2_name = React.createRef();
    }
    
    saveAnswers() {
        let kink = kinks[this.state.kink_index];
        kink.answer_left = parseInt(this.state.left);
        kink.answer_right = parseInt(this.state.right);
        
//        console.log("left and right in saveAnswers");
//        console.log(this.state.left);
//        console.log(this.state.right);
        
        let data = this.getData();
//        console.log(data);
        let num_missing = (data.split("9").length - 1);
        
        this.setState(hash => ({
            num_missing: num_missing
        }));
    }
    
    setLeft(checkedValue){
        this.setState({
            left: checkedValue
        }, function() {
            this.saveAnswers();
        });
    } 
    
    setRight(checkedValue){
        this.setState({
            right: checkedValue
        }, function() {
            this.saveAnswers();
        });
    } 
    
    onValueChange(event) {
    }
    
    onName1Change(event) {
        this.setState((state) => {
           return {
               p1_name: event.target.value
           } 
        });
    }
    
    onName2Change(event) {
        this.setState((state) => {
           return {
               p2_name: event.target.value
           } 
        });
    }
    
    goNext(event) {
        let nextIndex = this.state.kink_index + 1
        this.saveAnswers();
        this.setState((state) => {
            if (state.kink_index === kinks.length - 1) {
                return {left: kinks[state.kink_index].answer_left,
                        right: kinks[state.kink_index].answer_right,
                        show_submit: true}
            } else {
                return {kink_index: nextIndex,
                        left: kinks[nextIndex].answer_left,
                        right: kinks[nextIndex].answer_right}
            }
        });
    }
    
    goPrev(event) {
        let nextIndex = this.state.kink_index - 1
        this.saveAnswers();
        this.setState((state) => {
            if (state.kink_index === 0) {
                return {left: kinks[state.kink_index].answer_left,
                        right: kinks[state.kink_index].answer_right
                        }
            } else {
                return {kink_index: nextIndex,
                        left: kinks[nextIndex].answer_left,
                        right: kinks[nextIndex].answer_right}
            }
        });
    }
    
    submit(event) {
        this.saveAnswers();
        this.generateHash();
    }
    
    getData() {
        let output = "";
        
        function addKink(kink) {
            output += kink.answer_left;
            output += kink.answer_right;
        }
        
        kinks.forEach(kink => addKink(kink));
        return output;
    }
    
    createFakeData() {
        let output = "";
        for (let i=0; i<kinks.length; i++) {
            output += (Math.floor(Math.random() * 9));
            output += (Math.floor(Math.random() * 9));
        }
        return output
    }
    
    generateHash() {
        let data = this.getData();
        
//        let answerstring = LZString.compressToBase64(this.createFakeData());
        let answerstring = LZString.compressToBase64(data);
        this.setState(hash => ({
            hash: answerstring
        }))
    }

    copyHash() {
        return navigator.clipboard.writeText(this.state.hash);
    }
    
    compareHashes() {
        let output_codes = [];
        let output = {
            p1_tops: {
                encourage: [],
                encourage_caution: [],
                show: [],
                show_caution:  [],
                warn: [],
                ignore: [],
                missing: []
            },
            p2_tops: {
                encourage: [],
                encourage_caution: [],
                show: [],
                show_caution:  [],
                warn: [],
                ignore: [],
                missing: []
            }
        };
        
        let yh = LZString.decompressFromBase64(this.your_hash.current.value);
        let ph = LZString.decompressFromBase64(this.partner_hash.current.value);
        
        for (let i = 0; i < (yh.length/2); i++) {
            let code1 = 2**parseInt(yh[i*2]) | 2**parseInt(ph[i*2+1]);
            let code2 = 2**parseInt(yh[i*2+1]) | 2**parseInt(ph[i*2]);
            
            code1 = (code1 >=  256) ? 0 : code1;
            code2 = (code2 >=  256) ? 0 : code2;
            
            output_codes.push([code1, code2]);
        }
        
        for (let i = 0; i < (yh.length/2) - 1; i++) {
            // get an object with the result of the comparison, and the outcome of that result
            let result1 = codes[output_codes[i][0]];
            let result2 = codes[output_codes[i][1]];
            
//            console.log(i);
            
            // use that object to generate our two output tables
            output.p1_tops[result1.outcome].push([kinks[i].name, result1.description]);
            output.p2_tops[result2.outcome].push([kinks[i].name, result2.description]);
        }
        
        console.log(output);
        
        // start the animation to bring up the results screen
        const { classNames } = this.state;
        this.setState({ classNames: classNames ? "" : "animation" });
        
        this.setState({
            results: output
        });
    }
    
    onAnimationStart = () => {
        this.setState({
            displayResults: true
        });
    };

    onAnimationEnd = () => {
        this.setState({
        });
    };

    render() {
        const { displayResults } = this.state;
        const showResults = displayResults ? "flex" : "none";
        
        return (
            <div className="Full-wrapper">
                <div style={{display: showResults}} className={`Results ${this.state.classNames}`}>
                    <div className="Lists-wrapper">
                        <div className="Role-header" title="(or equivalent left-side answer role)">{this.state.p1_name + " Tops"}, {this.state.p2_name + " Bottoms"}</div>
                        <div className="Results-list">
                            <div className="List-header encourage" 
                                 title="Things you are compatible on, go for it!">Compatible</div>
                            {this.state.results.p1_tops.encourage.map((result) => {
                                return  <div className="List-item encourage">
                                            <div className="List-kink">{result[0]}</div>
                                            <div className="List-result">{result[1]}</div>
                                        </div>})}
                        </div>
                        <div className="Results-list">
                            <div className="List-header encourage-caution"
                                 title="Things you are compatible on, but that neither of you has experience with. Do your research and proceed with care and attention">Compatible, with caution</div>
                            {this.state.results.p1_tops.encourage_caution.map((result) => {
                                return  <div className="List-item encourage-caution">
                                            <div className="List-kink">{result[0]}</div>
                                            <div className="List-result">{result[1]}</div>                                        
                                        </div>})}
                        </div>
                        <div className="Results-list">
                            <div className="List-header show"
                                 title="Gray areas, and things you may want to talk about">Grey areas</div>
                            {this.state.results.p1_tops.show.map((result) => {
                                return  <div className="List-item show">
                                            <div className="List-kink">{result[0]}</div>
                                            <div className="List-result">{result[1]}</div>                                        
                                        </div>})}                                        
                        </div>
                        <div className="Results-list">
                            <div className="List-header show-caution"
                                 title="Gray areas and things you may want to talk about that neither of you has experience with">Grey areas, with caution</div>
                            {this.state.results.p1_tops.show_caution.map((result) => {
                                return  <div className="List-item show-caution">
                                            <div className="List-kink">{result[0]}</div>
                                            <div className="List-result">{result[1]}</div>                                        
                                        </div>})}                                        
                        </div>
                        <div className="Results-list">
                            <div className="List-header warn"
                                 title="Conflicting limits and wants, it is important for you two to discuss these">Conflicts to discuss</div>
                            {this.state.results.p1_tops.warn.map((result) => {
                                return  <div className="List-item warn">
                                            <div className="List-kink">{result[0]}</div>
                                            <div className="List-result">{result[1]}</div>                                        
                                        </div>})}                                        
                        </div>
                        <div className="Results-list">
                            <div className="List-header missing"
                                 title="One of you did not answer">No answer</div>
                            {this.state.results.p1_tops.missing.map((result) => {
                                return  <div className="List-item missing">
                                            <div className="List-kink">{result[0]}</div>
                                            <div className="List-result">{result[1]}</div>                                        
                                        </div>})}                                        
                        </div>
                    </div>
                    <div className="Lists-wrapper">
                        <div className="Role-header" title="(or equivalent left-side answer role)">{this.state.p2_name + " Tops"}, {this.state.p1_name + " Bottoms"}</div>
                        <div className="Results-list">
                            <div className="List-header encourage" 
                                 title="Things you are compatible on, go for it!">Compatible</div>
                            {this.state.results.p2_tops.encourage.map((result) => {
                                return  <div className="List-item encourage">
                                            <div className="List-kink">{result[0]}</div>
                                            <div className="List-result">{result[1]}</div>                                        
                                        </div>})}                                        
                        </div>
                        <div className="Results-list">
                            <div className="List-header encourage-caution"
                                 title="Things you are compatible on, but that neither of you has experience with. Do your research and proceed with care and attention">Compatible, with caution</div>
                            {this.state.results.p2_tops.encourage_caution.map((result) => {
                                return  <div className="List-item encourage-caution">
                                            <div className="List-kink">{result[0]}</div>
                                            <div className="List-result">{result[1]}</div>                                        
                                        </div>})}                                        
                        </div>
                        <div className="Results-list">
                            <div className="List-header show"
                                 title="Gray areas, and things you may want to talk about">Grey areas</div>
                            {this.state.results.p2_tops.show.map((result) => {
                                return  <div className="List-item show">
                                            <div className="List-kink">{result[0]}</div>
                                            <div className="List-result">{result[1]}</div>                                        
                                        </div>})}                                        
                        </div>
                        <div className="Results-list">
                            <div className="List-header show-caution"
                                 title="Gray areas and things you may want to talk about that neither of you has experience with">Grey areas, with caution</div>
                            {this.state.results.p2_tops.show_caution.map((result) => {
                                return  <div className="List-item show-caution">
                                            <div className="List-kink">{result[0]}</div>
                                            <div className="List-result">{result[1]}</div>                                        
                                        </div>})}                                        
                        </div>
                        <div className="Results-list">
                            <div className="List-header warn"
                                 title="Conflicting limits and wants, it is important for you two to discuss these">Conflicts to discuss</div>
                            {this.state.results.p2_tops.warn.map((result) => {
                                return  <div className="List-item warn">
                                            <div className="List-kink">{result[0]}</div>
                                            <div className="List-result">{result[1]}</div>                                        
                                        </div>})}                                        
                        </div>
                        <div className="Results-list">
                            <div className="List-header missing"
                                 title="One of you did not answer">No answer</div>
                            {this.state.results.p2_tops.missing.map((result) => {
                                return  <div className="List-item missing">
                                            <div className="List-kink">{result[0]}</div>
                                            <div className="List-result">{result[1]}</div>                                        
                                        </div>})}                                        
                        </div>
                    </div>
                </div>
                <div className={`Form ${this.state.classNames}`}
                         onAnimationEnd={this.onAnimationEnd}
                         onAnimationStart={this.onAnimationStart}>
                    <div className="Question">
                        <div className="QHeader" onChange={this.saveAnswers}>
                            <div className="role role-left">{kinks[this.state.kink_index].left}</div>
                            <div className="kink" title={kinks[this.state.kink_index].tooltip}>
                                {kinks[this.state.kink_index].name}
                            </div>
                            <div className="role role-right">{kinks[this.state.kink_index].right}</div>
                        </div>
                        
                        <div className="Option-container">
                            <input type="radio" value="left 1" name="left" id="left 1" className="left 1" onChange={this.setLeft.bind(this,7)} checked={(this.state.left === 7)} /><label for="left 1"></label>
                            <div className="Option" title="Hard limit">Hard limit - I would never do this</div>
                            <input type="radio" value="right 1" name="right" id="right 1" className="right 1" onChange={this.setRight.bind(this,7)} checked={(this.state.right === 7)} /><label for="right 1"></label>
                        </div>
                        <div className="Option-container">
                            <input type="radio" value="left 2" name="left" id="left 2" className="left 2" onChange={this.setLeft.bind(this,6)} checked={(this.state.left === 6)} /><label for="left 2"></label>
                            <div className="Option" title="Soft limit">I would consider this only if it was important to my partner</div>
                            <input type="radio" value="right 2" name="right" id="right 2" className="right 2" onChange={this.setRight.bind(this,6)} checked={(this.state.right === 6)} /><label for="right 2"></label>
                        </div>
                        <div className="Option-container">
                            <input type="radio" value="left 3" name="left" id="left 3" className="left 3" onChange={this.setLeft.bind(this,5)} checked={(this.state.left === 5)} /><label for="left 3"></label>
                            <div className="Option" title="Willing to indulge">Not my thing by itself- but if my partner likes it, I'm game</div>
                            <input type="radio" value="right 3" name="right" id="right 3" className="right 3" onChange={this.setRight.bind(this,5)} checked={(this.state.right === 5)} /><label for="right 3"></label>
                        </div>
                        <div className="Option-container">
                            <input type="radio" value="left 4" name="left" id="left 4" className="left 4" onChange={this.setLeft.bind(this,4)} checked={(this.state.left === 4)} /><label for="left 4"></label>
                            <div className="Option" title="Willing to try">I would give this a try</div>
                            <input type="radio" value="right 4" name="right" id="right 4" className="right 4" onChange={this.setRight.bind(this,4)} checked={(this.state.right === 4)} /><label for="right 4"></label>
                        </div>
                        <div className="Option-container">
                            <input type="radio" value="left 5" name="left" id="left 5" className="left 5" onChange={this.setLeft.bind(this,3)} checked={(this.state.left === 3)} /><label for="left 5"></label>
                            <div className="Option" title="Curiosity">I think I might like this</div>
                            <input type="radio" value="right 5" name="right" id="right 5" className="right 5" onChange={this.setRight.bind(this,3)} checked={(this.state.right === 3)} /><label for="right 5"></label>
                        </div>
                        <div className="Option-container">
                            <input type="radio" value="left 6" name="left" id="left 6" className="left 6" onChange={this.setLeft.bind(this,2)} checked={(this.state.left === 2)} /><label for="left 6"></label>
                            <div className="Option" title="Fantasy">It is important to me to try this</div>
                            <input type="radio" value="right 6" name="right" id="right 6" className="right 6" onChange={this.setRight.bind(this,2)} checked={(this.state.right === 2)} /><label for="right 6"></label>
                        </div>
                        <div className="Option-container">
                            <input type="radio" value="left 7" name="left" id="left 7" className="left 7" onChange={this.setLeft.bind(this,1)} checked={(this.state.left === 1)} /><label for="left 7"></label>
                            <div className="Option" title="Kink">I know that I like this</div>
                            <input type="radio" value="right 7" name="right" id="right 7" className="right 7" onChange={this.setRight.bind(this,1)} checked={(this.state.right === 1)} /><label for="right 7"></label>
                        </div>
                        <div className="Option-container">
                            <input type="radio" value="left 8" name="left" id="left 8" className="left 8" onChange={this.setLeft.bind(this,0)} checked={(this.state.left === 0)} /><label for="left 8"></label>
                            <div className="Option" title="Essential">This is important or essential to me</div>
                            <input type="radio" value="right 8" name="right" id="right 8" className="right 8" onChange={this.setRight.bind(this,0)} checked={(this.state.right === 0)} /><label for="right 8"></label>
                        </div>
                        <div className="Nav-panel">
                            <button onClick={this.goPrev} className="prev">Prev</button>
                            <div className="progress">{this.state.kink_index + 1}/{kinks.length}</div>
                            <button onClick={this.goNext} className="next">Next</button>
                        </div>
                        <div className="Submit-panel">
                            { this.state.show_submit ? <button onClick={this.submit} className="submit-button">Generate hash</button> : null}
                        </div>
                        <div className="Hash-panel">
                            <button onClick={this.copyHash} className="Copy-hash">Copy</button>
                            <div className="Hash-display">{this.state.hash}</div>
                        </div>
                        <div className="Compare-panel">
                            <div className="Compare-textinputcontainer">
                                <div className="Compare-container" ><label className="Compare-label">Person 1: </label>
                                    <input type="text" value={this.state.p1_name} ref={this.p1_name} className="Compare-name" onChange={this.onName1Change}/>
                                    <input type="text" ref={this.your_hash} className="Compare-text" placeholder={this.state.p1_name+"'s hash"}/>
                                </div>
                                <div className="Compare-container"><label className="Compare-label">Person 2: </label>
                                    <input type="text" value={this.state.p2_name} ref={this.p2_name} className="Compare-name" onChange={this.onName2Change}/>
                                    <input type="text" ref={this.partner_hash} className="Compare-text" placeholder={this.state.p2_name+"'s hash"}/>
                                </div>
                            </div>
                            <button onClick={this.compareHashes} className="Compare-button">Compare</button>
                        </div>
                    </div>
                </div>
                <div className="Completed-number">{(kinks.length*2) - this.state.num_missing}/{kinks.length*2}</div>
            </div>
        )
    }
}


// The links at the top of the page that have the settings and options and stuff, 
// NOTE: currently disabled because it's not finished
class Options extends React.Component {
    constructor(i) {
        super();
        this.state = {
            name: "React",
            about_open: false,
            instructions_open: false,
            restore_open: false,
            restore_report: "",
            report_color: "red"
        }
        this.toggleAbout = this.toggleAbout.bind(this);
        this.toggleInstructions = this.toggleInstructions.bind(this);
        this.toggleRestore = this.toggleRestore.bind(this);
        this.restoreAnswers = this.restoreAnswers.bind(this);
        this.restore_hash = React.createRef();
    };
    
    aboutPanel() {
        console.log("hello");
    };
    
    instructionsPanel() {
        console.log("settings");
    };
    
    toggleAbout (event) {
        this.setState({about_open: !this.state.about_open});
        this.setState({instructions_open: false});
    }
    
    toggleInstructions (event) {
        this.setState({instructions_open: !this.state.instructions_open});
        this.setState({about_open: false});
    }
    
    toggleRestore (event) {
        this.setState({restore_open: !this.state.restore_open});
    }
    
    restoreAnswers() {
        let answers = null;
        try {
            answers = LZString.decompressFromBase64(this.restore_hash.current.value)
        } catch (error) {
            this.setState({restore_report: "Invalid hash: failed to decode from base 64"});
        }
        if (answers === null || answers === "") {
            this.setState({restore_report: "Invalid hash: cannot decode from base 64"});
            return
        }
        if (answers.match(/[^$,.\d]/)) {
            this.setState({restore_report: "Invalid hash: decoded hash contained invalid characters"});
            return
        }
        if (answers.length !== kinks.length*2) {
            this.setState({restore_report: "Invalid hash: incorrect number of answers"});
            return
        }
        
        for (let i=0; i < kinks.length; i++) {
            kinks[i].answer_left = answers[i*2];
            kinks[i].answer_right = answers[(i*2)+1];
        }
        
        this.setState({
            restore_report: "Successfully imported answers",
            report_color: "green"
        });
        
    }
    
    render() {
        return (
            <div className="Links">
                    <div className="Link about" onClick={(event)=>this.toggleAbout(event)}>
                        About
                    </div>
                    {this.state.about_open ? (
                    <>
                        <div className="Panel-shadow" onClick={(event)=>this.toggleAbout(event)}></div>
                        <div className="Panel About-panel">
                                im gay lol
                                <br /><br />
                                nothing in this page is ever recorded or sent to a server, it is all open source and client-side, I do not store or process any data from this app
                                <br /><br />
                                if you have questions or suggestions, you can direct them to me on fetlife, my username is "Marten", or you could send me an email at pinemartenavatar@gmail.com (although I rarely check that)
                        </div>
                    </>
                    ) : null}
                    
                    <div className="Link instructions" onClick={(event)=>this.toggleInstructions(event)}>
                        Instructions
                    </div>
                    {this.state.instructions_open ? (
                    <>
                        <div className="Panel-shadow" onClick={(event)=>this.toggleInstructions(event)}></div>
                        <div className="Panel Instructions-panel">
                            Fill out the survey, and then hit "generate hash". This will generate a string which you can then copy and send to your partner. Once you have both hashes, paste them (along with your names, if you'd like to make things easier to read) into the text fields below and hit the "compare" button.
                            <br/><br/>

                            <ul><strong>NOTES</strong>
                                <li>
                                    In it's current state, you cannot get back once you have hit the compare button! Also: because nothing is saved, you cannot refresh to page, so make sure you save your hash. I'll add a "regenerate answers from hash" functionality later, I swear
                                </li>
                                <li>
                                    Aren't familiar with a kink? I've added mouse-over tooltip text to most of the entries on this list which explain each one
                                </li>
                                <li>
                                    If an act or kink is physically impossible for you or your partner for whatever reason, mark it as a hard limit
                                </li>
                                <li>
                                    For kinks in which there are not two roles, simply answer the same thing for both columns
                                </li>
                                <li>
                                    For kinks in which there aren't roles, such as "chance of getting caught", you may still select different "as top" and "as bottom" choices, as those reflect how you'd feel in those situations when topping or bottoming for whatever else is happening during that scene
                                </li>
                            </ul>                                      
                        </div>
                    </>
                    ) : null}
                    <div className="Link restore" onClick={(event)=>this.toggleRestore(event)}>
                        Restore
                    </div>
                
                    {this.state.restore_open ? (
                        <>
                            <div className="Panel-shadow" onClick={(event)=>this.toggleRestore(event)}></div>
                            <div className="Panel Restore-panel">
                                <div>You can put in a hash here to restore the answers stored in that hash, allowing you to edit those answers and generate a new hash. NOTE: this works but it's mega janky right now, it won't show the answers until you scrub past them and then return to that question for mysterious reasons. You should still see the counter in the top left go up, though.</div>
                                <input type="text" ref={this.restore_hash} className="Restore-text" placeholder="Hash you want to restore to"/>
                                <button className="Restore-button" onClick={this.restoreAnswers}>Restore answers</button>
                            <div style={{color: this.state.report_color}}>{this.state.restore_report}</div>
                            </div>
                        </>
                    ) : null}
                    
            </div>
        )
    };
                
}

// This is irrelephant but I'd have to rewrite a bunch of css in order to change it so I'm not gonna
class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            hash: "",
        };
    };
    
    render() {
        
        
        return (
            <>      
                    <Options />
                    <Question />
            </>
        )
    }
}


ReactDOM.render(
        <>
            <Form />
        </>   
    ,
    document.getElementById('root')
);

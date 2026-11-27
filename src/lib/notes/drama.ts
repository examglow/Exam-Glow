import type { SubjectNotes } from "./types";

/**
 * Cambridge IGCSE Drama (9–1) (0994) / (0411) 2029–2031 Syllabus Notes
 * Covers Staging & Spaces, Practitioners, Devising, Script & Character, Design Elements, and Performance.
 * Strictly text-only with zero figures.
 */
export const DRAMA: SubjectNotes = {
  id: "drama",
  name: "Drama (9–1)",
  code: "0994",
  color: "bg-purple-600",
  chapters: [
    {
      number: 1,
      title: "Theatre Spaces, Staging & Audience Dynamics",
      section: "Theatre in Context",
      topic: "Stage Configurations, Proxemics, Sightlines, and Audience Relationships",
      intro:
        "The physical architecture of a performance space fundamentally dictates the relationship between actors and audience. This chapter explores various theatre configurations (proscenium, thrust, arena, traverse, site-specific) and the spatial dynamics of staging drama.",
      subheadings: [
        {
          title: "Performance Spaces and Stage Configurations",
          body:
            "**1. Major Theatre Configurations:**\n" +
            "- **Proscenium Arch:** Traditional 'picture frame' stage with clear separation between audience and performance; creates fourth-wall illusion; ideal for elaborate sets and spectacle, but limits intimacy.\n" +
            "- **Thrust Stage:** Stage extends into the auditorium on three sides; audience wraps around; provides high intimacy while retaining a back wall for sets; actors must project in three directions.\n" +
            "- **In-the-Round (Arena):** Audience surrounds the acting area on all 360 degrees; maximum intimacy; no tall scenery permitted to avoid blocking sightlines; movement must be fluid and rotational.\n" +
            "- **Traverse (Corridor):** Audience seated on two opposite sides with stage running down the middle; ideal for confrontations, courtroom scenes, and cat-walk journeys; sightlines are mirrored.\n" +
            "- **Promenade & Site-Specific:** Audience moves through physical environments with performers or takes place in non-theatre venues (abandoned factories, parks), dissolving theatrical boundaries.\n\n" +
            "**2. Areas of the Stage:**\n" +
            "- Upstage (US), Downstage (DS), Stage Left (SL), Stage Right (SR), Center Stage (CS), from the actor's perspective facing the auditorium.",
          examinerTips: [
            "Stage directions (Upstage/Downstage) are always from the actor's perspective, not the director's or audience's.",
            "Explain how chosen stage types directly influence blocking decisions and audience emotional connection."
          ],
          commonMistakes: [
            "Confusing Stage Left and Stage Right with the audience's left and right.",
            "Recommending tall backdrops on an in-the-round stage."
          ],
          recap: [
            "Proscenium offers spectacle; thrust and arena maximize intimacy.",
            "Stage directions are oriented from actor perspective facing audience.",
            "Stage configuration dictates sightlines and scenic restrictions."
          ]
        },
        {
          title: "Proxemics, Levels, and Stage Geometry",
          body:
            "**1. Proxemics (Spatial Relationships):**\n" +
            "- Physical distance between characters communicates status, tension, intimacy, or alienation.\n" +
            "- Sudden changes in proxemics (e.g. an intimidating step forward invading personal space) heighten dramatic tension.\n\n" +
            "**2. Levels and Vertical Staging:**\n" +
            "- Using rostra, stairs, balconies, or kneeling to signify hierarchy, divine authority, or subjugation.\n" +
            "- A dominant character occupying high levels commands visual authority over characters seated below.\n\n" +
            "**3. Stage Geometry:**\n" +
            "- Triangulation (focal point at apex), circular blocking (equality/enclosure), linear arrangements (formal confrontation).",
          examinerTips: [
            "In written exam questions on directing, justify why you placed a character Upstage Center on a platform.",
            "Describe the psychological impact of levels on audience interpretation of power dynamics."
          ],
          commonMistakes: [
            "Leaving all actors standing flat in a straight horizontal line across the stage.",
            "Using levels randomly without thematic meaning."
          ],
          recap: [
            "Proxemics visualizes interpersonal conflict and intimacy.",
            "Vertical levels communicate authority and power hierarchies.",
            "Stage geometry guides audience visual focus."
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Theatre Practitioners and Performance Theories",
      section: "Theatrical Traditions",
      topic: "Stanislavski, Brecht, Artaud, Physical Theatre, and Stylistic Approaches",
      intro:
        "The history of modern theatre is shaped by revolutionary practitioners who challenged performance conventions. Understanding naturalism, epic theatre, physical theatre, and non-naturalistic styles enriches both performance and critical analysis.",
      subheadings: [
        {
          title: "Konstantin Stanislavski and Psychological Realism",
          body:
            "**1. Foundations of Naturalistic Performance:**\n" +
            "- **The Magic 'If':** The actor asks *'What would I do if I were in this character\'s circumstances?'*, bridging imagination and personal truth.\n" +
            "- **Given Circumstances:** The factual background provided by the playwright (historical period, social class, relationships, prior events) that frames behavior.\n" +
            "- **Objectives and Super-Objective:** What the character wants to achieve in a specific beat (objective) and throughout the entire play (super-objective).\n" +
            "- **Obstacles and Actions:** Obstacles stand in the way of objectives; characters use physical/verbal tactics (actions) to overcome them.\n" +
            "- **Emotional Memory & Subtext:** Accessing personal sensory experiences to ground authentic emotional reactions.",
          examinerTips: [
            "When analyzing scripted extracts, identify the character's immediate objective and the obstacle in the scene.",
            "Distinguish between internal subtext (what is felt) and spoken dialogue (what is said)."
          ],
          commonMistakes: [
            "Describing Stanislavski's system as mere emotional indulgence without rigorous textual preparation.",
            "Confusing an objective (goal) with an emotion (state)."
          ],
          recap: [
            "Magic 'If' bridges personal truth with dramatic roles.",
            "Given circumstances anchor realistic motivations.",
            "Characters drive scenes through objectives and tactical actions."
          ]
        },
        {
          title: "Bertolt Brecht and Epic / Non-Naturalistic Theatre",
          body:
            "**1. Epic Theatre and the Alienation Effect (Verfremdungseffekt):**\n" +
            "- Brecht rejected passive emotional absorption, seeking an active, critically thinking audience that interrogates social injustice.\n" +
            "- **Verfremdungseffekt (V-Effect):** Making the familiar strange so the audience questions human behavior.\n\n" +
            "**2. Brechtian Theatrical Devices:**\n" +
            "- **Placards & Projections:** Displaying scene titles, historical facts, or warnings before scenes begin.\n" +
            "- **Breaking the Fourth Wall:** Directly addressing the audience, narrating events, or stepping out of character.\n" +
            "- **Gestus:** A physical gesture combining social status and moral attitude (e.g. a soldier counting money while people mourn).\n" +
            "- **Spass (Fun/Satire):** Using grotesque comedy and parody to expose political hypocrisy.\n" +
            "- **Visible Theatricality:** Keeping stage lights exposed and costume changes visible to remind audiences they are watching a play.",
          examinerTips: [
            "Explain how a Brechtian device makes the audience think politically rather than just feel emotionally.",
            "Provide specific examples of 'Gestus' in your devised drama descriptions."
          ],
          commonMistakes: [
            "Assuming Brecht wanted totally boring acting; Brechtian acting is dynamic, energetic, and highly entertaining.",
            "Confusing Brecht's Epic Theatre with Stanislavski's emotional realism."
          ],
          recap: [
            "Brecht stimulates critical social thinking over emotional catharsis.",
            "Alienation devices include placards, narration, and visible stagecraft.",
            "Gestus crystallizes social class attitudes through physical action."
          ]
        }
      ]
    },
    {
      number: 3,
      title: "Devising and Improvisation Skills",
      section: "Creative Process",
      topic: "Stimuli, Structuring Drama, Devising Techniques, and Rehearsal Methods",
      intro:
        "Devising is the collaborative process of creating original drama from starting stimuli (images, historical events, poems, music, objects). Successful devising relies on imaginative exploration, dynamic structure, and continuous critical refinement.",
      subheadings: [
        {
          title: "Working from Stimuli and Generating Material",
          body:
            "**1. Types of Dramatic Stimuli:**\n" +
            "- **Visual:** Photographs, paintings, sculptures, archival newspaper clippings.\n" +
            "- **Auditory:** Songs, instrumental music, ambient soundscapes, voice recordings.\n" +
            "- **Textual:** Poems, diary extracts, legal transcripts, folklore, statistics.\n" +
            "- **Physical:** Props, unusual costumes, everyday objects transformed symbolically.\n\n" +
            "**2. Exploratory Techniques:**\n" +
            "- **Hot-seating:** Questioning an actor in-character to uncover backstory, secrets, and internal motivations.\n" +
            "- **Still Images (Tableaux):** Sculpting physical freeze-frames to capture frozen moments of high tension or social relationships.\n" +
            "- **Conscience Alley:** A protagonist walks down a corridor formed by other actors who whisper opposing moral arguments.",
          examinerTips: [
            "In devised coursework logs, describe how your group pushed past obvious initial ideas to find deeper metaphorical meaning in the stimulus.",
            "Explain how a specific hot-seating exercise changed your character's vocal or physical choices."
          ],
          commonMistakes: [
            "Producing linear soap-opera style drama rather than exploring theatrical metaphors.",
            "Writing a rigid script before physically exploring the stimulus on stage."
          ],
          recap: [
            "Explore diverse stimuli: visual, auditory, textual, and physical.",
            "Use hot-seating and still images to uncover subtext.",
            "Devising requires physical on-stage exploration before script lock."
          ]
        },
        {
          title: "Structuring and Refining Devised Work",
          body:
            "**1. Narrative Structures:**\n" +
            "- **Linear (Chronological):** Traditional progression from exposition to rising action, climax, and falling resolution.\n" +
            "- **Non-Linear:** Using flashbacks, flash-forwards, parallel storylines, split-scenes, or episodic montage.\n\n" +
            "**2. Transition Techniques:**\n" +
            "- Cross-fading, sound bridges, physical morphing between characters, synchronized movement, snap blackouts.\n\n" +
            "**3. Rehearsal and Editing Process:**\n" +
            "- Editing out redundant dialogue; showing meaning through physical action rather than exposition.",
          examinerTips: [
            "Use non-linear devices (like split-screen or physical montage) to heighten dramatic contrast in your coursework.",
            "Smooth transitions between scenes are heavily rewarded in devised performance moderation."
          ],
          commonMistakes: [
            "Awkward, prolonged blackouts for furniture moves that kill dramatic momentum.",
            "Excessive talking heads where characters explain the plot rather than dramatize it."
          ],
          recap: [
            "Experiment with non-linear timelines and parallel staging.",
            "Design fluid theatrical transitions without blackouts.",
            "Show internal conflict through action rather than verbal exposition."
          ]
        }
      ]
    },
    {
      number: 4,
      title: "Script Interpretation, Voice & Characterisation",
      section: "Acting & Directing",
      topic: "Text Analysis, Vocal Modulation, Physicality, Subtext, and Interaction",
      intro:
        "Interpreting published plays requires decoding dialogue, identifying implied subtext, and making conscious vocal and physical acting choices to bring dramatic characters vividly to life on stage.",
      subheadings: [
        {
          title: "Vocal Modulation and Expressive Delivery",
          body:
            "**1. Dimensions of Vocal Technique:**\n" +
            "- **Pitch:** High (panic, youth, anxiety) vs. Low (authority, grief, menace).\n" +
            "- **Pace / Tempo:** Fast (excitement, hysteria) vs. Slow (deliberation, solemnity, dread).\n" +
            "- **Volume / Dynamics:** Whispers (intimacy, conspiracy) vs. Shouts (fury, terror, dominance).\n" +
            "- **Tone & Timbre:** Harsh, warm, sarcastic, trembling, nasal, authoritative, breathy.\n" +
            "- **Pause:** Dramatic silence before a revelation or after a devastating blow.\n" +
            "- **Articulation & Diction:** Crisp consonant delivery ensuring audibility in large auditoriums.",
          examinerTips: [
            "In written exams, quote specific lines and describe exactly how pitch, pace, and volume shift to convey emotional turns.",
            "Analyze how pausing heightens suspense or reveals a character struggling to find words."
          ],
          commonMistakes: [
            "Using generic statements like 'I would speak loudly' without detailing pitch, tone, and rationale.",
            "Delivering lines in a monotone without vocal variation."
          ],
          recap: [
            "Vary pitch, pace, volume, and tone to convey emotional nuance.",
            "Deliberate pauses highlight subtext and shock.",
            "Crisp articulation ensures audibility."
          ]
        },
        {
          title: "Physicality, Movement, and Facial Expression",
          body:
            "**1. Physical Characterisation Tools:**\n" +
            "- **Gait & Posture:** Upright and rigid (military, pride) vs. Stooped and heavy (exhaustion, defeat, old age).\n" +
            "- **Gestures:** Open, expansive gestures (confidence, generosity) vs. Closed, self-protective gestures (anxiety, deceit).\n" +
            "- **Facial Expression & Eye Contact:** Sustained piercing gaze vs. darting evasive glances.\n" +
            "- **Spatial Movement:** Purposeful strides vs. hesitant shuffling; leading with the chest, head, or hips.",
          examinerTips: [
            "Specify leading body centers (e.g. leading with the chin denotes arrogance; leading with the chest denotes swagger).",
            "Explain how an actor's physical stillness can be more commanding than frantic movement."
          ],
          commonMistakes: [
            "Forgetting to describe facial expression and posture in written directing answers.",
            "Fidgeting on stage instead of maintaining controlled, purposeful physicality."
          ],
          recap: [
            "Posture and gait reflect age, status, and emotional states.",
            "Controlled stillness creates dramatic focus.",
            "Facial expressions and eye contact communicate deceit or vulnerability."
          ]
        }
      ]
    },
    {
      number: 5,
      title: "Technical Design: Lighting, Sound, Set & Costume",
      section: "Production & Design",
      topic: "Lighting Lanterns, Colour Psychology, Soundscapes, Set Architecture, and Costume",
      intro:
        "Technical design transforms dramatic texts into multi-sensory theatrical experiences. Lighting, sound, set, and costume work in harmony with acting to establish time, location, mood, symbolism, and atmosphere.",
      subheadings: [
        {
          title: "Stage Lighting and Sound Design",
          body:
            "**1. Lighting Equipment and Functions:**\n" +
            "- **Fresnel:** Soft-edged beam, excellent for general ambient color washes.\n" +
            "- **Profile Spot:** Hard-edged, precise beam; can project patterns using metal stencils (**gobos**) and sharp spot isolation.\n" +
            "- **Parcan:** Intense, punchy beam ideal for dramatic saturated color or concert effects.\n" +
            "- **Color Psychology & Angles:** Warm ambers/yellows (comfort, sunset) vs. Cold blues/cyans (isolation, winter, clinical dread); Backlighting creates stark dramatic silhouettes.\n\n" +
            "**2. Sound Design:**\n" +
            "- **Diegetic Sound:** Sounds existing within the fictional world that characters hear (doorbell, telephone ringing, footsteps).\n" +
            "- **Non-Diegetic Sound:** Sound heard only by the audience (underscoring music, abstract heartbeats, discordant strings) heightening mood.",
          examinerTips: [
            "Name specific lanterns (Profile, Fresnel) and technical terms (gobo, gel, fade, snap blackout) in design answers.",
            "Explain how non-diegetic sound reveals character internal panic or rising tension."
          ],
          commonMistakes: [
            "Just saying 'the lights go blue' without naming lantern types, angles, or intensity percentages.",
            "Overusing sudden blackouts for minor transitions."
          ],
          recap: [
            "Profiles give sharp edges; Fresnels give soft washes; gobos project textures.",
            "Color temperatures trigger psychological responses.",
            "Diegetic sounds are in-world; non-diegetic sounds underscore mood."
          ]
        },
        {
          title: "Set Design, Props, and Costume / Makeup",
          body:
            "**1. Set Design and Architecture:**\n" +
            "- Naturalistic box sets (realistic walls, doors, domestic furnishings) vs. Abstract/Minimalist sets (symbolic scaffoldings, single evocative chair, multi-level platforms).\n" +
            "- Materials and textures: weathered timber (poverty, decay) vs. polished steel/glass (corporate power, sterility).\n\n" +
            "**2. Costume, Hair, and Makeup:**\n" +
            "- Period accuracy vs. conceptual timelessness.\n" +
            "- Color coding characters (e.g. monochromatic corporate attire vs. vibrant bohemian fabrics).\n" +
            "- Distressing costumes to show physical hardship, battle damage, or declining social status.",
          examinerTips: [
            "Describe how set design facilitates actor movement (entrances, exits, sightlines).",
            "Detail fabrics and textures in costume design (e.g. coarse burlap vs. delicate silk) to reveal socio-economic standing."
          ],
          commonMistakes: [
            "Cluttering the stage with so much furniture that actors cannot move safely.",
            "Treating costume purely as fashion rather than character revelation."
          ],
          recap: [
            "Set architecture ranges from realistic box sets to abstract platforms.",
            "Costume fabrics and distress levels convey socio-economic status.",
            "Design elements must actively support actor movement and storytelling."
          ]
        }
      ]
    },
    {
      number: 6,
      title: "Written Examination & Performance Evaluation",
      section: "Examination Strategy",
      topic: "Section A Short Answers, Section B Extended Directing/Acting, and Coursework Review",
      intro:
        "Succeeding in the written examination (Paper 1) requires clear, analytical prose that visualizes live performance. Candidates must answer as actors, directors, or designers, justifying artistic choices with reference to text and audience impact.",
      subheadings: [
        {
          title: "Structuring Written Exam Answers (Section A & Section B)",
          body:
            "**1. Section A (Short & Medium Response Strategy):**\n" +
            "- Focus directly on vocal, physical, or design suggestions with exact quotes.\n" +
            "- Formula: Quote/Moment -> Specific Performance Choice (Pitch/Pace/Movement) -> Subtext/Emotion -> Intended Audience Impact.\n\n" +
            "**2. Section B (Extended Director / Actor Essay Strategy):**\n" +
            "- Adopt the requested role (Director, Actor playing Character X, or Designer).\n" +
            "- Outline your overarching directorial concept for the scene before diving into detailed beat-by-beat analysis.\n" +
            "- Analyze proxemics, lighting transitions, and vocal crescendos across the extract.",
          examinerTips: [
            "Always link your performance choices to the playwright's underlying dramatic intention.",
            "Use precise theatrical vocabulary: proxemics, intonation, upstage, subtext, status."
          ],
          commonMistakes: [
            "Writing a literary analysis essay instead of practical theatrical performance advice.",
            "Forgetting to specify the actor's physical and vocal actions when answering from a director's perspective."
          ],
          recap: [
            "Follow the Formula: Text -> Performance Choice -> Subtext -> Audience Effect.",
            "Directing essays require an overarching artistic concept.",
            "Maintain theatrical focus throughout written examination papers."
          ]
        },
        {
          title: "Evaluating Devised and Scripted Performances",
          body:
            "**1. Reflective Self-Evaluation Criteria:**\n" +
            "- How effectively did our vocal and physical choices communicate character status to the audience?\n" +
            "- Did our stage blocking and proxemics enhance dramatic tension during the climax?\n" +
            "- How did technical lighting and sound cues elevate the emotional atmosphere?\n\n" +
            "**2. Constructive Critical Analysis:**\n" +
            "- Identifying specific rehearsal moments where changes were made based on peer feedback to resolve pacing issues or sightline obstructions.",
          examinerTips: [
            "In evaluation tasks, be honest about what did not work initially and how rehearsal troubleshooting improved the final performance.",
            "Cite audience reactions as evidence of performance success."
          ],
          commonMistakes: [
            "Giving purely self-congratulatory evaluations without analytical critique.",
            "Describing what happened in the story instead of evaluating the performance technique."
          ],
          recap: [
            "Evaluate physical, vocal, and design effectiveness objectively.",
            "Highlight rehearsal refinements driven by feedback.",
            "Measure theatrical success against audience emotional engagement."
          ]
        }
      ]
    }
  ]
};

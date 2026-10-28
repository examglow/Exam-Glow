import type { SubjectNotes } from "./types";

export const MUSIC: SubjectNotes = {
  id: "music",
  name: "Music",
  code: "0410",
  color: "bg-purple-500",
  chapters: [
    {
      number: 1,
      title: "The Elements of Music",
      intro:
        "**What is this topic all about?** Every sound you hear in a piece of music can be described using seven elements: pitch, rhythm, dynamics, timbre, texture, structure and tempo. Examiners never ask 'is this music good?' — they ask you to describe what you hear using these elements, then explain the effect the composer creates. Professional musicians and critics use exactly the same vocabulary you will learn here, so these seven elements are the foundation for every listening answer, every composition and every performance decision in the course. Learn each element as a question you can ask of any extract: What pitch? What rhythm? How loud? What sound? How many layers? In what order? How fast?",
      subheadings: [
        {
          title: "Pitch and Melody",
          body: "Pitch describes how high or low a sound is. A pitch is produced by vibrations: the faster an object vibrates, the higher the pitch we hear. Frequency — the speed of vibration, measured in Hertz (Hz) — determines pitch; the note A above middle C has a frequency of 440 Hz, meaning the source vibrates 440 times per second. Pitches are organised into repeating sequences of the seven letter names A–G, and when the same letter name recurs higher up the instrument it sounds an octave higher (doubling the frequency). Melody is a line of single pitches organised in time — it is the part of music we hum, sing and remember, so composers spend most of their effort making melodies convincing.\n\n## How melodies are built\nA strong melody is constructed from small units: a motif is the smallest identifiable musical idea (two or three notes), and phrases are longer 'sentences' of two, four or eight bars that often pair as question (antecedent) and answer (consequent). Melodies move either by step (conjunct motion), which sounds smooth and singable, or by leap (disjunct motion), which sounds dramatic and angular. Every melody also has a register (the part of the total range it occupies), a range (the distance between its lowest and highest note) and a contour (the shape it traces, usually rising towards a climax and falling towards a point of rest).",
          groups: [
            {
              subTitle: "Pitch Fundamentals",
              bullets: [
                "**Frequency:** the speed of vibration measured in Hertz (Hz) — the faster the vibration, the higher the pitch; doubling the frequency raises a note by exactly one octave.",
                "**Octave:** the distance between two notes with the same letter name — twelve semitones apart; notes an octave apart blend because their frequencies are in a simple 2:1 ratio.",
                "**Semitone and tone:** a semitone is the smallest gap between two notes (e.g. E to F on a keyboard); a tone equals two semitones (e.g. C to D) — intervals and scales are both measured in these units.",
                "**Register:** which part of an instrument's range is being used — a violin phrase played high on the E string is 'in a high register', even though a piccolo could play higher.",
                "**Ledger lines:** short extra lines drawn above or below the five-line stave for pitches outside it — middle C sits on one ledger line below the treble stave and one above the bass stave.",
              ],
            },
            {
              subTitle: "Melodic Construction",
              bullets: [
                "**Motif:** the smallest identifiable musical idea — Beethoven's Symphony No. 5 opens with a four-note motif (short-short-short-long) that generates the whole first movement through repetition and development.",
                "**Phrase:** a musical sentence, most often two, four or eight bars long; balanced antecedent (question) and consequent (answer) phrases are the foundation of Classical melody writing.",
                "**Conjunct motion:** movement by step from one note to its neighbour — smooth and easy to sing; memorable tunes such as 'Twinkle Twinkle Little Star' move almost entirely by step.",
                "**Disjunct motion:** movement by leap — more dramatic and angular; the opening of 'The Blue Danube' contrasts soaring leaps in the strings with gentle stepwise answering phrases.",
                "**Sequence:** a motif immediately repeated at a higher or lower pitch — extends an idea while keeping it recognisable, and a favourite Baroque device.",
                "**Ostinato and drone:** a persistently repeated melodic or rhythmic pattern (ostinato) or a sustained note (drone) beneath the melody — the building blocks of Minimalism and of much world music.",
              ],
            },
            {
              subTitle: "Worked Example — Describing a Melody",
              bullets: [
                "**Model sentence:** 'The flute enters in a high register and rises mainly by step to a climax on D, then falls by leap to the tonic.'",
                "**Checklist order:** register → direction → step or leap → range → device (sequence/ostinato) → note of arrival.",
                "**Weak vs strong:** 'The tune goes up and down' earns nothing; 'The cello melody ascends by conjunct motion through a narrow range, then cadences on the tonic' earns full credit.",
              ],
            },
          ],
          examinerTips: [
            "**Element → feature → effect:** for any listening question, name the element (pitch/melody), describe the exact feature heard (register, direction, range, motion), then state the effect it creates (tension, calm, excitement).",
            "**Use precise vocabulary:** 'rises by step in a narrow range' earns marks where 'goes up a bit' earns nothing — mark schemes list technical terms and reward them.",
            "**Sing before you write:** on the second hearing, hum the melody and trace its shape in the air with a finger — your hand draws the contour you should then describe in words.",
            "**Command word check:** 'Describe' wants features only; 'Explain' wants the feature plus its effect or purpose; underline the command word before answering.",
          ],
          commonMistakes: [
            "**Confusing range with register:** range is the distance between the lowest and highest note; register is where the melody sits. The mix-up happens because both are taught together — ask 'how wide?' for range and 'how high?' for register.",
            "**Writing 'the melody goes up and down':** nearly every melody does, so this earns zero marks; always add the method of movement (by step or by leap) and the register.",
            "**Guessing 'high' when unsure:** a cello can play high and a piccolo can rest for bars; identify the instrument first, then judge register relative to that instrument's own range.",
          ],
          recap: [
            "Define pitch and state what determines whether a pitch is high or low. [3]",
            "Describe the opening melody of one piece you have studied in detail, referring to register, range and motion. [5]",
            "Explain the difference between a motif and a phrase, giving a named example of each. [4]",
            "An unfamiliar extract is played three times. Write four sentences describing the melody using correct terminology. [6]",
          ],
        },
        {
          title: "Rhythm, Metre and Tempo",
          body: "Rhythm is the pattern of long and short sounds in music, organised around a steady pulse (beat) which may be obvious or deliberately hidden. Each note has a written value showing its length relative to the beat: a semibreve lasts four beats, a minim two beats, a crotchet one beat, a quaver half a beat and a semiquaver a quarter of a beat, with matching rests for silence. Dots add half the note's value again (a dotted crotchet lasts one and a half beats) and ties join two note values into one longer sound — ties cross bar lines, dots never do. Syncopation displaces the expected accent onto a weak beat or off-beat, creating rhythmic surprise and drive, while swing rhythms delay the off-beat quavers to create a relaxed, lilting feel.\n\n## Metre and tempo\nMetre is the regular grouping of beats: duple (groups of two, e.g. 2/4), triple (groups of three, e.g. 3/4) and quadruple (groups of four, e.g. 4/4). Simple time divides each beat into two; compound time (e.g. 6/8) divides each beat into three, so 6/8 actually contains two beats, each divided into three quavers. Tempo is the speed of the beat, given in Italian terms from *Grave* (very slow) to *Prestissimo* (as fast as possible). Composers also change speed within a piece — *accelerando* (getting faster), *ritardando/rallentando* (slowing down) and *rubato* (flexible, expressive 'stolen' time).",
          groups: [
            {
              subTitle: "Note Values and Rests",
              bullets: [
                "**Semibreve (whole note):** lasts four crotchet beats — the longest note in common use; its rest hangs below the fourth line of the stave.",
                "**Minim (half note):** lasts two beats; two minims fill a bar of 2/4 — used for sustained melodies and slow-moving bass lines.",
                "**Crotchet (quarter note):** one beat — the standard counting unit in simple time signatures such as 4/4.",
                "**Quaver (eighth note):** half a beat, often beamed in groups; two quavers equal one crotchet.",
                "**Semiquaver (sixteenth note):** a quarter of a beat, beamed in groups of four — drives fast passagework in Baroque and Romantic music.",
                "**Rests, dots and ties:** rests are measured silences; a dot adds half the note's value again (dotted minim = 3 beats); a tie joins two notes into one continuous sound across a bar line.",
              ],
            },
            {
              subTitle: "Metre and Time Signatures",
              bullets: [
                "**Simple time:** each beat divides into two — 2/4 (two crotchet beats), 3/4 (three, as in a waltz), 4/4 (four, the commonest metre); the top number tells you the beats per bar, the bottom the beat unit (4 = crotchet, 8 = quaver).",
                "**Compound time:** each beat divides into three — in 6/8 there are two beats per bar, each a dotted crotchet split into three quavers; the top number is the number of divisions, not beats.",
                "**Example rhythm in 4/4:** crotchet – two quavers – crotchet – two quavers – four semiquavers – minim — one complete, balanced bar for dictation practice.",
                "**Syncopation:** accenting a weak beat or the 'and' between beats — the handclap rhythm in 'We Will Rock You' places the second clap off the beat, generating energy.",
                "**Triplets:** three notes played in the time of two — a quaver triplet squeezes three equal quavers into one crotchet beat, smoothing fast music.",
              ],
            },
            {
              subTitle: "Tempo and Tempo Change",
              bullets: [
                "**Tempo markings:** *Largo/Adagio* (slow), *Andante* (walking pace), *Moderato* (moderate), *Allegro* (fast, cheerful), *Presto/Prestissimo* (very fast) — always use the Italian term in answers.",
                "**Gradual change:** *accelerando* (gradually faster), *ritardando/rallentando* (gradually slower), often paired to shape a phrase or build to a climax.",
                "**Sudden change:** *rubato* in Romantic piano music 'borrows' time around expressive peaks; *a tempo* returns to the original speed.",
                "**Tempo and character:** tempo is not just speed but mood — the same melody feels stately at *Adagio* and joyful at *Allegro*, which is why composers choose it carefully.",
              ],
            },
          ],
          examinerTips: [
            "**Name the metre from the top number:** two beats = duple, three = triple, four = quadruple; then say simple or compound by listening to whether each beat divides into two or three.",
            "**Clap the pulse, then the rhythm:** in dictation questions, tap a steady crotchet pulse with one hand while singing back the rhythm with the other — then match what you sang to the note values on the page.",
            "**Use Italian terms for tempo:** 'fast' earns less than *Allegro*; keep a mental ladder Grave → Largo → Adagio → Andante → Moderato → Allegro → Presto to place any marking.",
            "**Element → feature → effect:** for rhythm answers, name the element, identify the feature (syncopation, dotted rhythm, triplet), then describe the effect (drive, tension, lilt).",
          ],
          commonMistakes: [
            "**Counting 6/8 as six beats:** 6/8 is two beats, each divided into three — students miscount because the top number is six; feel two big beats and the lilt sorts itself out.",
            "**Confusing ties with slurs:** a tie joins the same pitch to lengthen it; a slur curves over different pitches for smooth playing — examiners see 'tie' written where a slur is meant and award no mark.",
            "**Forgetting that a dot adds half the value:** a dotted crotchet is 1.5 beats, not 2 — errors creep in when adding bars up; write the value underneath each note when completing rhythms.",
          ],
          recap: [
            "State the number of crotchet beats in a semibreve, a dotted minim, a quaver and a semiquaver. [4]",
            "Complete the second half of a 4/4 bar given: crotchet + two quavers. [2]",
            "Explain the difference between simple time and compound time, giving one time signature example of each. [4]",
            "Define syncopation and explain the effect it creates, naming a piece where you have heard it. [4]",
            "An extract is played three times. Identify the metre and describe two rhythmic features you hear. [5]",
          ],
        },
        {
          title: "Dynamics, Articulation and Expression",
          body: "Dynamics describe how loud or soft music is, and they are the composer's main tool for creating drama and shape. The graded scale runs from *pp* (pianissimo, very soft) through *p*, *mp*, *mf* and *f* to *ff* (fortissimo, very loud), with *ppp* and *fff* for extremes. Music also moves between levels: a *crescendo* (gradually louder) builds tension, while a *diminuendo/decrescendo* (gradually softer) can create calm or withdrawal. A *sforzando* (*sfz*) is a sudden, forced accent on a single note or chord. In the Baroque era composers such as Bach used terraced dynamics — abrupt steps from loud to soft with no gradual change — largely because the harpsichord cannot swell in volume; by the Classical era the new fortepiano made true crescendos possible.\n\n## Articulation and expression\nArticulation describes how each individual note is attacked and released. *Legato* (smoothly connected) suits singing melodies; *staccato* (short and detached) adds lightness and humour; an accent (>) stresses the start of a note; *tenuto* (-) holds a note for its full value; *marcato* plays with heavy emphasis. Expression is completed by tempo flexibility (rubato), ornaments such as trills (rapid alternation of a note with its upper neighbour) and mordents, and agogic accents (slight stretching of an important note).",
          groups: [
            {
              subTitle: "The Dynamic Scale",
              bullets: [
                "**pp to ff:** *pp* (pianissimo, very soft), *p* (piano, soft), *mp* (mezzo-piano, moderately soft), *mf* (mezzo-forte, moderately loud), *f* (forte, loud), *ff* (fortissimo, very loud) — learn the ladder in order.",
                "**Crescendo:** gradually getting louder — notates as a hairpin opening to the right; used to build towards a climax, as in the opening of Beethoven's Symphony No. 5.",
                "**Diminuendo/decrescendo:** gradually getting softer — hairpin closing to the right; can suggest calm, distance or fading away, as at the end of many slow movements.",
                "**Sforzando (*sfz*):** a sudden sharp accent on one note or chord — Beethoven's favourite dramatic device, jolting the listener.",
                "**Terraced dynamics:** sudden step changes between loud and soft with no transition — a defining Baroque feature; if you hear abrupt *forte*/*piano* swaps, think continuo era.",
              ],
            },
            {
              subTitle: "Articulation Markings",
              bullets: [
                "**Legato:** smoothly connected with no gap between notes — indicated by a slur; the default for vocal-style melodies.",
                "**Staccato:** short and detached, marked with a dot above or below the note — lightens the texture, as in the playful second theme of Mozart's Eine kleine Nachtmusik.",
                "**Accent (>):** attack the note harder than its neighbours — creates rhythmic drive and emphasis.",
                "**Tenuto (-):** hold the note for its full length, sometimes slightly longer — adds weight and importance.",
                "**Marcato:** marked, emphasised and often detached — heavier than a normal accent.",
                "**Ornaments:** a trill rapidly alternates the written note with its upper neighbour; a mordent is a single rapid alternation — Baroque performers were expected to add them spontaneously.",
              ],
            },
            {
              subTitle: "Expression in Context",
              bullets: [
                "**Baroque:** terraced dynamics plus ornaments — expressive but within strict conventions; the harpsichord's fixed volume shapes the style.",
                "**Classical:** dynamic hairpins and *sforzandi* for drama; expression serves the balanced phrase structure.",
                "**Romantic:** extreme dynamic range (*ppp* to *fff*), generous rubato and heavy ornamentation — dynamics carry the emotional narrative.",
                "**Twentieth century and beyond:** composers specify precisely (e.g. *pp subito* for a sudden drop) or leave expression to chance procedures — always follow the written instruction literally.",
              ],
            },
          ],
          examinerTips: [
            "**Element → feature → effect:** 'The dynamics' is not an answer — write 'a crescendo builds through the phrase, creating anticipation before the fortissimo entry' to earn both description and effect marks.",
            "**Write the symbols AND the words:** give '*ff* (fortissimo)' so that either marking on the scheme secures the mark.",
            "**Listen for the sudden sforzando:** a single shocking accent is an easy aural identification — practise by following a score of Beethoven's Symphony No. 5 first movement while listening.",
            "**In your own performing:** observe every dynamic and articulation marking in your pieces — examiners award credit for realising the composer's expression, not just the right notes.",
          ],
          commonMistakes: [
            "**Spelling *fortissimo* with one 's':** misspelt Italian terms suggest uncertainty; learn *crescendo*, *diminuendo*, *sforzando*, *staccato*, *legato* as fixed spellings.",
            "**Confusing crescendo with diminuendo hairpins:** the open end of the hairpin points towards the louder end — sketch the hairpin in the margin of your script before answering.",
            "**Calling a sforzando a crescendo:** *sfz* is a single accented attack, not a gradual swell; students confuse them because both are 'sudden and loud', so listen for whether the volume grows or spikes.",
            "**Ignoring dynamics when performing:** a technically perfect performance played at one mezzo-forte level will always score below an expressive one — mark the dynamics in your score and exaggerate them in practice.",
          ],
          recap: [
            "List the dynamic markings from *pp* to *ff* in order. [3]",
            "Define *sforzando* and describe the effect it creates, naming a piece in which it is used. [4]",
            "Explain the difference between terraced dynamics and a crescendo, and name the period most associated with each. [4]",
            "Define legato and staccato articulation and explain why a composer might choose each. [4]",
            "An extract is played three times. Describe the dynamics and articulation, and explain one effect they create. [6]",
          ],
        },
        {
          title: "Timbre and Sonority",
          body: "Timbre (pronounced 'tam-ber') is the tone quality or 'colour' of a sound — what makes a violin and a flute playing the same note at the same loudness sound completely different. Timbre is determined by how an instrument produces sound: vibrating strings (string family), vibrating air in a tube (woodwind and brass), vibrating membranes or metal (percussion), vibrating reeds (some woodwind), or electronic oscillators (synthesizers). It is also shaped by the player's technique — the same violin sounds glassy sul ponticello (bowed near the bridge) or warm and reedy sul tasto (bowed over the fingerboard). Timbre is the element that lets you identify instruments in a listening extract before you have seen a score, and it is the element composers manipulate most when they orchestrate.\n\n## The instrumental families\nThe standard Western orchestra is organised into four families. Strings (violin, viola, cello, double bass, harp) are bowed or plucked and blend easily with each other. Woodwind (flute, oboe, clarinet, bassoon, and relatives such as the piccolo and cor anglais) are blown, giving each a distinctive reedy or airy colour. Brass (horn, trumpet, trombone, tuba) use cup-shaped mouthpieces and project a brilliant, noble sound. Percussion divides into tuned instruments (timpani, xylophone, glockenspiel, marimba) and untuned (snare drum, bass drum, tambourine, cymbals, triangle). The piano, harpsichord and organ belong to the keyboard family, and the human voice is treated as an instrument in its own right.",
          groups: [
            {
              subTitle: "Recognising Instruments by Ear",
              bullets: [
                "**Violin family:** continuous, singing tone when bowed (arco); can be glassy near the bridge (sul ponticello) or warm over the fingerboard; pizzicato (plucked) gives a dry, clicking sound.",
                "**Flute and piccolo:** breathy, edgeless tone with no reed buzz; the piccolo sounds an octave higher and cuts through an orchestra — Tchaikovsky uses it for the 'snow' in The Nutcracker.",
                "**Oboe and cor anglais:** nasal, reedy, penetrating — the oboe's bright, duck-like tone makes it easy to spot; the cor anglais is deeper and more plaintive (Dvořák's 'New World' Symphony slow movement).",
                "**Clarinet and bass clarinet:** warm, round and woody, with a smooth legato; darker than the oboe and able to swell smoothly from soft to loud.",
                "**Bassoon:** dry, reedy and slightly comic or grave — the bass voice of the woodwind; memorable bassoon solos open Stravinsky's The Rite of Spring and Mozart's Bassoon Concerto.",
                "**French horn:** rich, mellow, noble — mellower than the trumpet; its distant hunting-call quality opens countless symphonies, including Brahms's First.",
                "**Trumpet and trombone:** bright, brilliant, heroic (trumpet) or weighty and sonorous (trombone); brass as a family can overpower, so composers balance them carefully.",
                "**Tuned vs untuned percussion:** timpani give pitched, booming drumbeats with defined notes; the snare drum's rattle and the cymbals' crash are untuned colour.",
              ],
            },
            {
              subTitle: "Special Effects and Extended Techniques",
              bullets: [
                "**Pizzicato:** plucking the string instead of bowing — a dry, clicking sound (the 'snap' accompaniment in jazz and in Tchaikovsky's Fourth Symphony scherzo).",
                "**Mutes:** inserted into brass bells or clipped onto strings to soften and darken the tone — a muted trumpet in a funeral march sounds distant and menacing.",
                "**Double and triple stopping:** playing two or three strings at once on a bowed instrument — thickens the texture instantly.",
                "**Glissando:** sliding continuously from one pitch to another — on trombone or strings it sounds like a swoop; Ravel's Boléro builds on these colours.",
                "**Vibrato:** a slight, regular fluctuation of pitch that warms the tone — string players and singers vary it deliberately; heavy vibrato sounds Romantic, little vibrato sounds Classical.",
                "**Electronic timbres:** synthesizers and samplers can imitate any instrument or create entirely new sounds — the backbone of film scores and popular music since the 1980s.",
              ],
            },
            {
              subTitle: "Voices as Instruments",
              bullets: [
                "**Voice types:** soprano, mezzo-soprano, contralto (female, high to low); counter-tenor, tenor, baritone, bass (male, high to low) — a boys' unchanged voice sings treble.",
                "**Vocal colours:** head voice (light, high, flute-like), chest voice (strong, warm), falsetto (breathy male head voice), and belting (powerful, speech-like) in musical theatre.",
                "**Syllabic vs melismatic:** one note per syllable for clear storytelling; many notes per syllable for ecstatic expression — Whitney Houston's runs and Baroque ornamentation both use melisma.",
                "**Choral blend:** choirs combine voice types — the 'Hallelujah' chorus mixes homophonic blocks with imitative entries for grandeur.",
              ],
            },
          ],
          examinerTips: [
            "**Identify the family first:** on the first hearing decide strings, woodwind, brass or percussion; on the second hearing narrow to the exact instrument — a two-step process saves you from wild guesses.",
            "**Describe the sound, not just the name:** 'a nasal, reedy instrument enters' shows aural perception even if you mislabel the instrument; examiners can award the description mark separately.",
            "**Element → feature → effect:** timbre answers follow the same pattern — name the instrument, describe its tone colour and how it is played, then explain why the composer chose it (e.g. piccolo for a cold, glittering effect).",
            "**Revise with blind listening:** play instrument excerpts with your eyes closed and name each within two seconds — free online orchestration quizzes make ideal daily drills.",
          ],
          commonMistakes: [
            "**Confusing oboe and clarinet:** both are black woodwind, so students swap them; the oboe is brighter, more nasal and cannot swell smoothly, while the clarinet is warm and seamless — compare them back to back.",
            "**Forgetting the piccolo transposes:** the piccolo sounds an octave higher than written; describing a very high shrill line as 'flute' when it is piccolo costs a mark in set-work questions.",
            "**Ignoring how the note is played:** naming 'violin' when the part is pizzicato misses half the story — always add the playing technique (arco, pizzicato, muted) if you can hear it.",
            "**Listing every instrument you half-heard:** an uncertain guess-list looks worse than one confident, described identification — commit to your best answer.",
          ],
          recap: [
            "Explain what determines the timbre of a musical sound. [3]",
            "Describe how you would distinguish the oboe from the clarinet by ear. [4]",
            "Define pizzicato and explain why a composer might use it instead of bowing. [3]",
            "Name the four families of the orchestra and give two instruments from each. [4]",
            "An extract is played three times. Identify two instruments heard and describe the timbre of each. [6]",
          ],
        },
        {
          title: "Texture and Structure",
          body: "Texture describes how many layers of sound are heard at once and how they relate to each other. The four types you must know precisely are: monophonic (a single unaccompanied melody, like a solo bugle call), homophonic (a clear melody supported by chords, like a hymn or a pop ballad), polyphonic/contrapuntal (two or more independent melodies sounding together of equal interest, like a fugue or a round) and heterophonic (two or more performers playing variations of the same melody at once, common in world music). Texture is often mixed within a piece: a Baroque concerto alternates tutti (everyone, loud and homophonic) with solo episodes (thin, contrapuntal), and this contrast is itself a feature worth describing.\n\n## Structure — the architecture of music\nStructure is the overall plan of a piece — how sections are ordered and related. Composers balance repetition (familiarity), contrast (interest) and variation (development). The core forms are: binary (AB — two sections, each often repeated, as in Baroque dances), ternary (ABA — a return of opening material after contrast, as in a minuet and trio), rondo (ABACADA — a recurring refrain alternating with episodes, common in finales), strophic (the same music for every verse, as in hymns and many folk songs) and verse-chorus form (the backbone of popular songs). Classical sonata form (exposition–development–recapitulation) organises the first movement of symphonies, and theme and variations transforms a tune through successive altered statements. Structure matters because it gives the listener a mental map: recognising where you are in the form is a high-level listening skill examiners reward.",
          groups: [
            {
              subTitle: "The Four Textures",
              bullets: [
                "**Monophonic:** one melody alone, no accompaniment — a Gregorian chant, a bugle call or an unaccompanied folk singer; the purest test of a tune's strength.",
                "**Homophonic:** melody plus chordal accompaniment — hymns, choral block-writing (the 'Hallelujah' chorus openings) and most pop songs; the melody must stay clearly on top.",
                "**Polyphonic/contrapuntal:** several independent lines of equal interest woven together — rounds ('Frère Jacques'), fugues and Bach's inventions; listen for imitation between the parts.",
                "**Heterophonic:** the same melody decorated differently by several performers at the same time — a hallmark of Thai classical music and of folk fiddling traditions.",
                "**Melody-dominated homophony:** melody plus actively moving accompaniment (Alberti bass, arpeggios) — the standard Classical keyboard texture.",
              ],
            },
            {
              subTitle: "Core Musical Structures",
              bullets: [
                "**Binary (AB):** two related sections, often with each repeated (AABB) — the plan of most Baroque dance movements; the sections usually move from tonic to dominant and back.",
                "**Ternary (ABA):** contrast followed by a full return — the minuet and trio, and countless slow movements; the return of A gives satisfying symmetry.",
                "**Rondo (ABACADA…):** a catchy refrain returning between contrasting episodes — favourite finale form because it is energetic and easy to follow.",
                "**Strophic:** identical music for each verse — hymns, carols and blues; composers vary interest through the singer's decoration instead.",
                "**Verse-chorus:** alternating narrative verses with a memorable repeated chorus — the default pop structure; the chorus carries the hook.",
                "**Theme and variations / sonata form:** a tune is repeated with alterations (rhythm, harmony, texture, key), or two contrasting subjects are presented, developed and recapitulated in the tonic.",
              ],
            },
            {
              subTitle: "Texture Words for Aural Answers",
              bullets: [
                "**Thick vs thin:** count the layers — a solo flute is thin; full orchestra with doubled parts is thick; describe changes ('the texture thickens as the strings enter').",
                "**Imitation:** one part copies another's melody shortly after it sounds — the fingerprint of contrapuntal writing.",
                "**Doubling:** two instruments play the same line an octave or two apart — reinforces and colours the melody.",
                "**Ostinato layer:** a repeating pattern in one layer (bass or percussion) beneath changing material above.",
                "**Unison and octave unison:** everyone on one line — maximum power and clarity; dropping to a single solo voice is the classic thinning device.",
              ],
            },
          ],
          examinerTips: [
            "**Define before you identify:** in 'name the texture' questions, give the term AND a one-clause definition ('homophonic — a melody with chordal accompaniment') — many schemes award the definition mark separately.",
            "**Track one layer at a time:** when texture confuses you in an extract, follow the highest line on hearing one, the bass on hearing two, and ask 'is anything independent in between?' on hearing three.",
            "**Use structural letters:** describe structure as 'the opening A section returns at bar 45 after a contrasting B' — letter labels plus bar numbers are the language of mark schemes.",
            "**Say WHY the structure works:** 'the return of A provides resolution and familiarity' turns a description into evaluation and picks up the top band.",
          ],
          commonMistakes: [
            "**Calling any loud passage homophonic:** loudness is dynamics, not texture; a loud fugue is polyphonic — judge by the relationship of the lines, never by volume.",
            "**Confusing binary with ternary:** students hear 'two big ideas' and label everything AB; check whether the opening material actually RETURNS after the contrast — if it does, it is ternary.",
            "**Forgetting heterophonic exists:** most candidates never use it; when one melodic line is clearly decorated differently by several players in a world-music extract, heterophonic is often the intended answer.",
            "**Describing structure without letters or bar numbers:** 'it has a middle section and then goes back' earns little; always attach letters (ABA) and approximate bar references.",
          ],
          recap: [
            "Define the terms monophonic, homophonic, polyphonic and heterophonic, giving a musical example of each. [8]",
            "Explain the difference between binary and ternary form, and name one piece in each. [4]",
            "Listen to an extract played three times. Identify the texture and describe two features of it. [5]",
            "Describe how a composer creates contrast between sections of a rondo. [4]",
            "Analyse the structure of one set work you have studied, using letters and bar numbers. [6]",
          ],
        },
      ],
    },
    {
      number: 2,
      title: "Listening Skills and Set Works",
      intro:
        "**What is this topic all about?** The listening paper (Component 2) is worth 40% of your IGCSE and tests two things at once: whether you can hear what is happening in an extract, and whether you can describe it in the technical language of the elements. Some questions use set works you have studied in class, and some use unfamiliar music from Western classical and world traditions. You will always get several hearings of every extract, and the skill is knowing what to listen for on each play-through. This chapter trains that skill: how to identify instruments and styles, how the great Western traditions sound, how world music traditions are organised, and how to turn what you hear into marks.",
      subheadings: [
        {
          title: "Identifying Instruments and Voices",
          body: "The first skill tested in almost every listening extract is recognition: what is making the sound, and how is it being played? You are expected to know the standard Western orchestral instruments well enough to identify them from tone colour alone, to name common instrumental combinations (such as a string quartet — two violins, viola, cello — or a wind quintet — flute, oboe, clarinet, horn, bassoon), and to describe voices by type. You must also recognise the characteristic sounds of instruments from other traditions: the sitar and tabla of Indian classical music, the djembe of West Africa, the steel pans of Trinidad, the shamisen of Japan. Examiners accept 'plucked string instrument' for a harp or guitar when the tone quality is described accurately, so always pair the name with a description of the sound. Finally, listen for HOW instruments play: bowed (arco) or plucked (pizzicato), muted or open, solo or doubled, in unison or in harmony — these details convert an adequate answer into a full-mark one.\n\n## A strategy for each hearing\nWith three playings, divide the work. Hearing one: identify the main instrument or voice, the family, and the overall tempo and metre. Hearing two: concentrate on the detail the question asks about — a melody, a rhythm, a texture change — and write features down as you hear them. Hearing three: check and refine what you wrote, adding correct Italian terms and filling gaps. Never leave blanks: a reasoned guess based on tone colour can still earn the description marks even if the instrument name is wrong.",
          groups: [
            {
              subTitle: "Instruments You Must Know by Ear",
              bullets: [
                "**Strings:** violin, viola, cello, double bass, harp — warm and blending; pizzicato vs arco, sul ponticello (glassy) vs sul tasto (fluty).",
                "**Woodwind:** flute (airy, no reed), oboe (nasal, double reed), clarinet (warm, single reed, smooth swells), bassoon (dry, reedy bass); piccolo and cor anglais as their octave-transposing relatives.",
                "**Brass:** horn (mellow, distant), trumpet (brilliant, fanfare-like), trombone (powerful glissandi), tuba (deepest bass).",
                "**Percussion:** timpani (tuned drums), snare drum (rattle), bass drum, cymbals, triangle, tambourine, xylophone and glockenspiel (tuned, bright).",
                "**Keyboards and guitars:** piano (percussive, dynamic), harpsichord (plucked, fixed volume), organ (sustained, church), acoustic and electric guitars, and synthesizers.",
                "**World instruments:** sitar and sarod (India), djembe and talking drum (West Africa), steel pan (Caribbean), shakuhachi and koto (Japan), erhu (China), didgeridoo (Australia), bagpipes (Celtic regions).",
              ],
            },
            {
              subTitle: "Voices and Combinations",
              bullets: [
                "**Choral voice types:** soprano, alto, tenor, bass (SATB — soprano, alto, tenor, bass); know that 'a cappella' means voices alone with no instruments.",
                "**Solo vocal sounds:** boy soprano/treble, female belt, counter-tenor, falsetto — describe register and quality, e.g. 'a high, pure boys' voice'.",
                "**Standard ensembles:** string quartet (2 violins, viola, cello), piano trio (violin, cello, piano), wind quintet (flute, oboe, clarinet, horn, bassoon), brass quintet, rock band (vocals, guitar, bass, drums, keyboards).",
                "**Doubling and unison:** two instruments an octave apart sound 'doubled in octaves'; identical lines in several instruments sound 'in unison' — describe what you hear rather than guessing the exact scoring.",
              ],
            },
            {
              subTitle: "Listening Drill Routine",
              bullets: [
                "**Daily two-minute drill:** play a random instrument clip, write the name plus one word of tone colour — build a personal 'sound bank'.",
                "**Score-following:** follow an orchestral score while listening to hear how written parts translate into timbre — invaluable for set works.",
                "**Describe first, name second:** in the exam, write the description even when unsure of the name — 'a buzzing, reedy pipe with a drum' may secure the mark when 'shawm' would not be required.",
                "**Use the question's wording:** if it asks 'which TWO instruments play the melody?', answer with exactly two named instruments — extra guesses can cancel correct answers.",
              ],
            },
          ],
          examinerTips: [
            "**Element → feature → effect also applies to timbre:** name the instrument or voice, describe the tone quality and technique, then explain the effect (e.g. 'the muted trumpet sounds distant and menacing, warning of danger').",
            "**Answer the question asked, with the right number of items:** read the mark value — a 4-mark 'identify and describe' question usually wants two instruments described, not four listed.",
            "**Write during the music, not after:** the extract will not wait; jot fragments in hearings one and two, then polish into full sentences in hearing three.",
            "**Practise set-work recognition openings:** the first bars of each set work are the most common 'name the piece/composer' cue — make a playlist of opening 15 seconds for each.",
          ],
          commonMistakes: [
            "**Guessing instrument names wildly:** 'violin' written for every high string part reveals guessing; if uncertain, describe the tone quality precisely — the scheme often rewards accurate description.",
            "**Ignoring the 'how':** naming 'cello' when the passage is clearly pizzicato misses an easy mark — always add the playing technique you can hear.",
            "**Confusing families:** calling a clarinet a brass instrument because it is loud; judge by tone colour, not volume — reedy blown tube = woodwind regardless of power.",
            "**Forgetting transposing instruments:** the piccolo and double bass sound an octave away from written pitch, the cor anglais a fifth lower — mention the sounding effect ('very high and piercing') rather than arguing with the score.",
          ],
          recap: [
            "Name the instruments of the string quartet and the standard wind quintet. [4]",
            "Describe how you would recognise a harpsichord from a piano by ear. [3]",
            "An unfamiliar extract is played three times. Identify the main instrument heard and describe two features of its sound. [5]",
            "Explain what is meant by SATB and name one type of music that uses it. [3]",
            "Identify two instruments that play the melody in a named set work, describing how each plays. [6]",
          ],
        },
        {
          title: "Western Classical Traditions",
          body: "To answer 'suggest the period' or 'name the style' questions, you need an aural profile of each major Western tradition. Medieval music (c.1150–1450) is dominated by the unaccompanied, monophonic plainchant of the church — free-flowing rhythm and a single vocal line. Renaissance music (c.1450–1600) brings rich polyphony: vocal works such as madrigals weave four or more independent lines a cappella, often with gentle word-painting. Baroque music (c.1600–1750) is driven by basso continuo (a bass instrument plus keyboard filling in harmony), terraced dynamics, ornate melody with sequences, and contrapuntal forms like the fugue — think Bach, Handel and Vivaldi. Classical music (c.1750–1820) favours homophonic texture, balanced four-bar phrases, Alberti-bass accompaniments and clearly organised forms such as sonata form and the minuet — Haydn and Mozart are the models.\n\nThe Romantic era (c.1820–1900) expands everything: larger orchestras with new instruments, sweeping expressive melodies, dramatic dynamics, and programme music that tells a story (Berlioz, Tchaikovsky). The twentieth century and beyond breaks the old rules: you may hear atonality (no key centre), irregular metres, polytonality, jazz-influenced rhythms, minimalism with repeating patterns, or popular and film styles using verse-chorus forms. In the exam, collect three or four 'period fingerprints' for each era — an instrument or texture, a rhythm, a dynamic behaviour — and match them to what you hear.",
          groups: [
            {
              subTitle: "Period Fingerprints",
              bullets: [
                "**Medieval:** single vocal line (plainchant), Latin sacred text, free rhythm with no regular beat — monophonic and meditative.",
                "**Renaissance:** interweaving vocal polyphony, a cappella (no instruments), gentle imitation between parts, word-painting in madrigals such as those of Monteverdi and Morley.",
                "**Baroque:** basso continuo beneath everything, terraced dynamics, fast runs of equal notes, sequences, ornaments (trills), and fugue subjects announced one voice at a time.",
                "**Classical:** melody with Alberti-bass or chordal accompaniment, neat 4-bar phrases, graceful minuets, clear dynamic shading, and a 'polite' emotional range.",
                "**Romantic:** big sweeping tunes, wide dynamic extremes, rich chromatic harmony, huge brass and percussion sections, and music that 'tells a story'.",
                "**Twentieth century and beyond:** sudden style mixtures, irregular or changing metres, dissonance and atonality, recorded and electronic sounds, minimalism's hypnotic repetition, and popular styles with a backbeat.",
              ],
            },
            {
              subTitle: "Key Forms by Period",
              bullets: [
                "**Baroque forms:** the fugue (imitative counterpoint), the concerto grosso and solo concerto with ritornello structure, and the dance suite — Handel's Messiah, Bach's Brandenburg Concertos, Vivaldi's The Four Seasons.",
                "**Classical forms:** the symphony (four movements: fast sonata — slow — minuet and trio — fast finale) and the string quartet; sonata form governs most first movements.",
                "**Romantic forms:** the symphonic poem and programme symphony, the song cycle, the expanded concerto, and nationalistic works quoting folk tunes — Dvořák's 'New World' Symphony.",
                "**Modern and popular forms:** minimalism (Reich, Glass), musical theatre and film music with leitmotifs (John Williams), and verse-chorus popular songs.",
                "**Dance through the ages:** Baroque suite dances (sarabande slow and stately, gigue lively in compound time), Classical minuets, Romantic waltzes, and twentieth-century jazz, swing and contemporary dance music.",
              ],
            },
            {
              subTitle: "Set-Work Study Method",
              bullets: [
                "**Know each set work's facts:** title, composer, date, forces, key points of structure — learn a 'fact card' for every prescribed work.",
                "**Memorise landmark moments:** the main theme, one unusual instrument, one texture change, and the ending — these are the anchors for 'describe the music' questions.",
                "**Sing the themes:** if you can sing the opening of each set work, you can identify it from the first two bars in the exam.",
                "**Practise timed questions:** set 10 minutes per past-paper question, writing element → feature → effect sentences under exam conditions.",
              ],
            },
          ],
          examinerTips: [
            "**Answer 'period' questions with evidence:** 'Baroque, because I hear a harpsichord continuo, terraced dynamics and a sequence' scores the mark; the bare word 'Baroque' without justification often does not.",
            "**Quote specific evidence:** name what you actually hear — an instrument, a texture, a rhythmic device — rather than writing generalities like 'it sounds old-fashioned'.",
            "**Use set-work knowledge in unfamiliar questions:** when an unfamiliar extract shares a style with a set work, say so — 'this uses the same ritornello idea as our set work by Vivaldi' shows sophisticated listening.",
            "**Keep a period checklist in the margin:** write Medieval/Renaissance/Baroque/Classical/Romantic/Modern and tick what you hear on each playing — the pattern reveals the answer.",
          ],
          commonMistakes: [
            "**Confusing Baroque and Classical:** both use orchestras and orderly forms; the giveaway is the continuo and ornaments (Baroque) versus the Alberti bass and balanced phrases (Classical) — listen for which accompaniment type is present.",
            "**Dating by loudness:** students often call anything loud and dramatic 'Romantic'; Beethoven can be as loud as Tchaikovsky — use texture and harmonic language, not volume, as your evidence.",
            "**Ignoring the voices-only clue:** when no instruments accompany the singers, think Medieval or Renaissance; a cappella polyphony almost always signals pre-1600 or a deliberate archaic style.",
            "**Naming a period without a reason:** examiners award the justification, not the guess — always attach a heard feature to your label.",
          ],
          recap: [
            "Give two musical features that would help you identify a piece as Baroque. [4]",
            "Describe three differences between the music of the Classical and Romantic periods. [6]",
            "An unfamiliar extract is played. Suggest the period and justify your answer with three heard features. [6]",
            "Name the standard movement pattern of a Classical symphony and describe the character of each movement. [4]",
            "Describe one set work you have studied, including composer, forces, structure and two distinctive features. [8]",
          ],
        },
        {
          title: "World Music Traditions",
          body: "mark schemes expect you to recognise the sound-world of several major non-Western traditions, because they appear both as unfamiliar listening extracts and as inspiration for composition. Indian classical music is built from a raga — a melodic framework of specific ascending and descending notes with its own mood and ornamentation rules — played over a tala, a repeating rhythmic cycle articulated by the tabla drummer. A performance grows slowly from the free-rhythm alap (soloist alone, meditative) into faster, rhythmically driven sections with the tabla. Listen for the sitar's buzzing sympathetic strings and the tabla's spoken rhythmic patterns (bols). West African drumming ensembles centre on the djembe hand drum: a master drummer leads, the music is polyrhythmic (several different rhythms interlocking at once), and performance is inseparable from dance, with call-and-response between drum and dancers.\n\nIndonesian gamelan is an orchestra of bronze metallophones and gongs that play in interlocking patterns over a colotomic cycle marked by large gongs; its shimmering, bell-like sonority and the pentatonic-like slendro scale are instantly recognisable. From the Caribbean, reggae layers a relaxed off-beat guitar or keyboard 'skank' over a heavy bass line, with lyrics often carrying social messages, while calypso and soca from Trinidad feature steel pans and witty, topical lyrics. Latin American dance styles such as salsa combine Afro-Cuban percussion (congas, claves — the two hardwood sticks playing the guiding clave rhythm) with brass and piano. Each tradition also has its own scales: pentatonic (five-note) scales dominate Chinese, Japanese and much folk music; maqamat (melodic modes with characteristic quarter-tone inflections) shape Middle Eastern melody. When an unfamiliar extract appears, ask: what instruments, what scale, what rhythmic organisation — then describe using the elements as always.",
          groups: [
            {
              subTitle: "South and Southeast Asia",
              bullets: [
                "**Indian classical music:** a raga (melodic framework with set notes, ornaments and mood) performed over a tala (rhythmic cycle); instruments include sitar, sarod, bansuri (flute), sarangi and tabla; structure moves alap (free, unaccompanied) → gat (fixed composition with tabla, faster).",
                "**Table and bols:** tabla players learn compositions as spoken syllables (bols); virtuosic tabla improvisations (tihai — a phrase played three times to signal an ending) are a highlight.",
                "**Gamelan (Indonesia):** bronze metallophones, gongs and drums play interlocking kotekan patterns; the gong ageng marks the end of each cycle; scales are slendro (5 roughly equal notes) and pelog (7 unequal notes).",
                "**Shadow puppet theatre (wayang kulit):** gamelan accompanies all-night puppet dramas — music, theatre and ritual combined.",
                "**Thai classical music:** heterophonic texture — a melody played simultaneously straight and decorated — with xylophone-like ranat ek leading.",
              ],
            },
            {
              subTitle: "Africa and the African Diaspora",
              bullets: [
                "**West African drumming:** djembe, dundun and talking drums; polyrhythm (several contrasting rhythms at once); master drummer improvises cues over repeating patterns; inseparable from dance and community ceremony.",
                "**Call and response:** a leader sings or plays a phrase answered by the group — the foundation of African and African-American music from work songs to gospel.",
                "**Blues and gospel (North America):** built on the 12-bar blues and blue notes (flattened 3rd, 5th, 7th); spirituals and gospel choirs feature improvisation, clapping and ecstatic delivery — ancestors of jazz, soul and rock.",
                "**Reggae (Jamaica):** off-beat 'skank' guitar/keys, deep bass, one-drop drum pattern; relaxed tempo with socially conscious lyrics — Bob Marley's 'No Woman No Cry'.",
                "**Calypso and soca (Trinidad):** steel pan melodies, danceable grooves, satirical or festive lyrics; steel orchestras grew from African drumming traditions banned by colonial rulers.",
                "**Samba and salsa:** samba (Brazil) layers syncopated percussion in a 2/4 carnival groove; salsa (Cuba/Puerto Rico) rides the clave rhythm with congas, timbales, piano montunos and brass.",
              ],
            },
            {
              subTitle: "East Asia and Beyond",
              bullets: [
                "**Chinese music:** pentatonic scales; erhu (two-string bowed fiddle with a haunting, vocal tone), dizi (bamboo flute), pipa (plucked lute), and gongs; melodies often heterophonic between instruments.",
                "**Japanese music:** shakuhachi (end-blown bamboo flute, breathy and meditative), koto (13-string zither), shamisen (three-string plucked lute); gagaku court music is slow and stately.",
                "**Korean samul nori:** four farmers' percussion instruments (buk drum, janggu hourglass drum, jing gong, kkwaenggwari small gong) in athletic choreographed performance.",
                "**Australian didgeridoo:** a drone pipe from Arnhem Land producing a continuous bass drone with circular breathing and vocalised timbres.",
                "**Celtic folk traditions:** fiddle tunes, tin whistle, uilleann or Great Highland bagpipes, bodhrán drum; dance forms such as jigs (compound time) and reels (fast duple).",
                "**Middle Eastern maqam:** melodic modes with quarter-tone inflection; instruments include oud (lute), qanun (zither), ney (flute) and darbuka (goblet drum); complex rhythmic modes (iqa'at).",
              ],
            },
          ],
          examinerTips: [
            "**Identify the tradition, then describe with elements:** 'This is Indian classical music — a sitar plays a raga over a tala cycle on tabla; the texture is heterophonic decoration over a drone' is a full-mark answer pattern.",
            "**Name the instrument AND its country:** marks are often split between recognising the tradition and naming one or two authentic instruments — learn instrument-country pairs as flashcards.",
            "**Use the correct specialist terms:** raga, tala, gamelan, polyrhythm, clave, skank, pentatonic — these are the words schemes look for in world-music answers.",
            "**Do not describe world music as 'primitive' or 'simple':** interlocking polyrhythms and cyclic forms are highly sophisticated; show respect and precision in your language, which also impresses examiners.",
            "**Compare traditions for contrast marks:** when asked to compare two extracts, structure by element — instruments, scale, rhythm, texture — one element per sentence.",
          ],
          commonMistakes: [
            "**Confusing sitar and guitar tone:** the sitar's buzzing sympathetic strings and long ringing decay are distinctive; a 'buzzing plucked string with extra resonance' description earns credit even if the name is missed.",
            "**Assuming all non-Western music is percussion-only:** Chinese erhu melodies and Japanese shakuhachi solos are melodic; listen for pitch material before labelling an extract 'drumming'.",
            "**Mixing up pentatonic uses:** pentatonic scales appear in Chinese, Japanese, Scottish, African-American and Minimalist music — name the tradition from the instruments and rhythm, not the scale alone.",
            "**Forgetting reggae's off-beat:** students hear 'relaxed Caribbean' and stop; identifying the skank guitar chopping on beats 2 and 4 (the 'and' off-beats) is the precise feature that earns marks.",
          ],
          recap: [
            "Define raga and tala and explain the role each plays in Indian classical music. [4]",
            "Describe the instruments and texture of an Indonesian gamelan ensemble. [5]",
            "Explain what is meant by polyrhythm and name a tradition that uses it. [3]",
            "An extract is played three times. Identify the musical tradition and justify with three heard features. [6]",
            "Compare the use of rhythm in West African drumming and Western classical orchestral music. [6]",
          ],
        },
        {
          title: "Describing Music Using the Elements",
          body: "This is the master skill of the whole listening paper: turning what you hear into precise, credited prose. The examiners' mantra is element → feature heard → effect. An element is one of the seven — pitch, rhythm, dynamics, timbre, texture, structure, tempo (plus related ideas such as melody, metre and articulation). A feature heard is a specific, audible detail: 'a rising sequence in the violins', 'a crescendo to *ff*', 'the texture thins to solo flute'. An effect is what the music does to the listener or the drama: 'building excitement', 'creating a cold, empty atmosphere', 'suggesting a procession'. Every sentence of a listening answer should contain all three parts. Vary the element you lead with so your answer covers the music, and always write in the present tense ('the oboe enters', not 'the oboe entered').\n\n## Using the hearings and the mark scheme\nA 6-mark describe question usually has a mark scheme listing six credited observations — often two each from three different elements. Write one clear sentence per observation, each with a technical term. For comparison questions ('compare extract A with extract B'), use paired sentences: 'Extract A is in a fast duple metre with driving quavers, whereas extract B uses a slow triple metre with long sustained notes, so A feels urgent while B feels graceful.' For 'explain' questions, add because: 'The composer repeats the motif in sequence because it extends the idea while keeping it recognisable, building momentum towards the climax.' Practise by describing one minute of any music daily in five element-sentences — radio, adverts, film music all count. Timed past-paper practice is essential: aim to write roughly one credited sentence every 45 seconds.",
          groups: [
            {
              subTitle: "The Answer Formula",
              bullets: [
                "**Element:** name which of the seven elements you are describing — pitch, rhythm, dynamics, timbre, texture, structure or tempo.",
                "**Feature heard:** give the precise, audible detail with a technical term — 'terraced dynamics', 'syncopated rhythm', 'homophonic texture', 'rising sequence'.",
                "**Effect:** state what the feature achieves — tension, calm, excitement, humour, grandeur — this is the 'so what' that examiners reward.",
                "**Example sentence:** 'A crescendo in the strings (element: dynamics) builds through repeated quaver chords (feature) creating anticipation before the brass entry (effect).'",
                "**One observation per sentence:** short, labelled sentences are easier for examiners to tick than long flowing paragraphs in listening questions.",
              ],
            },
            {
              subTitle: "Sentence Starters Bank",
              bullets: [
                "**Pitch/melody:** 'The melody rises/falls by step/leap in a high/low register…', 'A sequence repeats the motif a third higher…', 'The range is narrow, giving a folk-like quality…'.",
                "**Rhythm/metre:** 'The metre is quadruple with a steady crotchet pulse…', 'Syncopation displaces the accent onto weak beats…', 'A triplet figure smooths the transition at bar 16…'.",
                "**Dynamics/articulation:** 'Terraced dynamics alternate *forte* and *piano*…', 'A *sforzando* accent shocks the listener…', 'Staccato articulation lightens the second theme…'.",
                "**Timbre:** 'The oboe's nasal tone enters above the strings…', 'Pizzicato cellos provide a dry, ticking accompaniment…', 'The piccolo adds a piercing, glittering colour…'.",
                "**Texture/structure:** 'The texture changes from homophonic to imitative polyphony…', 'The opening A section returns at bar 60 in ternary form…', 'A solo violin thins the texture before the tutti reprise…'.",
                "**Tempo:** 'The tempo is *Allegro* with an *accelerando* into the coda…', 'Rubato stretches the melody expressively around the climax…'.",
              ],
            },
            {
              subTitle: "Mark Scheme Awareness",
              bullets: [
                "**Match marks to observations:** a 6-mark describe question usually credits six separate features — count your sentences and make sure you have at least six distinct observations across different elements.",
                "**No repetition:** saying 'fast' for tempo and 'quick notes' for rhythm is one observation, not two; spread across genuinely different elements.",
                "**Technical terms are the currency:** 'crescendo', 'homophonic', 'sequence', 'ritornello' each tick a box; vague synonyms ('gets louder', 'all together', 'repeats higher') may not.",
                "**Justify 'suggest' answers:** when asked to suggest a period, composer or mood, always chain three features with 'because'.",
                "**Leave no blanks:** an informed guess with correct terminology can earn partial credit; an empty line earns nothing.",
              ],
            },
          ],
          examinerTips: [
            "**Plan your three hearings:** hearing 1 — overall impression and main instruments; hearing 2 — write features for the specific question; hearing 3 — check terms, add effects, fill gaps.",
            "**Write less, but precisely:** six excellent sentences beat two rambling paragraphs; examiners tick ideas, not word counts.",
            "**Underline command words:** 'describe' = features; 'explain' = features plus reasons/effects; 'compare' = paired similarities AND differences; 'suggest' = reasoned opinion.",
            "**Check the mark value first:** it tells you how many distinct observations to write — always aim for one more than the marks, in case one is rejected.",
            "**Revise terminology daily:** ten minutes learning Italian terms, texture and form definitions beats an hour of passive listening.",
          ],
          commonMistakes: [
            "**Listing features with no effect:** 'there is a crescendo and a sequence' describes but does not explain; in 'explain' questions this habit halves your score — add 'which builds excitement' every time.",
            "**One-element answers:** students who love rhythm write six rhythmic observations and ignore timbre, texture and dynamics; the scheme rewards spread, so deliberately rotate elements.",
            "**Writing in the past tense or narrating:** 'then the oboe played and then it got louder' reads as story, not analysis — keep present tense and one element per sentence.",
            "**Guessing instruments to fill lines:** a wrong but plausible name can be penalised where a description ('a bright reedy woodwind') would have earned credit; describe what is certain.",
            "**Running out of time:** spending five minutes on a 2-mark question steals time from an 8-mark one; train with a stopwatch — marks per minute should be roughly constant.",
          ],
          recap: [
            "Explain the 'element → feature → effect' formula with an original example sentence. [3]",
            "Write six sentences describing one minute of music you know well, using six different elements. [6]",
            "Compare two contrasting extracts you have studied, using at least three elements. [8]",
            "Rewrite: 'The music got faster and louder and sounded exciting' as three credited observations. [3]",
            "Describe the structure of a set work using letters and bar numbers, adding the effect of each section. [6]",
          ],
        },
      ],
    },
  ],
};

import type { SubjectNotes } from "./types";

export const MUSIC: SubjectNotes = {
  id: "music",
  name: "Music",
  code: "0410",
  color: "bg-purple-500",
  chapters: [
    {
      number: 1,
      title: "Baroque Music (c.1600–1750)",
      intro:
        "The Baroque period represents a pivotal era in Western music history, characterised by ornate polyphonic textures, the development of tonality, and the birth of opera and the concerto. Key composers include Johann Sebastian Bach, George Frideric Handel, Antonio Vivaldi, Henry Purcell, and Claudio Monteverdi. Understanding Baroque style is essential for all three Cambridge IGCSE Music skills: listening, performing, and composing.",
      subheadings: [
        {
          title: "Defining Features of Baroque Style",
          body: "Baroque music can be identified by a constellation of characteristic features. The examiner expects candidates to name, describe, and identify these features aurally from listening extracts.",
          groups: [
            {
              bullets: [
                "**Basso continuo**: A continuous bass line, usually played by cello/bass plus a chordal instrument (harpsichord or organ) improvising harmonies above it — the harmonic and rhythmic foundation of virtually all Baroque ensemble music.",
                "**Terraced dynamics**: Sudden shifts between loud (*forte*) and soft (*piano*) rather than gradual crescendo or diminuendo — dynamics change in 'steps' because the harpsichord cannot vary touch-pressure.",
                "**Ornaments**: Trills, mordents, turns, and appoggiaturas are written into or improvised by performers — add expressive and ornamental elaboration to melodic lines.",
                "**Polyphonic texture**: Multiple independent melodic lines heard simultaneously and of equal importance — distinct from the melody-dominated homophony of later periods.",
                "**Sequences**: Melodic or harmonic motifs repeated at successively higher or lower pitch levels — a characteristic Baroque compositional device.",
                "**Circle of fifths progressions**: Root movements by descending fifth (or ascending fourth) create a chain of related keys — Bach's music is saturated with descending-fifth sequences.",
                "**Imitative counterpoint**: A melody introduced in one voice/instrument is copied ('imitated') in another voice a few beats later — the structural basis of the fugue.",
              ],
            },
            {
              subTitle: "Major Forms and Genres",
              bullets: [
                "**Fugue**: A strictly imitative contrapuntal composition in which a short theme (subject) is stated in one voice, then imitated in others while the first voice continues with a countersubject; episodes (modulating passages using the subject) alternate with 'entries' of the full subject.",
                "**Concerto grosso**: A Baroque orchestral form contrasting a small group of soloists (the *concertino*) with the full orchestra (the *ripieno* or *tutti*) — exemplified by Handel's *Concerti Grossi Op. 6* and Corelli's Op. 6.",
                "**Solo concerto**: A single soloist contrasted with orchestra — Vivaldi's *The Four Seasons* is the most famous example; fast–slow–fast (Ritornello) structure.",
                "**Suite**: A collection of stylised dance movements in the same key — typical order: Allemande, Courante, Sarabande, optional dances (Minuet, Gavotte, Bourrée), Gigue.",
                "**Cantata**: A vocal work for solo voice(s) and/or choir with instrumental accompaniment in several movements — Bach composed over 200 church cantatas.",
                "**Oratorio**: A large-scale sacred work for soloists, chorus, and orchestra performed without staging — Handel's *Messiah* is the definitive example.",
                "**Opera**: Emerged in Baroque Italy — combines drama, singing (arias and recitative), and orchestra. *Recitative* = speech-like, harmonically free narration; *Aria* = structured, melodic, emotionally expressive solo song (often Da Capo ABA form).",
              ],
            },
          ],
        },
        {
          title: "J.S. Bach — Counterpoint and the Fugue",
          body: `Johann Sebastian Bach (1685–1750) is considered the supreme master of Baroque counterpoint. His works — from the *Well-Tempered Clavier* to the *Brandenburg Concertos* — demonstrate every aspect of Baroque compositional technique in its most rigorous and expressive form.

![Baroque counterpoint example diagram](/diagrams/quadratic-graph.svg)`,
          groups: [
            {
              subTitle: "Fugue Structure",
              bullets: [
                "**Exposition**: The opening section — the subject is stated alone in the first voice, then imitated in turn by each remaining voice (entering at the tonic or dominant); the answer (in the dominant) may be **real** (exact transposition) or **tonal** (slightly altered to remain in the key).",
                "**Episode**: A developmental passage using fragments (motifs) of the subject in sequences, moving through related keys; no full statement of the subject.",
                "**Middle entries**: Further statements of the subject in various keys (typically the relative major/minor and subdominant).",
                "**Stretto**: A device where subject entries overlap — each new voice enters before the previous one has finished the subject — creates tension and intensity.",
                "**Pedal point**: A sustained or repeated note (usually tonic or dominant) held in the bass while harmony changes above it — often used near the climax or final cadence.",
                "**Final entries**: Return to the tonic key with emphatic subject statements; often ends with a *tierce de Picardie* (major tonic chord ending a minor-key piece).",
              ],
            },
            {
              subTitle: "Handel vs Bach — A Comparison",
              bullets: [
                "**Bach**: Primarily instrumental and church music; intricate polyphony; Lutheran religious context; dense intellectual counterpoint; less concerned with commercial popularity.",
                "**Handel**: Opera and oratorio for London audiences; more tuneful, harmonically direct melodies; *Messiah* chorus 'Hallelujah' demonstrates his grand choral style — homophonic passages alternating with imitative sections.",
              ],
            },
          ],
        },
        {
          title: "Vivaldi and the Ritornello Concerto",
          body: "Antonio Vivaldi (1678–1741) codified the three-movement fast–slow–fast concerto form and the ritornello structure that dominated Baroque and influenced early Classical composition.",
          groups: [
            {
              bullets: [
                "**Ritornello form**: The *ritornello* is a recurring tutti theme that frames the movement; between ritornello statements, the soloist plays virtuosic *episodes* (modulating passages); the ritornello returns in varied keys before its final full statement in the tonic.",
                "**The Four Seasons (Op. 8 No. 1–4)**: Programme music — each concerto depicts a season through specific pictorial effects; Spring (birdsong in violin trills), Summer (thunderstorm — rapid scales and syncopation), Autumn (harvest celebration — dance rhythms), Winter (cold shivers — sul ponticello tremolo).",
                "**Texture contrast**: The dramatic contrast between *tutti* (full orchestra, loud, homophonic) and *solo* (single instrument, soft, ornamental) passages is the primary formal device.",
                "**Sequence and sequence chains**: Vivaldi's episodes are characterised by long sequential passages — melodic units repeated a step lower or higher in chain-like patterns.",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 2,
      title: "Classical Music (c.1750–1820)",
      intro:
        "The Classical period saw a decisive shift from Baroque polyphony to a lighter, clearer, more lyrical style dominated by tuneful melodies over simple harmonic accompaniments. The orchestra expanded, the piano replaced the harpsichord, and the symphony and string quartet became the era's defining forms. Haydn, Mozart, and Beethoven's early works define the period's style.",
      subheadings: [
        {
          title: "Characteristics of the Classical Style",
          body: "Classical style is the antithesis of Baroque complexity — it values clarity, balance, and elegant proportion. These features should be immediately identifiable in a listening examination extract.",
          groups: [
            {
              bullets: [
                "**Homophonic texture**: A dominant melody supported by simple chordal or Alberti bass accompaniment — contrasts with Baroque polyphony.",
                "**Alberti bass**: A left-hand keyboard pattern in which the notes of a chord are played in the repeating pattern low–high–middle–high — creates a smooth, flowing accompaniment. Named after Domenico Alberti.",
                "**Regular phrase structure**: Four-bar phrases are the norm; phrases usually come in balanced pairs (antecedent + consequent, question + answer) — creates the 'periodic' style.",
                "**Dynamic range**: Full crescendo and diminuendo are now possible (the new fortepiano can vary dynamics with touch pressure); *sforzando* (sudden forced accent) adds dramatic punctuation.",
                "**Expanded orchestra**: Standardised Classical orchestra includes strings, pairs of oboes, flutes, bassoons, horns, trumpets, and timpani; clarinets added later (Mozart's later symphonies).",
                "**Ornamentation**: Less elaborate than Baroque; used for expressive rather than decorative purpose.",
                "**Thematic development**: Melodies are broken into short motifs and developed through fragmentation, inversion, sequence, and modulation — the hallmark of Classical development sections.",
              ],
            },
            {
              subTitle: "Sonata Form (First-Movement Form)",
              bullets: [
                "**Exposition**: Presents two contrasting themes — **First Subject** (tonic key, often bold and rhythmic) and **Second Subject** (dominant key in major works, relative major in minor works — often lyrical); ends with a **Codetta** confirming the dominant.",
                "**Development**: Both themes are broken apart, combined, modulated through remote keys, and transformed — creates tension and harmonic instability.",
                "**Recapitulation**: Both subjects return in the **tonic key** — the tonal conflict is resolved; the second subject returns in the tonic rather than the dominant.",
                "**Coda**: Optional concluding section reinforcing the tonic — Beethoven expanded codas to near-development proportions.",
              ],
            },
          ],
        },
        {
          title: "Haydn and the Development of the Symphony",
          body: "Franz Joseph Haydn (1732–1809) is called the 'Father of the Symphony' — he transformed the genre from a simple three-movement Italian overture into the four-movement vehicle for large-scale musical argument.",
          groups: [
            {
              subTitle: "The Classical Symphony",
              bullets: [
                "**Movement I**: Fast (Allegro) — Sonata form. The main intellectual and dramatic content of the work.",
                "**Movement II**: Slow (Andante or Adagio) — Lyrical, expressive; often theme and variations, ternary, or slow sonata form.",
                "**Movement III**: Dance (Minuet and Trio, ABA form) — Triple meter, moderate tempo; the Trio is usually softer and more contrapuntal.",
                "**Movement IV**: Fast (Allegro or Presto) — Rondo (ABACADA) or Sonata-Rondo; energetic, often dance-like or humorous conclusion.",
              ],
            },
            {
              subTitle: "Haydn's 'Surprise' Symphony No. 94",
              bullets: [
                "**Nickname origin**: The quiet, simple theme of the slow movement is suddenly punctuated by a fortissimo chord — a 'surprise' Haydn reportedly added to wake inattentive London audiences.",
                "**Theme and variations**: The slow movement uses a simple 16-bar binary theme developed through four variations — each adds new decoration, texture, or dynamics.",
                "**Instrumentation**: The full orchestra is used with increasing richness across variations — demonstrates Haydn's mastery of orchestration.",
              ],
            },
            {
              subTitle: "Mozart — The String Quartet",
              bullets: [
                "**Texture**: Two violins, viola, and cello — four independent voices with equality; the viola and cello are no longer just harmonic support.",
                "**'Dissonance' Quartet K. 465**: Famous slow introduction (Adagio) with clashing semitones and unusual chromatic harmonies — shocking to Classical audiences; shows Mozart expanding Classical harmonic vocabulary.",
                "**Classical clarity**: Despite harmonic richness, Mozart's quartets maintain crystalline voice leading and melodic grace.",
              ],
            },
          ],
        },
        {
          title: "Beethoven — Bridge to Romanticism",
          body: "Ludwig van Beethoven (1770–1827) expanded every Classical form to unprecedented scale and emotional intensity. His later works break decisively from Classical conventions and anticipate Romantic music.",
          groups: [
            {
              bullets: [
                "**Symphony No. 5 in C minor**: Four-note opening motif ('fate knocking at the door') — developed motivically throughout all four movements; first time all four movements are thematically linked.",
                "**Rhythmic drive**: Beethoven's use of syncopation, sforzando accents, and dramatic pauses creates unprecedented rhythmic energy.",
                "**Dynamic extremes**: Far wider dynamic range than Haydn or Mozart — from *ppp* to *fff*; sudden dynamic contrasts used for dramatic effect.",
                "**Expanded coda**: Beethoven's codas are as long and developmental as his development sections — the coda of Symphony No. 5 finale is 100+ bars.",
                "**Heroic key of C minor → C major**: The trajectory of many Beethoven works — struggle and darkness resolving to triumphant major; personalised by his loss of hearing.",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 3,
      title: "Romantic Music (c.1820–1900)",
      intro:
        "The Romantic period saw music become increasingly personal, dramatic, and nationalistic. Orchestras grew to enormous size, forms expanded, and composers sought to express powerful emotions, tell stories (programme music), and celebrate national identity. Key composers: Schubert, Schumann, Chopin, Liszt, Brahms, Wagner, Verdi, Tchaikovsky, Dvořák.",
      subheadings: [
        {
          title: "Characteristics of Romantic Style",
          body: "Romantic music expanded the emotional and technical scope of every element — melody became long-breathed and expressive, harmony became chromatic and ambiguous, and the orchestra became a vast, colourful instrument.",
          groups: [
            {
              bullets: [
                "**Chromaticism**: Free use of notes outside the home key to add colour and ambiguity; chromatic melodies and chords blur the sense of tonality.",
                "**Extended harmonies**: 7th, 9th, 11th, and 13th chords; diminished and augmented chords used expressively.",
                "**Expanded orchestra**: Full woodwind (piccolo, 3 flutes, 3 oboes + cor anglais, 3 clarinets + bass clarinet, 3 bassoons + contrabassoon), large brass section (4 horns, 3 trumpets, 3 trombones, tuba), large battery of percussion, and 60+ string players.",
                "**Programme music**: Instrumental music that depicts a story, poem, painting, or nature scene — Berlioz's *Symphonie Fantastique*, Smetana's *Má vlast*, Saint-Saëns' *Carnival of the Animals*.",
                "**Idée fixe / Leitmotif**: A recurring musical theme associated with a character, object, or idea — Berlioz's *idée fixe* and Wagner's *leitmotif* system.",
                "**Nationalism**: Composers incorporated folk melodies, rhythms, and scales of their home countries — Chopin (Polish mazurkas and polonaises), Dvořák (Bohemian folk music), Grieg (Norwegian), Bartók (Hungarian).",
              ],
            },
          ],
        },
        {
          title: "Song and Piano Music — Schubert and Chopin",
          body: "The Romantic period elevated two intimate forms to the highest artistic level: the German *Lied* (art song for voice and piano) and the solo piano miniature.",
          groups: [
            {
              subTitle: "The German Lied (Schubert)",
              bullets: [
                "**Structure types**: *Strophic* (same music for every verse — straightforward but less responsive to text), *modified strophic* (some verses altered), *through-composed* (new music for each verse — most text-responsive).",
                "**Word-painting (text-painting)**: Musical details that illustrate the meaning of the text — rippling piano arpeggios for water (*Die Forelle* — 'The Trout'), minor key for sadness, ascending melody for heaven/joy.",
                "**The Erlkönig (1815)**: Schubert's most dramatic lied — four characters (narrator, father, child, Erlking) sung by a single voice; relentless galloping triplets in the piano suggest horse-hooves; chromatic harmony depicts the supernatural.",
                "**Piano's dual role**: In Schubert's lieder, the piano is not merely an accompaniment — it establishes mood, depicts imagery, and comments on the text with equal importance to the voice.",
              ],
            },
            {
              subTitle: "Chopin — Solo Piano",
              bullets: [
                "**Nocturnes**: Lyrical night-pieces — long-breathed cantabile (singing) melody over flowing left-hand arpeggios; highly ornamented; expressive rubato (flexible tempo).",
                "**Mazurkas and Polonaises**: Polish national dances used as vehicles for harmonic experimentation and nationalistic expression.",
                "**Études**: Technical studies that are also profound artistic statements — Op. 10 No. 3, Op. 25 No. 11 ('Winter Wind').",
                "**Rubato**: The expressive 'borrowing' of time — speeding up through an expressive peak and slowing into a phrase ending — characteristic of Romantic piano style.",
                "**Pedalling**: Chopin's innovative use of the sustaining pedal creates haze-like harmonic blends that foreshadow Impressionism.",
              ],
            },
          ],
        },
        {
          title: "Wagner and the Music Drama",
          body: "Richard Wagner (1813–1883) revolutionised opera by creating the *Gesamtkunstwerk* ('total artwork') — a seamless integration of music, drama, poetry, stage design, and lighting in which no single element dominates.",
          groups: [
            {
              bullets: [
                "**Continuous music**: No division into discrete arias and recitatives — the music flows continuously throughout each act (*unendliche Melodie* — 'endless melody').",
                "**Leitmotif system**: Dozens of short, distinctive themes associated with characters, objects, emotions, and concepts; they recur throughout the work, transforming to reflect dramatic developments.",
                "**Chromatic harmony**: Wagner's harmony is so chromatic and tonally ambiguous that it anticipates the dissolution of tonality — the *Tristan Chord* (Act I of *Tristan und Isolde*) is one of the most analysed chords in Western music.",
                "**Ring Cycle**: Four operas (*Das Rheingold*, *Die Walküre*, *Siegfried*, *Götterdämmerung*) designed to be performed on four consecutive evenings — explores Norse mythology, power, love, and redemption.",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 4,
      title: "Music and Words — Song, Opera, and the Voice",
      intro:
        "The relationship between music and text is one of the most fundamental in Western music. From Gregorian chant to the contemporary song, composers have wrestled with how to set words to music in a way that enhances their meaning, emotional impact, and dramatic power.",
      subheadings: [
        {
          title: "The Voice — Range, Register, and Technique",
          body: "The singing voice is classified by range and quality. Understanding voice types is essential for score reading, listening analysis, and composition for voice.",
          groups: [
            {
              subTitle: "Voice Classifications",
              bullets: [
                "**Soprano**: Highest female voice (approximately C4–C6); further divided into lyric, dramatic, coloratura (highly ornamented).",
                "**Mezzo-soprano**: Mid-range female voice (A3–A5); richer, darker quality than soprano.",
                "**Contralto (Alto)**: Lowest female voice (F3–F5); deepest, most powerful quality in lower register.",
                "**Tenor**: Highest male voice (C3–C5); in opera, usually the romantic lead.",
                "**Baritone**: Middle male voice (A2–A4); most common male voice type; authoritative quality.",
                "**Bass**: Lowest male voice (E2–E4); associated with authority, dignity, or comic characters.",
                "**Counter-tenor**: Male voice singing falsetto in the alto/mezzo range — revived for Baroque opera performance.",
              ],
            },
            {
              subTitle: "Text Setting Techniques",
              bullets: [
                "**Syllabic**: One note per syllable — most text-driven, clearest diction (hymns, folk songs, recitative).",
                "**Melismatic**: Multiple notes sung on a single syllable — expressive, vocal display; common in Gospel, Islamic call to prayer, and Baroque ornamentation.",
                "**Word-painting**: Musical illustration of text meaning — a rising scale on 'ascending to heaven', tremolo on 'shaking with fear', low notes on 'darkness'.",
                "**Text repetition**: Emphasises key words or phrases — common in madrigals and operatic ensembles.",
              ],
            },
          ],
        },
        {
          title: "Opera — Structure and Conventions",
          body: "Opera is the most elaborate form of vocal music, combining all performing arts in a single theatrical event. Key structural elements and conventions recur across the history of the form.",
          groups: [
            {
              bullets: [
                "**Overture**: An orchestral introduction that sets the dramatic mood and often previews main themes.",
                "**Aria**: A formal song expressing a single character's emotion — provides melodic highlight and characterisation; often follows a dramatic event (*soliloquy function*).",
                "**Recitative**: Speech-like delivery of text — advances the plot; *secco* recitative (harpsichord/continuo only) is functional; *accompagnato* (with full orchestra) is dramatically intense.",
                "**Ensemble**: Duet, trio, quartet — two or more characters singing simultaneously, often expressing conflicting emotions.",
                "**Chorus**: The operatic chorus provides commentary, creates atmosphere, and represents the populace.",
                "**Leitmotif in opera**: Wagner's system of associating specific short themes with characters, objects, and concepts throughout the work — allows the orchestra to foreshadow and comment on the drama.",
              ],
            },
          ],
        },
        {
          title: "Choral Music — Anthem, Mass, Oratorio",
          body: "Choral music — composed for large groups of singers — occupies a central place in Western sacred and secular music history. Cambridge IGCSE listening tests regularly include choral extracts.",
          groups: [
            {
              bullets: [
                "**Anthem**: A short choral work for use in Anglican church services — *full anthem* uses the choir throughout; *verse anthem* alternates solo voices with full choir (*O Clap Your Hands* — Gibbons).",
                "**Mass**: The central Roman Catholic liturgical text set to music — five main movements: Kyrie, Gloria, Credo, Sanctus, Agnus Dei; from Palestrina's Renaissance polyphony to Bach's *Mass in B minor* and Haydn's 'Nelson Mass'.",
                "**Oratorio**: Sacred dramatic work for soloists, chorus, and orchestra performed in concert, not staged — Handel's *Messiah* (1741) remains the most performed large-scale choral work.",
                "**Requiem**: A Mass for the Dead — settings by Mozart (incomplete), Verdi (dramatic, operatic), and Fauré (gentle, consoling) offer striking contrasts in interpretation.",
                "**Cantata (Bach)**: Weekly vocal compositions for Leipzig church services — combine chorales (congregational hymn tunes), arias, recitatives, and choral movements.",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 5,
      title: "Music for Dance, Small Ensemble, and Stage & Screen",
      intro:
        "The final three areas of study examine music composed for specific functional contexts: dance (from Baroque suites to contemporary club music), chamber music (small ensemble without conductor), and music written for stage productions and film. Each context imposes specific structural and stylistic requirements on the composer.",
      subheadings: [
        {
          title: "Music for Dance — Historical and Contemporary",
          body: "Dance has been an engine of musical innovation across every period. The requirement to match music to physical movement imposes constraints on tempo, metre, and rhythmic clarity that have produced distinctive musical forms.",
          groups: [
            {
              subTitle: "Baroque Dance Suite",
              bullets: [
                "**Allemande**: Moderate duple time, German origin, flowing quaver movement.",
                "**Courante**: Fast triple time, French origin, running passages (*courir* = to run).",
                "**Sarabande**: Slow triple time, Spanish origin, dignified and expressive; characteristic long note on the second beat.",
                "**Gigue**: Fast compound time (6/8 or 12/8), lively and energetic Irish/British origin; often fugal texture.",
                "**Optional dances**: Minuet, Gavotte, Bourrée, Passepied inserted between Sarabande and Gigue.",
              ],
            },
            {
              subTitle: "Classical and Romantic Dance",
              bullets: [
                "**Minuet and Trio**: Graceful triple-time court dance — the structural basis of Classical symphony Movement III; the Trio section (originally played by three instruments) provides contrasting texture before the Minuet's return (ABA).",
                "**Waltz**: Triple time (3/4), one chord per bar in a 'oom-pah-pah' pattern — emblematic of the Viennese Romantic ballroom; Strauss family dominated the genre.",
                "**Tchaikovsky's ballets**: *Swan Lake*, *Sleeping Beauty*, *The Nutcracker* — use a wide range of dance forms (waltz, polka, pas de deux) and sophisticated orchestration to characterise dancing.",
              ],
            },
            {
              subTitle: "20th Century and Contemporary Dance Music",
              bullets: [
                "**Jazz and Swing (1920s–40s)**: Syncopated rhythms, blue notes, improvisation, call-and-response — revolutionised popular dance.",
                "**Electronic Dance Music (EDM)**: Four-on-the-floor kick drum pattern (beat on every crotchet in 4/4), synthesiser basslines, sampling, looping — Techno, House, Drum and Bass each have characteristic BPM ranges.",
                "**Minimalism in dance (Steve Reich, Philip Glass)**: Gradual process music — slight phase shifts between identical patterns create hypnotic, trance-like movement.",
              ],
            },
          ],
        },
        {
          title: "Music for Small Ensemble — Chamber Music",
          body: "Chamber music is written for a small group of players — typically two to eight — intended for intimate performance without a conductor. Each player has an independent part, demanding both technical mastery and ensemble sensitivity.",
          groups: [
            {
              bullets: [
                "**String quartet**: 2 violins, viola, cello — the most prestigious chamber combination; Haydn (68), Mozart (23), Beethoven (16), Schubert, Brahms, Bartók all made major contributions.",
                "**Piano trio**: Piano, violin, cello — intimate and colourful mix of timbres; Beethoven's 'Archduke' Trio Op. 97 is a pinnacle of the form.",
                "**Wind quintet**: Flute, oboe, clarinet, horn, bassoon — highly idiomatic blend of contrasting wind timbres; characteristic 20th-century ensemble.",
                "**Texture in chamber music**: Without the doublings of an orchestra, each voice is exposed; careful voice leading and balance are critical.",
                "**Classical vs Romantic chamber style**: Classical = balanced, conversational, equal-weight voices (Haydn quartets); Romantic = pianistic domination, richer harmony, emotional weight (Brahms piano quartets).",
              ],
            },
          ],
        },
        {
          title: "Music for Stage and Screen — Musical Theatre and Film",
          body: "The music written for theatre and cinema uses all the compositional techniques discussed throughout this course, applied within the demanding context of narrative storytelling and synchronisation with visual media.",
          groups: [
            {
              subTitle: "Musical Theatre",
              bullets: [
                "**Book musical**: Story told through a combination of dialogue, song, and dance — *West Side Story* (Bernstein), *Les Misérables* (Schönberg), *Hamilton* (Miranda).",
                "**Leitmotif in musicals**: Recurring themes associated with characters and relationships — 'Tonight' in *West Side Story* returns transformed throughout the show.",
                "**Through-composed vs number opera**: *Sondheim* blurs the boundary with near-continuous music; classic Rodgers & Hammerstein shows use discrete songs separated by dialogue.",
              ],
            },
            {
              subTitle: "Film Music",
              bullets: [
                "**Underscore**: Background music beneath dialogue — establishes atmosphere, emotional tone, and pacing without drawing attention to itself.",
                "**Stinger/Hit point**: A sharp musical accent synchronised precisely with a visual event — door slamming, explosion, jump-scare.",
                "**Leitmotif in film**: John Williams' iconic themes — *Star Wars* (Force theme), *Schindler's List* (solo violin theme), *Harry Potter* (Hedwig's Theme) — each associated with character or concept.",
                "**Mickey-mousing**: Exact musical synchronisation with on-screen action — originally in cartoons, now used selectively for comic or heightened dramatic effect.",
                "**Temp track**: A pre-existing musical track used in editing before the original score is composed — often influences the final score's style.",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 6,
      title: "Composing, Performing, and Listening — Examination Skills",
      intro:
        "Cambridge IGCSE Music is assessed through three equally important skills: Performing (35%), Composing (35%), and Listening (30%). Each requires a different type of musical intelligence. This chapter consolidates examination technique for all three components.",
      subheadings: [
        {
          title: "Composing Skills",
          body: "The composing component requires candidates to compose and arrange pieces demonstrating understanding of musical elements and stylistic awareness. Compositions are submitted as scores and/or recordings.",
          groups: [
            {
              subTitle: "Compositional Devices to Demonstrate",
              bullets: [
                "**Sequence**: Repeat a motif at a different pitch level — the most powerful technique for development.",
                "**Inversion**: Turn the melodic shape upside down — if it originally rises, it now falls.",
                "**Augmentation/Diminution**: Lengthen or shorten note values — the same melody in longer notes (augmentation) or shorter notes (diminution).",
                "**Imitation**: A second voice copies the first voice's melody a few beats later.",
                "**Pedal point**: Hold a sustained bass note while harmonies change above — creates tension.",
                "**Modulation**: Move to a related key (dominant, relative major/minor, subdominant) to create contrast and interest.",
                "**Ostinato**: A repeating rhythmic or melodic pattern in one voice while others develop above or around it.",
              ],
            },
            {
              subTitle: "Structuring a Composition",
              bullets: [
                "**Binary form (AB)**: Two distinct sections; each may be repeated; common in Baroque dance movements.",
                "**Ternary form (ABA)**: Returns to opening material after a contrasting middle section — the most universally used musical structure.",
                "**Rondo (ABACADA)**: Refrain (A) alternates with contrasting episodes — energetic, often used for final movements.",
                "**Through-composed**: New music throughout — appropriate for text-setting where the narrative drives the structure.",
                "**12-bar blues**: Foundation of jazz and blues — fixed chord progression (I–I–I–I–IV–IV–I–I–V–IV–I–V) over which melody and improvisation operate.",
              ],
            },
          ],
        },
        {
          title: "Listening — Examination Technique",
          body: "The listening paper requires candidates to answer questions on prepared and unprepared extracts. Questions range from single-word answers to extended comparisons. Precision of vocabulary is rewarded.",
          groups: [
            {
              bullets: [
                "**Texture terminology**: Monophonic (single unaccompanied line), Homophonic (melody + chords), Polyphonic/Contrapuntal (multiple independent lines), Heterophonic (simultaneous variations of the same melody).",
                "**Dynamics terminology**: *ppp* (pianississimo) through *fff* (fortississimo); *crescendo* (getting louder), *diminuendo/decrescendo* (getting softer), *sforzando* (sudden accent), *subito piano* (suddenly quiet).",
                "**Tempo terminology**: *Grave* (very slow) → *Largo* → *Adagio* → *Andante* → *Moderato* → *Allegretto* → *Allegro* → *Vivace* → *Presto* → *Prestissimo* (fastest).",
                "**'Name the period' strategy**: Listen for continuo (Baroque), Alberti bass (Classical), chromaticism + large orchestra (Romantic), polytonality + irregular metre (20th century).",
                "**Distinguishing instruments by timbre**: Practise blind identification — oboe (nasal, reedy), clarinet (warm, darker than oboe), horn (rich, noble), trumpet (bright, penetrating).",
              ],
            },
          ],
        },
        {
          title: "Performing — Preparation and Examination Strategy",
          body: "The performing component is assessed by a teacher examiner during the course. Candidates perform a programme lasting a minimum of five minutes, demonstrating technical control, musical expression, and stylistic understanding.",
          groups: [
            {
              bullets: [
                "**Programme selection**: Choose repertoire that stretches technique but is within secure control — better to perform a Grade 5 piece confidently than a Grade 8 piece unreliably.",
                "**Stylistic awareness**: Demonstrate understanding of the period and style — Baroque ornaments performed correctly, Classical phrase shaping, Romantic expressive dynamics.",
                "**Musical expression**: Go beyond notes — shape phrases, breathe with the music, communicate to the audience.",
                "**Ensemble performance (if applicable)**: Demonstrate listening skills — balance with partners, follow dynamics collectively, maintain ensemble precision.",
                "**Sight-reading (if included)**: Identify key and time signature first; scan for difficult passages; maintain pulse above all else.",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 7,
      title: "World Music, Popular Music, and 20th-Century Styles",
      intro:
        "Cambridge IGCSE Music acknowledges that music exists outside the Western classical tradition. Understanding the music of different world cultures, jazz and blues, and the major 20th-century art music styles broadens musical literacy and provides additional composition and listening resources.",
      subheadings: [
        {
          title: "20th-Century Art Music",
          body: "The 20th century saw the abandonment of traditional tonality and the emergence of radically new musical languages. Key movements include Impressionism, Expressionism/Atonality, Neoclassicism, Serialism, and Minimalism.",
          groups: [
            {
              bullets: [
                "**Impressionism (Debussy, Ravel)**: Blurred harmonies using whole-tone and pentatonic scales; parallel chord movement; orchestral colour as primary structural element (*La Mer*, *Prélude à l'après-midi d'un faune*).",
                "**Expressionism / Atonality (Schoenberg early)**: Extreme chromaticism dissolving all sense of key — the 'emancipation of dissonance'; emotionally intense (*Erwartung*, *Pierrot Lunaire*).",
                "**Serialism (Schoenberg — 12-tone method)**: All 12 pitches of the chromatic scale arranged in a fixed row; the row may be used in its original, retrograde (backwards), inverted, or retrograde-inversion forms — systematically organised atonality.",
                "**Neoclassicism (Stravinsky, Prokofiev)**: Return to classical forms, clean textures, and clear tonality — a reaction against late Romantic excess; *Pulcinella*, *Symphony of Psalms*.",
                "**Minimalism (Reich, Glass, Adams)**: Extremely slow harmonic rhythm; continuous repetition with gradual change; steady pulse; *Einstein on the Beach*, *Music for 18 Musicians*.",
              ],
            },
          ],
        },
        {
          title: "Jazz, Blues, and Popular Music",
          body: "Jazz emerged from African-American musical culture in New Orleans at the turn of the 20th century, drawing on blues, ragtime, and gospel. It has profoundly influenced all subsequent popular and art music.",
          groups: [
            {
              subTitle: "Blues Characteristics",
              bullets: [
                "**12-bar blues**: The foundational harmonic structure — chords I, IV, and V in a fixed 12-bar pattern.",
                "**Blue notes**: Flattened 3rd, 5th, and 7th scale degrees — notes bent between major and minor; the emotional core of blues expression.",
                "**Call and response**: A phrase in one voice 'answered' by another — rooted in African musical practice and work songs.",
                "**Improvisation**: The performer creates melodic variations in real time over the harmonic structure.",
              ],
            },
            {
              subTitle: "Jazz Styles",
              bullets: [
                "**Dixieland (1910s–20s)**: Collective improvisation by cornet, clarinet, and trombone over a rhythm section — lively, polyphonic.",
                "**Swing (1930s–40s)**: Big band (17+ players); arranged charts with improvised solos; syncopated, danceable rhythms; Benny Goodman, Duke Ellington, Count Basie.",
                "**Bebop (1940s)**: Charlie Parker, Dizzy Gillespie — fast tempos, complex harmony, virtuosic improvisation; for listening, not dancing.",
                "**Cool Jazz (1950s)**: Miles Davis *Kind of Blue* — more relaxed tempos, modal scales (no fixed chord changes), introspective mood.",
                "**Fusion (1970s–80s)**: Jazz + Rock/Funk — electric instruments, amplification, complex rhythms; Herbie Hancock, Weather Report.",
              ],
            },
          ],
        },
        {
          title: "World Music — Representative Traditions",
          body: "World music study develops cultural literacy and expands the candidate's compositional palette with scales, rhythmic patterns, and structural approaches from non-Western traditions.",
          groups: [
            {
              bullets: [
                "**Indian Classical Music**: Based on *raga* (melodic framework — specific ascending/descending note sequences, characteristic ornaments, emotional associations) and *tala* (rhythmic cycle — played on tabla). The *sitar* and *sarod* are principal melodic instruments; performance moves from slow *alap* (unaccompanied, free rhythm) through *jhor* to fast *gat* with tabla.",
                "**Gamelan (Indonesia)**: Bronze percussion ensemble (metallophones, gongs, drums) + flute and strings; based on *pelog* (7-tone) or *slendro* (5-tone) scales; interlocking rhythmic patterns (*kotekan*); layered texture with colotomic structure (gong marks the cycle).",
                "**African Drumming (West Africa)**: Complex polyrhythm — multiple rhythmic patterns simultaneously; the master drummer (*djembe*, *kpanlogo*) leads, others support; call-and-response between drummer and dancers.",
                "**Blues/Gospel (African-American South)**: Pentatonic and blues scale; improvisation; call-and-response; spiritual text; parent tradition of jazz and rock and roll.",
              ],
            },
          ],
        },
      ],
    },
  ],
};

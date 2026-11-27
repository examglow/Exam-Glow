import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Information and Communication Technology (0417) 2026–2028 Syllabus Notes
 * Part 2: Chapters 8–14 (Security, Audience, Communication & Document Foundation)
 */
export const ICT_PART2: Chapter[] = [
  {
    number: 8,
    title: "Safety and security",
    section: "8. Safety and security",
    topic: "Physical Security, eSafety, Cyber Threats, Malware and Defensive Countermeasures",
    intro:
      "As digital information becomes the primary asset of modern society, protecting data, digital identities, and physical computing infrastructure from accidental loss, cyberattacks, malware, and social engineering is paramount. This chapter details physical safety, eSafety, cyber threats and malware types, and defensive security architectures.",
    subheadings: [
      {
        title: "Physical Security and eSafety",
        body:
          "**Physical Security of Data and Hardware:**\n" +
          "- Physical security protects computing equipment, servers, and storage media against unauthorized physical access, theft, vandalism, and environmental disasters:\n" +
          "  1. **Access Control Doors:** Electronic keycards, biometric fingerprint/iris scanners, or security PIN keypads controlling entry to server rooms.\n" +
          "  2. **Physical Locks & Cages:** Locking server racks inside steel cages; using Kensington security cable locks to bolt desktop workstations and laptops to desks.\n" +
          "  3. **CCTV & Security Personnel:** Closed-circuit security cameras and 24/7 security guards monitoring perimeter entry points.\n" +
          "  4. **Environmental Controls:** Automatic gaseous clean-agent fire suppression systems (e.g. FM-200 / Argonite) that extinguish fires without damaging delicate electronics; raised flooring to prevent flood damage; temperature/humidity climate control units.\n" +
          "  5. **Uninterruptible Power Supplies (UPS):** Battery backup systems providing clean, emergency electricity during mains power cuts, allowing servers to save data and shut down safely without data corruption.\n\n" +
          "**eSafety (Electronic Safety):**\n" +
          "- Safe, responsible, and legal behavior when using the internet, mobile devices, and social media to protect personal well-being and privacy:\n" +
          "- **Personal Data Privacy:** Never publish sensitive personally identifiable information (PII) online (full name, home address, date of birth, telephone number, school name, daily routines).\n" +
          "- **Social Media Privacy Controls:** Configure account settings to 'Private' so only trusted friends and family can view posts, photos, and personal stories.\n" +
          "- **Location Services:** Disable GPS geolocation geotagging on photos and social media posts to prevent strangers from pinpointing home, school, or travel locations.\n" +
          "- **Recognizing Inappropriate Contact (Grooming):** Being aware of predatory behavior online; never agreeing to meet an online contact in person without parental permission and supervision.\n" +
          "- **Cyberbullying:** Using digital communication tools (messaging, social media, forums) to deliberately harass, intimidate, humiliate, or threaten someone. Victims should never retaliate, should block the perpetrator, take screenshot evidence, and report the behavior immediately to teachers, parents, or platform administrators.",
        examinerTips: [
          "Be precise: physical security relates to physical barriers protecting hardware (locks, CCTV, UPS), whereas eSafety relates to human behavioral rules protecting personal well-being online.",
          "When asked how an individual can protect their personal privacy on social media, state at least two concrete actions: setting profile visibility to private, refusing friend requests from strangers, and disabling photo location geotagging.",
        ],
        commonMistakes: [
          "Suggesting water sprinkler systems for server rooms. Water causes lethal electrical short-circuits; server rooms require specialized clean-gas fire suppression.",
        ],
        recap: [
          "State two physical security measures used to protect a corporate server room.",
          "List three eSafety guidelines that students should follow when using social networking websites.",
        ],
      },
      {
        title: "Security of Data: Cyber Threats, Malware & Social Engineering",
        body:
          "**Malware (Malicious Software):**\n" +
          "- Software intentionally written to damage, disrupt, steal, or gain unauthorized access to computer systems:\n" +
          "  - **Computer Virus:** A malicious program that attaches itself to legitimate host files or executable software. It requires human action (e.g. opening an infected file or running a program) to execute and replicate, corrupting data, deleting files, or crashing the OS.\n" +
          "  - **Computer Worm:** A self-replicating standalone program that spreads across computer networks autonomously **without requiring human intervention** or a host file. Worms exploit software security vulnerabilities, consuming massive network bandwidth and overloading servers.\n" +
          "  - **Trojan Horse:** Malicious code disguised as beneficial, legitimate software (e.g. a free game, utility, or document). When installed by the unsuspecting user, it secretly opens an unauthorized 'backdoor' port allowing remote attackers to control the system.\n" +
          "  - **Spyware:** Secretly monitors and collects user activities, internet browsing history, and personal information without consent, transmitting data to third parties.\n" +
          "  - **Keylogger:** Hardware device or software module that records every individual keystroke typed by the user on the keyboard, capturing passwords, credit card numbers, and confidential messages.\n" +
          "  - **Ransomware:** Encrypts user files or locks the entire operating system, demanding a financial cryptocurrency ransom payment in exchange for the decryption key.\n" +
          "  - **Rootkit:** Software designed to gain administrative ('root') privileges while actively hiding its presence and other malware from the operating system and antivirus scanners.\n" +
          "  - **Adware:** Automatically displays, plays, or downloads aggressive advertising banners or pop-up windows onto the screen.\n\n" +
          "**Social Engineering & Cyber Threats:**\n" +
          "- **Phishing:** Fraudulent emails sent by cybercriminals masquerading as legitimate trusted organizations (e.g. banks, PayPal) containing links to cloned spoof websites to trick victims into entering login credentials and financial details.\n" +
          "- **Pharming:** Malicious code installed on a user's computer or a compromised DNS (Domain Name System) server that automatically **redirects** the user's web browser away from a genuine website to a bogus spoofed website, even when the user types the correct URL.\n" +
          "- **Smishing & Vishing:** Phishing conducted via SMS text messages (Smishing) or automated voice telephone calls (Vishing).\n" +
          "- **Denial of Service (DoS) & Distributed Denial of Service (DDoS):** An attack that floods a web server or network gateway with billions of spurious requests, exhausting server memory, CPU processing capacity, and bandwidth, causing the website to crash and become unavailable to legitimate users. A **DDoS** attack uses a coordinated **botnet** of thousands of compromised 'zombie' computers.",
        examinerTips: [
          "Crucial distinction between viruses and worms: Viruses require a host file and human activation to replicate; Worms are standalone programs that replicate autonomously across networks without human action.",
          "Distinguish phishing and pharming: Phishing relies on social engineering via fraudulent emails/links; Pharming manipulates DNS servers or host files to redirect browsers automatically even if the correct address is typed.",
        ],
        commonMistakes: [
          "Confusing phishing and spam. Spam is merely unsolicited bulk junk advertising; phishing is fraudulent deception designed to steal confidential financial credentials.",
        ],
        recap: [
          "Explain the difference between a computer virus and a computer worm.",
          "Describe how a pharming attack operates and how it differs from phishing.",
        ],
      },
      {
        title: "Protective Security Measures & Cryptography",
        body:
          "**Technical Defensive Controls:**\n" +
          "- **Antivirus & Anti-Malware Software:** Scans files and memory against a database of known malware **signatures** (heuristics). Quarantines and removes infected files. Must be updated continuously to detect newly released zero-day malware variants.\n" +
          "- **Firewalls:** Hardware or software packet filters monitoring incoming and outgoing network traffic, blocking unauthorized access attempts from external hackers and preventing malware from communicating with command-and-control servers.\n" +
          "- **Strong Authentication Practices:**\n" +
          "  - **Strong Passwords:** Minimum 12+ characters combining uppercase, lowercase, numbers, and special symbols; changed regularly; not containing dictionary words or personal names.\n" +
          "  - **Biometrics:** Fingerprint, facial recognition, or iris scanning providing unique, non-replicable biological authentication.\n" +
          "  - **Two-Factor Authentication (2FA) / Multi-Factor Authentication (MFA):** Requires two or more distinct authentication factors from different categories:\n" +
          "    1. Something you know (password / PIN).\n" +
          "    2. Something you have (smartcard, hardware security key, or one-time SMS/authenticator code on a smartphone).\n" +
          "    3. Something you are (biometric fingerprint or face scan).\n\n" +
          "**Data Encryption and Cryptography:**\n" +
          "- **Encryption:** The mathematical transformation of readable plain text data into unreadable ciphertext using a cryptographic algorithm and mathematical key.\n" +
          "- **Symmetric Encryption:** Uses the **same secret key** to both encrypt and decrypt the data. Both parties must share the secret key beforehand; if the key is intercepted in transit, security is compromised.\n" +
          "- **Asymmetric Encryption (Public-Key Cryptography):**\n" +
          "  - Uses a mathematically linked pair of keys:\n" +
          "  - **Public Key:** Freely published to the world, used by anyone to encrypt a message intended for the recipient.\n" +
          "  - **Private Key:** Kept strictly secret by the recipient; the only key capable of decrypting ciphertext encrypted with the corresponding public key.\n" +
          "- **Secure Sockets Layer (SSL) / Transport Layer Security (TLS):** Cryptographic protocols securing communications over the internet (**HTTPS**). Visualized in web browsers by a padlock icon in the address bar, encrypting payment cards and passwords.\n" +
          "- **Digital Certificates:** Electronic credentials issued by trusted Certificate Authorities (CAs) certifying the identity of a website owner and containing their verified public key.\n\n" +
          "**Data Backup Strategies:**\n" +
          "- Making regular duplicate copies of data files on separate secondary storage media.\n" +
          "- **The 3-2-1 Backup Rule:** Maintain at least 3 copies of data, across 2 different media types, with at least 1 copy kept **off-site** (in a remote physical location or cloud storage) to survive local fire, flood, or ransomware attacks.",
        examinerTips: [
          "In questions on Two-Factor Authentication (2FA), explicitly state the three categories: something you know (password), something you have (phone/token), and something you are (biometrics).",
          "Explain why HTTPS is necessary for online banking: it deploys SSL/TLS encryption, meaning intercepted data packets cannot be read or modified by malicious eavesdroppers.",
        ],
        commonMistakes: [
          "Claiming that encryption prevents hackers from intercepting or stealing data. Encryption only ensures that intercepted data cannot be read without the private decryption key.",
        ],
        recap: [
          "Explain how asymmetric (public-key) encryption works.",
          "Describe how Two-Factor Authentication (2FA) provides superior security compared to a single alphanumeric password.",
        ],
      },
    ],
  },
  {
    number: 9,
    title: "Audience",
    section: "9. Audience",
    topic: "Audience Profiling, Copyright, Intellectual Property and Software Licensing",
    intro:
      "Effective ICT solutions must be carefully tailored to the specific characteristics, needs, and capabilities of target audiences. Furthermore, computer users and software developers must understand legal copyright protections, intellectual property rights, and software licensing models. This chapter explores audience profiling and software legality.",
    subheadings: [
      {
        title: "Audience Characteristics and Needs",
        body:
          "**Audience Profiling:**\n" +
          "- When designing any ICT product (a website, presentation, multimedia app, or database interface), developers must analyze the demographic and cognitive profile of the target audience:\n" +
          "  1. **Age Group:**\n" +
          "     - **Young Children (Primary):** Requires bright primary colors, large sans-serif typography, prominent visual graphics/animations, voice audio narration, minimal dense text, and simple drag-and-drop or touch interactions.\n" +
          "     - **Adults & Professionals:** Requires sober, professional color palettes, sophisticated formal vocabulary, detailed data tables, structured layouts, and clear information hierarchy.\n" +
          "  2. **Prior ICT Experience and Computer Literacy:**\n" +
          "     - **Novices:** Need clear visual cues, step-by-step wizard guides, large clickable buttons, and intuitive navigation.\n" +
          "     - **Expert Users:** Need keyboard shortcuts, advanced search filters, command-line flexibility, and dense data views.\n" +
          "  3. **Special Needs and Accessibility:**\n" +
          "     - **Visual Impairment:** Resizable font sizes, high-contrast display modes (e.g. yellow on black), alternative text (alt text) for screen readers, and compatibility with Braille displays.\n" +
          "     - **Hearing Impairment:** Closed captions and text subtitles for all video and audio content; visual flashing alerts instead of audible beeps.\n" +
          "     - **Physical Motor Impairment:** Large click targets, sticky keys, voice-recognition navigation, and single-switch accessibility inputs.\n" +
          "  4. **Language and Cultural Background:** Content localization, internationalization of dates, currencies, and reading directions (e.g. left-to-right vs right-to-left).\n\n" +
          "**Tailoring Content to Audience Needs:**\n" +
          "- **Language & Vocabulary:** Avoiding complex technical jargon when presenting to the general public; using precise scientific terminology for academic audiences.\n" +
          "- **Visual Tone:** Balancing text-to-image ratios; ensuring media choices enhance comprehension rather than causing visual distraction.",
        examinerTips: [
          "When comparing solutions designed for young children vs adults, give specific design elements: font size, color palette, amount of text, voice narration, and interface simplicity.",
          "Remember that accessibility features like 'alt text' on images are essential for visually impaired users utilizing screen readers.",
        ],
        commonMistakes: [
          "Giving vague answers like 'make it look nice'. Specify concrete design choices: 'use large sans-serif fonts, high contrast, and voice synthesis'.",
        ],
        recap: [
          "State three design features that should be included when developing an educational website for young children.",
          "Describe two accessibility features that assist visually impaired users when accessing digital content.",
        ],
      },
      {
        title: "Copyright, Intellectual Property & Software Licensing",
        body:
          "**Copyright and Intellectual Property (IP):**\n" +
          "- **Intellectual Property:** Creations of the human mind, including literary works, musical compositions, software source code, artistic graphics, inventions, and brand logos.\n" +
          "- **Copyright Law:** Automatic legal protection granted to the creator of original artistic, literary, or software work, giving them exclusive legal rights to distribute, copy, adapt, and sell their work.\n" +
          "- **Software Piracy:** The illegal, unauthorized copying, distribution, downloading, or commercial resale of copyrighted software without the copyright owner's permission or license.\n" +
          "- **Plagiarism:** Stealing someone else's original creative work, text, or ideas and passing them off dishonestly as one's own without attribution or quotation.\n\n" +
          "**Anti-Piracy Software Protection Mechanisms:**\n" +
          "  1. **Product License Keys / Serial Numbers:** A unique alphanumeric code required during installation that is verified online against a centralized activation server.\n" +
          "  2. **Hardware Dongles / Security Keys:** A physical USB cryptographic key that must be plugged into the computer; the software continuously checks for its presence before running.\n" +
          "  3. **Digital Rights Management (DRM):** Cryptographic access control technologies that restrict the copying, printing, or playback of digital media and software to authorized registered devices.\n" +
          "  4. **Cloud-Based Subscription Models:** Software runs as a cloud service (SaaS) or requires continuous periodic online authentication check-ins (e.g. Adobe Creative Cloud, Microsoft 365), making offline cracking difficult.\n\n" +
          "**Software Licensing Models:**\n" +
          "- **Commercial / Proprietary Software:**\n" +
          "  - Software owned by a commercial company (e.g. Windows, Microsoft Office).\n" +
          "  - Users purchase a license to use the compiled software, but **source code is strictly secret** and cannot be viewed, modified, or shared.\n" +
          "- **Shareware:** Commercial software distributed free of charge on a trial basis for a limited period (e.g. 30 days) or with restricted features. Users must pay a fee to unlock the full permanent version.\n" +
          "- **Freeware:** Copyrighted software distributed completely free of charge for unlimited use, but the source code remains proprietary and closed.\n" +
          "- **Open-Source Software (OSS):**\n" +
          "  - Software released under open licenses (e.g. GNU General Public License, MIT) where the **underlying human-readable source code is made freely available to everyone**.\n" +
          "  - Users are legally permitted to view, inspect, modify, adapt, fix bugs, and redistribute the software freely (e.g. Linux, LibreOffice, Python, Blender).\n" +
          "- **Public Domain Software:** Software that has no copyright restrictions because the copyright has expired or was explicitly relinquished; anyone can modify or sell it without restriction.",
        examinerTips: [
          "Be precise: Freeware is free of charge, but source code is CLOSED and secret. Open-source software provides full access to the source code so users can modify and recompile it.",
          "When explaining software copyright violations, state the legal consequence: fines, lawsuits, or criminal prosecution under copyright legislation.",
        ],
        commonMistakes: [
          "Assuming open-source software is illegal or unregulated. Open-source software is fully legal and governed by structured open licensing frameworks like the GPL.",
        ],
        recap: [
          "Explain the difference between proprietary commercial software and open-source software.",
          "Describe three methods software developers use to protect their software from piracy.",
        ],
      },
    ],
  },
  {
    number: 10,
    title: "Communication",
    section: "10. Communication",
    topic: "Email Protocols, Netiquette, Internet Searching and Information Credibility",
    intro:
      "Modern global communication relies upon electronic mail systems, instant messaging, and web browsing. However, effective digital communication requires adherence to professional netiquette, advanced search techniques, and critical evaluation of information reliability. This chapter examines digital communication channels, protocols, and information credibility.",
    subheadings: [
      {
        title: "Electronic Mail (Email) and Netiquette",
        body:
          "**The Structure and Features of Email:**\n" +
          "- **To:** Primary recipient(s) who are expected to read and take action.\n" +
          "- **Cc (Carbon Copy):** Secondary recipient(s) sent a copy for information purposes; all other recipients can see their email addresses.\n" +
          "- **Bcc (Blind Carbon Copy):** Secret recipient(s). Other recipients cannot see that a copy was sent to Bcc addresses. **Crucial Security Use:** When sending bulk emails to hundreds of recipients, placing them in Bcc prevents disclosing everyone's private email addresses, complying with data protection laws.\n" +
          "- **Subject Line:** Concise summary of email contents; emails with clear subjects avoid being caught in spam filters.\n" +
          "- **Attachments:** Attaching external digital files (documents, images, spreadsheets) up to typical file limits (e.g. 25 MB).\n" +
          "- **Email Address Books & Groups:** Storing contacts; creating distribution lists to email entire teams with a single address.\n\n" +
          "**Email Communication Protocols:**\n" +
          "- **SMTP (Simple Mail Transfer Protocol):** Protocol used to push / send outgoing email messages from an email client to an email server, and between email servers across the internet.\n" +
          "- **POP3 (Post Office Protocol 3):** Downloads emails from the mail server to the local client device and immediately deletes them from the server. Emails can only be read on that single device and cannot be synchronized across multiple computers.\n" +
          "- **IMAP (Internet Message Access Protocol):** Synchronizes emails dynamically between the central mail server and multiple client devices (smartphones, laptops, tablets). Messages remain stored on the server, ensuring folder changes, reads, and deletes reflect across all devices.\n\n" +
          "**Email Netiquette (Network Etiquette):**\n" +
          "- The informal code of courteous, professional behavior expected in digital communications:\n" +
          "  1. **Do not write in ALL CAPITAL LETTERS:** Typing in all-caps is universally interpreted as SHOUTING, aggressive, and rude.\n" +
          "  2. **Use Clear, Professional Language:** Avoid offensive slang, discriminatory remarks, or excessive informal emoticons in professional contexts.\n" +
          "  3. **Include a Meaningful Subject Line:** Never leave the subject blank.\n" +
          "  4. **Proofread Before Sending:** Check spelling, grammar, and ensure referenced attachments are actually attached.\n" +
          "  5. **Respect Privacy:** Use Bcc when emailing large public lists; never forward private confidential emails without the sender's explicit permission.",
        examinerTips: [
          "State clearly why Bcc should be used when sending mass emails to multiple customers: to keep email addresses private and prevent identity exposure / spam harvesting.",
          "Distinguish POP3 (downloads and deletes from server) and IMAP (leaves messages on server and synchronizes across all devices).",
        ],
        commonMistakes: [
          "Confusing SMTP and POP3/IMAP. SMTP is for SENDING emails; POP3 and IMAP are for RETRIEVING emails.",
        ],
        recap: [
          "Explain the difference between the Cc and Bcc fields in an email message.",
          "State two advantages of using IMAP instead of POP3 for email retrieval on mobile devices.",
        ],
      },
      {
        title: "Effective Internet Searching & Information Credibility",
        body:
          "**Effective Internet Search Strategies:**\n" +
          "- Modern search engines index billions of web pages. Locating precise academic or technical information requires advanced search parameters:\n" +
          "  - **Quotation Marks (\"...\"):** Searches for the exact phrase in that specific word sequence (e.g. `\"Cambridge IGCSE ICT\"`).\n" +
          "  - **Boolean Operators:**\n" +
          "    - `AND`: Finds pages containing both terms (narrows search).\n" +
          "    - `OR`: Finds pages containing either term (broadens search).\n" +
          "    - `NOT` / `-`: Excludes specific unwanted keywords from search results (e.g. `jaguar -car`).\n" +
          "  - **Domain Filters (`site:`):** Restricts search to specific top-level domains (e.g. `site:gov` or `site:ac.uk`).\n" +
          "  - **File Type Filters (`filetype:`):** Searches exclusively for specific document formats (e.g. `filetype:pdf`).\n\n" +
          "**Evaluating the Credibility and Reliability of Information:**\n" +
          "- Anyone can publish information on the World Wide Web without editorial fact-checking, peer review, or legal verification. Students and researchers must critically evaluate websites using the following criteria:\n" +
          "  1. **Author Qualifications & Provenance:** Is the author a recognized academic, certified professional, or reputable institution? Are credentials, affiliations, and contact details provided?\n" +
          "  2. **Top-Level Domain (TLD):** Government (.gov), accredited academic universities (.ac, .edu), and international organizations (.org) are generally more authoritative than commercial (.com) or personal (.biz) domains.\n" +
          "  3. **Objectivity and Bias:** Is the text balanced and supported by verifiable evidence, or is it promotional advertising, propaganda, or emotionally biased opinion?\n" +
          "  4. **Date of Publication & Currency:** Is the information up-to-date? Check the 'last updated' footer date; outdated scientific or historical data may be obsolete.\n" +
          "  5. **Cross-Referencing & Corroboration:** Check whether facts, statistics, and claims are corroborated by at least two other independent, reputable sources.\n" +
          "  6. **Professional Presentation:** Presence of severe spelling errors, broken hyperlinks, amateurish typography, and aggressive pop-up advertisements often signal an untrustworthy source.",
        examinerTips: [
          "When asked how to evaluate the reliability of a website, give at least four distinct criteria: check author qualifications, evaluate domain extension (.gov/.edu), check last updated date, and cross-reference with other trusted sources.",
          "Remember that Wikipedia is an open wiki: its articles can be edited by anyone, so information can be temporarily vandalized or inaccurate until community-moderated.",
        ],
        commonMistakes: [
          "Assuming that top-ranking search results on Google are guaranteed to be reliable. High search rankings can be achieved through Search Engine Optimization (SEO) or paid commercial promotion, not scientific accuracy.",
        ],
        recap: [
          "State two Boolean search operators and explain how each affects search results.",
          "List four criteria a student should use to evaluate the credibility of information found on an unfamiliar website.",
        ],
      },
    ],
  },
  {
    number: 11,
    title: "File management",
    section: "11. File management",
    topic: "Folder Hierarchies, File Formats, Generic Standards and Data Compression",
    intro:
      "Effective digital organization requires structured directory hierarchies, an understanding of proprietary versus generic file formats, and data compression algorithms. This chapter explores file extensions, MIME types, relative versus absolute pathnames, and lossy versus lossless compression.",
    subheadings: [
      {
        title: "File Structures, Extensions & Generic Formats",
        body:
          "**Hierarchical Directory Structures:**\n" +
          "- Files are organized inside hierarchical folder trees originating from a **root directory** (e.g. `C:\\` or `/`).\n" +
          "- **Pathnames:**\n" +
          "  - **Absolute File Path:** Specifies the complete, full location of a file starting from the root directory down through every subfolder (e.g. `C:\\Users\\Student\\Documents\\ICT\\Revision.docx`).\n" +
          "  - **Relative File Path:** Specifies the location of a target file relative to the current working folder (e.g. `../images/diagram.png`). Essential in website development so hyperlinks do not break when published to a web server.\n\n" +
          "**Proprietary vs. Generic File Formats:**\n" +
          "- **Proprietary Formats:** File formats created and owned by a specific commercial software company, often requiring that specific application to open and edit:\n" +
          "  - Microsoft Word (`.docx`), Microsoft Excel (`.xlsx`), Adobe Photoshop (`.psd`).\n" +
          "- **Generic (Standard) Formats:** Universally accessible, non-proprietary formats that can be opened and interpreted across multiple different operating systems and software applications:\n" +
          "  - **Text / Document Formats:**\n" +
          "    - `.txt` (Plain text): Unformatted raw ASCII/Unicode text; no font or layout styling; very small file size.\n" +
          "    - `.rtf` (Rich Text Format): Universal text format preserving basic font styles, bold, italic, and margins across different word processors.\n" +
          "    - `.pdf` (Portable Document Format): Open standard format preserving exact fonts, images, and layout across any device and operating system; uneditable by default.\n" +
          "  - **Tabular / Database Formats:**\n" +
          "    - `.csv` (Comma-Separated Values): Plain text format storing tabular spreadsheet/database records where fields are separated by commas and records by newlines. Universally imported into any spreadsheet or database engine.\n" +
          "  - **Web Formats:**\n" +
          "    - `.html` / `.htm` (Hypertext Markup Language): Structure and content layer of web pages.\n" +
          "    - `.css` (Cascading Style Sheets): Presentation and styling layer of web pages.",
        examinerTips: [
          "In Practical Papers 2 and 3, examiners frequently supply data as a `.csv` file. You must know that `.csv` files contain raw text and do NOT store formulas, formatting, or charts; you must save them as `.xlsx` after importing.",
          "Understand why relative paths must be used when linking images and CSS in HTML website authoring: absolute local paths (e.g. `C:\\Users\\...`) will fail when the website is uploaded to a remote web server.",
        ],
        commonMistakes: [
          "Assuming `.csv` can save spreadsheet formulas or cell highlight colors. CSV is strictly plain text separated by commas.",
        ],
        recap: [
          "What is the difference between an absolute file path and a relative file path?",
          "Explain why .csv files are used to transfer data between different spreadsheet and database programs.",
        ],
      },
      {
        title: "File Size Reduction and Data Compression",
        body:
          "**Why File Compression is Necessary:**\n" +
          "- Uncompressed multimedia files (raw audio, high-resolution photographs, 4K video) consume massive amounts of storage space and take an excessively long time to upload, download, or email across internet bandwidth connections.\n" +
          "- Compression reduces the binary size of a file by applying mathematical encoding algorithms.\n\n" +
          "**Lossless Compression:**\n" +
          "- **Mechanism:** Analyzes the file for repetitive patterns and replaces them with shorter numerical tokens or frequency dictionaries without discarding any original data.\n" +
          "- **Run-Length Encoding (RLE):** Replaces consecutive identical values with a count and value (e.g. `AAAAABBB` becomes `5A3B`).\n" +
          "- **Integrity:** When decompressed, the file is **100% identical** to the original byte-for-byte; zero data is lost.\n" +
          "- **Applications:** Crucial for text documents, executable software programs, database records, and spreadsheets where losing a single character or number would corrupt the entire file.\n" +
          "- **Common Lossless Formats:** `.zip`, `.rar`, `.png` (images), `.flac` (audio).\n\n" +
          "**Lossy Compression:**\n" +
          "- **Mechanism:** Permanently removes and discards redundant data that is relatively imperceptible to human sensory limitations (e.g. sounds beyond human hearing thresholds, subtle shades of color that the human eye cannot distinguish).\n" +
          "- **Permanent:** Once compressed, the discarded data is gone forever and cannot be recovered upon decompression.\n" +
          "- **Compression Ratio:** Achieves massive reductions in file size (often 80–90% reduction, or 10:1 ratio) with negligible perceived loss of quality.\n" +
          "- **Applications:** Multimedia streaming and storage where slight quality reduction is acceptable:\n" +
          "  - **Images:** `.jpg` / `.jpeg` (JPEG image compression).\n" +
          "  - **Audio:** `.mp3`, `.aac` (discarding frequencies above 20 kHz and soft sounds played immediately after loud sounds).\n" +
          "  - **Video:** `.mp4`, `.avi` (H.264/H.265 compression discarding identical pixels between consecutive video frames).",
        examinerTips: [
          "Always state that lossless compression preserves every single bit of original data with zero loss of quality, whereas lossy compression permanently discards imperceptible data to achieve much smaller file sizes.",
          "Give the classic rule: Lossless for text, code, and databases; Lossy for audio, photography, and video.",
        ],
        commonMistakes: [
          "Suggesting lossy compression for a text document. Lossy compression permanently discards data, which would delete words and scramble text.",
        ],
        recap: [
          "State the difference between lossy and lossless data compression.",
          "Explain why lossy compression is suitable for photographs (.jpg) but unsuitable for program executable files (.exe).",
        ],
      },
    ],
  },
  {
    number: 12,
    title: "Images",
    section: "12. Images",
    topic: "Bitmap vs Vector Graphics, Image Sizing, Aspect Ratio and Manipulation",
    intro:
      "Visual media is an essential component of document production, presentations, and website authoring. Candidates must master bitmap versus vector graphic architectures, resolution calculations, image placement, aspect ratio preservation, and digital manipulation techniques tested in practical examinations.",
    subheadings: [
      {
        title: "Bitmap vs. Vector Graphics & Resolution",
        body:
          "**Bitmap (Raster) Graphics:**\n" +
          "- Built from a rectangular grid of microscopic picture elements called **pixels**.\n" +
          "- Each pixel is assigned an exact color value represented by binary bits (e.g. 24-bit TrueColor uses 8 bits each for Red, Green, and Blue, providing 16.7 million colors).\n" +
          "- **Resolution-Dependent:** When an image is enlarged, the individual square pixels become visible, causing jagged, blurry edges (**pixelation**).\n" +
          "- **Applications:** Continuous-tone photographic images with rich, complex color gradients.\n" +
          "- **Common Formats:** `.jpg`, `.png`, `.bmp`, `.gif`.\n\n" +
          "**Vector Graphics:**\n" +
          "- Composed of mathematical geometric equations defining points, lines, curves, shapes, and color fills.\n" +
          "- **Resolution-Independent:** Can be scaled to any size (from a miniature postage stamp to a giant highway billboard) with **zero pixelation** or loss of razor-sharp clarity, because the computer simply recalculates the mathematical coordinates.\n" +
          "- **File Size:** Often significantly smaller file sizes for logos, typography, and line diagrams.\n" +
          "- **Limitation:** Cannot represent complex, photorealistic continuous-tone photography.\n" +
          "- **Common Formats:** `.svg` (Scalable Vector Graphics), `.ai`, `.eps`.\n\n" +
          "**Image Resolution Metrics:**\n" +
          "- **DPI (Dots Per Inch) / PPI (Pixels Per Inch):** Density of pixels within a linear inch.\n" +
          "- **Screen Displays:** Typically 72–96 DPI; Web images are optimized at 72–96 DPI to maintain fast webpage loading speeds.\n" +
          "- **Print Publishing:** High-quality commercial paper printing requires 300+ DPI to appear sharp and crisp without visible grain.",
        examinerTips: [
          "In exam questions comparing bitmap and vector images, state: Bitmap images are made of pixels and pixelate when enlarged; Vector images are made of mathematical formulas and can be scaled infinitely without losing quality.",
          "Remember that high-resolution images take much longer to load on web pages, which is why images must be resized and compressed before embedding.",
        ],
        commonMistakes: [
          "Believing vector graphics are suitable for digital camera photographs. Digital cameras capture light through sensor arrays, producing bitmap images.",
        ],
        recap: [
          "Explain why vector graphics do not lose quality when enlarged compared to bitmap graphics.",
          "State two advantages of the SVG image format for web pages.",
        ],
      },
      {
        title: "Image Manipulation Techniques in Practical Papers",
        body:
          "**Practical Image Editing Operations (Papers 2 & 3):**\n" +
          "- **1. Maintaining Aspect Ratio:**\n" +
          "  - **Aspect Ratio:** The proportional mathematical relationship between an image's width and height (e.g. 4:3, 16:9, 1:1).\n" +
          "  - **The Golden Rule:** When resizing an image in word processing or web authoring, the aspect ratio **must be locked / maintained**. Dragging a side handle alone distorts the image, squishing or stretching subjects unnaturally (examiners penalize this heavily).\n" +
          "- **2. Cropping vs. Resizing:**\n" +
          "  - **Resizing:** Changes the display dimensions (width and height in centimeters, inches, or pixels) of the entire complete image.\n" +
          "  - **Cropping:** Permanently removes unwanted outer portions or background distractions from an image, focusing on the central subject.\n" +
          "- **3. Rotating and Reflecting:**\n" +
          "  - Rotating by exact degrees (e.g. 90° clockwise, 180°).\n" +
          "  - Reflecting (flipping) horizontally or vertically across an axis.\n" +
          "- **4. Adjusting Brightness and Contrast:**\n" +
          "  - **Brightness:** Adjusts the overall lightness or darkness of every pixel across the image.\n" +
          "  - **Contrast:** Increases or decreases the separation between the darkest shadows and brightest highlights.\n" +
          "- **5. Color Depth & Grayscale Conversion:**\n" +
          "  - Reducing color depth (e.g. from 24-bit TrueColor to 8-bit / 256 colors) to reduce file size.\n" +
          "  - Converting full-color images to grayscale or monochrome black-and-white for mono printing.\n" +
          "- **6. Text Wrapping in Documents:**\n" +
          "  - Configuring how body text flows around embedded image frames: Square, Tight, Behind Text, In Front of Text, or Top and Bottom.",
        examinerTips: [
          "In Practical Paper 2, whenever instructed to insert an image, ALWAYS check that 'Lock aspect ratio' is checked before changing width or height.",
          "Never crop when an exam question instructs you to resize, and never resize when instructed to crop. Cropping removes outer parts; resizing changes scale.",
        ],
        commonMistakes: [
          "Stretching an image horizontally or vertically, distorting human faces or circular objects. This loses marks in every practical examination.",
        ],
        recap: [
          "Explain the difference between cropping an image and resizing an image.",
          "Why is it essential to maintain the aspect ratio when resizing an image in an examination document?",
        ],
      },
    ],
  },
  {
    number: 13,
    title: "Layout",
    section: "13. Layout",
    topic: "Page Geometry, Margins, Multi-Column Layouts, Tables and Automated Headers",
    intro:
      "Professional document production requires precise page layout architecture. Cambridge practical examinations test page orientation, margins, multi-column sections, table structures, and automated headers and footers. This chapter establishes the structural standards required for top-tier document production.",
    subheadings: [
      {
        title: "Page Geometry, Margins & Multi-Column Sections",
        body:
          "**Page Orientation and Paper Sizes:**\n" +
          "- **Portrait:** Vertical orientation where page height exceeds page width (standard for letters, reports, essays).\n" +
          "- **Landscape:** Horizontal orientation where page width exceeds page height (used for wide financial spreadsheets, certificates, presentation slides).\n" +
          "- **Paper Standards:** Standard ISO A4 (210 mm × 297 mm) or US Letter.\n\n" +
          "**Margins and Gutter Margins:**\n" +
          "- **Page Margins:** The blank boundary space surrounding the text and content area at the Top, Bottom, Left, and Right of a page.\n" +
          "- In Cambridge practical examinations, margins must be set to exact metric dimensions specified in the question paper (e.g. exactly 2.0 cm on all four sides).\n" +
          "- **Gutter Margin:** Additional margin allowance added to the inside binding edge of pages in bound booklets or books to prevent text from being hidden in the binding crease.\n\n" +
          "**Section Breaks and Multi-Column Layouts:**\n" +
          "- Documents frequently combine full-width titles with multi-column body text (e.g. newspaper or newsletter layouts).\n" +
          "- **Section Breaks:** Continuous section breaks are inserted to isolate different layout formatting on the same page. A title paragraph can be single-column full-width, followed by a continuous break that formats the subsequent body text into two or three columns.\n" +
          "- **Column Parameters:**\n" +
          "  - **Number of Columns:** 2 or 3 equal-width columns.\n" +
          "  - **Column Spacing (Gutter / Gap):** The blank space between adjacent columns, specified precisely in centimeters (e.g. 2 columns with a 1.0 cm space between them).\n" +
          "  - **Column Break:** Manually forces text following the break cursor to immediately jump to the top of the next column.",
        examinerTips: [
          "In Paper 2 Document Production, always verify margins before applying section breaks or styles, as changing margins later shifts pagination and column balances.",
          "Ensure you apply continuous section breaks so that full-width titles stay at the top while body text splits into 2 or 3 columns on the exact same page.",
        ],
        commonMistakes: [
          "Using spacebar or Enter keys repeatedly to move text to the next column. Always use an official 'Column Break'.",
        ],
        recap: [
          "State the difference between Portrait and Landscape page orientations.",
          "Explain why continuous section breaks are required when creating a two-column newsletter with a full-width title.",
        ],
      },
      {
        title: "Table Formatting and Automated Headers/Footers",
        body:
          "**Table Construction and Formatting in Practical Exams:**\n" +
          "- Tables organize comparative data into horizontal **rows** and vertical **columns** forming **cells**.\n" +
          "- **Key Table Formatting Requirements:**\n" +
          "  1. **Cell Merging:** Combining two or more adjacent cells horizontally or vertically into a single unified cell (commonly used for table title headers).\n" +
          "  2. **Cell Alignment:** Setting text alignment horizontally (Left, Center, Right) and vertically (Top, Middle, Bottom) within table cells.\n" +
          "  3. **Text Formatting:** Table headers should typically be bold, centered, or have subtle light background shading (10–25% gray) to distinguish them from data rows.\n" +
          "  4. **Table Borders:** Ensuring gridlines and outer borders are visible or hidden exactly as instructed in the question paper; border lines must not overlap or break.\n" +
          "  5. **AutoFit and Width:** Setting table width to 100% of the column or page margin width; ensuring no text wraps awkwardly across multiple lines unnecessarily.\n" +
          "  6. **Preventing Row Splits Across Pages:** Ensuring table rows do not break awkwardly across a page boundary; repeating header rows at the top of subsequent pages if a table spans multiple pages.\n\n" +
          "**Automated Headers and Footers:**\n" +
          "- **Header:** Blank area at the top of every page above the top margin.\n" +
          "- **Footer:** Blank area at the bottom of every page below the bottom margin.\n" +
          "- **Rules for Automated Header/Footer Fields:**\n" +
          "  - **Candidate Details:** Candidate name, Centre number, and Candidate number must be placed in the header or footer exactly as specified (e.g. left-aligned or right-aligned).\n" +
          "  - **Automated Page Numbering:** Must use automated dynamic field codes (e.g. `Page X of Y`), NEVER manually typed numbers.\n" +
          "  - **Automated File Name and Path:** Dynamic field inserting the exact file name and full drive directory path.\n" +
          "  - **Alignment:** Consistent alignment to margins (Left, Center, Right) using tab stops; headers and footers must be identical across all pages unless instructed otherwise for the first page.",
        examinerTips: [
          "Never type page numbers manually in footers! Use the software's automated Page Number field; manually typed numbers will display the same number on every page and score zero marks.",
          "Check that all table text is fully visible with no truncated numbers or wrapped table headers before printing or exporting to PDF.",
        ],
        commonMistakes: [
          "Allowing a table to split awkwardly with just one row dangling at the top of the next page. Adjust spacing or insert a page break to keep the table intact.",
        ],
        recap: [
          "Describe how to merge cells in a table and state one common use for merged cells.",
          "Why must page numbers in document footers be created using automated field codes rather than typed numbers?",
        ],
      },
    ],
  },
  {
    number: 14,
    title: "Styles",
    section: "14. Styles",
    topic: "Corporate House Styles, Paragraph and Character Formatting",
    intro:
      "A corporate house style ensures that all documents, publications, and web pages produced by an organization maintain an instantly recognizable, consistent, and professional visual identity. This chapter details paragraph styles, typographic hierarchies, and practical style creation tested in Cambridge Paper 2.",
    subheadings: [
      {
        title: "Corporate House Styles and Typographic Principles",
        body:
          "**The Purpose of a Corporate House Style:**\n" +
          "- A set of standardized graphic and typographic rules established by an organization to govern the design, layout, and presentation of all external and internal documents:\n" +
          "  1. **Brand Recognition & Identity:** Creates an immediate, cohesive visual identity recognized by customers and stakeholders (e.g. IBM, Apple, Cambridge).\n" +
          "  2. **Professional Consistency:** Ensures all staff members produce documents that look uniform, polished, and error-free regardless of who created them.\n" +
          "  3. **Efficiency:** Saves substantial time: writers apply predefined master styles in one click rather than manually formatting fonts, sizes, and spacing on every paragraph.\n\n" +
          "**Core Typographic Classifications:**\n" +
          "- **Serif Fonts:**\n" +
          "  - Characterized by small decorative projections, strokes, or 'feet' at the ends of letterforms (e.g. Times New Roman, Georgia).\n" +
          "  - **Reading Flow:** The serifs visually guide human eyes horizontally along printed lines of text.\n" +
          "  - **Best Used For:** Printed body text in books, newspapers, and formal academic reports.\n" +
          "- **Sans-Serif Fonts ('Sans' = French for 'without'):**\n" +
          "  - Clean, modern letterforms without decorative feet (e.g. Arial, Calibri, Helvetica, Verdana).\n" +
          "  - **Clarity on Screens:** Highly legible on digital computer monitors and mobile displays where lower screen resolutions might blur tiny serifs.\n" +
          "  - **Best Used For:** Headings, titles, digital screens, websites, and text intended for young children or readers with dyslexia.\n\n" +
          "**Document Typographic Hierarchy:**\n" +
          "- **Title:** Largest font size (e.g. 24–32 pt), bold, single-column full-width at top of document.\n" +
          "- **Subtitle:** Medium font (e.g. 14–18 pt), often italic or muted color, placed directly below title with author name.\n" +
          "- **Heading (Heading 1):** Clear dividing markers (e.g. 14–16 pt bold) separating major sections.\n" +
          "- **Subheading (Heading 2):** Intermediate markers (e.g. 12–14 pt bold/italic) organizing subsections.\n" +
          "- **Body Text:** Standard body text (e.g. 10–12 pt regular), high readability, consistent line spacing.",
        examinerTips: [
          "Memorize the visual distinction: Serif fonts have 'feet' (e.g. Times New Roman); Sans-serif fonts do NOT have 'feet' (e.g. Arial). Cambridge exams routinely ask you to define or apply both.",
          "Explain that a corporate house style saves production time and ensures visual consistency across an entire commercial organization.",
        ],
        commonMistakes: [
          "Calling Arial a serif font. Arial is strictly sans-serif.",
        ],
        recap: [
          "State two purposes of establishing a corporate house style within a business organization.",
          "Describe the visual difference between a serif font and a sans-serif font, giving one example of each.",
        ],
      },
      {
        title: "Creating, Modifying and Applying Styles in Paper 2",
        body:
          "**Practical Style Specification Parameters:**\n" +
          "- In Cambridge IGCSE Paper 2, candidates are required to create or modify custom paragraph styles based on a rigorous specification table.\n" +
          "- Every custom style consists of precise, checkable formatting attributes:\n" +
          "  1. **Style Name:** Must be spelled exactly as specified in the exam paper (e.g. `SP-Title`, `SP-Heading`, `SP-Body`). Note that style names are case-sensitive.\n" +
          "  2. **Font Family:** Serif (e.g. Times New Roman) or Sans-serif (e.g. Arial).\n" +
          "  3. **Font Size:** Exact point size (e.g. 12 pt, 14 pt, 24 pt).\n" +
          "  4. **Font Enhancement:** Regular, **Bold**, *Italic*, or Underline.\n" +
          "  5. **Text Alignment:**\n" +
          "     - **Left-aligned:** Text aligns evenly on left margin; ragged right edge.\n" +
          "     - **Right-aligned:** Text aligns evenly on right margin; ragged left edge.\n" +
          "     - **Center-aligned:** Text centered symmetrically between margins.\n" +
          "     - **Justified:** Spacing between words is adjusted so text aligns flush against both left and right margins simultaneously.\n" +
          "  6. **Line Spacing:**\n" +
          "     - Single (1.0 lines), 1.5 lines, or Double (2.0 lines).\n" +
          "  7. **Paragraph Spacing (Before & After):**\n" +
          "     - Explicit space specified in points (pt) added above the paragraph (**Space Before**) or below the paragraph (**Space After**) (e.g. 0 pt before, 6 pt after).\n" +
          "     - **Examiner Rule:** Never use blank blank lines (pressing Enter twice) to create paragraph spacing; all vertical spacing must be set within the paragraph style settings.\n\n" +
          "**Evidence of Styles in Practical Exams:**\n" +
          "- Candidates must take a clear screenshot of the Style Definition dialog box showing all defined parameters (font, size, alignment, line spacing, space after) and paste it into their Evidence Document.",
        examinerTips: [
          "In Paper 2, NEVER press Enter to create spaces between headings and paragraphs. Set the 'Space After' (e.g. 6 pt or 12 pt) directly in the Paragraph Style dialogue.",
          "Double-check that the style name is spelled exactly as given in the exam paper, including any hyphens or uppercase letters (e.g. `ZZ-Subheading`).",
        ],
        commonMistakes: [
          "Leaving default paragraph spacing (e.g. 8 pt after) when the exam paper specifies '0 pt space before and 0 pt space after'.",
        ],
        recap: [
          "List four formatting attributes that can be configured when creating a custom paragraph style.",
          "Why should paragraph spacing be controlled using style settings rather than pressing the Enter key?",
        ],
      },
    ],
  },
];

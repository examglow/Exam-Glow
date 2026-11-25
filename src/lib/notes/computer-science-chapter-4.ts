import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/computer-science";

const panelIntegrity = imagePanel(IMG, [
  {
    src: "cs4-parity-grid.webp",
    alt: "A grid of small squares arranged in rows, most dark and some light, with one extra column of squares and one extra row of squares marked separately along the right and bottom edges",
    caption: "Rows and columns each get their own check bit",
  },
  {
    src: "cs4-check-digit-barcode.webp",
    alt: "A close-up of a product barcode printed on a paper label with the numeric strip beneath it, a single last digit circled by a thin hand-drawn ring",
    caption: "The final digit exists only to catch a mistyped run",
  },
]);

const panelThreats = imagePanel(IMG, [
  {
    src: "cs4-phishing-screen.webp",
    alt: "A laptop screen showing an urgent-looking email with a highlighted warning banner and a mouse pointer hovering over a link whose destination address is revealed in a small popup at the bottom of the window",
    caption: "The link text and the real destination rarely agree",
  },
  {
    src: "cs4-ddos-flood.webp",
    alt: "A wide river channel being overwhelmed as many small tributary streams pour in from both sides and water spills over the banks around a narrow single-lane bridge",
    caption: "A service has one bridge; a flood of requests closes it",
  },
]);

const chapterFour: Chapter = {
  number: 4,
  title: "Data Integrity and Cybersecurity",
  intro: `Two halves, one theme: data must arrive unchanged, and it must arrive only at the person entitled to see it.

4.1 is procedural — you will be asked to **calculate** a parity bit, so practise it. 4.2 is a long list, and the marks go to whoever names the threat and the countermeasure as a matched pair.`,
  subheadings: [
    {
      title: "4.1 Data integrity",
      body: `### Where errors come from

**4.1.1** — **data integrity** means data is complete, accurate and uncorrupted. Errors creep in at three points:
- **During storage**: bits decay on a failing medium, cosmic rays flip cells, or a drive sector is written badly, so what is read differs from what was written.
- **During transmission**: electrical noise on a cable, interference on a wireless link or a timing fault alters or drops bits, and packets can arrive out of order or duplicated.
- **During data entry**: a keying mistake, a mis-read barcode, a sensor glitch, or an operator typing 56 instead of 65.

Distinguish the two responses, because questions separate them: **detection** spots that something is wrong; **correction** puts it right, either automatically, by re-requesting the data, or by asking the user again.

### The five detection and correction methods

**4.1.2–4.1.3**

| Method | How it works | What it can do |
|---|---|---|
| Parity bit | an extra bit added so the count of 1s is even (even parity) or odd (odd parity) | detects a single flipped bit; cannot say **which** bit |
| Parity block check | data sent as a grid; a parity bit per row **and** per column | detects and can **locate** a single error from the crossing row and column |
| Echo check | the receiver sends the data straight back to the sender, which compares the echo with the original | detects a transmission error, and the sender then re-sends |
| Checksum | a value computed from the whole message is transmitted with it; the receiver recomputes and compares | detects many multi-bit errors; **not required to calculate one** |
| Check digit | one extra digit derived from the others by a fixed formula | detects a mistyped or misread digit at entry |

**Parity, worked.** Even parity means the total number of 1s, including the parity bit, must be even.

Data \`1011001\` has four 1s, which is already even, so the parity bit is **0**.
Data \`1011011\` has five 1s, odd, so the parity bit is **1** to make the total even.
For odd parity the rule flips: the finished total must be odd.

The limitation to state: if **two** bits flip, the parity total is still even and the error is invisible. That is exactly why block check and checksum exist.

**Parity block check, worked.** Take four 7-bit rows, append a parity bit to each row, then add a fifth parity row formed by parity-checking each column. If bit 3 of row 2 corrupts, row 2's parity fails **and** column 3's parity fails. The intersection names the bad bit, so the receiver can flip it — that is correction, not just detection.

**Check digit — where it is used (4.1.4):** the final digit of an **ISBN**, the last digit of retail **bar codes**, the check digit in **airline ticket numbers**, and the trailing digits of **bank account numbers**. You are **not** required to calculate one; you are required to say it is computed from the other digits and verified on entry to catch a keying mistake.

### ARQ

**4.1.5** — **automatic repeat reQuest (ARQ)** is the protocol that repairs detected errors. The receiver checks each packet, usually with its checksum or parity, and sends back an acknowledgement:
- **Positive acknowledgement (ACK)** — "this packet arrived correctly, send the next one."
- **Negative acknowledgement (NACK)** — "this packet failed its check, re-send it."

A timeout version waits for the ACK; if none arrives within the window the sender assumes loss and re-sends anyway. The trade-off to mention in an evaluate question: ARQ guarantees correct data but repeated retransmission slows the transfer, and on a noisy link it can stall it entirely.`,
      figure: panelIntegrity,
      groups: [
        {
          subTitle: "Say 'detect' or 'correct' — they are different marks",
          bullets: [
            "Single parity bit: detects only.",
            "Block check: detects and can correct one bit by locating it.",
            "Echo check: detects, then the sender re-sends.",
            "ARQ: detects, then corrects by retransmission.",
            "Checksum: detects, and hands the failure to ARQ.",
          ],
        },
      ],
      examinerTips: [
        "For a parity calculation, write the count of 1s before the answer. 'Five 1s, so parity bit is 1' shows the method; a bare 1 does not.",
        "Always restate which parity is asked for. Reversing even and odd loses every mark in the question.",
        "'Describe how a check digit is used' wants the example named — ISBN or bar code — then the general principle of recalculating on entry.",
      ],
      commonMistakes: [
        "Claiming a parity bit can correct an error. On its own it cannot identify the bad bit.",
        "Counting the parity bit itself when working out what value it should be.",
        "Saying a checksum proves the data is correct. It only proves no detected error occurred.",
        "Trying to calculate a check digit; the syllabus explicitly excludes it.",
      ],
      recap: [
        "Describe two ways in which data can become corrupted.",
        "Add an even parity bit to `1101010` and an odd parity bit to `0110011`, showing your working.",
        "Explain how a parity block check can be used to correct an error rather than only detect it.",
        "Describe how ARQ uses positive and negative acknowledgements to keep a file intact.",
      ],
    },
    {
      title: "4.2 Cybersecurity",
      body: `### The five principles

**4.2.1–4.2.2** — cybersecurity protects five properties. Learn the name, the threat and the countermeasure for each.

| Principle | Means | How it is threatened |
|---|---|---|
| Confidentiality | only the authorised may see the data | interception, phishing credentials, malware keylogging, an unpatched hole |
| Integrity | data is not altered by anyone unauthorised | hacking, SQL injection, tampering in transit, pharming to a fake site |
| Authenticity | you are sure who or what you are dealing with | stolen or weak passwords, spoofed sites, forged sender addresses |
| Availability | the service works when needed | DDoS, ransomware locking files, hardware failure, deleted data |
| Non-repudiation | a party cannot deny having done it | no audit trail, shared accounts, unsigned messages |

**4.2.5** — **encryption** serves four of the five at once: it **protects confidentiality** by making data unreadable without the key, **ensures integrity** because altered ciphertext will not decrypt sensibly, and **supports authenticity and non-repudiation** when a digital signature proves who encrypted or signed it.

### The threats

**4.2.3** — one line each, aim at process, not just a definition.

- **Brute-force attack** — try every possible password until one works. Aimed at cracking authentication; slowed by long passwords, and stopped by account lockout or rate limits.
- **Data interception** — quietly reading traffic as it crosses a network, e.g. on open Wi-Fi. Aimed at stealing credentials and personal data.
- **Distributed denial of service (DDoS)** — many compromised machines, often a botnet of insecure devices, flood one target with requests until legitimate users cannot be served. Aimed at destroying availability.
- **Hacking and unauthorised access** — exploiting weak credentials or unpatched software to reach systems the attacker should not touch.
- **Malware** — **virus** (attaches to a file and spreads when that file is used), **worm** (spreads by itself across a network without a host file), **Trojan horse** (looks like useful software but carries a hidden payload), **spyware** (secretly reports what you do), **adware** (forces unwanted advertising and tracks you), **ransomware** (encrypts your files and demands payment).
- **Pharming** — corrupt the name-to-address mapping so a real domain name sends victims to a fake site, without the user clicking anything suspicious.
- **Phishing** — a deceptive message that impersonates a trusted organisation to trick the recipient into revealing details or clicking a link.
- **Social engineering** — manipulating **people** rather than machines: pretexting, urgency, authority, so the victim hands over access themselves.
- **SQL injection** — paste crafted text into a form field so it is executed as a query by the website's database, exposing or altering records.

### The solutions, matched to threats

**4.2.4** — the mark scheme rewards pairing, so learn each threat with its answer.

| Countermeasure | What it does | Defends against |
|---|---|---|
| Access levels | each account is granted only the permissions it needs | unauthorised access, insider damage |
| Anti-malware | scans files and traffic for known signatures and behaviour | viruses, worms, Trojans, spyware, ransomware |
| Authentication: password, biometric, two-step | proves who you are before access is given | brute force, stolen credentials |
| Automating software updates | patches are applied as soon as they ship | exploits of known holes |
| Checking spelling and tone | poor wording in a message is a warning sign | phishing, social engineering |
| Checking the URL behind a link | the real destination is revealed on hover | phishing, pharming |
| Firewalls | filter traffic by rules and block unwanted connections | intrusion, interception, some DoS |
| Privacy settings | limit what others can see of your data | profiling, social engineering |
| Proxy servers | sit between client and internet, hiding the client's own address and filtering content | direct attack on the device |
| Transport layer security (TLS) | encrypts the session between client and server | data interception |
| Virtual private network (VPN) | an encrypted tunnel over a public network, terminating in a private one | interception on untrusted networks |

**Two-step verification** means the password plus something else, typically a one-time code on a phone: even a stolen password is not enough.

### Symmetric and asymmetric encryption

**4.2.6**

| | Symmetric | Asymmetric |
|---|---|---|
| Keys | **one shared secret key**, used to encrypt and to decrypt | a **key pair**: a public key to encrypt, a matching private key to decrypt |
| Distribution problem | both parties must obtain the same key secretly before starting | the public key can be published freely |
| Speed | fast, cheap, suits large amounts of data | far slower, math-heavy |
| Extra benefit | confidentiality only | supports digital signatures and authenticity |
| Typical use | bulk data already shared over a secure channel | sending a session key, HTTPS set-up, signing |

In practice the two are used together: **asymmetric encryption carries the freshly generated symmetric session key**, and the symmetric key then encrypts the conversation. That hybrid pattern is what TLS does.`,
      figure: panelThreats,
      groups: [
        {
          subTitle: "Virus, worm, Trojan — the distinction examiners test",
          bullets: [
            "A **virus** needs a host file and a human action to spread.",
            "A **worm** spreads itself across the network with no host and no user action.",
            "A **Trojan** does not spread at all; it is invited in because it looks useful.",
          ],
        },
        {
          subTitle: "Phishing versus pharming",
          bullets: [
            "Phishing sends you a **fake link**; you are tricked into clicking.",
            "Pharming corrupts the **address lookup**; you type the real address and still land on the fake site.",
          ],
        },
      ],
      examinerTips: [
        "For 'explain how solutions keep data safe', never write only the name. 'Firewalls' scores nothing; 'a firewall filters incoming traffic against a rule set so unauthorised connections are blocked' scores.",
        "When a scenario asks you to recommend protection, give a **layer**: strong passwords with two-step verification, updates automated, TLS or VPN on the connection, and anti-malware on the device. Examiners reward several complementary measures.",
        "If asked which encryption suits a large video file, answer symmetric and justify with speed, then admit the key-distribution weakness.",
      ],
      commonMistakes: [
        "Calling an employee's own careless password disclosure a hack rather than social engineering.",
        "Saying asymmetric encryption is faster because it uses two keys.",
        "Describing DDoS as one attacker sending many requests. It is **many machines**.",
        "Confusing a firewall with anti-virus: a firewall watches traffic, anti-malware inspects content.",
        "Naming 'non-repudiation' as privacy. It is proof that an action happened.",
      ],
      recap: [
        "State the five core principles of cybersecurity and give one threat to each.",
        "Describe how ransomware works and name two measures that reduce its damage.",
        "Explain the difference between phishing and pharming.",
        "Compare symmetric and asymmetric encryption and explain why HTTPS uses both.",
        "A small charity keeps donor records online. Recommend four security measures and justify each.",
      ],
    },
  ],
};

export const COMPUTER_SCIENCE_CHAPTER_4 = chapterFour;

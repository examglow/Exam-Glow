import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/computer-science";

const panelPackets = imagePanel(IMG, [
  {
    src: "cs3-packet-split.webp",
    alt: "A large block of data shown dividing into several smaller numbered envelopes of the same size, each with a small labelled tab on its front, spreading apart as they move to the right",
    caption: "One file becomes many numbered packets",
  },
  {
    src: "cs3-router-junction.webp",
    alt: "A busy multi-level road interchange seen from above with cars taking several different routes between the same two districts of a city at night, light trails marking the paths",
    caption: "Each packet chooses its own road; routers are the junctions",
  },
]);

const panelTransmit = imagePanel(IMG, [
  {
    src: "cs3-serial-parallel.webp",
    alt: "Two comparison diagrams of wires between blocks: the upper one a single long lane with eight dots lined up one behind another, the lower one eight lanes side by side each carrying a single dot",
    caption: "Serial: one lane, all traffic. Parallel: eight lanes, short distance.",
  },
  {
    src: "cs3-duplex-road.webp",
    alt: "Three small road sketches stacked vertically, the first with arrows pointing one way only, the second with arrows both ways but alternating, the third with two full lanes of opposing arrows flowing at once",
    caption: "Simplex, half-duplex, full-duplex",
  },
]);

const chapterThree: Chapter = {
  number: 3,
  title: "Data Transmission and Networking",
  intro: `This is the topic that turns isolated machines into the internet. Every question is a description question, and descriptions are marked for named parts in the right order.

Packet switching, MAC versus IP, and the journey of a URL are the three highest-yield answers here. Expect at least one structured 6–8 marker from this topic in Component 1.`,
  subheadings: [
    {
      title: "3.1 Packet switching",
      body: `### Why data is chopped up

**3.1.1** — data sent across a network is **separated into packets**. A single large message is split into fixed-size chunks, each of which travels independently.

The reasons are worth stating in an exam: no single transmission hogs the line for too long, damaged data means re-sending only a small piece, and many users can share the same routes at the same time.

### The structure of a packet

**3.1.2–3.1.3** — a packet has three regions.

| Region | What it contains | Why it is there |
|---|---|---|
| Header | destination IP address, source IP address, packet number, total number of packets, payload type/protocol | lets routers forward it and lets the receiver place it correctly |
| Payload | the actual data — one piece of the original message | the reason for sending anything |
| Trailer | an end-of-packet marker and error-checking information such as a checksum | tells the receiver where the payload stops and whether it arrived intact |

Say it precisely: the **header is added before the payload and the trailer after it**, so the payload is sandwiched. A packet is header + payload + trailer.

### The process

**3.1.4** — describe it as a sequence, because that is exactly how the marks are laid out:
1. The message is split into packets, and each is given a **sequence number** plus the destination address.
2. Packets are passed from router to router across the network.
3. **Routers make forwarding decisions**: each router reads the destination IP address, consults its routing table and sends the packet on the best available route.
4. Because congestion and failures change, **packets from the same message can take different routes** and can arrive **out of order**.
5. At the destination the packets are **reassembled** in the right order using the sequence numbers, and any that fail the check or never arrive are requested again.

Contrast to remember: in **circuit switching** a dedicated path is reserved for the whole call, as in an old telephone exchange. Packet switching never reserves a path, which is why it is more efficient for bursty computer traffic.`,
      figure: panelPackets,
      groups: [
        {
          subTitle: "Vocabulary that earns the mark",
          bullets: [
            "**Forwarding decision** — the router choosing the next hop for a packet.",
            "**Routing table** — the list a router consults to make that choice.",
            "**Sequence number** — how the receiver knows the correct order.",
            "**Reassembly** — rebuilding the message at the destination.",
          ],
        },
        {
          subTitle: "Benefits to list when asked 'why packet switching'",
          bullets: [
            "Lines are shared, so bandwidth is used efficiently.",
            "Only lost packets are retransmitted, not the whole file.",
            "Traffic can be diverted around a failed link automatically.",
            "No set-up delay while a dedicated route is reserved.",
          ],
        },
      ],
      examinerTips: [
        "'Describe the structure of a data packet' is worth 3 marks for **three named regions with their contents**. Writing only 'it contains the data' scores one.",
        "When a question asks why packets can arrive out of order, the answer is **different routes with different lengths**, not 'because the network is fast'.",
        "If the scenario mentions a video call freezing, link it to packet loss and retransmission delay — that connection is the AO3 mark.",
      ],
      commonMistakes: [
        "Putting the sequence number in the trailer. It is in the header.",
        "Saying packets all follow the same route to keep order.",
        "Confusing a router (forwards between networks using IP addresses) with a switch (forwards within a network using MAC addresses).",
        "Claiming reassembly happens at every router; it happens only at the destination.",
      ],
      recap: [
        "State what a packet header contains and what its trailer is for.",
        "Describe how a file sent from one laptop to another reaches its destination intact although the packets travel by different routes.",
        "Explain one advantage of packet switching over a dedicated connection.",
      ],
    },
    {
      title: "3.2 Data transmission",
      body: `### Serial and parallel

**3.2.1–3.2.3** — these describe **how many bits travel at once**.

| | Serial | Parallel |
|---|---|---|
| Bits at a time | 1, one after another down a single channel | 8 or more, simultaneously down that many wires |
| Speed over distance | stays reliable far away | degrades over distance |
| Problem | must reassemble the stream at the far end | **skew** — wires arrive at slightly different times, so bits get out of step |
| Cost | fewer wires, cheaper over long runs | more wires and connectors |
| Typical use | USB, Ethernet, modem links, anything between devices | internally, short ribbon links such as an old printer port or inside a machine |

The exam point: parallel looks faster per clock tick, but **skew** means it cannot be pushed to high speeds over long cables, so modern long-distance links are serial and run at very high clock rates.

### Simplex, half-duplex, full-duplex

These describe **direction**.

| Mode | Direction | Typical application |
|---|---|---|
| Simplex | one direction only, permanently | radio or TV broadcast, a keyboard sending to a screen, sensors reporting to a controller |
| Half-duplex | both directions, but one at a time | walkie-talkie, a shared old hub network, push-to-talk |
| Full-duplex | both directions at the same time | a telephone call, switched Ethernet, a video call |

Suitability wording that scores: half-duplex is cheaper and simpler but users must **take turns**, which causes delay; full-duplex needs separate send and receive paths, so it costs more, but conversation is natural and throughput doubles.

### Network interface card and MAC address

**3.2.4** — a **NIC** is the hardware that connects a device to a network. It converts data into signals the medium can carry, holds the device's **MAC address**, and handles the framing and error checking of what goes on and off the cable or radio link.

**3.2.5–3.2.6** — a **MAC address** is a **48-bit unique identifier burned into the NIC**, written as **six groups of two hexadecimal digits separated by colons**, for example 00:1A:2B:3C:4D:5E. The first half identifies the manufacturer, the second half is assigned by that manufacturer to the individual card.

It is **local**: it never changes as a frame crosses the internet, and it identifies the physical device rather than its location on the network.

**3.2.7** — a **switch** learns the **MAC addresses of the devices on each of its ports** and stores them in a table. When a frame arrives, the switch reads the destination MAC and forwards it **only out of the port that device is on**, instead of repeating it to every port like a hub. That cuts collisions and wasted traffic.`,
      figure: panelTransmit,
      groups: [
        {
          subTitle: "MAC versus IP, the distinction tested every series",
          bullets: [
            "MAC: 48 bits, hex pairs, fixed to the NIC, identifies the device.",
            "IP: 32 or 128 bits, identifies the device's address on a network and can change.",
            "MAC is used on the local network hop by hop; IP end to end across the internet.",
          ],
        },
      ],
      examinerTips: [
        "For 'identify a typical application', give a real named example — radio broadcast for simplex, walkie-talkie for half-duplex, telephone call for full-duplex. Abstract answers do not score.",
        "When comparing serial and parallel, name **skew**. It is the keyword the mark scheme is looking for.",
        "A switch question usually wants 'forwards only to the port where the destination MAC address is', so write the word **port**.",
      ],
      commonMistakes: [
        "Saying parallel is always faster. Over distance serial wins.",
        "Calling a walkie-talkie full-duplex because both people can talk; they cannot talk **at the same time**.",
        "Saying the MAC address identifies a device's location on the internet. That is the IP address.",
        "Writing a MAC address in dotted decimal — that is IPv4.",
      ],
      recap: [
        "Describe how data travels in a serial transmission and state one advantage over parallel.",
        "Give one application of simplex and one of full-duplex transmission.",
        "Explain the purpose of a NIC and describe the format of the address it stores.",
        "Describe how a switch uses MAC addresses to reduce network traffic.",
      ],
    },
    {
      title: "3.3 Internet Protocol addresses",
      body: `### What an IP address is for

**3.3.1** — an **IP address** **uniquely identifies a device on a network and the network it is on**, so that packets can be delivered to the right place across the internet. It is the postal address of the machine; the MAC address is the name on the door.

**3.3.2** — the format depends on the version, and the address itself is a plain **binary number** written in a form humans can read.

### IPv4 versus IPv6

**3.3.3** —

| | IPv4 | IPv6 |
|---|---|---|
| Length | 32 bits | 128 bits |
| Written as | four sets of denary numbers separated by dots | eight sets of hexadecimal numbers separated by colons |
| Example form | 192.168.0.23 | 2001:0DB8:0000:0000:130B:0000:0000:00AA |
| Number available | about 4.3 billion | effectively unlimited |
| Reason it exists | the original scheme, now running out of addresses | created to remove the address shortage |

Each IPv4 octet is 8 bits, so each denary part must be **between 0 and 255**. An address containing 256 or a missing octet is invalid — a favourite correction question.

### Static and dynamic

**3.3.4** — a **static IP address** is fixed and never changes; it is configured by hand and is typical for **servers and hosting services**, because clients and DNS records need a permanent address to find.

A **dynamic IP address** is **allocated temporarily by the ISP or home router when the device connects**, usually by DHCP, and is reclaimed afterwards. Dynamic addressing conserves scarce addresses and suits ordinary users, but it is unreliable for a service others must reach.

### What a router does

**3.3.5** — a router **connects two or more networks** and moves traffic between them. Its functions, listed the way marks are awarded:
- Reads the **destination IP address** of each incoming packet and consults its **routing table** to choose the best next hop.
- Acts as the **default gateway** — the exit point from the local network to the internet.
- **Assigns dynamic IP addresses** to connected devices (DHCP).
- Performs **NAT**, letting many private local addresses share one public address.
- Often provides the Wi-Fi access point and a basic firewall.

Keep the separation clear: **switches join devices inside one network using MAC addresses; routers join networks using IP addresses.**`,
      groups: [
        {
          subTitle: "Format checks to run before you answer",
          bullets: [
            "IPv4: exactly four numbers, each 0–255, dots between them.",
            "IPv6: eight groups of four hex digits, colons between them.",
            "A 32-bit address is 4 bytes; a 128-bit address is 16 bytes.",
          ],
        },
        {
          subTitle: "Static or dynamic — which to recommend",
          bullets: [
            "Web mail server → static, so DNS always points to the right place.",
            "Laptops on café Wi-Fi → dynamic, so the ISP recycles scarce addresses.",
            "Printers in an office → static, so every computer can find them at one address.",
          ],
        },
      ],
      examinerTips: [
        "'Explain the difference between IPv4 and IPv6' wants three things: bit length, written format, and the huge address space. Give all three.",
        "For static versus dynamic, always add a **use case** — servers for static. The question almost always asks for it.",
        "If a question gives a malformed address, quote the rule: no IPv4 octet may exceed 255.",
      ],
      commonMistakes: [
        "Saying IPv6 is faster. The version does not change speed; it changes address space.",
        "Writing an IPv6 address with dots.",
        "Claiming a dynamic address is allocated by the website rather than by the ISP or router.",
        "Listing only 'forwards packets' for a router; the routing table and gateway roles carry the marks.",
      ],
      recap: [
        "State the purpose of an IP address and describe the format of an IPv4 address.",
        "Explain two differences between IPv4 and IPv6 addressing.",
        "A school hosts its own website. State whether the server should use a static or dynamic address and justify the choice.",
        "Describe three functions of a router on a home network.",
      ],
    },
    {
      title: "3.4 The Internet and the World Wide Web",
      body: `### URL, HTTP and HTTPS

**3.4.1–3.4.2** — a **uniform resource locator (URL)** is the address that tells a browser **exactly which resource to request and from where**. Its parts:

| Part | Example | Purpose |
|---|---|---|
| Scheme | https | protocol to use |
| Host / domain name | www.example.com | the server to contact |
| Port | 443 | the service on that server; often left implicit |
| Path | /shop/shoes | the file or location on the server |
| Query | ?size=9&color=red | extra data passed to the page |
| Fragment | #top | a place to scroll to inside the returned page |

**3.4.3** — **HTTP** is the protocol used to **request and deliver web resources**. The browser sends a request (method, path, headers) and the server answers with a status code, headers and the body. It is a **stateless** request-and-response protocol: the server remembers nothing between requests.

**3.4.4** — **HTTPS** is HTTP with the whole conversation wrapped in **encryption, using TLS**. It protects the data from interception and modification, and it proves the server's identity with a certificate. The mark-bearing difference: HTTP sends in clear text, HTTPS encrypts.

### What happens when you press Enter

**3.4.5–3.4.6** — the sequence, naming the five roles the syllabus lists:
1. The **browser** parses the URL and needs the server's IP address, so it asks the **DNS**.
2. The **DNS server** translates the human-readable domain name into the server's **IP address**, and hands it back.
3. The browser opens a connection to that **IP address** and sends an **HTTP or HTTPS request** for the path.
4. The **web server** at that address receives the request and returns the page's **HTML** (plus CSS, JavaScript and images) with a status code.
5. The browser **parses the HTML** and lays out the page on screen, requesting any linked resources the HTML mentions.
6. If anything in the chain fails, the browser reports an error code such as 404 or a connection timeout.

**3.4.7–3.4.8** — a **cookie** is a **small text file a website asks the browser to store**, holding pieces of data about that visit.
- A **session cookie** exists only while the browser is open and is deleted when it closes — used to keep a shopping basket together during one visit.
- A **persistent cookie** stays on the device after the browser closes, until an expiry date or until it is deleted — used to remember a login or preferences and to track users across visits.

### The cloud

**3.4.9** — the **cloud** is computing capacity and storage provided over the internet by someone else's servers. Characteristics: accessed from anywhere with a connection, scalable, managed and maintained by the provider, data held in remote data centres, usually paid for as a service rather than bought outright.

**3.4.10** — cloud against local storage:

| Advantages of the cloud | Disadvantages of the cloud |
|---|---|
| Files reachable from any device, anywhere | needs an internet connection |
| Automatic backup, no single point of failure | upload and download are slow for big files |
| Provider maintains hardware and security patches | ongoing subscription cost |
| Space can be increased instantly | data sits on someone else's servers, a privacy concern |
| Easy sharing and simultaneous editing | risk of provider outages or lock-in |

**3.4.11** — deployment models:
- **Public cloud**: infrastructure owned by a provider and shared between many organisations, over the public internet. Cheap, elastic, the default for consumer file storage.
- **Private cloud**: provisioned for **one organisation only**, on its own premises or hosted for it. Chosen when data is sensitive or regulation demands control.
- **Hybrid cloud**: a mix, with data and workloads moving between the two. Suits an organisation that keeps its records private but wants public capacity for a busy season.`,
      groups: [
        {
          subTitle: "Cloud or local — justify with the scenario",
          bullets: [
            "Photographer working offline in remote sites → local, no reliable connection.",
            "Design team on three continents → cloud, simultaneous sharing.",
            "Hospital patient records → private cloud, control and compliance.",
            "Retailer with one busy sale weekend a year → hybrid, burst into public capacity.",
          ],
        },
      ],
      examinerTips: [
        "The page-load question is marked for **sequence**. Write it as numbered steps and name DNS, IP, HTTP, web server and HTML — one mark each, roughly.",
        "For cookies, the difference examiners want is **when they are deleted**: browser close versus expiry date. Say it explicitly.",
        "If asked why HTTPS is safer, mention **encryption in transit** and **server authentication**; do not just say 'it is secure'.",
      ],
      commonMistakes: [
        "Treating the internet and the World Wide Web as the same thing. The internet is the network; the Web is a service running on it.",
        "Saying DNS stores the web page. It stores name-to-address mappings.",
        "Believing HTTPS makes the page load faster.",
        "Describing a cookie as a program or a virus. It is a text file, and it cannot run anything.",
      ],
      recap: [
        "Describe the structure of a URL, naming four of its parts.",
        "Explain the difference between HTTP and HTTPS.",
        "A user types a web address. Describe, in order, how the page ends up on the screen.",
        "State the difference between a session cookie and a persistent cookie, with an example use of each.",
        "Compare storing files in a public cloud with storing them on a local hard drive, giving two advantages and two disadvantages of the cloud.",
      ],
    },
  ],
};

export const COMPUTER_SCIENCE_CHAPTER_3 = chapterThree;

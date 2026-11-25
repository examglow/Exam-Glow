import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/computer-science";

const panelLoop = imagePanel(IMG, [
  {
    src: "cs6-sensor-actuator-loop.webp",
    alt: "A circular flow diagram of three blocks connected by arrows on a pale background: a small probe-like device, a square microchip in the middle, and a toothed wheel mechanism, with the arrow looping back from the wheel to the probe",
    caption: "Sense, decide, act — and then sense again",
  },
  {
    src: "cs6-robot-arm.webp",
    alt: "An articulated industrial robot arm with several joints and a gripping end effector, standing on a heavy base plate in a clean factory bay with soft overhead light",
    caption: "Mechanical structure, electronics, and a program — all three are needed",
  },
]);

const chapterSix: Chapter = {
  number: 6,
  title: "Automated Systems and Robotics",
  intro: `Topic 6 is where the syllabus stops asking what a computer is and starts asking what it does on its own. The technical content is small; the evaluation content is large.

Most marks here come from a scenario: name the sensor, name the actuator, describe the loop, then weigh advantages against disadvantages. Practise the loop description until it is automatic.`,
  subheadings: [
    {
      title: "6.1 Automated systems",
      body: `### The controller

**6.1.1** — a **microcontroller** is a **complete computer system on a single chip**. It contains a **processor**, a small amount of **RAM** and **ROM**, and **input/output (I/O) ports**, all on one piece of silicon.

Say why that matters: it is cheap, tiny, low-power and designed to run **one dedicated program forever** from ROM, which is why it appears in appliances rather than in offices.

### Sensing the world

**6.1.2** — a **sensor** converts a change in the **physical environment** into an electrical signal. Most sensors measure something that varies **continuously**, so the signal is **analogue**.

An **analog-to-digital converter (ADC)** then turns that analogue voltage into a **digital value** the microcontroller can compare and calculate with, because a processor only understands binary. The chain to write is: physical quantity → sensor → analogue voltage → **ADC** → digital value → microcontroller.

**6.1.3 suitable sensor for a scenario** — learn the mapping, not the definition:

| Quantity to detect | Sensor |
|---|---|
| Heat / temperature | thermistor or temperature sensor |
| Light level | light-dependent resistor (LDR) |
| Air or soil moisture | moisture sensor |
| Presence of a person | infrared / passive infrared (PIR) sensor |
| Distance to an object | ultrasonic sensor |
| Gas or smoke | gas sensor |
| Liquid or gas flow | flow meter |
| Acidity | pH sensor |
| Weight or pressure | pressure sensor / load cell |
| Rotation, tilt, movement | accelerometer or gyroscope |
| Position on Earth | GPS receiver |
| A door being opened | reed switch |
| Sound level | microphone |

### Embedded systems

**6.1.4** — an **embedded system** is a computer system **built inside a larger device to perform one dedicated function**, usually in real time, with no general-purpose software of its own.

Its characteristics: **special-purpose** rather than general; the program is stored in **ROM** and rarely changes; **low power and low cost**; input from sensors and output to actuators; often **real-time**, so a missed deadline is a failure; minimal or no user interface; reliable for years without attention.

**6.1.5 where they are used** — washing machines, thermostats and central-heating controllers, car engine management and anti-lock brakes, fridges, microwaves, smoke alarms, burglar alarms, air-conditioning units, medical infusion pumps, vending machines, smart meters, aircraft flight systems, irrigation controllers and routers.

### Acting on the world

**6.1.6** — an **actuator** is a device that **performs a physical action in response to an output from the microcontroller**. It converts a digital or electrical signal into movement, heat, sound or a switching action.

Examples: **electric motor** (including stepper and servo), **relay** (a small current switching a much larger one), **buzzer**, **LED or display**, **water pump**, **valve**, **heater element**, **solenoid**, **speaker**.

### The closed loop

**6.1.7** — describe an automated system as a repeating cycle, and the marks follow:
1. A **sensor** monitors the environment and outputs an analogue signal.
2. The **ADC** converts that reading into a digital value.
3. The **microcontroller** reads the value and **compares it with a set point** stored in its program.
4. It decides: within range, do nothing; out of range, produce an output.
5. The output goes to an **actuator**, which changes the physical environment.
6. Because the environment has changed, the sensor reading changes, and the loop runs again. This returning measurement is **feedback**, and it is what makes the system self-correcting rather than a one-off switch.

Greenhouse example: a moisture sensor reads dry soil, the controller compares it against the set point, the relay energises the irrigation pump, the soil wets, the sensor reading rises, and the controller switches the pump off.

### Evaluation

**6.1.8 advantages and disadvantages by area**

| Area | Advantages | Disadvantages |
|---|---|---|
| Transport | metrolink and rail run consistently and can hit exact timetables; no driver fatigue; fuel is used efficiently | a failure stops the whole line; no human judgement in an emergency; huge set-up cost |
| Agriculture | greenhouses hold conditions exactly all year; less water and pesticide because only affected areas are treated; work continues through the night | expensive for small farms; a sensor fault can kill a crop or herd quickly; less skilled local knowledge retained |
| Domestic | robotic cleaners and smart heating save time and cut energy bills; ovens and fridges run unattended | they fail without a technician; they collect personal data; the purchase cost can exceed the time saved |
| Retail | self-service checkouts shorten queues; shelves and stock are tracked automatically; opening hours are extended | job losses at the front line; elderly or disabled shoppers can struggle; theft and mis-scans need staff anyway |

**6.1.9 implications**
- **Employment**: routine and dangerous jobs disappear, so re-training and redeployment are needed, while new work appears in installing, programming and maintaining the systems.
- **Safety**: removing people from hazards reduces accidents, and a controller does not lose concentration — but a software fault can now cause harm at a distance, and safety still depends on backup systems and regular testing.
- **Environmental sustainability**: precision control uses less water, fertiliser, pesticide and energy, and systems can run only when needed. The other side is the manufacturing and disposal burden of short-lived electronics, plus electricity demand if generation is not renewable.`,
      figure: panelLoop,
      groups: [
        {
          subTitle: "Set point, hysteresis and why real systems need both",
          bullets: [
            "The **set point** is the value the controller compares readings against.",
            "Switching exactly at the set point makes a heater flicker on and off constantly.",
            "**Hysteresis** uses two thresholds, so the system waits for a real change before acting.",
          ],
        },
        {
          subTitle: "Microcontroller versus a general-purpose computer",
          bullets: [
            "One dedicated task rather than many interchangeable programs.",
            "Program held in ROM, rarely changed.",
            "I/O pins for sensors and actuators, not just keyboard and screen.",
            "Much cheaper and lower power.",
          ],
        },
      ],
      examinerTips: [
        "For 'identify a suitable sensor', write the **quantity** you are measuring, not just a brand of device: 'a moisture sensor, because the system must detect the water content of the soil'.",
        "Include the ADC in every description of the loop. Leaving it out is the single most common lost mark in this topic.",
        "An 'evaluate' command needs both sides and then a judgement sentence. Two advantages with no disadvantage is a describe answer, not an evaluate one.",
      ],
      commonMistakes: [
        "Naming a motor as a sensor, or a sensor as an actuator.",
        "Saying the microcontroller stores its program in RAM.",
        "Describing an open-loop system as self-correcting; without feedback it cannot correct.",
        "Claiming automation always reduces cost; capital cost rises even when labour cost falls.",
      ],
      recap: [
        "Describe what is meant by a microcontroller and list what it contains on one chip.",
        "Explain the purpose of an ADC in an automated system.",
        "A hospital ward must keep a vaccine fridge between 2 °C and 8 °C. Name the sensor, the actuator and describe the full control loop.",
        "Evaluate the use of automated systems in one area of retail, giving advantages and disadvantages.",
      ],
    },
    {
      title: "6.2 Robotics",
      body: `### Definition and characteristics

**6.2.1** — **robotics** is the branch of technology that covers the **design, construction, operation and use of robots**.

**6.2.2** — a robot has three defining characteristics, and an answer that lists only one is not a robot answer:
1. A **mechanical structure or framework** — an arm, chassis, gripper or wheels that can move and apply force to the world.
2. **Electronic components** — sensors to perceive, a microcontroller or processor to decide, **motors and actuators** to move, **networking hardware** to be programmed or coordinated, and a **power supply** such as a battery.
3. **Programmability** — its behaviour can be changed by software rather than by rebuilding it. An automatic car wash is not a robot; a re-programmable arm that lifts different parts is.

The line to write when distinguishing 6.1 from 6.2: **an automated system controls a process; a robot is a re-programmable machine that physically manipulates its environment.**

### Roles in the three areas

**6.2.3**

| Area | What robots do |
|---|---|
| Industry | welding, painting and assembly on car lines; picking and packing in warehouses; handling molten metal, sharp or heavy parts; inspection in places unsafe for people |
| Agriculture | seeding and weeding with precision; automated milking; fruit picking using vision; monitoring crops from the air; drenching only the plants that need it |
| Medicine | holding and positioning instruments in keyhole surgery; assisting rehabilitation and exoskeleton walking; dispensing and packing tablets; moving supplies and sterilising rooms autonomously |

**6.2.4 evaluate** — advantages shared across the areas are **consistency and repeatable precision**, the ability to **work in hazardous environments** and **continuously without shifts**, higher throughput, and less physical strain on staff. The disadvantages are **very high capital cost**, long payback, **inflexibility** when the product changes, dependence on the sensors working (a dirty camera stops the line), **no judgement** when something unusual happens, and a shortage of engineers able to maintain them.

### Implications

**6.2.5**
- **Employment**: repetitive and dangerous manual roles are lost, and the people who do them are often least able to retrain; meanwhile demand grows for programming, maintenance, and supervision roles, and work becomes safer and less physically damaging.
- **Safety**: robots keep humans away from toxic fumes, heavy loads and infection risk, but a robot that fails can injure someone, so guarding, emergency stops and physical separation remain necessary — and over-trust in an automated machine is itself a hazard.
- **Environmental sustainability**: fewer defective parts means less waste, and precision application cuts chemical and energy use; against that, robots consume electricity continuously and embody a large amount of material that must be mined and eventually recycled.`,
      groups: [
        {
          subTitle: "The three characteristics, as one sentence",
          bullets: [
            "A **frame** that can move and apply force.",
            "**Electronics** that sense, decide and act, with a power supply.",
            "**Re-programmable** behaviour.",
          ],
        },
      ],
      examinerTips: [
        "'Define robotics' is 2–3 marks for the four verbs: design, construction, operation, use. Write all four.",
        "In a robotics evaluate question, the strongest advantage is usually **removing humans from danger**, and the strongest objection is **capital cost and inflexibility**. Use those two.",
        "If a scenario describes a machine that only does one fixed job, say it is automated but **not** a robot, because it is not re-programmable. That distinction is worth a mark.",
      ],
      commonMistakes: [
        "Calling any machine with a motor a robot.",
        "Omitting programmability from the characteristics list.",
        "Claiming robots eliminate all employment risk; they shift it to maintenance and programming.",
        "Confusing a drone (a vehicle) with a robot answer — the marks are about structure, electronics and programming.",
      ],
      recap: [
        "Define robotics and state the three characteristics of a robot.",
        "Describe one role of robots in each of industry, agriculture and medicine.",
        "Evaluate the decision by a small farm to buy an automated weeding robot.",
        "Discuss the effects of robots on employment and on safety in a car plant.",
      ],
    },
  ],
};

export const COMPUTER_SCIENCE_CHAPTER_6 = chapterSix;

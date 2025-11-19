"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [77],
  {
    2947: (e, t, a) => {
      a.d(t, {
        Q: () => r,
      });
      var i = a(5155),
        o = a(2115),
        n = a(7700);

      function r(e) {
        let { effect: t = "waves" } = e,
          a = (0, o.useRef)(null),
          r = (0, o.useRef)(null);
        return (
          (0, o.useEffect)(() => {
            let e = (e) =>
              new Promise((t, a) => {
                if (document.querySelector('script[src="'.concat(e, '"]'))) {
                  t();
                  return;
                }
                let i = document.createElement("script");
                (i.src = e),
                  (i.onload = () => t()),
                  (i.onerror = a),
                  document.head.appendChild(i);
              });
            return (
              (async () => {
                try {
                  await e(
                    "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
                  ),
                    "waves" === t
                      ? (await e(
                          "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"
                        ),
                        a.current &&
                          window.VANTA &&
                          window.THREE &&
                          (r.current = window.VANTA.WAVES({
                            el: a.current,
                            THREE: window.THREE,
                            mouseControls: !0,
                            touchControls: !0,
                            gyroControls: !1,
                            minHeight: 200,
                            minWidth: 200,
                            scale: 1,
                            scaleMobile: 1,
                            color: 1250584,
                            shininess: 35,
                            waveHeight: 15,
                            waveSpeed: 0.3,
                            zoom: 0.75,
                          })))
                      : "birds" === t &&
                        (await e(
                          "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
                        ),
                        a.current &&
                          window.VANTA &&
                          window.THREE &&
                          (r.current = window.VANTA.BIRDS({
                            el: a.current,
                            THREE: window.THREE,
                            quantity: 3,
                            speedlimit: 1,
                            mouseControls: !0,
                            touchControls: !0,
                            gyroControls: !1,
                            minHeight: 200,
                            minWidth: 200,
                            scale: 1,
                            scaleMobile: 1,
                            backgroundColor: 1250584,
                            color1: 2106149,
                            color2: 0x989fa4,
                            colorMode: "lerp",
                          })));
                } catch (e) {
                  console.error("Failed to load Vanta.js:", e);
                }
              })(),
              () => {
                r.current && r.current.destroy();
              }
            );
          }, [t]),
          (0, i.jsx)(n.a, {
            ref: a,
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
          })
        );
      }
    },
    5687: (e, t, a) => {
      a.d(t, {
        BQ: () => c,
        It: () => p,
        Qi: () => i,
        TD: () => n,
        cX: () => g,
        cl: () => l,
        hs: () => s,
        jA: () => o,
        pf: () => r,
        th: () => h,
      });
      let i = [
          {
            title: "Audio Software Engineer",
            company: "EERS Global Technologies Inc.",
            period: "May 2024 - Present",
            location: "Remote",
            link: "https://eers.ca/",
            stack: ["matlab", "python", "tensorflow", "c++", "juce", "cmake", "raspberrypi", "git"],
            description:
            {
              "Key role": [
                "Advanced DSP: ML models, adaptive filtering, ANC, denoising, echo cancellation, harmonic regeneration.",
                "Designed and developed audio components, algorithms, and plug-ins.",
                "Implemented real-time audio processing on embedded platforms.",
                "Built CI/CD pipelines with custom audio emulators.",
                "Performed V&V for audio industry standards.",
              ]
            },
          },
          {
            title: "Audio System Engineer",
            company: "EERS Global Technologies Inc.",
            period: "April 2023 - May 2024",
            location: "Montreal, Canada",
            link: "https://eers.ca/",
            description:
            {
              "Key role": [
                "Defined technical specifications and system architectures for audio products.",
                "Reviewed mechanical and electronic designs to ensure acoustic and signal performance.",
                "Conducted advanced signal analysis (FFT, spectrograms, transients, formants, envelopes).",
                "Developed DSP algorithms (LMS, ML models, ANC, Denoising, Beamforming).",
                "Led measurements, testing, and qualification in compliance with audio standards.",
                "Managed large-scale human-subject measurement campaigns.",
                "Delivered technical documentation and ensured clear communication across teams.",
                "Coordinated planning and reviews with clients and partners.",
              ]
            },
          },
          {
            title: "Acoustic Engineer",
            company: "EERS Global Technologies Inc.",
            period: "Februrary 2022 - March 2023",
            location: "Montreal, Canada",
            link: "https://eers.ca/",
            description:
            {
              "Key role": [
                "Acoustic simulations (lumped-element models, Thiele/Small extraction, bass-reflex).",
                "Acoustic measurements: headphone/earpiece characterization, transducer classification, spatialisation, and audio certification.",
                "Built audio demonstrators for research and product development.",
                "Designed acoustic test benches for automated measurements.",
                "Captured, analysed, and classified bioacoustic signals for database.",
              ]
            },
          },
          {
            title: "Hardware Designer",
            company: "Thales Alenia Space",
            period: "January 2021 - September 2021",
            location: "Toulouse, France",
            link: "https://www.thalesaleniaspace.com/fr",
            description:
            {
              "Key role": [
                "Studied space communication architectures.",
                "Modelled RF isolators for space applications.",
                "Contributed to high-power RF amplifier design and validation.",
                "Performed measurement campaigns on RF prototypes.",
                "Produced performance reports with results and recommendations.",
              ]
            },
          },
        ],
        o = [
          {
            title: "inPhase",
            description:
              "Audio plugin for phase alignment developed in C++ with JUCE and CMake.",
            github: "https://github.com/nablum/inPhase",
            visibility: "Open Source",
            stack: [
              "C++",
              "JUCE",
              "CMake",
              "Python",
            ],
          },
          {
            title: "pedal SHIELD MEGA",
            description:
              "A programmable guitar effects pedal based on Arduino MEGA, featuring OLED display, true-bypass footswitch, and DSP-ready input/output stages.",
            github: "https://github.com/nablum/pedalSHIELD-MEGA",
            visibility: "Open Source",
            stack: [
              "C++",
              "KiCad",
              "OpenSCAD",
            ],
          },
          {
            title: "myEQ",
            description:
              "A custom audio EQ plugin built with JUCE and CMake.",
            github: "https://github.com/nablum/myEQ",
            visibility: "Open Source",
            stack: [
              "C++",
              "JUCE",
              "CMake",
            ],
          },
        ],
        n = [
          {
            name: "Home",
            href: "#home",
          },
          {
            name: "About",
            href: "#about",
          },
          {
            name: "Work",
            href: "#work",
          },
          {
            name: "Projects",
            href: "#projects",
          },
          // {
          //   name: "Bookshelf",
          //   href: "/bookshelf",
          //   external: !0,
          // },
          {
            name: "Contact",
            href: "#contact",
          },
        ],
        r = [
          "\uD83D\uDD0D Searching for semicolons…",
          "\uD83D\uDCA1 Reinventing the wheel (again)…",
          "\uD83E\uDDE9 Assembling the DOM…",
          "\uD83D\uDCE6 Unpacking npm dependencies… this may take a while.",
          "\uD83D\uDD77️ Catching bugs in the wild…",
          "⚙️ Allocating more RAM than you actually have…",
          "\uD83C\uDF00 Spinning up infinite loops…",
          "⌛ Waiting for Stack Overflow to load…",
          "\uD83C\uDF10 Contacting DNS… still waiting on their coffee break.",
          "\uD83D\uDD04 Synchronizing with the cloud… hope it doesn’t rain.",
          "\uD83D\uDCD6 Reading the docs nobody ever reads…",
          "\uD83D\uDEE1️ Applying firewall spells…",
          "\uD83D\uDDC4️ Defragmenting your imagination…",
          "\uD83D\uDDB1️ Double-clicking everything just in case…",
          "\uD83C\uDF9B️ Balancing load (mainly snacks vs. coffee).",
          "\uD83E\uDDEE Calculating Pi… still going…",
          "\uD83D\uDD0C Turning it off and on again…",
          "☕ Compiling caffeine into code…",
          "\uD83D\uDCE1 Buffering the unbufferable…",
          "\uD83C\uDFB2 Randomizing random number generators…",
          "\uD83D\uDCBE Floppy disk not found… please insert Disk 2.",
          "\uD83E\uDDBE Teaching AI to debug itself…",
          "\uD83D\uDCCA Aggregating useless metrics…",
          "\uD83D\uDEE0️ Duct-taping microservices together…",
          "\uD83C\uDFAE Unlocking cheat codes for the backend…",
          "\uD83E\uDDCA Freezing bugs so they stop moving.",
        ],
        // s = [
        //   {
        //     title: "The Psychology of Money",
        //     author: "Morgan Housel",
        //     category: "Finance",
        //     img_path: "../public/books/psychologyOfMoney.jpg",
        //     rating: 4,
        //     currentlyReading: !0,
        //     description:
        //       "A compilation of anecdotes of society's behaviour towards money and wealth.",
        //   },
        //   {
        //     title: "Sapiens: A Brief History of Humankind",
        //     author: "Yuval Noah Harari",
        //     category: "History",
        //     img_path: "../public/books/sapiens.jpg",
        //     rating: 4,
        //     currentlyReading: !0,
        //     description:
        //       "A history of humankind from the perspective of biology and archaeology.",
        //   },
        //   {
        //     title: "Mastering The Market Cycle",
        //     author: "Howard Marks",
        //     category: "FinTech",
        //     img_path: "../public/books/masteringmarket.jpg",
        //     rating: 4,
        //     currentlyReading: !0,
        //     description: "A dive into the market cycle and economics.",
        //   },
        //   {
        //     title: "When Genius Failed",
        //     author: "Roger Lowenstein",
        //     category: "FinTech",
        //     img_path: "../public/books/whengeniusfailed.jpg",
        //     rating: 4,
        //     currentlyReading: !0,
        //     description:
        //       "An account of the rise and fall of Long Term Capital Management (LTCM), a hedge fund that collapsed in 1998 due to a combination of market volatility and poor risk management.",
        //   },
        //   {
        //     title: "The Man Who Solved the Market",
        //     author: "Gregory Zuckerman",
        //     category: "FinTech",
        //     img_path: "../public/books/quantbook.jpg",
        //     rating: 4,
        //     description:
        //       "A biography of Jim Simons, the founder of Renaissance Technologies, one of the most successful quant funds in history.",
        //   },
        //   {
        //     title: "When Breath Becomes Air",
        //     author: "Paul Kalanithi",
        //     category: "Health",
        //     img_path: "../public/books/breathbecomesair.jpg",
        //     rating: 5,
        //     description:
        //       "A memoir of a neurosurgeon who battles terminal cancer.",
        //   },
        //   {
        //     title: "Shoe Dog",
        //     author: "Phil Knight",
        //     category: "Business",
        //     img_path: "../public/books/shoedog.jpg",
        //     rating: 5,
        //     description:
        //       "A memoir of the founder of Nike, detailing his journey from college dropout to becoming one of the most successful entrepreneurs of all time.",
        //   },
        //   {
        //     title: "The Defining Decade",
        //     author: "Meg Jay",
        //     category: "Psychology",
        //     img_path: "../public/books/definingdecade.jpg",
        //     rating: 5,
        //     description:
        //       "The importance of your 20s, written by a clinical psychologist.",
        //   },
        //   {
        //     title: "Meditations",
        //     author: "Marcus Aurelius",
        //     category: "Philosophy",
        //     img_path: "../public/books/meditations.jpg",
        //     rating: 4,
        //     description:
        //       "A collection of philosophical reflections by Marcus Aurelius.",
        //   },
        //   {
        //     title: "Design Patterns",
        //     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
        //     category: "Programming",
        //     img_path: "../public/books/softwaredesign.jpg",
        //     rating: 4,
        //     description:
        //       "A comprehensive guide to design patterns for software development.",
        //   },
        //   {
        //     title: "Designing Data-Intensive Applications",
        //     author: "Martin Kleppmann",
        //     category: "Programming",
        //     img_path: "../public/books/databook.jpg",
        //     rating: 5,
        //     description:
        //       "A comprehensive guide to designing data-intensive applications.",
        //   },
        //   {
        //     title: "Klara and the Sun",
        //     author: "Kazuo Ishiguro",
        //     category: "Fiction",
        //     img_path: "../public/books/klaraandthesun.jpg",
        //     rating: 4,
        //     description:
        //       "A novel about a sentient AI android and her perspective on the world.",
        //   },
        //   {
        //     title: "The Midnight Library",
        //     author: "Matt Haig",
        //     category: "Fiction",
        //     img_path: "../public/books/midnightlibrary.jpg",
        //     rating: 5,
        //     description:
        //       "A novel about a suicidal woman who discovers the other lives she could have led.",
        //   },
        //   {
        //     title: "The Five People You Meet in Heaven",
        //     author: "Mitch Albom",
        //     category: "Fiction",
        //     img_path: "../public/books/fivepeople.jpg",
        //     rating: 5,
        //     description:
        //       "A novel exploring themes of love, death, and the afterlife.",
        //   },
        //   {
        //     title: "A Brief History of Time",
        //     author: "Stephen Hawking",
        //     category: "Science",
        //     img_path: "../public/books/hawking.jpg",
        //     rating: 5,
        //     description: "A memoir of the life and work of Stephen Hawking.",
        //   },
        // ],
        l = [
          {
            text: "Code is like humor. When you have to explain it, it's bad.",
            author: "Cory House",
          },
          {
            text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
            author: "Dan Salomon",
          },
          {
            text: "The best error message is the one that never shows up.",
            author: "Thomas Fuchs",
          },
          {
            text: "A user interface is like a joke. If you have to explain it, it's not that good.",
            author: "Martin LeBlanc",
          },
          {
            text: "If you think you are too small to make a difference, try sleeping with a mosquito.",
            author: "Dalai Lama",
          },
          {
            text: "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.",
            author: "Edsger W. Dijkstra",
          },
          {
            text: "There are only two kinds of programming languages: the ones people complain about and the ones nobody uses.",
            author: "Bjarne Stroustrup",
          },
          {
            text: "Hardware: the parts of a computer that can be kicked.",
            author: "Jeff Pesis",
          },
          {
            text: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
            author: "Edsger W. Dijkstra",
          },
          {
            text: "If at first you don't succeed; call it version 1.0.",
            author: "Anonymous",
          },
          {
            text: "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
            author: "Anonymous",
          },
          {
            text: "A computer once beat me at chess, but it was no match for me at kickboxing.",
            author: "Emo Philips",
          },
          {
            text: "In order to understand recursion, one must first understand recursion.",
            author: "Anonymous",
          },
          {
            text: "There are two ways of constructing a software design: one way is to make it so simple that there are obviously no deficiencies; the other is to make it so complicated that there are no obvious deficiencies.",
            author: "Tony Hoare",
          },
          {
            text: "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.",
            author: "Mosher’s Law of Software Engineering",
          },
        ],
        c = [
          {
            name: "typescript",
            label: "TypeScript",
          },
          {
            name: "js",
            label: "JavaScript",
          },
          {
            name: "json",
            label: "JSON",
          },
          {
            name: "react",
            label: "React",
          },
          {
            name: "nextjs2",
            label: "Next.js",
          },
          {
            name: "tailwindcss",
            label: "Tailwind CSS",
          },
          {
            name: "materialui",
            label: "Material UI",
          },
          {
            name: "markdown",
            label: "Markdown",
          },
          {
            name: "gsap",
            label: "GSAP",
          },
          {
            name: "framer",
            label: "Framer Motion",
          },
          {
            name: "chakraui",
            label: "Chakra UI",
          },
          {
            name: "html5",
            label: "HTML5",
          },
          {
            name: "css3",
            label: "CSS3",
          },
        ],
        h = [
          {
            name: "c++",
            label: "C++",
          },
          {
            name: "juce",
            label: "JUCE",
          },
          {
            name: "tensorflow",
            label: "Tensorflow",
          },
          {
            name: "pytorch",
            label: "PyTorch",
          },
          {
            name: "matlab",
            label: "MATLAB",
          },
          {
            name: "python",
            label: "Python",
          },
        ],
        g = [
          {
            name: "espressif",
            label: "Espressif",
          },
          {
            name: "raspberrypi",
            label: "Raspberry Pi",
          },
          {
            name: "arm",
            label: "ARM",
          },
          {
            name: "arduino",
            label: "Arduino",
          },
          {
            name: "daisyseed",
            label: "Daisy Seed",
          },
        ],
        p = [
          {
            name: "git",
            label: "Git",
          },
          {
            name: "cmake",
            label: "CMake",
          },
          {
            name: "docker",
            label: "Docker",
          },
          {
            name: "github",
            label: "GitHub",
          },
          {
            name: "bash",
            label: "Bash",
          },
          {
            name: "claude",
            label: "Claude",
          },
          {
            name: "altium",
            label: "Altium",
          },
          {
            name: "openscad",
            label: "OpenSCAD",
          },
        ];
    },
  },
]);

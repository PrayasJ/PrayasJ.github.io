"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 23:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_contants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(375);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Canvas = ()=>{
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const images = _shared_contants__WEBPACK_IMPORTED_MODULE_2__/* .canvasImages.map */ .q4.map((source)=>{
            const image = document.createElement("img");
            image.src = source;
            return image;
        });
        let ctx = canvas.getContext("2d");
        const mouse = {
            x: -1000,
            y: -1000
        };
        canvas.addEventListener("mousemove", (e)=>{
            mouse.x = e.clientX;
            mouse.y = e.clientY + Math.abs(canvas.getBoundingClientRect().top);
        });
        canvas.addEventListener("mouseleave", ()=>{
            mouse.x = -1000;
            mouse.y = -1000;
        });
        class Particle {
            constructor(x, y, dx, dy, angle, size, image){
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.angle = angle;
                this.size = size;
                this.image = image;
            }
            update() {
                if (this.x < this.size / 2) this.dx = -this.dx;
                if (this.x > innerWidth - this.size / 2) this.dx = -this.dx;
                if (this.y < this.size / 2) this.dy = -this.dy;
                if (this.y > innerHeight - this.size / 2) this.dy = -this.dy;
                this.x += this.dx;
                this.y += this.dy;
                this.angle += 1;
                this.draw();
            }
            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle * (Math.PI / 180));
                ctx.drawImage(this.image, -this.size / 2, -this.size / 2, this.size, this.size);
                ctx.restore();
            }
        }
        let particles = [];
        let expectedSize = Math.round(innerWidth / 20);
        let SIZE = expectedSize < 30 ? 30 : expectedSize > 50 ? 50 : expectedSize;
        const setup = ()=>{
            let expectedSize = Math.round(innerWidth / 20);
            SIZE = expectedSize < 30 ? 30 : expectedSize > 50 ? 50 : expectedSize;
            particles = images.map((image)=>new Particle(SIZE + Math.random() * (innerWidth - SIZE * 2), SIZE + Math.random() * (innerHeight - SIZE * 2), (Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 1.5, 0, SIZE, image));
            canvas.width = innerWidth;
            canvas.height = innerHeight;
        };
        const animate = ()=>{
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            particles.forEach((particle)=>{
                particle.update();
            });
        };
        setup();
        animate();
        window.addEventListener("resize", setup);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.canvas, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 0.6
        },
        transition: {
            duration: 0.4,
            delay: 1.4
        },
        ref: canvasRef,
        className: "absolute inset-0 w-full h-full"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_contants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(375);


const Contact = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "pb-20",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-center text-4xl mt-14 md:mt-28 mb-10",
                children: "Get in touch"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                "data-scroll": true,
                "data-scroll-speed": "1",
                className: "flex justify-center mx-[5vw] mt-8",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full max-w-[1100px] flex gap-10 flex-col md:flex-row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                onSubmit: (e)=>{
                                    e.preventDefault();
                                    alert("Just a fake form. I'm too busy to contact you using email.");
                                },
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "name",
                                        children: "Your name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        id: "name",
                                        placeholder: "John Doe"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "email",
                                        children: "Your email"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "email",
                                        id: "email",
                                        placeholder: "johndoe@gmail.com"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "subject",
                                        children: "Subject"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        id: "subject",
                                        placeholder: "I want to talk to you"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "mt-2 py-2 text-white rounded transition duration-300 flex justify-center items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]",
                                        children: "Send"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-xl mb-3",
                                    children: "Other places"
                                }),
                                _shared_contants__WEBPACK_IMPORTED_MODULE_1__/* .socialLinks.map */ .KT.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: item.link,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex gap-3 items-center hover:bg-slate-900 p-2 transition duration-300",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "w-[30px] h-[30px] rounded-full",
                                                src: item.icon,
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                children: item.title
                                            })
                                        ]
                                    }, item.title))
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ }),

/***/ 551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Cursor = ()=>{
    const isFirstMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
    const cursorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const realMouse = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
        x: 0,
        y: 0
    });
    const displayedMouse = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
        x: 0,
        y: 0
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (window.matchMedia("(pointer: coarse)").matches) return;
        window.addEventListener("mousemove", (e)=>{
            if (cursorRef.current) {
                if (isFirstMove.current) {
                    cursorRef.current.style.display = "block";
                    displayedMouse.current.x = e.clientX;
                    displayedMouse.current.y = e.clientY;
                    isFirstMove.current = false;
                }
                realMouse.current.x = e.clientX;
                realMouse.current.y = e.clientY;
            }
        });
        const updateMouse = ()=>{
            requestAnimationFrame(updateMouse);
            displayedMouse.current.x += (realMouse.current.x - displayedMouse.current.x) * 0.1;
            displayedMouse.current.y += (realMouse.current.y - displayedMouse.current.y) * 0.1;
            if (cursorRef.current) {
                cursorRef.current.style.left = `${displayedMouse.current.x}px`;
                cursorRef.current.style.top = `${displayedMouse.current.y}px`;
            }
        };
        updateMouse();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: cursorRef,
        className: "w-7 h-7 bg-transparent border border-white rounded-full fixed z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden transition duration-75"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cursor);


/***/ }),

/***/ 643:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _shared_contants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(375);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Canvas__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_5__]);
([_Canvas__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Intro = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative h-screen flex justify-center items-center flex-col gap-5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Canvas__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                className: "h-[10vw] max-h-[100px] min-h-[60px] max-w-[100vw] z-[1]",
                viewBox: "0 0 276 97",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: _shared_contants__WEBPACK_IMPORTED_MODULE_4__/* .characters.map */ .Rr.map((character, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.path, {
                                initial: {
                                    pathLength: 0
                                },
                                animate: {
                                    pathLength: 1
                                },
                                transition: {
                                    delay: index / 10,
                                    duration: 1
                                },
                                d: character,
                                fill: "none",
                                stroke: "#FFF",
                                strokeWidth: "3"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.path, {
                                initial: {
                                    fill: "#ffffff00"
                                },
                                animate: {
                                    fill: "#ffffff"
                                },
                                transition: {
                                    delay: 0.7 + index / 10,
                                    duration: 0.6
                                },
                                fill: "none",
                                d: character
                            })
                        ]
                    }, character))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.p, {
                "data-scroll": true,
                "data-scroll-speed": "1",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.4,
                    delay: 1.4
                },
                className: "text-3xl text-center z-[1] overflow-hidden",
                children: `I'm a frontend developer`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.a, {
                "data-scroll": true,
                "data-scroll-speed": "2",
                "data-scroll-delay": "1",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.4,
                    delay: 1.4
                },
                className: "absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer",
                href: "#who",
                "data-scroll-to": true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiChevronsDown, {
                    className: "animate-bounce",
                    size: 56
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_MainProjects)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(652);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./src/components/MainProjects.tsx



const MainProjects = ({ projects  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-center text-4xl mb-10 md:mb-20",
                children: "Selected projects"
            }),
            projects.map((project, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 ${index % 2 === 1 ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            "data-scroll": true,
                            "data-scroll-speed": "3",
                            className: "lg:flex-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "border-[#888] border-2 rounded-[20px] overflow-hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "border-black border-[8px]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "w-full rounded-[12px]",
                                        src: project.image.url,
                                        alt: ""
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item-info lg:flex-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-3xl",
                                    children: project.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-[20px] text-justify my-3",
                                    children: project.description
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex gap-[5px]",
                                    children: project.technologies.map((tech)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "w-[30px] h-[30px]",
                                            src: tech,
                                            alt: ""
                                        }, tech))
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex mt-[25px] gap-[20px]",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: project.demo,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(bi_.BiLinkExternal, {
                                                    size: 25
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: " Live Demo"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: project.github,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1b222b] hover:bg-[#191e25]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaGithub, {
                                                    size: 25
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: " View Github"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }, project.id))
        ]
    });
};
/* harmony default export */ const components_MainProjects = (MainProjects);


/***/ }),

/***/ 50:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Skills = ({ skills  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                "data-scroll": true,
                "data-scroll-direction": "horizontal",
                "data-scroll-speed": "-1",
                className: "text-center text-3xl lg:text-4xl",
                children: "My skills & Knowledge"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                "data-scroll": true,
                "data-scroll-direction": "horizontal",
                "data-scroll-speed": "1",
                className: "description text-lg text-center my-[30px]",
                children: "Technologies and languages that I use to make my product everyday"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid justify-center grid-cols-4 md:grid-cols-6 gap-y-[10px] md:gap-y-[20px]",
                children: skills.map((skill)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: skill.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "item flex flex-col items-center justify-around group",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "w-[60px] h-[60px] transition duration-300 group-hover:scale-110",
                                src: skill.image,
                                alt: ""
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-center",
                                children: skill.title
                            })
                        ]
                    }, skill.link))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);


/***/ }),

/***/ 844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SmallProjects = ({ projects  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex justify-center mx-[5vw] mt-16",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full max-w-[1100px]",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-4xl text-center",
                    children: "More of my works"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mt-4 mb-10 text-gray-400 text-lg text-center",
                    children: `I'm sure you will like some of my hobby projects`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    "data-scroll": true,
                    "data-scroll-speed": "1",
                    className: "grid gap-2 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))]",
                    children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: project.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex gap-3 hover:bg-slate-900 p-3 transition duration-300",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "h-[40px] w-[40px] my-1 object-cover",
                                    src: project.icon.url,
                                    alt: ""
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: project.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-gray-400",
                                            children: project.description
                                        })
                                    ]
                                })
                            ]
                        }, project.id))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmallProjects);


/***/ }),

/***/ 897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Who = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "who",
        className: "flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                "data-scroll": true,
                "data-scroll-speed": "2",
                className: "w-[225px] h-[225px] rounded-full",
                src: "/avatar.jpg",
                alt: ""
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        "data-scroll": true,
                        "data-scroll-speed": "0.5",
                        className: "title text-[40px]",
                        children: "Who am I?"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        "data-scroll": true,
                        className: "text-lg text-gray-200",
                        id: "story",
                        children: [
                            "My name is Nguyen Anh Phong. I'm a",
                             false ? 0 : "",
                            " ",
                            "frontend developer living in Hanoi, Vietnam. I started learning web development when I was 13. Since then, I have made a lot of projects, from basic HTML pages to complex projects like a React library. I hope to be a great developer and get my dream job in the future. Besides coding, I also like",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "underline underline-offset-2",
                                href: "https://blog.napthedev.com/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "writing blog posts"
                            }),
                            ", listening to music and playing video games"
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Who);


/***/ }),

/***/ 862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);

const client = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient("https://api-ap-northeast-1.graphcms.com/v2/cl1ylp3cg1ase01xucbgc346j/master");


/***/ }),

/***/ 757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ GET_ALL_DATA)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);

const GET_ALL_DATA = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  query {
    skills(stage: PUBLISHED) {
      image
      title
      link
    }
    projects(stage: PUBLISHED) {
      id
      title
      description
      demo
      github
      technologies
      image {
        url(
          transformation: {
            image: { resize: { width: 700 } }
            validateOptions: true
          }
        )
      }
    }
    smallProjects(stage: PUBLISHED) {
      id
      title
      description
      link
      icon {
        url(
          transformation: {
            image: { resize: { height: 40 } }
            validateOptions: true
          }
        )
      }
    }
  }
`;


/***/ }),

/***/ 441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(440);
/* harmony import */ var _components_Cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(551);
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(757);
/* harmony import */ var _components_Intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(643);
/* harmony import */ var react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(966);
/* harmony import */ var react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MainProjects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(633);
/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50);
/* harmony import */ var _components_SmallProjects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(844);
/* harmony import */ var _components_Who__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(897);
/* harmony import */ var _graphql_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(862);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Intro__WEBPACK_IMPORTED_MODULE_4__]);
_components_Intro__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const Home = ({ data  })=>{
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_5__.LocomotiveScrollProvider, {
        options: {
            smooth: true,
            tablet: {
                smooth: true,
                breakpoint: 768
            }
        },
        watch: [],
        containerRef: containerRef,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cursor__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                "data-scroll-container": true,
                ref: containerRef,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Intro__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Who__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Skills__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        skills: data.skills
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MainProjects__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        projects: data.projects
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SmallProjects__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        projects: data.smallProjects
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
const getStaticProps = async ()=>{
    const data = await _graphql_client__WEBPACK_IMPORTED_MODULE_10__/* .client.request */ .L.request(_graphql_queries__WEBPACK_IMPORTED_MODULE_3__/* .GET_ALL_DATA */ .y);
    return {
        props: {
            data
        },
        revalidate: 3600
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KT": () => (/* binding */ socialLinks),
/* harmony export */   "Rr": () => (/* binding */ characters),
/* harmony export */   "q4": () => (/* binding */ canvasImages)
/* harmony export */ });
const characters = [
    "M43.875 24.4375C43.875 31.375 41.5 36.7188 36.75 40.4688C32.0312 44.1875 25.2656 46.0469 16.4531 46.0469H8.39062V73H0.421875V4.46875H18.1875C35.3125 4.46875 43.875 11.125 43.875 24.4375ZM8.39062 39.2031H15.5625C22.625 39.2031 27.7344 38.0625 30.8906 35.7812C34.0469 33.5 35.625 29.8438 35.625 24.8125C35.625 20.2812 34.1406 16.9062 31.1719 14.6875C28.2031 12.4688 23.5781 11.3594 17.2969 11.3594H8.39062V39.2031Z",
    "M92.25 73V39.7656C92.25 35.5781 91.2969 32.4531 89.3906 30.3906C87.4844 28.3281 84.5 27.2969 80.4375 27.2969C75.0312 27.2969 71.0781 28.7656 68.5781 31.7031C66.1094 34.6406 64.875 39.4531 64.875 46.1406V73H57.0938V0.0625H64.875V22.1406C64.875 24.7969 64.75 27 64.5 28.75H64.9688C66.5 26.2812 68.6719 24.3438 71.4844 22.9375C74.3281 21.5 77.5625 20.7812 81.1875 20.7812C87.4688 20.7812 92.1719 22.2812 95.2969 25.2812C98.4531 28.25 100.031 32.9844 100.031 39.4844V73H92.25Z",
    "M160.406 47.2656C160.406 55.6406 158.297 62.1875 154.078 66.9062C149.859 71.5938 144.031 73.9375 136.594 73.9375C132 73.9375 127.922 72.8594 124.359 70.7031C120.797 68.5469 118.047 65.4531 116.109 61.4219C114.172 57.3906 113.203 52.6719 113.203 47.2656C113.203 38.8906 115.297 32.375 119.484 27.7188C123.672 23.0312 129.484 20.6875 136.922 20.6875C144.109 20.6875 149.812 23.0781 154.031 27.8594C158.281 32.6406 160.406 39.1094 160.406 47.2656ZM121.266 47.2656C121.266 53.8281 122.578 58.8281 125.203 62.2656C127.828 65.7031 131.688 67.4219 136.781 67.4219C141.875 67.4219 145.734 65.7188 148.359 62.3125C151.016 58.875 152.344 53.8594 152.344 47.2656C152.344 40.7344 151.016 35.7812 148.359 32.4062C145.734 29 141.844 27.2969 136.688 27.2969C131.594 27.2969 127.75 28.9688 125.156 32.3125C122.562 35.6562 121.266 40.6406 121.266 47.2656Z",
    "M209.25 73V39.7656C209.25 35.5781 208.297 32.4531 206.391 30.3906C204.484 28.3281 201.5 27.2969 197.438 27.2969C192.062 27.2969 188.125 28.75 185.625 31.6562C183.125 34.5625 181.875 39.3594 181.875 46.0469V73H174.094V21.625H180.422L181.688 28.6562H182.062C183.656 26.125 185.891 24.1719 188.766 22.7969C191.641 21.3906 194.844 20.6875 198.375 20.6875C204.562 20.6875 209.219 22.1875 212.344 25.1875C215.469 28.1562 217.031 32.9219 217.031 39.4844V73H209.25Z",
    "M275.109 21.625V26.5469L265.594 27.6719C266.469 28.7656 267.25 30.2031 267.938 31.9844C268.625 33.7344 268.969 35.7188 268.969 37.9375C268.969 42.9688 267.25 46.9844 263.812 49.9844C260.375 52.9844 255.656 54.4844 249.656 54.4844C248.125 54.4844 246.688 54.3594 245.344 54.1094C242.031 55.8594 240.375 58.0625 240.375 60.7188C240.375 62.125 240.953 63.1719 242.109 63.8594C243.266 64.5156 245.25 64.8438 248.062 64.8438H257.156C262.719 64.8438 266.984 66.0156 269.953 68.3594C272.953 70.7031 274.453 74.1094 274.453 78.5781C274.453 84.2656 272.172 88.5938 267.609 91.5625C263.047 94.5625 256.391 96.0625 247.641 96.0625C240.922 96.0625 235.734 94.8125 232.078 92.3125C228.453 89.8125 226.641 86.2812 226.641 81.7188C226.641 78.5938 227.641 75.8906 229.641 73.6094C231.641 71.3281 234.453 69.7812 238.078 68.9688C236.766 68.375 235.656 67.4531 234.75 66.2031C233.875 64.9531 233.438 63.5 233.438 61.8438C233.438 59.9688 233.938 58.3281 234.938 56.9219C235.938 55.5156 237.516 54.1562 239.672 52.8438C237.016 51.75 234.844 49.8906 233.156 47.2656C231.5 44.6406 230.672 41.6406 230.672 38.2656C230.672 32.6406 232.359 28.3125 235.734 25.2812C239.109 22.2188 243.891 20.6875 250.078 20.6875C252.766 20.6875 255.188 21 257.344 21.625H275.109ZM234.141 81.625C234.141 84.4062 235.312 86.5156 237.656 87.9531C240 89.3906 243.359 90.1094 247.734 90.1094C254.266 90.1094 259.094 89.125 262.219 87.1562C265.375 85.2188 266.953 82.5781 266.953 79.2344C266.953 76.4531 266.094 74.5156 264.375 73.4219C262.656 72.3594 259.422 71.8281 254.672 71.8281H245.344C241.812 71.8281 239.062 72.6719 237.094 74.3594C235.125 76.0469 234.141 78.4688 234.141 81.625ZM238.359 38.0781C238.359 41.6719 239.375 44.3906 241.406 46.2344C243.438 48.0781 246.266 49 249.891 49C257.484 49 261.281 45.3125 261.281 37.9375C261.281 30.2188 257.438 26.3594 249.75 26.3594C246.094 26.3594 243.281 27.3438 241.312 29.3125C239.344 31.2812 238.359 34.2031 238.359 38.0781Z", 
];
const canvasImages = [
    "html",
    "javascript",
    "css",
    "react",
    "typescript",
    "vue",
    "svelte",
    "nodejs",
    "tailwindcss",
    "sass",
    "next",
    "firebase",
    "vscode",
    "git",
    "vite",
    "webpack", 
].map((icon)=>`https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2F${icon}.svg&w=50&h=50`);
const socialLinks = [
    {
        title: "Github",
        icon: "/github.png",
        link: "https://github.com/napthedev"
    },
    {
        title: "Facebook",
        icon: "/facebook.png",
        link: "https://www.facebook.com/napthedev"
    },
    {
        title: "Discord",
        icon: "/discord.png",
        link: "https://discord.com/users/877882975855992852"
    },
    {
        title: "Codepen",
        icon: "/codepen.png",
        link: "https://codepen.io/enaypi"
    },
    {
        title: "My blog",
        icon: "/blog.png",
        link: "https://blog.napthedev.com"
    }, 
];


/***/ }),

/***/ 805:
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 966:
/***/ ((module) => {

module.exports = require("react-locomotive-scroll");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(441));
module.exports = __webpack_exports__;

})();
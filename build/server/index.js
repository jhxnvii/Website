import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, Award, Brain, Briefcase, Calendar, CheckCircle, ChevronDown, ChevronUp, Code, Coffee, Cpu, Database, ExternalLink, Eye, Github, Globe, GraduationCap, Heart, Layers, Linkedin, Mail, MapPin, Menu, MessageSquare, Phone, Send, Server, Shield, Twitter, X, Zap } from "lucide-react";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), streamTimeout + 1e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region app/components/Navbar.tsx
var navLinks = [
	{
		name: "Home",
		url: "#home",
		emoji: "🌊"
	},
	{
		name: "Skills",
		url: "#skills",
		emoji: "✨"
	},
	{
		name: "Projects",
		url: "#projects",
		emoji: "🔬"
	},
	{
		name: "Experience",
		url: "#experience",
		emoji: "🌿"
	},
	{
		name: "Contact",
		url: "#contact",
		emoji: "💧"
	}
];
var Navbar = ({ darkMode, setDarkMode }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 60);
			const sections = navLinks.map((l) => l.name.toLowerCase());
			for (const sec of sections.reverse()) {
				const el = document.getElementById(sec);
				if (el && window.scrollY >= el.offsetTop - 120) {
					setActiveSection(sec);
					break;
				}
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const toggleMenu = () => setIsOpen(!isOpen);
	return /* @__PURE__ */ jsxs(motion.nav, {
		initial: {
			y: -100,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .8,
			ease: [
				.25,
				.46,
				.45,
				.94
			]
		},
		className: `fixed w-full z-50 transition-all duration-500 ${scrolled ? "py-2 backdrop-blur-xl bg-[rgba(2,9,23,0.85)] border-b border-cyan-900/40 shadow-[0_4px_30px_rgba(6,182,212,0.08)]" : "py-4 bg-transparent"}`,
		children: [/* @__PURE__ */ jsx("div", {
			className: "container mx-auto px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between h-14",
				children: [
					/* @__PURE__ */ jsxs(motion.a, {
						href: "#home",
						whileHover: { scale: 1.05 },
						whileTap: { scale: .97 },
						className: "flex items-center gap-2 group",
						children: [/* @__PURE__ */ jsx(motion.div, {
							animate: { y: [
								0,
								-4,
								0
							] },
							transition: {
								repeat: Infinity,
								duration: 2.5,
								ease: "easeInOut"
							},
							className: "w-8 h-8 relative flex items-center justify-center",
							children: /* @__PURE__ */ jsxs("svg", {
								viewBox: "0 0 32 32",
								fill: "none",
								className: "w-full h-full",
								children: [
									/* @__PURE__ */ jsx("path", {
										d: "M16 4 C16 4, 6 16, 6 21 C6 26.5 10.5 30 16 30 C21.5 30 26 26.5 26 21 C26 16 16 4 16 4Z",
										fill: "url(#dropGrad)"
									}),
									/* @__PURE__ */ jsx("ellipse", {
										cx: "12",
										cy: "19",
										rx: "2.5",
										ry: "4",
										fill: "rgba(255,255,255,0.25)",
										transform: "rotate(-20 12 19)"
									}),
									/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
										id: "dropGrad",
										x1: "0",
										y1: "0",
										x2: "1",
										y2: "1",
										children: [/* @__PURE__ */ jsx("stop", {
											offset: "0%",
											stopColor: "#67e8f9"
										}), /* @__PURE__ */ jsx("stop", {
											offset: "100%",
											stopColor: "#0284c7"
										})]
									}) })
								]
							})
						}), /* @__PURE__ */ jsx("span", {
							className: "text-lg font-bold tracking-wide water-text-static",
							children: "Jhanvi Jain"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "hidden md:flex items-center gap-1",
						children: [navLinks.map((link) => {
							const isActive = activeSection === link.name.toLowerCase();
							return /* @__PURE__ */ jsxs(motion.a, {
								href: link.url,
								whileHover: { y: -2 },
								whileTap: { y: 0 },
								className: `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${isActive ? "text-cyan-300" : "text-slate-400 hover:text-cyan-200"}`,
								children: [
									isActive && /* @__PURE__ */ jsx(motion.span, {
										layoutId: "navUnderline",
										className: "absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full",
										style: { boxShadow: "0 0 8px rgba(6,182,212,0.8)" }
									}),
									/* @__PURE__ */ jsx("span", {
										className: `absolute inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${isActive ? "opacity-100" : ""}`,
										style: { background: "rgba(6,182,212,0.08)" }
									}),
									/* @__PURE__ */ jsx("span", {
										className: "relative",
										children: link.name
									})
								]
							}, link.name);
						}), /* @__PURE__ */ jsx(motion.a, {
							href: "#contact",
							whileHover: {
								scale: 1.05,
								y: -1
							},
							whileTap: { scale: .97 },
							className: "ml-4 px-5 py-2 rounded-full text-sm font-semibold text-white shimmer-btn",
							style: {
								background: "linear-gradient(135deg, #0891b2, #0ea5e9)",
								boxShadow: "0 0 20px rgba(6,182,212,0.35)"
							},
							children: "Hire Me"
						})]
					}),
					/* @__PURE__ */ jsx(motion.button, {
						onClick: toggleMenu,
						whileTap: { scale: .9 },
						className: "md:hidden p-2 rounded-xl border border-cyan-900/50 text-cyan-300 backdrop-blur-sm",
						style: { background: "rgba(6,182,212,0.06)" },
						children: /* @__PURE__ */ jsx(AnimatePresence, {
							mode: "wait",
							children: isOpen ? /* @__PURE__ */ jsx(motion.div, {
								initial: {
									rotate: -90,
									opacity: 0
								},
								animate: {
									rotate: 0,
									opacity: 1
								},
								exit: {
									rotate: 90,
									opacity: 0
								},
								transition: { duration: .2 },
								children: /* @__PURE__ */ jsx(X, { size: 20 })
							}, "x") : /* @__PURE__ */ jsx(motion.div, {
								initial: {
									rotate: 90,
									opacity: 0
								},
								animate: {
									rotate: 0,
									opacity: 1
								},
								exit: {
									rotate: -90,
									opacity: 0
								},
								transition: { duration: .2 },
								children: /* @__PURE__ */ jsx(Menu, { size: 20 })
							}, "m")
						})
					})
				]
			})
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(motion.div, {
			initial: {
				opacity: 0,
				height: 0
			},
			animate: {
				opacity: 1,
				height: "auto"
			},
			exit: {
				opacity: 0,
				height: 0
			},
			transition: {
				duration: .3,
				ease: "easeInOut"
			},
			className: "md:hidden overflow-hidden border-t border-cyan-900/30",
			style: {
				backdropFilter: "blur(20px)",
				background: "rgba(2,9,23,0.95)"
			},
			children: /* @__PURE__ */ jsxs("div", {
				className: "container mx-auto px-4 py-3 space-y-1",
				children: [navLinks.map((link, i) => /* @__PURE__ */ jsxs(motion.a, {
					href: link.url,
					onClick: () => setIsOpen(false),
					initial: {
						opacity: 0,
						x: -20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: { delay: i * .07 },
					className: "flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:text-cyan-300 hover:bg-cyan-900/20 transition-all duration-200",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-lg",
						children: link.emoji
					}), /* @__PURE__ */ jsx("span", {
						className: "font-medium",
						children: link.name
					})]
				}, link.name)), /* @__PURE__ */ jsx(motion.a, {
					href: "#contact",
					onClick: () => setIsOpen(false),
					initial: {
						opacity: 0,
						x: -20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: { delay: navLinks.length * .07 },
					className: "flex items-center justify-center mx-4 py-3 rounded-xl font-semibold text-white shimmer-btn mt-2",
					style: { background: "linear-gradient(135deg, #0891b2, #0ea5e9)" },
					children: "Hire Me 🌊"
				})]
			})
		}) })]
	});
};
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links
});
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Playfair+Display:wght@700;800&display=swap"
	}
];
function Layout({ children }) {
	const [darkMode, setDarkMode] = useState(true);
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: .001
	});
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "description",
				content: "Jhanvi Jain – Full Stack Developer, AI Security Engineer & Application Security Analyst. Portfolio showcasing projects, skills, and experience."
			}),
			/* @__PURE__ */ jsx("title", { children: "Jhanvi Jain | Portfolio" }),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", {
			className: "water-bg",
			children: [
				/* @__PURE__ */ jsx(motion.div, {
					className: "fixed top-0 left-0 right-0 h-[3px] scroll-progress z-[100] origin-left",
					style: {
						scaleX,
						transformOrigin: "0%"
					}
				}),
				/* @__PURE__ */ jsx(Bubbles, {}),
				/* @__PURE__ */ jsx(Navbar, {
					darkMode,
					setDarkMode
				}),
				children,
				/* @__PURE__ */ jsx(ScrollRestoration, {}),
				/* @__PURE__ */ jsx(Scripts, {})
			]
		})]
	});
}
function Bubbles() {
	return /* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 pointer-events-none overflow-hidden z-0",
		children: Array.from({ length: 12 }, (_, i) => ({
			id: i,
			size: Math.random() * 30 + 8,
			left: Math.random() * 100,
			delay: Math.random() * 15,
			duration: Math.random() * 12 + 10,
			opacity: Math.random() * .4 + .1
		})).map((b) => /* @__PURE__ */ jsx("div", {
			className: "bubble",
			style: {
				width: b.size,
				height: b.size,
				left: `${b.left}%`,
				bottom: "-50px",
				animationDuration: `${b.duration}s`,
				animationDelay: `${b.delay}s`,
				opacity: b.opacity
			}
		}, b.id))
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "pt-16 p-4 container mx-auto text-cyan-100",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "water-text text-4xl font-bold",
				children: message
			}),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
//#endregion
//#region app/components/Hero.tsx
function useTypewriter(words, speed = 80, pause = 2e3) {
	const [text, setText] = useState("");
	const [wordIndex, setWordIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [deleting, setDeleting] = useState(false);
	useEffect(() => {
		const current = words[wordIndex % words.length];
		const timeout = setTimeout(() => {
			if (!deleting) {
				setText(current.slice(0, charIndex + 1));
				if (charIndex + 1 === current.length) setTimeout(() => setDeleting(true), pause);
				else setCharIndex((c) => c + 1);
			} else {
				setText(current.slice(0, charIndex - 1));
				if (charIndex - 1 === 0) {
					setDeleting(false);
					setWordIndex((w) => w + 1);
					setCharIndex(0);
				} else setCharIndex((c) => c - 1);
			}
		}, deleting ? speed / 2 : speed);
		return () => clearTimeout(timeout);
	}, [
		charIndex,
		deleting,
		wordIndex,
		words,
		speed,
		pause
	]);
	return text;
}
function FloatingOrbs() {
	return /* @__PURE__ */ jsx(Fragment, { children: [
		{
			size: 300,
			x: "75%",
			y: "15%",
			delay: 0,
			color: "rgba(6,182,212,0.06)"
		},
		{
			size: 200,
			x: "10%",
			y: "60%",
			delay: 2,
			color: "rgba(14,165,233,0.05)"
		},
		{
			size: 150,
			x: "85%",
			y: "70%",
			delay: 4,
			color: "rgba(103,232,249,0.04)"
		},
		{
			size: 100,
			x: "40%",
			y: "80%",
			delay: 1,
			color: "rgba(56,189,248,0.06)"
		}
	].map((orb, i) => /* @__PURE__ */ jsx(motion.div, {
		style: {
			position: "absolute",
			width: orb.size,
			height: orb.size,
			left: orb.x,
			top: orb.y,
			background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
			borderRadius: "50%",
			pointerEvents: "none"
		},
		animate: {
			y: [
				0,
				-30,
				0
			],
			x: [
				0,
				10,
				0
			]
		},
		transition: {
			repeat: Infinity,
			duration: 8 + i * 2,
			delay: orb.delay,
			ease: "easeInOut"
		}
	}, i)) });
}
var Hero = ({ darkMode }) => {
	const roles = useTypewriter([
		"Full Stack Developer",
		"AI Security Engineer",
		"Application Security Analyst",
		"LLM / Agentic AI Builder"
	]);
	const stats = [
		{
			label: "Experience",
			value: "3+",
			icon: /* @__PURE__ */ jsx(Shield, { size: 16 })
		},
		{
			label: "Projects",
			value: "5+",
			icon: /* @__PURE__ */ jsx(Code, { size: 16 })
		},
		{
			label: "CGPA",
			value: "8.87",
			icon: /* @__PURE__ */ jsx(Brain, { size: 16 })
		}
	];
	return /* @__PURE__ */ jsxs("section", {
		id: "home",
		className: "relative min-h-screen flex flex-col justify-center pt-20 pb-10 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx(FloatingOrbs, {}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "space-y-7",
					children: [
						/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .6 },
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("div", { className: "h-px w-10 bg-gradient-to-r from-cyan-500 to-transparent" }), /* @__PURE__ */ jsx("span", {
								className: "text-cyan-400 font-medium tracking-widest text-sm uppercase",
								children: "Hello, I'm"
							})]
						}),
						/* @__PURE__ */ jsxs(motion.h1, {
							initial: {
								opacity: 0,
								y: 40
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: .1
							},
							className: "text-6xl md:text-7xl font-bold leading-tight",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-display water-text",
									children: "Jhanvi"
								}),
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "text-white",
									children: "Jain"
								})
							]
						}),
						/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								scale: .8
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: {
								duration: .5,
								delay: .2
							},
							className: "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium",
							style: {
								background: "rgba(6,182,212,0.1)",
								border: "1px solid rgba(6,182,212,0.25)",
								color: "#67e8f9"
							},
							children: [/* @__PURE__ */ jsx("span", { children: "🌊" }), /* @__PURE__ */ jsx("span", { children: "Jhanvi — meaning \"River Ganga\", pure & ever-flowing" })]
						}),
						/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .3
							},
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx("div", {
								className: "w-2 h-6 rounded-sm animate-pulse",
								style: { background: "#06b6d4" }
							}), /* @__PURE__ */ jsxs("span", {
								className: "text-xl md:text-2xl font-semibold text-slate-300 min-h-[2rem]",
								children: [roles, /* @__PURE__ */ jsx("span", {
									className: "text-cyan-400 animate-pulse",
									children: "|"
								})]
							})]
						}),
						/* @__PURE__ */ jsxs(motion.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .4
							},
							className: "text-slate-400 text-base md:text-lg leading-relaxed max-w-xl",
							children: [
								"Full Stack Developer & AI Security Engineer at",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-cyan-300 font-semibold",
									children: "EY India"
								}),
								" — architecting AI-powered security solutions, Agentic SOC platforms, and privacy-first automation with LangChain, AutoGen, and multi-agent systems."
							]
						}),
						/* @__PURE__ */ jsx(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .5
							},
							className: "flex gap-6",
							children: stats.map((stat, i) => /* @__PURE__ */ jsxs("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "flex items-center justify-center gap-1 text-cyan-400 mb-1",
										children: stat.icon
									}),
									/* @__PURE__ */ jsx("div", {
										className: "text-2xl font-bold text-white",
										children: stat.value
									}),
									/* @__PURE__ */ jsx("div", {
										className: "text-xs text-slate-500",
										children: stat.label
									})
								]
							}, i))
						}),
						/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .6
							},
							className: "flex flex-wrap gap-4",
							children: [/* @__PURE__ */ jsx(motion.a, {
								href: "#contact",
								whileHover: {
									scale: 1.05,
									y: -2
								},
								whileTap: { scale: .97 },
								className: "px-7 py-3 rounded-full font-semibold text-white shimmer-btn relative overflow-hidden",
								style: {
									background: "linear-gradient(135deg, #0891b2, #0ea5e9, #38bdf8)",
									boxShadow: "0 0 30px rgba(6,182,212,0.4)"
								},
								children: "Get in Touch"
							}), /* @__PURE__ */ jsx(motion.a, {
								href: "#projects",
								whileHover: {
									scale: 1.05,
									y: -2
								},
								whileTap: { scale: .97 },
								className: "px-7 py-3 rounded-full font-semibold text-cyan-300 transition-all",
								style: {
									border: "1px solid rgba(6,182,212,0.4)",
									background: "rgba(6,182,212,0.06)"
								},
								children: "View Projects"
							})]
						}),
						/* @__PURE__ */ jsxs(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								duration: .6,
								delay: .8
							},
							className: "flex items-center gap-4 pt-2",
							children: [[
								{
									href: "https://github.com/jhxnvii",
									icon: /* @__PURE__ */ jsx(Github, { size: 18 }),
									label: "GitHub"
								},
								{
									href: "https://linkedin.com/in/jhanvi-jain-40394823b/",
									icon: /* @__PURE__ */ jsx(Linkedin, { size: 18 }),
									label: "LinkedIn"
								},
								{
									href: "mailto:jhanvijain052003@gmail.com",
									icon: /* @__PURE__ */ jsx(Mail, { size: 18 }),
									label: "Email"
								}
							].map((s) => /* @__PURE__ */ jsx(motion.a, {
								href: s.href,
								target: s.href.startsWith("http") ? "_blank" : void 0,
								rel: "noopener noreferrer",
								whileHover: {
									y: -4,
									scale: 1.12
								},
								whileTap: { scale: .92 },
								title: s.label,
								className: "w-10 h-10 rounded-xl flex items-center justify-center text-slate-300 hover:text-cyan-300 transition-colors duration-300",
								style: {
									background: "rgba(6,182,212,0.08)",
									border: "1px solid rgba(6,182,212,0.2)"
								},
								children: s.icon
							}, s.label)), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-1.5 ml-2 text-slate-500 text-sm",
								children: [/* @__PURE__ */ jsx(MapPin, {
									size: 13,
									className: "text-cyan-600"
								}), /* @__PURE__ */ jsx("span", { children: "India" })]
							})]
						})
					]
				}), /* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						scale: .8
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .9,
						delay: .2,
						ease: [
							.25,
							.46,
							.45,
							.94
						]
					},
					className: "flex justify-center lg:justify-end",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative float-slow-anim",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "absolute inset-0 rounded-full opacity-40",
								style: {
									background: "radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)",
									transform: "scale(1.3)"
								}
							}),
							/* @__PURE__ */ jsx(motion.div, {
								animate: { rotate: 360 },
								transition: {
									repeat: Infinity,
									duration: 12,
									ease: "linear"
								},
								className: "absolute inset-0 rounded-full",
								style: {
									border: "2px solid transparent",
									borderTop: "2px solid rgba(6,182,212,0.6)",
									borderRight: "2px solid rgba(6,182,212,0.2)",
									transform: "scale(1.12)"
								}
							}),
							/* @__PURE__ */ jsx(motion.div, {
								animate: { rotate: -360 },
								transition: {
									repeat: Infinity,
									duration: 18,
									ease: "linear"
								},
								className: "absolute inset-0 rounded-full",
								style: {
									border: "1.5px solid transparent",
									borderBottom: "1.5px solid rgba(56,189,248,0.5)",
									borderLeft: "1.5px solid rgba(56,189,248,0.2)",
									transform: "scale(1.22)"
								}
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative w-64 h-64 md:w-80 md:h-80 liquid-border overflow-hidden",
								style: {
									border: "3px solid rgba(6,182,212,0.5)",
									boxShadow: "0 0 50px rgba(6,182,212,0.3), inset 0 0 50px rgba(6,182,212,0.05)"
								},
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "absolute inset-0 z-10 pointer-events-none",
										style: { background: "linear-gradient(135deg, rgba(103,232,249,0.1) 0%, transparent 50%, rgba(6,182,212,0.08) 100%)" }
									}),
									/* @__PURE__ */ jsx("img", {
										src: "/official.jpg",
										alt: "Jhanvi Jain",
										className: "absolute top-0 left-0 w-full h-full object-cover",
										onError: (e) => {
											e.target.style.display = "none";
										}
									}),
									/* @__PURE__ */ jsx("div", {
										className: "w-full h-full flex items-center justify-center",
										style: { background: "linear-gradient(135deg, #164e63, #0e7490, #0891b2)" },
										children: /* @__PURE__ */ jsx("span", {
											className: "text-6xl font-bold font-display text-cyan-100",
											children: "JJ"
										})
									})
								]
							}),
							/* @__PURE__ */ jsx(motion.div, {
								animate: { y: [
									0,
									-8,
									0
								] },
								transition: {
									repeat: Infinity,
									duration: 3,
									ease: "easeInOut"
								},
								className: "absolute -top-4 -right-4 px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-100",
								style: {
									background: "linear-gradient(135deg, #0891b2, #0ea5e9)",
									boxShadow: "0 4px 15px rgba(6,182,212,0.4)"
								},
								children: "EY India 🌐"
							}),
							/* @__PURE__ */ jsx(motion.div, {
								animate: { y: [
									0,
									8,
									0
								] },
								transition: {
									repeat: Infinity,
									duration: 4,
									ease: "easeInOut",
									delay: 1
								},
								className: "absolute -bottom-2 -left-6 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-100",
								style: {
									background: "linear-gradient(135deg, #164e63, #0e7490)",
									boxShadow: "0 4px 15px rgba(6,182,212,0.3)"
								},
								children: "🔒 AI Security"
							}),
							/* @__PURE__ */ jsx(motion.div, {
								animate: { x: [
									0,
									-6,
									0
								] },
								transition: {
									repeat: Infinity,
									duration: 5,
									ease: "easeInOut",
									delay: .5
								},
								className: "absolute top-1/2 -right-10 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-100",
								style: {
									background: "rgba(6,28,61,0.9)",
									border: "1px solid rgba(6,182,212,0.3)",
									boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
								},
								children: "🔗 LangChain"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsxs(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 2,
					duration: .8
				},
				className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-slate-500 text-xs tracking-widest uppercase",
					children: "Scroll"
				}), /* @__PURE__ */ jsx(motion.div, {
					animate: { y: [
						0,
						10,
						0
					] },
					transition: {
						repeat: Infinity,
						duration: 1.5,
						ease: "easeInOut"
					},
					className: "w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center p-1",
					children: /* @__PURE__ */ jsx("div", { className: "w-1 h-2 rounded-full bg-cyan-400" })
				})]
			})
		]
	});
};
//#endregion
//#region app/components/Skills.tsx
var skillCategories = [
	{
		category: "Agentic AI & LLM Engineering",
		icon: /* @__PURE__ */ jsx(Zap, { size: 20 }),
		color: "from-cyan-500 to-blue-500",
		glow: "rgba(6,182,212,0.3)",
		items: [
			"LangChain",
			"LangGraph",
			"CrewAI",
			"AutoGen",
			"OpenAI Agents SDK",
			"LlamaIndex",
			"RAG Pipelines",
			"MCP Protocol",
			"Vector DBs",
			"AI Guardrails",
			"LangSmith",
			"Langfuse",
			"Multi-Agent Systems"
		]
	},
	{
		category: "Cybersecurity & InfoSec",
		icon: /* @__PURE__ */ jsx(Shield, { size: 20 }),
		color: "from-blue-500 to-indigo-500",
		glow: "rgba(99,102,241,0.3)",
		items: [
			"Netskope",
			"Microsoft Purview",
			"Microsoft Defender",
			"Mimecast",
			"CASB",
			"Palo Alto Prisma",
			"DLP",
			"SWG",
			"SIEM",
			"RBAC",
			"IRM",
			"EDR",
			"OAuth",
			"Email Security",
			"PII Detection",
			"Incident Response",
			"Data Masking"
		]
	},
	{
		category: "Software Development",
		icon: /* @__PURE__ */ jsx(Code, { size: 20 }),
		color: "from-sky-400 to-cyan-500",
		glow: "rgba(56,189,248,0.3)",
		items: [
			"Python",
			"C",
			"C++",
			"Java",
			"JavaScript",
			"OOP",
			"DSA",
			"HTML",
			"CSS",
			"React",
			"Flask",
			"Linux",
			"NumPy",
			"Pandas",
			"Matplotlib"
		]
	},
	{
		category: "Data Science & ML",
		icon: /* @__PURE__ */ jsx(Brain, { size: 20 }),
		color: "from-teal-400 to-cyan-600",
		glow: "rgba(20,184,166,0.3)",
		items: [
			"Machine Learning",
			"Deep Learning",
			"TrOCR",
			"Computer Vision",
			"NLP",
			"Data Analytics",
			"Gradio",
			"Model Fine-tuning",
			"Google Colab"
		]
	},
	{
		category: "Cloud & DevOps",
		icon: /* @__PURE__ */ jsx(Server, { size: 20 }),
		color: "from-blue-400 to-sky-600",
		glow: "rgba(14,165,233,0.3)",
		items: [
			"AWS",
			"Cloud Computing",
			"CI/CD Basics",
			"Docker",
			"Git"
		]
	},
	{
		category: "Database Management",
		icon: /* @__PURE__ */ jsx(Database, { size: 20 }),
		color: "from-cyan-600 to-blue-700",
		glow: "rgba(8,145,178,0.3)",
		items: [
			"MySQL",
			"SQLite3",
			"DBMS",
			"RDBMS",
			"SQL Query Optimization"
		]
	},
	{
		category: "Engineering Concepts",
		icon: /* @__PURE__ */ jsx(Cpu, { size: 20 }),
		color: "from-slate-400 to-blue-500",
		glow: "rgba(100,116,139,0.3)",
		items: [
			"Computer Networks",
			"Computer Architecture",
			"Digital Electronics",
			"Analog Circuits",
			"HPC",
			"Compiler Design",
			"Automata Theory"
		]
	},
	{
		category: "Soft Skills",
		icon: /* @__PURE__ */ jsx(Globe, { size: 20 }),
		color: "from-emerald-400 to-teal-500",
		glow: "rgba(52,211,153,0.25)",
		items: [
			"Critical Thinking",
			"Leadership",
			"Time Management",
			"Adaptability",
			"Teamwork",
			"Communication",
			"Decision-Making",
			"Presentation"
		]
	}
];
var containerVariants$2 = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: .08 }
	}
};
var cardVariants$1 = {
	hidden: {
		opacity: 0,
		y: 30
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .5,
			ease: [
				.25,
				.46,
				.45,
				.94
			]
		}
	}
};
var Skills = ({ darkMode }) => {
	const [hoveredCard, setHoveredCard] = useState(null);
	return /* @__PURE__ */ jsxs("section", {
		id: "skills",
		className: "py-24",
		children: [/* @__PURE__ */ jsxs(motion.div, {
			initial: {
				opacity: 0,
				y: 30
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			transition: { duration: .6 },
			viewport: { once: true },
			className: "text-center mb-16",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "lotus-line justify-center mb-4",
					children: /* @__PURE__ */ jsx("span", {
						className: "text-cyan-400 font-semibold tracking-widest text-sm uppercase",
						children: "My Expertise"
					})
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "text-4xl md:text-5xl font-bold mb-4",
					children: [/* @__PURE__ */ jsx("span", {
						className: "water-text font-display",
						children: "Skills & "
					}), /* @__PURE__ */ jsx("span", {
						className: "text-white",
						children: "Arsenal"
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-slate-400 max-w-xl mx-auto text-base",
					children: "From agentic AI systems to enterprise security — a full-stack toolkit built for modern challenges"
				})
			]
		}), /* @__PURE__ */ jsx(motion.div, {
			variants: containerVariants$2,
			initial: "hidden",
			whileInView: "show",
			viewport: {
				once: true,
				amount: .05
			},
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",
			children: skillCategories.map((cat, idx) => /* @__PURE__ */ jsxs(motion.div, {
				variants: cardVariants$1,
				onMouseEnter: () => setHoveredCard(idx),
				onMouseLeave: () => setHoveredCard(null),
				whileHover: {
					y: -8,
					scale: 1.02
				},
				className: "glass-card rounded-2xl p-5 relative overflow-hidden cursor-default group transition-all duration-400",
				style: { boxShadow: hoveredCard === idx ? `0 20px 60px ${cat.glow}, 0 0 0 1px rgba(6,182,212,0.2)` : void 0 },
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl",
						style: { background: `radial-gradient(ellipse at 50% 0%, ${cat.glow} 0%, transparent 70%)` }
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 mb-4 relative z-10",
						children: [/* @__PURE__ */ jsx("div", {
							className: `w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br ${cat.color} text-white flex-shrink-0 shadow-lg`,
							style: { boxShadow: `0 4px 15px ${cat.glow}` },
							children: cat.icon
						}), /* @__PURE__ */ jsx("h3", {
							className: "text-sm font-semibold text-slate-200 leading-snug",
							children: cat.category
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap gap-1.5 relative z-10",
						children: cat.items.map((item, i) => /* @__PURE__ */ jsx(motion.span, {
							initial: {
								opacity: 0,
								scale: .8
							},
							whileInView: {
								opacity: 1,
								scale: 1
							},
							viewport: { once: true },
							transition: { delay: i * .03 },
							whileHover: {
								scale: 1.1,
								y: -1
							},
							className: "skill-pill px-2.5 py-1 rounded-full text-xs text-slate-300 transition-all duration-200",
							style: {
								background: "rgba(6,182,212,0.08)",
								border: "1px solid rgba(6,182,212,0.15)"
							},
							children: item
						}, i))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "absolute bottom-0 right-0 w-16 h-16 rounded-full opacity-10 pointer-events-none",
						style: {
							background: `linear-gradient(135deg, ${cat.glow}, transparent)`,
							transform: "translate(30%, 30%)"
						}
					})
				]
			}, idx))
		})]
	});
};
//#endregion
//#region app/components/Experience.tsx
var experiences = [
	{
		title: "Full Stack Developer | AI Security Products",
		company: "EY India",
		companyFull: "Ernst & Young India",
		type: "R&D & Core Team",
		location: "India",
		period: "March 2026 – Current",
		current: true,
		color: "from-cyan-500 to-blue-600",
		glow: "rgba(6,182,212,0.3)",
		points: [
			"Architecting and building AI-powered security products in the Agentic SOC project using Multi-Agent Framework, LangChain, and AutoGen.",
			"Handling end-to-end data ingestion, pipelines, and model training for AI agents, from scratch to production-ready LLM systems.",
			"Designing core architecture and SLMS workflows for scalable, privacy-first AI security solutions."
		],
		skills: [
			"LangChain",
			"AutoGen",
			"LangGraph",
			"Multi-Agent AI",
			"Python",
			"LLM Engineering"
		]
	},
	{
		title: "Application Security Analyst",
		company: "Flipkart",
		companyFull: "Flipkart – InfoSec (Data Protection & Investigations)",
		type: "Data Protection & Investigations",
		location: "India",
		period: "October 2024 – February 2026",
		current: false,
		color: "from-sky-500 to-cyan-600",
		glow: "rgba(14,165,233,0.25)",
		points: [
			"Conducted security assessments on web and API applications, identifying vulnerabilities and recommending prioritized controls.",
			"Engineered Email Security, CASB, and Endpoint Protection policies, improving enterprise-wide data protection.",
			"Built Flask-based dashboards and PII masking pipelines, strengthening secure SDLC adoption and reducing data leakage risks.",
			"Improved security visibility and streamlined data protection workflows across multiple enterprise applications."
		],
		skills: [
			"DLP",
			"CASB",
			"Netskope",
			"Microsoft Purview",
			"Flask",
			"PII Masking",
			"Incident Response"
		]
	},
	{
		title: "AI / ML Engineer",
		company: "RnP Soft Pvt. Ltd.",
		companyFull: "RnP Soft Pvt. Ltd.",
		type: "Internship",
		location: "India",
		period: "May 2024 – August 2024",
		current: false,
		color: "from-blue-500 to-indigo-600",
		glow: "rgba(99,102,241,0.25)",
		points: [
			"Led development of a handwritten OCR model (TrOCR), improving handwritten text recognition accuracy across diverse datasets.",
			"Implemented and fine-tuned machine learning models, achieving measurable improvements in model performance and inference quality.",
			"Collaborated with cross-functional teams to deliver the project within timelines while addressing complex technical challenges."
		],
		skills: [
			"TrOCR",
			"Computer Vision",
			"PyTorch",
			"Machine Learning",
			"Python",
			"Model Fine-tuning"
		]
	}
];
var education = [
	{
		degree: "B.Tech – Computer Science Engineering",
		institution: "KIIT University",
		location: "Bhubaneswar, Odisha",
		period: "2021 – 2025",
		grade: "8.87 CGPA",
		icon: "🎓"
	},
	{
		degree: "Intermediate (+2)",
		institution: "Ryan International School",
		location: "Ghaziabad, UP",
		period: "2020 – 2021",
		grade: "92.2%",
		icon: "📚"
	},
	{
		degree: "Matriculation",
		institution: "Ryan International School",
		location: "Ghaziabad, UP",
		period: "2018 – 2019",
		grade: "94.2%",
		icon: "🏫"
	}
];
var certifications = [
	{
		name: "AI for Everyone",
		issuer: "DeepLearning.AI (Coursera)",
		icon: "🤖"
	},
	{
		name: "GenAI for Everyone",
		issuer: "DeepLearning.AI (Coursera)",
		icon: "✨"
	},
	{
		name: "GDPR",
		issuer: "Packt (Coursera)",
		icon: "🔒"
	},
	{
		name: "AWS Academy Cloud",
		issuer: "Amazon Web Services",
		icon: "☁️"
	},
	{
		name: "PCAP Python 1 & 2",
		issuer: "Cisco Networking Academy",
		icon: "🐍"
	},
	{
		name: "Cybersecurity Essentials",
		issuer: "Cisco Networking Academy",
		icon: "🛡️"
	},
	{
		name: "Google Data Analytics Professional",
		issuer: "Google (Coursera)",
		icon: "📊"
	},
	{
		name: "Software Engineering VEP",
		issuer: "Wells Fargo (Forage)",
		icon: "💼"
	},
	{
		name: "Web Developer",
		issuer: "Udemy",
		icon: "🌐"
	},
	{
		name: "Java Developer",
		issuer: "Udemy",
		icon: "☕"
	},
	{
		name: "DevOps Participation",
		issuer: "Microsoft",
		icon: "⚙️"
	},
	{
		name: "Hackathon (Squid Game)",
		issuer: "Microsoft",
		icon: "🦑"
	},
	{
		name: "Flipkart ISCP Trainee",
		issuer: "Flipkart",
		icon: "🏆"
	},
	{
		name: "AI/ML Internship",
		issuer: "RnP Soft Pvt. Ltd.",
		icon: "🔬"
	}
];
var containerVariants$1 = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: .1 }
	}
};
var itemVariants = {
	hidden: {
		opacity: 0,
		x: -30
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: .5,
			ease: [
				.25,
				.46,
				.45,
				.94
			]
		}
	}
};
var Experience = ({ darkMode }) => {
	const [expanded, setExpanded] = useState(0);
	return /* @__PURE__ */ jsxs("section", {
		id: "experience",
		className: "py-24",
		children: [/* @__PURE__ */ jsxs(motion.div, {
			initial: {
				opacity: 0,
				y: 30
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			transition: { duration: .6 },
			viewport: { once: true },
			className: "text-center mb-16",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "lotus-line justify-center mb-4",
					children: /* @__PURE__ */ jsx("span", {
						className: "text-cyan-400 font-semibold tracking-widest text-sm uppercase",
						children: "My Journey"
					})
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "text-4xl md:text-5xl font-bold mb-4",
					children: [/* @__PURE__ */ jsx("span", {
						className: "water-text font-display",
						children: "Experience "
					}), /* @__PURE__ */ jsx("span", {
						className: "text-white",
						children: "& Education"
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-slate-400 max-w-xl mx-auto text-base",
					children: "A flowing river of professional growth — from security ops to AI engineering"
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 lg:grid-cols-5 gap-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-3",
				children: [/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						x: -20
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					transition: { duration: .5 },
					viewport: { once: true },
					className: "flex items-center gap-3 mb-8",
					children: [/* @__PURE__ */ jsx(Briefcase, {
						className: "text-cyan-400",
						size: 22
					}), /* @__PURE__ */ jsx("h3", {
						className: "text-2xl font-bold text-white",
						children: "Work Experience"
					})]
				}), /* @__PURE__ */ jsx(motion.div, {
					variants: containerVariants$1,
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						amount: .05
					},
					className: "timeline-flow pl-10 space-y-6",
					children: experiences.map((exp, idx) => /* @__PURE__ */ jsxs(motion.div, {
						variants: itemVariants,
						className: "relative",
						children: [/* @__PURE__ */ jsx("div", { className: "river-dot absolute -left-[38px] top-4" }), /* @__PURE__ */ jsxs("div", {
							className: "glass-card rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300",
							onClick: () => setExpanded(expanded === idx ? null : idx),
							style: {
								boxShadow: expanded === idx ? `0 0 30px ${exp.glow}` : void 0,
								border: expanded === idx ? `1px solid rgba(6,182,212,0.35)` : void 0
							},
							children: [/* @__PURE__ */ jsx("div", {
								className: "p-5",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex-1",
										children: [
											exp.current && /* @__PURE__ */ jsxs("span", {
												className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold mb-2",
												style: {
													background: "rgba(6,182,212,0.15)",
													color: "#67e8f9",
													border: "1px solid rgba(6,182,212,0.25)"
												},
												children: [/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" }), "Current Role"]
											}),
											/* @__PURE__ */ jsx("h4", {
												className: "text-base font-bold text-white group-hover:text-cyan-200 transition-colors mb-1",
												children: exp.title
											}),
											/* @__PURE__ */ jsx("p", {
												className: `text-sm font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`,
												children: exp.company
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex flex-wrap items-center gap-x-4 gap-y-1 mt-2",
												children: [/* @__PURE__ */ jsxs("span", {
													className: "flex items-center gap-1 text-xs text-slate-500",
													children: [
														/* @__PURE__ */ jsx(MapPin, { size: 11 }),
														" ",
														exp.location
													]
												}), /* @__PURE__ */ jsxs("span", {
													className: "flex items-center gap-1 text-xs text-slate-500",
													children: [
														/* @__PURE__ */ jsx(Calendar, { size: 11 }),
														" ",
														exp.period
													]
												})]
											})
										]
									}), /* @__PURE__ */ jsx("button", {
										className: "text-cyan-500 hover:text-cyan-300 transition-colors mt-1",
										children: expanded === idx ? /* @__PURE__ */ jsx(ChevronUp, { size: 18 }) : /* @__PURE__ */ jsx(ChevronDown, { size: 18 })
									})]
								})
							}), /* @__PURE__ */ jsx(motion.div, {
								initial: false,
								animate: {
									height: expanded === idx ? "auto" : 0,
									opacity: expanded === idx ? 1 : 0
								},
								transition: {
									duration: .35,
									ease: "easeInOut"
								},
								style: { overflow: "hidden" },
								children: /* @__PURE__ */ jsxs("div", {
									className: "px-5 pb-5 space-y-4",
									style: { borderTop: "1px solid rgba(6,182,212,0.1)" },
									children: [/* @__PURE__ */ jsx("ul", {
										className: "space-y-2 mt-4",
										children: exp.points.map((pt, i) => /* @__PURE__ */ jsxs("li", {
											className: "flex gap-2 text-sm text-slate-300 leading-relaxed",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-cyan-400 mt-1 flex-shrink-0",
												children: "→"
											}), pt]
										}, i))
									}), /* @__PURE__ */ jsx("div", {
										className: "flex flex-wrap gap-1.5 pt-1",
										children: exp.skills.map((skill, i) => /* @__PURE__ */ jsx("span", {
											className: "px-2.5 py-1 rounded-full text-xs font-medium text-cyan-300",
											style: {
												background: "rgba(6,182,212,0.1)",
												border: "1px solid rgba(6,182,212,0.2)"
											},
											children: skill
										}, i))
									})]
								})
							})]
						})]
					}, idx))
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-2 space-y-8",
				children: [/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						x: 20
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					transition: { duration: .5 },
					viewport: { once: true },
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 mb-6",
						children: [/* @__PURE__ */ jsx(GraduationCap, {
							className: "text-cyan-400",
							size: 22
						}), /* @__PURE__ */ jsx("h3", {
							className: "text-2xl font-bold text-white",
							children: "Education"
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-4",
						children: education.map((edu, idx) => /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: idx * .1,
								duration: .5
							},
							viewport: { once: true },
							whileHover: { x: 4 },
							className: "glass-card rounded-2xl p-4 flex gap-4 items-start transition-all duration-300 hover:border-cyan-700/40",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-2xl flex-shrink-0 mt-0.5",
								children: edu.icon
							}), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("h4", {
									className: "text-sm font-bold text-white",
									children: edu.degree
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs text-cyan-400 font-medium mt-0.5",
									children: edu.institution
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3 mt-1.5 text-xs text-slate-500",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ jsx(MapPin, { size: 10 }),
											" ",
											edu.location
										]
									}), /* @__PURE__ */ jsxs("span", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ jsx(Calendar, { size: 10 }),
											" ",
											edu.period
										]
									})]
								}),
								/* @__PURE__ */ jsx("span", {
									className: "inline-block mt-2 px-2 py-0.5 rounded-full text-xs font-semibold",
									style: {
										background: "rgba(6,182,212,0.12)",
										color: "#67e8f9",
										border: "1px solid rgba(6,182,212,0.2)"
									},
									children: edu.grade
								})
							] })]
						}, idx))
					})]
				}), /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .5,
						delay: .2
					},
					viewport: { once: true },
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 mb-5",
						children: [/* @__PURE__ */ jsx(Award, {
							className: "text-cyan-400",
							size: 22
						}), /* @__PURE__ */ jsx("h3", {
							className: "text-xl font-bold text-white",
							children: "Certifications"
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "glass-card rounded-2xl p-4 space-y-2 max-h-72 overflow-y-auto",
						style: {
							scrollbarWidth: "thin",
							scrollbarColor: "#06b6d4 transparent"
						},
						children: certifications.map((cert, idx) => /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								x: 10
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							transition: { delay: idx * .05 },
							viewport: { once: true },
							whileHover: {
								x: 4,
								backgroundColor: "rgba(6,182,212,0.07)"
							},
							className: "flex items-center gap-3 p-2 rounded-xl transition-all duration-200 cursor-default",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-lg flex-shrink-0",
								children: cert.icon
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs font-semibold text-slate-200",
								children: cert.name
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-500",
								children: cert.issuer
							})] })]
						}, idx))
					})]
				})]
			})]
		})]
	});
};
//#endregion
//#region app/components/Projects.tsx
var projects = [
	{
		title: "PII Chrome Extension",
		subtitle: "Enterprise Security Tool",
		description: "A Chrome extension that detects and redacts personally identifiable information (PII) on websites in real-time using regex, keyword matching, and a React dashboard.",
		image: "2.png",
		icon: /* @__PURE__ */ jsx(Shield, { size: 18 }),
		accent: "from-cyan-500 to-blue-600",
		glow: "rgba(6,182,212,0.4)",
		stack: [
			"JavaScript",
			"React",
			"Flask",
			"MySQL",
			"Regex",
			"Chrome API"
		],
		github: "https://github.com/jhxnvii/PII-CHROME-EXTENSION",
		demo: null,
		details: "Developed a Chrome extension to identify and redact PII on websites using regex and keyword matching in JavaScript, Flask, and React. Engineered a React-based dashboard to audit detection logs, application logs, and errors with MySQL backend. Enabled real-time monitoring and reporting of PII exposure on platforms like GWS and generative AI tools (ChatGPT, Claude, QuillBot)."
	},
	{
		title: "Chatbot NLP + RAG",
		subtitle: "AI Language Model",
		description: "An NLP-based chatbot using Google Gemma 2B with Retrieval Augmented Generation (RAG) for context-aware, grounded conversational responses.",
		image: "chatbot.png",
		icon: /* @__PURE__ */ jsx(MessageSquare, { size: 18 }),
		accent: "from-sky-500 to-cyan-600",
		glow: "rgba(14,165,233,0.4)",
		stack: [
			"Python",
			"NLP",
			"Gemma 2B",
			"RAG",
			"LlamaIndex",
			"Machine Learning"
		],
		github: "https://github.com/jhxnvii/Chatbot-NLP",
		demo: null,
		details: "Implements a sophisticated chatbot leveraging NLP with Google Gemma 2B and RAG pipelines. The chatbot retrieves relevant context from a knowledge base before generating responses, resulting in more accurate and contextually appropriate interactions. Demonstrates advanced implementation of transformer-based language models and information retrieval."
	},
	{
		title: "Handwritten OCR (TrOCR)",
		subtitle: "Computer Vision Model",
		description: "Led development of a TrOCR model at RnP Soft for converting handwritten text to digital format with optimized ML algorithms.",
		image: "image.png",
		icon: /* @__PURE__ */ jsx(Eye, { size: 18 }),
		accent: "from-blue-500 to-indigo-600",
		glow: "rgba(99,102,241,0.4)",
		stack: [
			"Python",
			"TrOCR",
			"Machine Learning",
			"Computer Vision",
			"PyTorch"
		],
		github: null,
		demo: null,
		details: "Led the development of a handwritten OCR detection model using TrOCR technology at RnP Soft Pvt. Ltd. The model utilizes advanced ML algorithms and computer vision to convert handwritten text into digital format with exceptional accuracy across diverse datasets and handwriting styles. Improved text recognition accuracy by fine-tuning on domain-specific data."
	},
	{
		title: "Email Classifier System",
		subtitle: "Data Protection Tool",
		description: "A classifier that categorizes Confidential, PII, and Internal emails using rule-based and keyword-scoring methods with an interactive Gradio UI.",
		image: "1.png",
		icon: /* @__PURE__ */ jsx(Shield, { size: 18 }),
		accent: "from-teal-500 to-cyan-600",
		glow: "rgba(20,184,166,0.4)",
		stack: [
			"Python",
			"Google Colab",
			"Gradio",
			"NLP",
			"Rule-based AI"
		],
		github: null,
		demo: null,
		details: "Developed an email classification system on Google Colab to categorize Confidential, PII, and Internal emails. Applied rule-based and keyword-scoring methods to comprehensively assess data risks. Integrated Gradio interface for interactive classification visualization and confidence score reporting."
	},
	{
		title: "Agentic SOC Platform",
		subtitle: "AI Security (EY India)",
		description: "Architecting AI-powered security operations using Multi-Agent Framework, LangChain, and AutoGen for automated threat detection and response.",
		image: null,
		icon: /* @__PURE__ */ jsx(Layers, { size: 18 }),
		accent: "from-cyan-600 to-blue-700",
		glow: "rgba(8,145,178,0.4)",
		stack: [
			"LangChain",
			"AutoGen",
			"LangGraph",
			"Python",
			"Multi-Agent",
			"LLM"
		],
		github: null,
		demo: null,
		details: "Architecting and building AI-powered security products in the Agentic SOC project at EY India using Multi-Agent Framework, LangChain, and AutoGen. Handling end-to-end data ingestion, pipelines, and model training for AI agents, from scratch to production-ready LLM systems. Designing core architecture and SLMS workflows for scalable, privacy-first AI security solutions."
	}
];
var containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: .1 }
	}
};
var cardVariants = {
	hidden: {
		opacity: 0,
		y: 40
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .6,
			ease: [
				.25,
				.46,
				.45,
				.94
			]
		}
	}
};
var Projects = ({ darkMode }) => {
	const [selectedProject, setSelectedProject] = useState(null);
	const openModal = (project) => {
		setSelectedProject(project);
		document.body.style.overflow = "hidden";
	};
	const closeModal = () => {
		setSelectedProject(null);
		document.body.style.overflow = "";
	};
	return /* @__PURE__ */ jsxs("section", {
		id: "projects",
		className: "py-24",
		children: [
			/* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .6 },
				viewport: { once: true },
				className: "text-center mb-16",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "lotus-line justify-center mb-4",
						children: /* @__PURE__ */ jsx("span", {
							className: "text-cyan-400 font-semibold tracking-widest text-sm uppercase",
							children: "What I've Built"
						})
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "text-4xl md:text-5xl font-bold mb-4",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-white",
							children: "Featured "
						}), /* @__PURE__ */ jsx("span", {
							className: "water-text font-display",
							children: "Projects"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-slate-400 max-w-xl mx-auto text-base",
						children: "Cybersecurity tools, AI/ML systems and full-stack applications — each flowing from idea to impact"
					})
				]
			}),
			/* @__PURE__ */ jsx(motion.div, {
				variants: containerVariants,
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					amount: .05
				},
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: projects.map((project, idx) => /* @__PURE__ */ jsxs(motion.div, {
					variants: cardVariants,
					whileHover: {
						y: -10,
						scale: 1.02
					},
					onClick: () => openModal(project),
					className: "glass-card rounded-2xl overflow-hidden cursor-pointer group relative",
					style: { transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" },
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative h-44 overflow-hidden",
						children: [
							project.image ? /* @__PURE__ */ jsx("img", {
								src: project.image,
								alt: project.title,
								className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
							}) : /* @__PURE__ */ jsx("div", {
								className: `w-full h-full bg-gradient-to-br ${project.accent} flex items-center justify-center`,
								children: /* @__PURE__ */ jsx("div", {
									className: "text-white opacity-30 scale-[3]",
									children: project.icon
								})
							}),
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[rgba(2,9,23,0.85)] via-transparent to-transparent" }),
							/* @__PURE__ */ jsx("div", {
								className: `absolute top-3 left-3 w-8 h-8 rounded-lg bg-gradient-to-br ${project.accent} flex items-center justify-center text-white shadow-lg`,
								style: { boxShadow: `0 4px 15px ${project.glow}` },
								children: project.icon
							}),
							/* @__PURE__ */ jsx("div", {
								className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
								children: /* @__PURE__ */ jsx("span", {
									className: "px-4 py-2 rounded-full text-sm font-semibold text-white backdrop-blur-sm",
									style: {
										background: "rgba(6,182,212,0.3)",
										border: "1px solid rgba(6,182,212,0.5)"
									},
									children: "View Details →"
								})
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-5 relative",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-b-2xl",
								style: { background: `radial-gradient(ellipse at 50% 100%, ${project.glow.replace("0.4", "0.07")} 0%, transparent 80%)` }
							}),
							/* @__PURE__ */ jsx("p", {
								className: `text-xs font-semibold tracking-widest uppercase mb-1 bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`,
								children: project.subtitle
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300",
								children: project.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2",
								children: project.description
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap gap-1.5",
								children: [project.stack.slice(0, 4).map((tech, i) => /* @__PURE__ */ jsx("span", {
									className: "px-2 py-0.5 rounded-full text-xs text-cyan-300",
									style: {
										background: "rgba(6,182,212,0.1)",
										border: "1px solid rgba(6,182,212,0.2)"
									},
									children: tech
								}, i)), project.stack.length > 4 && /* @__PURE__ */ jsxs("span", {
									className: "px-2 py-0.5 rounded-full text-xs text-slate-400",
									style: {
										background: "rgba(100,116,139,0.15)",
										border: "1px solid rgba(100,116,139,0.2)"
									},
									children: ["+", project.stack.length - 4]
								})]
							})
						]
					})]
				}, idx))
			}),
			/* @__PURE__ */ jsx(AnimatePresence, { children: selectedProject && /* @__PURE__ */ jsx(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				onClick: closeModal,
				className: "fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-[200] p-4",
				children: /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						scale: .85,
						y: 40
					},
					animate: {
						opacity: 1,
						scale: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						scale: .85,
						y: 40
					},
					transition: {
						duration: .3,
						ease: [
							.25,
							.46,
							.45,
							.94
						]
					},
					onClick: (e) => e.stopPropagation(),
					className: "max-w-2xl w-full rounded-3xl overflow-hidden",
					style: {
						background: "rgba(4, 18, 44, 0.97)",
						border: "1px solid rgba(6,182,212,0.25)",
						boxShadow: "0 25px 80px rgba(0,0,0,0.6), 0 0 60px rgba(6,182,212,0.1)"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative h-52 overflow-hidden",
						children: [
							selectedProject.image ? /* @__PURE__ */ jsx("img", {
								src: selectedProject.image,
								alt: selectedProject.title,
								className: "w-full h-full object-cover"
							}) : /* @__PURE__ */ jsx("div", { className: `w-full h-full bg-gradient-to-br ${selectedProject.accent}` }),
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[rgba(4,18,44,0.95)] to-transparent" }),
							/* @__PURE__ */ jsx("button", {
								onClick: closeModal,
								className: "absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all hover:scale-110",
								style: {
									background: "rgba(0,0,0,0.5)",
									border: "1px solid rgba(255,255,255,0.2)"
								},
								children: /* @__PURE__ */ jsx(X, { size: 16 })
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "absolute bottom-4 left-5",
								children: [/* @__PURE__ */ jsx("p", {
									className: `text-xs font-semibold tracking-widest uppercase mb-1 bg-gradient-to-r ${selectedProject.accent} bg-clip-text text-transparent`,
									children: selectedProject.subtitle
								}), /* @__PURE__ */ jsx("h3", {
									className: "text-2xl font-bold text-white",
									children: selectedProject.title
								})]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-6 space-y-5",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-slate-300 leading-relaxed text-sm",
								children: selectedProject.details
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
								className: "text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3",
								children: "Technologies Used"
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-2",
								children: selectedProject.stack.map((tech, i) => /* @__PURE__ */ jsx("span", {
									className: "px-3 py-1 rounded-full text-xs font-medium text-cyan-200",
									style: {
										background: "rgba(6,182,212,0.12)",
										border: "1px solid rgba(6,182,212,0.25)"
									},
									children: tech
								}, i))
							})] }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex gap-3 pt-2",
								children: [selectedProject.github && /* @__PURE__ */ jsxs(motion.a, {
									href: selectedProject.github,
									target: "_blank",
									rel: "noopener noreferrer",
									whileHover: { scale: 1.05 },
									whileTap: { scale: .97 },
									className: "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white shimmer-btn",
									style: { background: "linear-gradient(135deg, #1e293b, #334155)" },
									children: [/* @__PURE__ */ jsx(Github, { size: 16 }), " View Code"]
								}), selectedProject.demo && /* @__PURE__ */ jsxs(motion.a, {
									href: selectedProject.demo,
									target: "_blank",
									rel: "noopener noreferrer",
									whileHover: { scale: 1.05 },
									whileTap: { scale: .97 },
									className: "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white shimmer-btn",
									style: { background: "linear-gradient(135deg, #0891b2, #0ea5e9)" },
									children: [/* @__PURE__ */ jsx(ExternalLink, { size: 16 }), " Live Demo"]
								})]
							})
						]
					})]
				})
			}) })
		]
	});
};
//#endregion
//#region app/components/Contact.tsx
var Contact = ({ darkMode }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: ""
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);
	const [focusedField, setFocusedField] = useState(null);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitStatus("success");
			setFormData({
				name: "",
				email: "",
				subject: "",
				message: ""
			});
			setTimeout(() => setSubmitStatus(null), 4e3);
		}, 1800);
	};
	const inputClass = (field) => `w-full px-4 py-3.5 rounded-xl text-slate-100 text-sm outline-none transition-all duration-300 placeholder-slate-600 ${focusedField === field ? "border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.2)]" : "border-slate-700/50 hover:border-slate-600/60"}`;
	const inputStyle = (field) => ({
		background: focusedField === field ? "rgba(6,28,61,0.7)" : "rgba(6,18,40,0.6)",
		border: `1px solid ${focusedField === field ? "rgba(6,182,212,0.5)" : "rgba(100,116,139,0.3)"}`
	});
	return /* @__PURE__ */ jsxs("section", {
		id: "contact",
		className: "py-24",
		children: [/* @__PURE__ */ jsxs(motion.div, {
			initial: {
				opacity: 0,
				y: 30
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			transition: { duration: .6 },
			viewport: { once: true },
			className: "text-center mb-16",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "lotus-line justify-center mb-4",
					children: /* @__PURE__ */ jsx("span", {
						className: "text-cyan-400 font-semibold tracking-widest text-sm uppercase",
						children: "Let's Connect"
					})
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "text-4xl md:text-5xl font-bold mb-4",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-white",
						children: "Get In "
					}), /* @__PURE__ */ jsx("span", {
						className: "water-text font-display",
						children: "Touch"
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-slate-400 max-w-xl mx-auto text-base",
					children: "Like a river finds its path, opportunities flow when we connect. Reach out! 🌊"
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 lg:grid-cols-2 gap-10",
			children: [/* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					x: -30
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				transition: { duration: .6 },
				viewport: { once: true },
				className: "space-y-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "glass-card rounded-2xl p-7 space-y-6",
						children: [
							/* @__PURE__ */ jsx("h3", {
								className: "text-xl font-bold text-white",
								children: "Let's build something amazing"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-slate-400 text-sm leading-relaxed",
								children: "Whether it's about AI security, full-stack development, or an exciting collaboration — I'm always open to great conversations."
							}),
							[
								{
									icon: /* @__PURE__ */ jsx(Mail, { size: 18 }),
									label: "Email",
									value: "jhanvijain052003@gmail.com",
									href: "mailto:jhanvijain052003@gmail.com"
								},
								{
									icon: /* @__PURE__ */ jsx(Phone, { size: 18 }),
									label: "Phone",
									value: "+91 9910007140",
									href: "tel:+919910007140"
								},
								{
									icon: /* @__PURE__ */ jsx(MapPin, { size: 18 }),
									label: "Location",
									value: "India",
									href: null
								}
							].map((item, i) => /* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									y: 10
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								transition: { delay: i * .1 },
								viewport: { once: true },
								className: "flex items-center gap-4 group",
								children: [/* @__PURE__ */ jsx("div", {
									className: "w-10 h-10 rounded-xl flex items-center justify-center text-cyan-400 flex-shrink-0 transition-all duration-300 group-hover:scale-110",
									style: {
										background: "rgba(6,182,212,0.1)",
										border: "1px solid rgba(6,182,212,0.2)"
									},
									children: item.icon
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "text-xs text-slate-500 mb-0.5",
									children: item.label
								}), item.href ? /* @__PURE__ */ jsx("a", {
									href: item.href,
									className: "text-sm text-slate-200 hover:text-cyan-300 transition-colors duration-200",
									children: item.value
								}) : /* @__PURE__ */ jsx("p", {
									className: "text-sm text-slate-200",
									children: item.value
								})] })]
							}, i))
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "glass-card rounded-2xl p-6",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-xs font-semibold tracking-widest uppercase text-slate-500 mb-4",
							children: "Find me on"
						}), /* @__PURE__ */ jsx("div", {
							className: "flex gap-3",
							children: [
								{
									icon: /* @__PURE__ */ jsx(Github, { size: 18 }),
									href: "https://github.com/jhxnvii",
									label: "GitHub",
									color: "hover:border-slate-400/50 hover:text-slate-200"
								},
								{
									icon: /* @__PURE__ */ jsx(Linkedin, { size: 18 }),
									href: "https://linkedin.com/in/jhanvi-jain-40394823b/",
									label: "LinkedIn",
									color: "hover:border-blue-500/50 hover:text-blue-400"
								},
								{
									icon: /* @__PURE__ */ jsx(Twitter, { size: 18 }),
									href: "https://x.com/Jhxnvii_e",
									label: "X / Twitter",
									color: "hover:border-sky-500/50 hover:text-sky-400"
								},
								{
									icon: /* @__PURE__ */ jsx(Mail, { size: 18 }),
									href: "mailto:jhanvijain052003@gmail.com",
									label: "Email",
									color: "hover:border-cyan-500/50 hover:text-cyan-300"
								}
							].map((s) => /* @__PURE__ */ jsx(motion.a, {
								href: s.href,
								target: s.href.startsWith("http") ? "_blank" : void 0,
								rel: "noopener noreferrer",
								whileHover: {
									y: -4,
									scale: 1.1
								},
								whileTap: { scale: .95 },
								title: s.label,
								className: `w-11 h-11 rounded-xl flex items-center justify-center text-slate-400 transition-all duration-300 ${s.color}`,
								style: {
									background: "rgba(6,182,212,0.06)",
									border: "1px solid rgba(100,116,139,0.25)"
								},
								children: s.icon
							}, s.label))
						})]
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						whileHover: { scale: 1.02 },
						className: "glass-card rounded-2xl p-5 flex items-center gap-4",
						children: [/* @__PURE__ */ jsx("div", {
							className: "w-3 h-3 rounded-full bg-emerald-400 animate-pulse flex-shrink-0",
							style: { boxShadow: "0 0 10px rgba(52,211,153,0.6)" }
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-sm font-semibold text-white",
							children: "Open to Collaborations"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-slate-400 mt-0.5",
							children: "Currently at EY India — open to exciting side projects & speaking opportunities"
						})] })]
					})
				]
			}), /* @__PURE__ */ jsx(motion.div, {
				initial: {
					opacity: 0,
					x: 30
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				transition: { duration: .6 },
				viewport: { once: true },
				children: /* @__PURE__ */ jsxs("div", {
					className: "glass-card rounded-2xl p-7",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-xl font-bold text-white mb-6",
						children: "Send me a message"
					}), /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSubmit,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									className: "block text-xs font-medium text-slate-400 mb-1.5",
									children: "Your Name"
								}), /* @__PURE__ */ jsx("input", {
									type: "text",
									id: "name",
									name: "name",
									value: formData.name,
									onChange: handleChange,
									onFocus: () => setFocusedField("name"),
									onBlur: () => setFocusedField(null),
									required: true,
									placeholder: "Jhanvi Jain",
									className: inputClass("name"),
									style: inputStyle("name")
								})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									className: "block text-xs font-medium text-slate-400 mb-1.5",
									children: "Your Email"
								}), /* @__PURE__ */ jsx("input", {
									type: "email",
									id: "email",
									name: "email",
									value: formData.email,
									onChange: handleChange,
									onFocus: () => setFocusedField("email"),
									onBlur: () => setFocusedField(null),
									required: true,
									placeholder: "hello@example.com",
									className: inputClass("email"),
									style: inputStyle("email")
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								className: "block text-xs font-medium text-slate-400 mb-1.5",
								children: "Subject"
							}), /* @__PURE__ */ jsx("input", {
								type: "text",
								id: "subject",
								name: "subject",
								value: formData.subject,
								onChange: handleChange,
								onFocus: () => setFocusedField("subject"),
								onBlur: () => setFocusedField(null),
								required: true,
								placeholder: "Let's collaborate!",
								className: inputClass("subject"),
								style: inputStyle("subject")
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								className: "block text-xs font-medium text-slate-400 mb-1.5",
								children: "Message"
							}), /* @__PURE__ */ jsx("textarea", {
								id: "message",
								name: "message",
								value: formData.message,
								onChange: handleChange,
								onFocus: () => setFocusedField("message"),
								onBlur: () => setFocusedField(null),
								required: true,
								rows: 5,
								placeholder: "Tell me about your project...",
								className: `${inputClass("message")} resize-none`,
								style: inputStyle("message")
							})] }),
							/* @__PURE__ */ jsx(motion.button, {
								type: "submit",
								disabled: isSubmitting,
								whileHover: {
									scale: isSubmitting ? 1 : 1.03,
									y: isSubmitting ? 0 : -2
								},
								whileTap: { scale: .98 },
								className: "w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 shimmer-btn",
								style: {
									background: isSubmitting ? "rgba(30,41,59,0.8)" : "linear-gradient(135deg, #0891b2, #0ea5e9, #38bdf8)",
									boxShadow: isSubmitting ? "none" : "0 0 30px rgba(6,182,212,0.35)",
									cursor: isSubmitting ? "not-allowed" : "pointer"
								},
								children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("svg", {
									className: "animate-spin w-4 h-4",
									fill: "none",
									viewBox: "0 0 24 24",
									children: [/* @__PURE__ */ jsx("circle", {
										className: "opacity-25",
										cx: "12",
										cy: "12",
										r: "10",
										stroke: "currentColor",
										strokeWidth: "4"
									}), /* @__PURE__ */ jsx("path", {
										className: "opacity-75",
										fill: "currentColor",
										d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
									})]
								}), "Sending..."] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Send, { size: 16 }), "Send Message"] })
							}),
							submitStatus === "success" && /* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									y: -10,
									scale: .95
								},
								animate: {
									opacity: 1,
									y: 0,
									scale: 1
								},
								className: "flex items-center gap-3 p-4 rounded-xl",
								style: {
									background: "rgba(52,211,153,0.1)",
									border: "1px solid rgba(52,211,153,0.3)"
								},
								children: [/* @__PURE__ */ jsx(CheckCircle, {
									size: 18,
									className: "text-emerald-400"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-sm text-emerald-300 font-medium",
									children: "Message sent! I'll get back to you soon 🌊"
								})]
							})
						]
					})]
				})
			})]
		})]
	});
};
//#endregion
//#region app/components/Footer.tsx
var quickLinks = [
	"Home",
	"Skills",
	"Projects",
	"Experience",
	"Contact"
];
var stats = [
	{
		label: "CGPA",
		value: "8.87",
		sub: "KIIT University"
	},
	{
		label: "Experience",
		value: "3+",
		sub: "Years"
	},
	{
		label: "Projects",
		value: "5+",
		sub: "Built"
	},
	{
		label: "Certifications",
		value: "14+",
		sub: "Earned"
	}
];
var techStack = [
	"Python",
	"LangChain",
	"React",
	"Flask",
	"AWS",
	"AutoGen",
	"MySQL",
	"Java"
];
var Footer = ({ darkMode }) => {
	const scrollToTop = () => window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ jsxs("footer", {
		className: "relative pt-16 pb-8 mt-10",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute top-0 left-0 right-0 h-px",
			style: { background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)" }
		}), /* @__PURE__ */ jsxs("div", {
			className: "container mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-2 space-y-5",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx(motion.div, {
										animate: { y: [
											0,
											-4,
											0
										] },
										transition: {
											repeat: Infinity,
											duration: 2.8,
											ease: "easeInOut"
										},
										className: "w-9 h-9",
										children: /* @__PURE__ */ jsxs("svg", {
											viewBox: "0 0 32 32",
											fill: "none",
											className: "w-full h-full",
											children: [
												/* @__PURE__ */ jsx("path", {
													d: "M16 4 C16 4, 6 16, 6 21 C6 26.5 10.5 30 16 30 C21.5 30 26 26.5 26 21 C26 16 16 4 16 4Z",
													fill: "url(#footerDropGrad)"
												}),
												/* @__PURE__ */ jsx("ellipse", {
													cx: "12",
													cy: "19",
													rx: "2.5",
													ry: "4",
													fill: "rgba(255,255,255,0.25)",
													transform: "rotate(-20 12 19)"
												}),
												/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
													id: "footerDropGrad",
													x1: "0",
													y1: "0",
													x2: "1",
													y2: "1",
													children: [/* @__PURE__ */ jsx("stop", {
														offset: "0%",
														stopColor: "#67e8f9"
													}), /* @__PURE__ */ jsx("stop", {
														offset: "100%",
														stopColor: "#0284c7"
													})]
												}) })
											]
										})
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
										className: "text-xl font-bold water-text-static",
										children: "Jhanvi Jain"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-xs text-slate-500",
										children: "like the River Ganga — ever-flowing"
									})] })]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-slate-400 leading-relaxed max-w-sm",
									children: "Full Stack Developer & AI Security Engineer building the future of intelligent security — one agentic workflow at a time."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsxs("a", {
										href: "mailto:jhanvijain052003@gmail.com",
										className: "flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300 transition-colors duration-200",
										children: [/* @__PURE__ */ jsx(Mail, {
											size: 14,
											className: "text-cyan-500"
										}), "jhanvijain052003@gmail.com"]
									}), /* @__PURE__ */ jsxs("p", {
										className: "flex items-center gap-2 text-sm text-slate-400",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-cyan-500 text-xs",
											children: "📍"
										}), "India"]
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "flex gap-2",
									children: [
										{
											icon: /* @__PURE__ */ jsx(Github, { size: 16 }),
											href: "https://github.com/jhxnvii",
											label: "GitHub"
										},
										{
											icon: /* @__PURE__ */ jsx(Linkedin, { size: 16 }),
											href: "https://linkedin.com/in/jhanvi-jain-40394823b/",
											label: "LinkedIn"
										},
										{
											icon: /* @__PURE__ */ jsx(Twitter, { size: 16 }),
											href: "https://x.com/Jhxnvii_e",
											label: "X"
										},
										{
											icon: /* @__PURE__ */ jsx(Mail, { size: 16 }),
											href: "mailto:jhanvijain052003@gmail.com",
											label: "Email"
										}
									].map((s) => /* @__PURE__ */ jsx(motion.a, {
										href: s.href,
										target: s.href.startsWith("http") ? "_blank" : void 0,
										rel: "noopener noreferrer",
										whileHover: {
											y: -4,
											scale: 1.12
										},
										whileTap: { scale: .9 },
										title: s.label,
										className: "w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-300 transition-all duration-300",
										style: {
											background: "rgba(6,182,212,0.07)",
											border: "1px solid rgba(6,182,212,0.15)"
										},
										children: s.icon
									}, s.label))
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "text-sm font-semibold text-white mb-4 tracking-wide",
							children: "Quick Links"
						}), /* @__PURE__ */ jsx("ul", {
							className: "space-y-2.5",
							children: quickLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(motion.a, {
								href: `#${link.toLowerCase()}`,
								whileHover: { x: 4 },
								className: "text-sm text-slate-400 hover:text-cyan-300 transition-all duration-200 flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-cyan-700" }), link]
							}) }, link))
						})] }),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 mb-4",
								children: [/* @__PURE__ */ jsx(Code, {
									size: 15,
									className: "text-cyan-400"
								}), /* @__PURE__ */ jsx("h4", {
									className: "text-sm font-semibold text-white tracking-wide",
									children: "Core Stack"
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-1.5",
								children: techStack.map((tech) => /* @__PURE__ */ jsx("span", {
									className: "px-2.5 py-1 rounded-full text-xs text-slate-300",
									style: {
										background: "rgba(6,182,212,0.08)",
										border: "1px solid rgba(6,182,212,0.15)"
									},
									children: tech
								}, tech))
							})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 mb-3",
								children: [/* @__PURE__ */ jsx(Coffee, {
									size: 15,
									className: "text-amber-400"
								}), /* @__PURE__ */ jsx("h4", {
									className: "text-sm font-semibold text-white tracking-wide",
									children: "Support My Work"
								})]
							}), /* @__PURE__ */ jsxs(motion.a, {
								href: "https://buymeacoffee.com/jhanvijain",
								target: "_blank",
								rel: "noopener noreferrer",
								whileHover: {
									scale: 1.05,
									y: -2
								},
								whileTap: { scale: .97 },
								className: "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white shimmer-btn",
								style: {
									background: "linear-gradient(135deg, #d97706, #f59e0b)",
									boxShadow: "0 4px 15px rgba(245,158,11,0.25)"
								},
								children: [/* @__PURE__ */ jsx(Coffee, { size: 14 }), "Buy me a coffee ☕"]
							})] })]
						})
					]
				}),
				/* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .5 },
					className: "glass-card rounded-2xl p-5 mb-10",
					style: { borderColor: "rgba(6,182,212,0.15)" },
					children: /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 md:grid-cols-4 gap-4",
						children: stats.map((stat, i) => /* @__PURE__ */ jsxs("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "text-3xl font-bold water-text-static",
									children: stat.value
								}),
								/* @__PURE__ */ jsx("div", {
									className: "text-xs text-slate-500 mt-0.5",
									children: stat.label
								}),
								/* @__PURE__ */ jsx("div", {
									className: "text-xs text-slate-600",
									children: stat.sub
								})
							]
						}, i))
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col md:flex-row items-center justify-between gap-4 pt-6",
					style: { borderTop: "1px solid rgba(6,182,212,0.1)" },
					children: [/* @__PURE__ */ jsxs(motion.p, {
						initial: { opacity: 0 },
						whileInView: { opacity: 1 },
						viewport: { once: true },
						className: "text-xs text-slate-600 text-center",
						children: [
							"© ",
							year,
							" Jhanvi Jain — All rights reserved. Made with",
							" ",
							/* @__PURE__ */ jsx(Heart, { className: "inline w-3 h-3 text-red-500" }),
							" ",
							"& a lot of ",
							/* @__PURE__ */ jsx("span", {
								className: "text-cyan-500",
								children: "💧"
							}),
							" in India."
						]
					}), /* @__PURE__ */ jsx(motion.button, {
						onClick: scrollToTop,
						whileHover: {
							y: -4,
							scale: 1.1
						},
						whileTap: { scale: .93 },
						className: "w-10 h-10 rounded-full flex items-center justify-center text-cyan-400 transition-all duration-300 glow-cyan",
						style: {
							background: "rgba(6,182,212,0.1)",
							border: "1px solid rgba(6,182,212,0.25)"
						},
						"aria-label": "Scroll to top",
						children: /* @__PURE__ */ jsx(ArrowUp, { size: 16 })
					})]
				})
			]
		})]
	});
};
//#endregion
//#region app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	meta: () => meta
});
function meta({}) {
	return [
		{ title: "Jhanvi Jain | Full Stack Developer & AI Security Engineer" },
		{
			name: "description",
			content: "Portfolio of Jhanvi Jain — Full Stack Developer, AI Security Engineer & Application Security Analyst at EY India."
		},
		{
			name: "keywords",
			content: "Jhanvi Jain, portfolio, AI Security, LangChain, Full Stack Developer, EY India, cybersecurity"
		},
		{
			property: "og:title",
			content: "Jhanvi Jain | Portfolio"
		},
		{
			property: "og:description",
			content: "Full Stack Developer & AI Security Engineer — building privacy-first AI systems."
		}
	];
}
var home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsxs("div", {
		className: "water-bg min-h-screen",
		children: [
			/* @__PURE__ */ jsx(Navbar, { darkMode: true }),
			/* @__PURE__ */ jsxs("main", {
				className: "container mx-auto px-6 relative z-10",
				children: [
					/* @__PURE__ */ jsx(Hero, { darkMode: true }),
					/* @__PURE__ */ jsx("div", { className: "section-wave" }),
					/* @__PURE__ */ jsx(Skills, { darkMode: true }),
					/* @__PURE__ */ jsx("div", { className: "section-wave" }),
					/* @__PURE__ */ jsx(Experience, { darkMode: true }),
					/* @__PURE__ */ jsx("div", { className: "section-wave" }),
					/* @__PURE__ */ jsx(Projects, { darkMode: true }),
					/* @__PURE__ */ jsx("div", { className: "section-wave" }),
					/* @__PURE__ */ jsx(Contact, { darkMode: true })
				]
			}),
			/* @__PURE__ */ jsx(Footer, { darkMode: true })
		]
	});
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-CC4OhF7H.js",
		"imports": ["/assets/jsx-runtime-BRzRlgEq.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-BeQfv_u9.js",
			"imports": ["/assets/jsx-runtime-BRzRlgEq.js", "/assets/Navbar-CGAjQGzv.js"],
			"css": ["/assets/root-ZSTSynym.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-DUa7Eqsr.js",
			"imports": ["/assets/jsx-runtime-BRzRlgEq.js", "/assets/Navbar-CGAjQGzv.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-b988a59d.js",
	"version": "b988a59d",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = {
	"unstable_optimizeDeps": false,
	"unstable_passThroughRequests": false,
	"unstable_subResourceIntegrity": false,
	"unstable_trailingSlashAwareDataRequests": false,
	"unstable_previewServerPrerendering": false,
	"v8_middleware": false,
	"v8_splitRouteModules": false,
	"v8_viteEnvironmentApi": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import React from "react";

const ParticlesBackground = () => {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		// await console.log(container);
	}, []);

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				fullScreen: {
					enable: false,
					zIndex: 1
				},
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: "push"
						},
						onHover: {
							enable: true,
							mode: "repulse"
						},
						resize: true
					},
					modes: {
						push: {
							quantity: 6
						},
						repulse: {
							distance: 200,
							duration: 0.4
						}
					}
				},
				particles: {
					color: {
						value: "#233554",
						opacity: 0.1
					},
  
					links: {
						color: "#112240",
						distance: 150,
						enable: true,
						opacity: 0.1,
						width: 1
					},
					collisions: {
						enable: false
					},
					move: {
						directions: "none",
						enable: true,
						outModes: {
							default: "bounce"
						},
						random: false,
						speed: 1.5,
						straight: false
					},
					number: {
						value: 50,
						density: {
							enable: true,
							area: 800
						}
					},
					opacity: {
						value: 0.8
					},
					shape: {
						type: "circle"
					},
					size: {
						value: { min: 1, max: 2 }
					}
				},
				detectRetina: true
			}}
		/>
	);
};

export default ParticlesBackground;
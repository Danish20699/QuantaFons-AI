import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface HyperspeedProps {
  effectOptions?: {
    length?: number;
    roadWidth?: number;
    islandWidth?: number;
    lanesPerRoad?: number;
    speed?: number;
    colors?: {
      roadColor?: string;
      background?: string;
      lines?: string;
      speedLines?: string;
    };
    intensity?: number;
  };
}

const Hyperspeed: React.FC<HyperspeedProps> = ({ effectOptions = {} }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const sceneRef = useRef<THREE.Scene>();
  const materialRef = useRef<THREE.ShaderMaterial>();
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1);

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: false,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Config
    const config = {
      length: effectOptions.length || 400,
      roadWidth: effectOptions.roadWidth || 10,
      islandWidth: effectOptions.islandWidth || 2,
      lanesPerRoad: effectOptions.lanesPerRoad || 4,
      speed: effectOptions.speed || 2.0,
      intensity: effectOptions.intensity || 0.6,
      colors: {
        background: effectOptions.colors?.background || '#000000',
        road: effectOptions.colors?.roadColor || '#080808',
        lines: effectOptions.colors?.lines || '#FFFFFF',
        speedLines: effectOptions.colors?.speedLines || '#87CEEB'
      }
    };

    // Shader material
    const material = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform float speed;
        uniform float length;
        uniform float roadWidth;
        uniform float islandWidth;
        uniform float intensity;
        uniform vec3 background;
        uniform vec3 roadColor;
        uniform vec3 linesColor;
        uniform vec3 speedLinesColor;
        uniform int lanesPerRoad;
        
        varying vec2 vUv;
        
        // Hash function for noise
        float hash(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }
        
        void main() {
          vec2 uv = vUv;
          vec2 center = vec2(0.5, 0.5);
          vec2 pos = uv - center;
          
          // Apply perspective scaling
          pos.y *= 2.0;
          
          // Road coordinates
          float totalWidth = roadWidth + islandWidth;
          float laneWidth = roadWidth / float(lanesPerRoad);
          pos.x *= totalWidth / roadWidth;
          
          // Speed effect
          float speedEffect = speed * intensity;
          
          // Create speed lines
          float speedLines = 0.0;
          for (int i = 0; i < 20; i++) {
            float freq = float(i + 1) * 0.5;
            float linePos = fract(pos.y * freq * 0.3 + time * speedEffect * 0.1);
            if (linePos < 0.02) {
              speedLines = max(speedLines, 1.0 - linePos * 50.0);
            }
          }
          
          // Road surface with perspective
          float perspective = 1.0 / (1.0 + abs(pos.y) * 0.3);
          float road = smoothstep(laneWidth * 0.45, laneWidth * 0.35, abs(pos.x) % (laneWidth * 2.0));
          
          // Lane divider lines
          float laneLines = 0.0;
          for (int i = 1; i < 4; i++) {
            float lineX = (float(i) - float(lanesPerRoad) * 0.5) * laneWidth;
            float line = smoothstep(0.02, 0.0, abs(pos.x - lineX));
            laneLines += line;
          }
          
          // Center dashed line
          float centerLine = 0.0;
          if (abs(pos.x) < laneWidth * 0.1) {
            float dash = step(0.6, fract((pos.y + time * speedEffect * 0.5) * 0.05));
            centerLine = 1.0 - dash;
          }
          
          // Moving car lights
          float carLights = 0.0;
          for (int i = 0; i < 8; i++) {
            float carOffset = float(i) * 0.125;
            float carY = fract(pos.y * 0.1 + carOffset + time * speedEffect * 0.2);
            float carX = (float(i) - 3.5) * laneWidth * 0.6;
            float dist = length(vec2(pos.x - carX, carY * 1.5 - 0.75));
            carLights += smoothstep(0.4, 0.0, dist) * 0.3;
          }
          
          // Combine effects
          vec3 color = background;
          color += road * roadColor * perspective;
          color += laneLines * linesColor * 0.3 * perspective;
          color += centerLine * linesColor * 0.8;
          color += speedLines * speedLinesColor * 0.4;
          color += carLights * vec3(1.0, 0.8, 0.4) * perspective;
          
          // Vignette effect
          float vignette = smoothstep(0.9, 0.4, length(pos));
          color *= vignette;
          
          // Fade at edges
          float edgeFade = smoothstep(0.7, 0.3, length(pos));
          color = mix(background, color, edgeFade);
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      uniforms: {
        time: { value: 0 },
        speed: { value: config.speed },
        length: { value: config.length },
        roadWidth: { value: config.roadWidth },
        islandWidth: { value: config.islandWidth },
        intensity: { value: config.intensity },
        background: { value: new THREE.Color(config.colors.background) },
        roadColor: { value: new THREE.Color(config.colors.road) },
        linesColor: { value: new THREE.Color(config.colors.lines) },
        speedLinesColor: { value: new THREE.Color(config.colors.speedLines) },
        lanesPerRoad: { value: config.lanesPerRoad },
      },
      transparent: true,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    materialRef.current = material;

    // Animation loop
    let startTime = Date.now();
    const animate = () => {
      const elapsed = (Date.now() - startTime) * 0.001;
      
      if (materialRef.current) {
        materialRef.current.uniforms.time.value = elapsed;
      }
      
      if (rendererRef.current && sceneRef.current) {
        rendererRef.current.render(sceneRef.current, camera);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (container && rendererRef.current) {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        rendererRef.current.setSize(newWidth, newHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (container.contains(rendererRef.current.domElement)) {
          container.removeChild(rendererRef.current.domElement);
        }
      }
      if (materialRef.current) {
        materialRef.current.dispose();
      }
      if (geometry) {
        geometry.dispose();
      }
    };
  }, [effectOptions]);

  return (
    <div 
      ref={containerRef} 
      className="hyperspeed-container"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    />
  );
};

export default Hyperspeed;

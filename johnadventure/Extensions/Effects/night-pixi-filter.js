var gdjs;(function(r){const n=GlobalPIXIModule.PIXI;class o extends n.Filter{constructor(){const t=void 0,i=["precision mediump float;","","varying vec2 vTextureCoord;","uniform sampler2D uSampler;","uniform float intensity;","uniform float opacity;","","void main(void)","{","   mat3 nightMatrix = mat3(-2.0 * intensity, -1.0 * intensity, 0, -1.0 * intensity, 0, 1.0 * intensity, 0, 1.0 * intensity, 2.0 * intensity);","   gl_FragColor = texture2D(uSampler, vTextureCoord);","   gl_FragColor.rgb = mix(gl_FragColor.rgb, nightMatrix * gl_FragColor.rgb, opacity);","}"].join(`
`),a={intensity:{type:"1f",value:1},opacity:{type:"1f",value:1}};super(t,i,a)}}r.NightPixiFilter=o,o.prototype.constructor=r.NightPixiFilter,r.PixiFiltersTools.registerFilterCreator("Night",{makePIXIFilter:function(e,t){return new r.NightPixiFilter},updatePreRender:function(e,t){},updateDoubleParameter:function(e,t,i){t!=="intensity"&&t!=="opacity"||(e.uniforms[t]=r.PixiFiltersTools.clampValue(i,0,1))},updateStringParameter:function(e,t,i){},updateBooleanParameter:function(e,t,i){}})})(gdjs||(gdjs={}));
//# sourceMappingURL=night-pixi-filter.js.map
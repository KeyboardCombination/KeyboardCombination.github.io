var gdjs;(function(i){const a=GlobalPIXIModule.PIXI;i.PixiFiltersTools.registerFilterCreator("Noise",{makePIXIFilter:function(e,t){return new a.filters.NoiseFilter},updatePreRender:function(e,t){},updateDoubleParameter:function(e,t,r){const n=e;t==="noise"&&(n.noise=i.PixiFiltersTools.clampValue(r,0,1))},updateStringParameter:function(e,t,r){},updateBooleanParameter:function(e,t,r){}})})(gdjs||(gdjs={}));
//# sourceMappingURL=noise-pixi-filter.js.map
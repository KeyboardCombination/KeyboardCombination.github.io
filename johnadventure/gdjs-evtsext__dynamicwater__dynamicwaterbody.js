
gdjs.evtsExt__DynamicWater__DynamicWaterBody = gdjs.evtsExt__DynamicWater__DynamicWaterBody || {};

/**
 * Behavior generated from Dynamic Water Body
 */
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody = class DynamicWaterBody extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Tension = behaviorData.Tension !== undefined ? behaviorData.Tension : Number("0.025") || 0;
    this._behaviorData.Dampening = behaviorData.Dampening !== undefined ? behaviorData.Dampening : Number("0.025") || 0;
    this._behaviorData.Spread = behaviorData.Spread !== undefined ? behaviorData.Spread : Number("0.1") || 0;
    this._behaviorData.Columns = behaviorData.Columns !== undefined ? behaviorData.Columns : Number("50") || 0;
    this._behaviorData.Thickness = behaviorData.Thickness !== undefined ? behaviorData.Thickness : Number("8") || 0;
    this._behaviorData.SurfaceColor = behaviorData.SurfaceColor !== undefined ? behaviorData.SurfaceColor : "107;165;233";
    this._behaviorData.SufaceOpacity = behaviorData.SufaceOpacity !== undefined ? behaviorData.SufaceOpacity : Number("100") || 0;
    this._behaviorData.BodyColor = behaviorData.BodyColor !== undefined ? behaviorData.BodyColor : "74;144;226";
    this._behaviorData.BodyOpacity = behaviorData.BodyOpacity !== undefined ? behaviorData.BodyOpacity : Number("100") || 0;
    this._behaviorData.SurfaceSize = behaviorData.SurfaceSize !== undefined ? behaviorData.SurfaceSize : Number("1") || 0;
    this._behaviorData.WavePeriod = behaviorData.WavePeriod !== undefined ? behaviorData.WavePeriod : Number("0.1") || 0;
    this._behaviorData.WaveMagnitude = behaviorData.WaveMagnitude !== undefined ? behaviorData.WaveMagnitude : Number("16") || 0;
    this._behaviorData.WaveLength = behaviorData.WaveLength !== undefined ? behaviorData.WaveLength : Number("0.5") || 0;
    this._behaviorData.WaveDirection = behaviorData.WaveDirection !== undefined ? behaviorData.WaveDirection : "Right";
    this._behaviorData.AutoWave = behaviorData.AutoWave !== undefined ? behaviorData.AutoWave : false;
    this._behaviorData.ColorOfColumns = behaviorData.ColorOfColumns !== undefined ? behaviorData.ColorOfColumns : "255;255;255";
    this._behaviorData.ShowColumns = behaviorData.ShowColumns !== undefined ? behaviorData.ShowColumns : false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Tension !== newBehaviorData.Tension)
      this._behaviorData.Tension = newBehaviorData.Tension;
    if (oldBehaviorData.Dampening !== newBehaviorData.Dampening)
      this._behaviorData.Dampening = newBehaviorData.Dampening;
    if (oldBehaviorData.Spread !== newBehaviorData.Spread)
      this._behaviorData.Spread = newBehaviorData.Spread;
    if (oldBehaviorData.Columns !== newBehaviorData.Columns)
      this._behaviorData.Columns = newBehaviorData.Columns;
    if (oldBehaviorData.Thickness !== newBehaviorData.Thickness)
      this._behaviorData.Thickness = newBehaviorData.Thickness;
    if (oldBehaviorData.SurfaceColor !== newBehaviorData.SurfaceColor)
      this._behaviorData.SurfaceColor = newBehaviorData.SurfaceColor;
    if (oldBehaviorData.SufaceOpacity !== newBehaviorData.SufaceOpacity)
      this._behaviorData.SufaceOpacity = newBehaviorData.SufaceOpacity;
    if (oldBehaviorData.BodyColor !== newBehaviorData.BodyColor)
      this._behaviorData.BodyColor = newBehaviorData.BodyColor;
    if (oldBehaviorData.BodyOpacity !== newBehaviorData.BodyOpacity)
      this._behaviorData.BodyOpacity = newBehaviorData.BodyOpacity;
    if (oldBehaviorData.SurfaceSize !== newBehaviorData.SurfaceSize)
      this._behaviorData.SurfaceSize = newBehaviorData.SurfaceSize;
    if (oldBehaviorData.WavePeriod !== newBehaviorData.WavePeriod)
      this._behaviorData.WavePeriod = newBehaviorData.WavePeriod;
    if (oldBehaviorData.WaveMagnitude !== newBehaviorData.WaveMagnitude)
      this._behaviorData.WaveMagnitude = newBehaviorData.WaveMagnitude;
    if (oldBehaviorData.WaveLength !== newBehaviorData.WaveLength)
      this._behaviorData.WaveLength = newBehaviorData.WaveLength;
    if (oldBehaviorData.WaveDirection !== newBehaviorData.WaveDirection)
      this._behaviorData.WaveDirection = newBehaviorData.WaveDirection;
    if (oldBehaviorData.AutoWave !== newBehaviorData.AutoWave)
      this._behaviorData.AutoWave = newBehaviorData.AutoWave;
    if (oldBehaviorData.ColorOfColumns !== newBehaviorData.ColorOfColumns)
      this._behaviorData.ColorOfColumns = newBehaviorData.ColorOfColumns;
    if (oldBehaviorData.ShowColumns !== newBehaviorData.ShowColumns)
      this._behaviorData.ShowColumns = newBehaviorData.ShowColumns;

    return true;
  }

  // Properties:
  
  _getTension() {
    return this._behaviorData.Tension !== undefined ? this._behaviorData.Tension : Number("0.025") || 0;
  }
  _setTension(newValue) {
    this._behaviorData.Tension = newValue;
  }
  _getDampening() {
    return this._behaviorData.Dampening !== undefined ? this._behaviorData.Dampening : Number("0.025") || 0;
  }
  _setDampening(newValue) {
    this._behaviorData.Dampening = newValue;
  }
  _getSpread() {
    return this._behaviorData.Spread !== undefined ? this._behaviorData.Spread : Number("0.1") || 0;
  }
  _setSpread(newValue) {
    this._behaviorData.Spread = newValue;
  }
  _getColumns() {
    return this._behaviorData.Columns !== undefined ? this._behaviorData.Columns : Number("50") || 0;
  }
  _setColumns(newValue) {
    this._behaviorData.Columns = newValue;
  }
  _getThickness() {
    return this._behaviorData.Thickness !== undefined ? this._behaviorData.Thickness : Number("8") || 0;
  }
  _setThickness(newValue) {
    this._behaviorData.Thickness = newValue;
  }
  _getSurfaceColor() {
    return this._behaviorData.SurfaceColor !== undefined ? this._behaviorData.SurfaceColor : "107;165;233";
  }
  _setSurfaceColor(newValue) {
    this._behaviorData.SurfaceColor = newValue;
  }
  _getSufaceOpacity() {
    return this._behaviorData.SufaceOpacity !== undefined ? this._behaviorData.SufaceOpacity : Number("100") || 0;
  }
  _setSufaceOpacity(newValue) {
    this._behaviorData.SufaceOpacity = newValue;
  }
  _getBodyColor() {
    return this._behaviorData.BodyColor !== undefined ? this._behaviorData.BodyColor : "74;144;226";
  }
  _setBodyColor(newValue) {
    this._behaviorData.BodyColor = newValue;
  }
  _getBodyOpacity() {
    return this._behaviorData.BodyOpacity !== undefined ? this._behaviorData.BodyOpacity : Number("100") || 0;
  }
  _setBodyOpacity(newValue) {
    this._behaviorData.BodyOpacity = newValue;
  }
  _getSurfaceSize() {
    return this._behaviorData.SurfaceSize !== undefined ? this._behaviorData.SurfaceSize : Number("1") || 0;
  }
  _setSurfaceSize(newValue) {
    this._behaviorData.SurfaceSize = newValue;
  }
  _getWavePeriod() {
    return this._behaviorData.WavePeriod !== undefined ? this._behaviorData.WavePeriod : Number("0.1") || 0;
  }
  _setWavePeriod(newValue) {
    this._behaviorData.WavePeriod = newValue;
  }
  _getWaveMagnitude() {
    return this._behaviorData.WaveMagnitude !== undefined ? this._behaviorData.WaveMagnitude : Number("16") || 0;
  }
  _setWaveMagnitude(newValue) {
    this._behaviorData.WaveMagnitude = newValue;
  }
  _getWaveLength() {
    return this._behaviorData.WaveLength !== undefined ? this._behaviorData.WaveLength : Number("0.5") || 0;
  }
  _setWaveLength(newValue) {
    this._behaviorData.WaveLength = newValue;
  }
  _getWaveDirection() {
    return this._behaviorData.WaveDirection !== undefined ? this._behaviorData.WaveDirection : "Right";
  }
  _setWaveDirection(newValue) {
    this._behaviorData.WaveDirection = newValue;
  }
  _getAutoWave() {
    return this._behaviorData.AutoWave !== undefined ? this._behaviorData.AutoWave : false;
  }
  _setAutoWave(newValue) {
    this._behaviorData.AutoWave = newValue;
  }
  _getColorOfColumns() {
    return this._behaviorData.ColorOfColumns !== undefined ? this._behaviorData.ColorOfColumns : "255;255;255";
  }
  _setColorOfColumns(newValue) {
    this._behaviorData.ColorOfColumns = newValue;
  }
  _getShowColumns() {
    return this._behaviorData.ShowColumns !== undefined ? this._behaviorData.ShowColumns : false;
  }
  _setShowColumns(newValue) {
    this._behaviorData.ShowColumns = newValue;
  }
}

/**
 * Shared data generated from Dynamic Water Body
 */
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.SharedData = class DynamicWaterBodySharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._DynamicWater_DynamicWaterBodySharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._DynamicWater_DynamicWaterBodySharedData = new gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.SharedData(
      initialData
    );
  }
  return instanceContainer._DynamicWater_DynamicWaterBodySharedData;
}

// Methods:
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.forEachIndex2 = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.forEachObjects2 = [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.forEachTemporary2 = null;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.forEachTotalCount2 = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects4= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3);


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__ID__")) == 0 ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3 */
{runtimeScene.getVariables().get("__SetID").getChild((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3[0].getName())).add(1);
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__ID__")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__SetID").getChild((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3[i].getName()))));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3);


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__DownID__"), true) ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__ID__")).add(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3[i].setVariableBoolean(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__DownID__"), false);
}
}}

}


};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__ID__")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__CheckDeleteID").getChild((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2[i].getName()))) ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__ID__")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__SetID").getChild((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2[i].getName()))) ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__DownID__"), true);
}
}}

}


{

/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1 */

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("__ID__")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__SetID").getChild((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1[i].getName()))) ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1[i].setVariableBoolean(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("__DownID__"), true);
}
}{runtimeScene.getVariables().get("__SetID").getChild((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1[0].getName())).sub(1);
}{runtimeScene.getVariables().get("__CheckDeleteID").getChild((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1[0].getName())).setNumber(0);
}}

}


};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1);
{runtimeScene.getVariables().get("__SetID").getChild((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1[0].getName())).setNumber(-(1));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1);

for(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.forEachIndex2 = 0;gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.forEachIndex2 < gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1.length;++gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.forEachIndex2) {
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.forEachTemporary2 = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1[gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.forEachIndex2];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2.push(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.forEachTemporary2);
if (true) {

{ //Subevents: 
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__CheckDeleteID").getChild((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1[0].getName()))) > 0;
}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex2 = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3 = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex4 = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex5 = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachObjects2 = [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachObjects3 = [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachObjects4 = [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachObjects5 = [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary2 = null;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary3 = null;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary4 = null;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary5 = null;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTotalCount2 = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTotalCount3 = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTotalCount4 = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTotalCount5 = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.repeatCount2 = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.repeatCount4 = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.repeatIndex2 = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.repeatIndex4 = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects6= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects2= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects5= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects6= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects2= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects6= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition3IsTrue_1 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDDrawWaterBodyObjects3Objects = Hashtable.newFrom({"DrawWaterBody": gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3});
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDColumnCollisionsObjects5Objects = Hashtable.newFrom({"ColumnCollisions": gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5});
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5);

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDColumnCollisionsObjects5Objects, (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[0].getAABBLeft()) + ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[0].getVariables()).get("__DW").getChild("init_id"))) * (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[0].getVariables()).get("__DynamicWater").getChild("ColumnWidth")))), (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[0].getAABBTop()), "");
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i].setSize((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[0].getVariables()).get("__DynamicWater").getChild("ColumnWidth"))), (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThickness()));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i].getVariables().get("__DW").getChild("index")).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[0].getVariables()).get("__DW").getChild("init_id"))));
}
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length !== 0 ? gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[0] : null), (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length !== 0 ? gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[0] : null));
}}

}


{


{
gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5);

{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[i].getVariables().get("__DW").getChild("init_id")).add(1);
}
}}

}


};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3 */

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.repeatCount4 = (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getColumns()) + 1;
for(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.repeatIndex4 = 0;gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.repeatIndex4 < gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.repeatCount4;++gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.repeatIndex4) {
gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4);


if (true)
{
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DW").getChild("init_id")))).getChild("TargetHeight")).setNumber((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getHeight()));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DW").getChild("init_id")))).getChild("Height")).setNumber((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getHeight()));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DW").getChild("init_id")))).getChild("Speed")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("LeftDeltas").getChild((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DW").getChild("init_id"))))).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("RightDeltas").getChild((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DW").getChild("init_id"))))).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DW").getChild("init_id")))).getChild("Speed")).setNumber(0);
}
}
{ //Subevents: 
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDDrawWaterBodyObjects3Objects = Hashtable.newFrom({"DrawWaterBody": gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3});
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDColumnCollisionsObjects2Objects = Hashtable.newFrom({"ColumnCollisions": gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects2});
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3.length = 0;

{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i].getVariables().get("__DynamicWater").getChild("ColumnWidth")).setNumber((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i].getWidth()) / (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getColumns()));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i].getVariables().get("__DW").getChild("init_id")).setNumber(0);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDDrawWaterBodyObjects3Objects, 0, 0, (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[0].getLayer()));
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3[i].setZOrder((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[0].getZOrder()));
}
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3.length !== 0 ? gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3[0] : null), (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[0] : null));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3);

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i].getVariables().get("__DW").getChild("init_id")) < (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getColumns()) + 1 ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.conditionTrue_1 = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(18339220);
}
}}
if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("DrawWaterBody"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3);

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDDrawWaterBodyObjects3Objects, (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3 */
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3[i].getVariables().get("__DW").getChild("ID")).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[0].getVariables()).get("__ID__"))));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("ColumnCollisions"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2);

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDColumnCollisionsObjects2Objects, (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2.length !== 0 ? gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects2 */
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects2[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects2[i].getVariables().get("__DW").getChild("ID")).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2[0].getVariables()).get("__ID__"))));
}
}}

}


};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("ColumnCollisions"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects2);
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects2[i].hide();
}
}}

}


};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDColumnCollisionsObjects3Objects = Hashtable.newFrom({"ColumnCollisions": gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3});
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


{
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3 */
{runtimeScene.getVariables().get("_Wave_count").add((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWavePeriod()));
}}

}


};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


{
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3 */
{runtimeScene.getVariables().get("_Wave_count").sub((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWavePeriod()));
}}

}


};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDColumnCollisionsObjects3Objects = Hashtable.newFrom({"ColumnCollisions": gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3});
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3);


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWaveDirection() == "Left" ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length = k;}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3);


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWaveDirection() == "Right" ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length = k;}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("ColumnCollisions"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects2);

for(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3 = 0;gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3 < gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects2.length;++gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3) {
gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3);

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3.length = 0;


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary3 = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects2[gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3.push(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary3);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDColumnCollisionsObjects3Objects, (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3[0].getVariables()).get("__DW").getChild("index")))).getChild("TargetHeight")).setNumber((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i].getHeight()) + (Math.sin(((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3[0].getVariables()).get("__DW").getChild("index"))) * (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWaveLength())) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("_Wave_count"))) * (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWaveMagnitude())));
}
}}
}

}


};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDColumnCollisionsObjects3Objects = Hashtable.newFrom({"ColumnCollisions": gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3});
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4);

gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("Displacement")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getVariables()).get("__DW").getChild("index")))).getChild("TargetHeight"))) - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getVariables()).get("__DW").getChild("index")))).getChild("Height"))));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getVariables()).get("__DW").getChild("index")))).getChild("Speed")).add(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTension()) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("Displacement")))) - ((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDampening()) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getVariables()).get("__DW").getChild("index")))).getChild("Speed")))));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getVariables()).get("__DW").getChild("index")))).getChild("Height")).add((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getVariables()).get("__DW").getChild("index")))).getChild("Speed"))));
}
}}

}


{


{
gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4);

gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("X").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getVariables()).get("__DW").getChild("index"))))).setNumber((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getAABBLeft()) + ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getVariables()).get("__DW").getChild("index"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("ColumnWidth")))));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("Y").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getVariables()).get("__DW").getChild("index"))))).setNumber((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getAABBTop()) + ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getVariables()).get("__DW").getChild("index")))).getChild("TargetHeight"))) - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getVariables()).get("__DW").getChild("index")))).getChild("Height")))));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].setX((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[0].getVariables()).get("__DynamicWater").getChild("X").getChild((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].getVariables().get("__DW").getChild("index")))))));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].setCenterYInScene((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[0].getVariables()).get("__DynamicWater").getChild("Y").getChild((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].getVariables().get("__DW").getChild("index")))))));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].setSize((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[0].getVariables()).get("__DynamicWater").getChild("ColumnWidth"))), (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThickness()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4);

gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4);


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].getVariables().get("__DW").getChild("index")) > (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getColumns()) ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length = k;}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4 */
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].variableRemoveAt(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("X"), (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getVariables()).get("__DW").getChild("index"))));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].variableRemoveAt(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("Y"), (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getVariables()).get("__DW").getChild("index"))));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].variableRemoveAt(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DynamicWater").getChild("Column"), (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getVariables()).get("__DW").getChild("index"))));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[i].getVariables().get("__DW").getChild("init_id")).sub(1);
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDColumnCollisionsObjects4Objects = Hashtable.newFrom({"ColumnCollisions": gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4});
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5);


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i].getVariables().get("__DW").getChild("index")) > 0 ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length = k;}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5 */
gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5);

{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[i].getVariables().get("__DynamicWater").getChild("LeftDeltas").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[0].getVariables()).get("__DW").getChild("index"))))).setNumber((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpread()) * ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[0].getVariables()).get("__DW").getChild("index")))).getChild("Height"))) - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[0].getVariables()).get("__DW").getChild("index"))) - 1).getChild("Height")))));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[0].getVariables()).get("__DW").getChild("index"))) - 1).getChild("Speed")).add((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[i].getVariables().get("__DynamicWater").getChild("LeftDeltas").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[0].getVariables()).get("__DW").getChild("index")))))));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5);

gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5);


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i].getVariables().get("__DW").getChild("index")) < (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getColumns()) ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length = k;}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5 */
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[i].getVariables().get("__DynamicWater").getChild("RightDeltas").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[0].getVariables()).get("__DW").getChild("index"))))).setNumber((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpread()) * ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[0].getVariables()).get("__DW").getChild("index")))).getChild("Height"))) - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[0].getVariables()).get("__DW").getChild("index"))) + 1).getChild("Height")))));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[0].getVariables()).get("__DW").getChild("index"))) + 1).getChild("Speed")).add((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[i].getVariables().get("__DynamicWater").getChild("RightDeltas").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[0].getVariables()).get("__DW").getChild("index")))))));
}
}}

}


};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ColumnCollisions"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3);

for(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex4 = 0;gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex4 < gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3.length;++gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex4) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length = 0;


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary4 = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3[gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex4];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.push(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary4);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDColumnCollisionsObjects4Objects, (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length !== 0 ? gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val) {

{ //Subevents: 
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList10(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2[i].getVariables().get("__DynamicWater").getChild("ColumnWidth")).setNumber((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2[i].getWidth()) / (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getColumns()));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2[i].hide();
}
}
{ //Subevents
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("ColumnCollisions"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects2);

for(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3 = 0;gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3 < gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects2.length;++gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3.length = 0;


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary3 = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects2[gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3.push(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary3);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDColumnCollisionsObjects3Objects, (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3[0].getVariables()).get("__DW").getChild("index")))).getChild("TargetHeight")).setNumber((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[i].getHeight()));
}
}}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2);

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAutoWave() ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("ColumnCollisions"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects2);

for(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3 = 0;gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3 < gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects2.length;++gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3.length = 0;


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary3 = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects2[gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3.push(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary3);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDColumnCollisionsObjects3Objects, (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val) {

{ //Subevents: 
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList9(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.repeatCount2 = 4;
for(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.repeatIndex2 = 0;gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.repeatIndex2 < gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.repeatCount2;++gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.repeatIndex2) {

if (true)
{

{ //Subevents: 
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList11(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList12(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDDrawWaterBodyObjects3Objects = Hashtable.newFrom({"DrawWaterBody": gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3});
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList14 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ColumnCollisions"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4);
gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4);


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].getVariables().get("__DW").getChild("ID")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4[0].getVariables()).get("__DW").getChild("ID"))) ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length = k;}if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].getVariables().get("__DW").getChild("index")) == 0 ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length = k;}}
if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4 */
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4 */
gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4[i].beginFillPath((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getPointX("")), (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[0].getAABBBottom()));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4[i].drawPathLineTo((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getPointX("")), (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getCenterYInScene()));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("ColumnCollisions"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4);

for(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex5 = 0;gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex5 < gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length;++gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex5) {
gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects5);

gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5);

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length = 0;


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary5 = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex5];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.push(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary5);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i].getVariables().get("__DW").getChild("ID")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects5[0].getVariables()).get("__DW").getChild("ID"))) ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length = k;}if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i].getVariables().get("__DW").getChild("index")) > 0 ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length = k;}if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i].getVariables().get("__DW").getChild("index")) <= (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getColumns()) ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition2IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length = k;}}
}
if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition2IsTrue_0.val) {
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects5[i].drawPathLineTo((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[0].getPointX("")), (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[0].getCenterYInScene()));
}
}}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("ColumnCollisions"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4);
gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4);

gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4);


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].getVariables().get("__DW").getChild("ID")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4[0].getVariables()).get("__DW").getChild("ID"))) ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length = k;}if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].getVariables().get("__DW").getChild("index")) == (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getColumns()) ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length = k;}}
if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4 */
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4 */
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4[i].drawPathLineTo((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getPointX("")), (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4[i].drawPathLineTo((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getPointX("")), (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[0].getAABBBottom()));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4[i].closePath();
}
}}

}


{


{
gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4);

gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4[i].setFillOpacity((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBodyOpacity()));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4[i].setFillColor((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length === 0 ) ? "" :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBodyColor()));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4[i].setOutlineSize(0);
}
}}

}


};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDDrawWaterBodyObjects3Objects = Hashtable.newFrom({"DrawWaterBody": gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3});
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList16 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList17 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ColumnCollisions"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4);

for(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex5 = 0;gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex5 < gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length;++gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex5) {
gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects5);

gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5);

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length = 0;


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary5 = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex5];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.push(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary5);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i].getVariables().get("__DW").getChild("ID")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects5[0].getVariables()).get("__DW").getChild("ID"))) ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length = k;}if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i].getVariables().get("__DW").getChild("index")) >= 0 ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length = k;}if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i].getVariables().get("__DW").getChild("index")) < (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getColumns()) ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition2IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length = k;}}
}
if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition2IsTrue_0.val) {
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects5[i].drawLineV2((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[0].getPointX("")), (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[0].getCenterYInScene()), (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[0].getVariables()).get("__DynamicWater").getChild("X").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[0].getVariables()).get("__DW").getChild("index"))) + 1))), (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[0].getVariables()).get("__DynamicWater").getChild("Y").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5[0].getVariables()).get("__DW").getChild("index"))) + 1))), (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSurfaceSize()));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects5[i].setOutlineColor((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length === 0 ) ? "" :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSurfaceColor()));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects5[i].setOutlineOpacity((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSufaceOpacity()));
}
}}
}

}


};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDDrawWaterBodyObjects2Objects = Hashtable.newFrom({"DrawWaterBody": gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects2});
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList18 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList19 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ColumnCollisions"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3);

for(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex4 = 0;gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex4 < gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3.length;++gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex4) {
gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects2, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4);

gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4);

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length = 0;


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary4 = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3[gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex4];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.push(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary4);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].getVariables().get("__DW").getChild("ID")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4[0].getVariables()).get("__DW").getChild("ID"))) ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length = k;}if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].getVariables().get("__DW").getChild("index")) >= 0 ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length = k;}if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].getVariableNumber(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i].getVariables().get("__DW").getChild("index")) < (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getColumns()) ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition2IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length = k;}}
}
if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition2IsTrue_0.val) {
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4[i].drawRectangle((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getPointX("")), (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getCenterYInScene()), (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4[0].getAABBRight()), (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[0].getAABBBottom()));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4[i].setOutlineColor((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length === 0 ) ? "" :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getColorOfColumns()));
}
}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4[i].setOutlineSize(1);
}
}}
}

}


};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList20 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("DrawWaterBody"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects2);

for(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3 = 0;gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3 < gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects2.length;++gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3.length = 0;


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary3 = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects2[gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3.push(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary3);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDDrawWaterBodyObjects3Objects, (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val) {

{ //Subevents: 
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList15(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("DrawWaterBody"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects2);

for(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3 = 0;gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3 < gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects2.length;++gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3.length = 0;


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary3 = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects2[gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex3];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3.push(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary3);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDDrawWaterBodyObjects3Objects, (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val) {

{ //Subevents: 
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList17(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("DrawWaterBody"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects1);

for(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex2 = 0;gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex2 < gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects1.length;++gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex2) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects2.length = 0;


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary2 = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects1[gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachIndex2];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects2.push(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.forEachTemporary2);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46WaterBodyAndCollisionContext_46GDDrawWaterBodyObjects2Objects, (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2.length !== 0 ? gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShowColumns() ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.condition1IsTrue_0.val) {

{ //Subevents: 
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList19(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList21 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList13(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList20(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollision = function(DrawWaterBody, ColumnCollisions, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "DrawWaterBody": DrawWaterBody
, "ColumnCollisions": ColumnCollisions
},
  _objectArraysMap: {
"Object": thisObjectList
, "DrawWaterBody": gdjs.objectsListsToArray(DrawWaterBody)
, "ColumnCollisions": gdjs.objectsListsToArray(ColumnCollisions)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects5.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDObjectObjects6.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects2.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects3.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects4.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects5.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDDrawWaterBodyObjects6.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects2.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects3.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects4.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects5.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.GDColumnCollisionsObjects6.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.WaterBodyAndCollisionContext.eventsList21(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.forEachIndex2 = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.forEachObjects2 = [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.forEachTemporary2 = null;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.forEachTotalCount2 = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDObjectObjects2= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDObjectObjects3= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDObjectObjects4= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects2= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects3= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects4= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46AddForceContext_46GDColumnCollisionsObjects2Objects = Hashtable.newFrom({"ColumnCollisions": gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects2});
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects2, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects3);


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects3[i].getVariableBoolean(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects3[i].getVariables().get("__DynamicWater").getChild("CollisionCheck"), true) ) {
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects3[k] = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects3.length = k;}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects3 */
gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDObjectObjects2, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDObjectObjects3[i].getVariables().get("__DynamicWater").getChild("Column").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects3[0].getVariables()).get("__DW").getChild("index")))).getChild("Speed")).add((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ForceApply")) || 0 : 0));
}
}}

}


};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ColumnCollisions"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects1);

for(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.forEachIndex2 = 0;gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.forEachIndex2 < gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects1.length;++gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.forEachIndex2) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDObjectObjects2);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects2.length = 0;


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.forEachTemporary2 = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects1[gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.forEachIndex2];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects2.push(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.forEachTemporary2);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.condition0IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46AddForceContext_46GDColumnCollisionsObjects2Objects, (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDObjectObjects2.length !== 0 ? gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDObjectObjects2[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.condition0IsTrue_0.val) {

{ //Subevents: 
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForce = function(ForceApply, ColumnCollisions, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ColumnCollisions": ColumnCollisions
},
  _objectArraysMap: {
"Object": thisObjectList
, "ColumnCollisions": gdjs.objectsListsToArray(ColumnCollisions)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "ForceApply") return ForceApply;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects2.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects3.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.GDColumnCollisionsObjects4.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.AddForceContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.forEachIndex2 = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.forEachObjects2 = [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.forEachTemporary2 = null;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.forEachTotalCount2 = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObjectObjects2= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObjectObjects3= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObjectObjects4= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObject1Objects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObject1Objects2= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObject1Objects3= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObject1Objects4= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects2= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects3= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects4= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46CheckSurfaceCollisionsContext_46GDColumnCollisionsObjects2Objects = Hashtable.newFrom({"ColumnCollisions": gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects2});
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46CheckSurfaceCollisionsContext_46GDObject1Objects3Objects = Hashtable.newFrom({"Object1": gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObject1Objects3});
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46CheckSurfaceCollisionsContext_46GDColumnCollisionsObjects3Objects = Hashtable.newFrom({"ColumnCollisions": gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects3});
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects2, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects3);

{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects3[i].setVariableBoolean(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects3[i].getVariables().get("__DynamicWater").getChild("CollisionCheck"), false);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects2, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects3);

gdjs.copyArray(eventsFunctionContext.getObjects("Object1"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObject1Objects3);

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46CheckSurfaceCollisionsContext_46GDObject1Objects3Objects, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46CheckSurfaceCollisionsContext_46GDColumnCollisionsObjects3Objects, false, runtimeScene, false);
}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects3 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects3[i].setVariableBoolean(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects3[i].getVariables().get("__DynamicWater").getChild("CollisionCheck"), true);
}
}}

}


};gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ColumnCollisions"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects1);

for(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.forEachIndex2 = 0;gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.forEachIndex2 < gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects1.length;++gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.forEachIndex2) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObjectObjects2);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects2.length = 0;


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.forEachTemporary2 = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects1[gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.forEachIndex2];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects2.push(gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.forEachTemporary2);
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.condition0IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.mapOfGDgdjs_46evtsExt_95_95DynamicWater_95_95DynamicWaterBody_46DynamicWaterBody_46prototype_46CheckSurfaceCollisionsContext_46GDColumnCollisionsObjects2Objects, (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObjectObjects2.length !== 0 ? gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObjectObjects2[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.condition0IsTrue_0.val) {

{ //Subevents: 
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisions = function(Object1, ColumnCollisions, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Object1": Object1
, "ColumnCollisions": ColumnCollisions
},
  _objectArraysMap: {
"Object": thisObjectList
, "Object1": gdjs.objectsListsToArray(Object1)
, "ColumnCollisions": gdjs.objectsListsToArray(ColumnCollisions)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObject1Objects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObject1Objects2.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObject1Objects3.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDObject1Objects4.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects2.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects3.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.GDColumnCollisionsObjects4.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.CheckSurfaceCollisionsContext.eventsList1(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.DampingContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.DampingContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.DampingContext.GDObjectObjects2= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.DampingContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.DampingContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.DampingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.DampingContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.DampingContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.DampingContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDampening()); }}}

}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.Damping = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.DampingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.DampingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.DampingContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SpreadContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SpreadContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SpreadContext.GDObjectObjects2= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SpreadContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SpreadContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SpreadContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SpreadContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SpreadContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SpreadContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpread()); }}}

}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.Spread = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SpreadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SpreadContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SpreadContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.TensionContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.TensionContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.TensionContext.GDObjectObjects2= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.TensionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.TensionContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.TensionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.TensionContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.TensionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.TensionContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTension()); }}}

}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.Tension = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.TensionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.TensionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.TensionContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SurfaceSizeContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SurfaceSizeContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SurfaceSizeContext.GDObjectObjects2= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SurfaceSizeContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SurfaceSizeContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SurfaceSizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SurfaceSizeContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SurfaceSizeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SurfaceSizeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSurfaceSize()); }}}

}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SurfaceSize = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SurfaceSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SurfaceSizeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SurfaceSizeContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.ColumnNumberContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.ColumnNumberContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.ColumnNumberContext.GDObjectObjects2= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.ColumnNumberContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.ColumnNumberContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.ColumnNumberContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.ColumnNumberContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.ColumnNumberContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.ColumnNumberContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getColumns()); }}}

}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.ColumnNumber = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.ColumnNumberContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.ColumnNumberContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.ColumnNumberContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.GDObjectObjects2= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAutoWave(false);
}
}}

}


{


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.conditionTrue_1 = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.condition0IsTrue_0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("NewValue") : false);
}
}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAutoWave(true);
}
}}

}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWave = function(NewValue, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "NewValue") return NewValue;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetAutoWaveContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.GDObjectObjects2= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShowColumns(false);
}
}}

}


{


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.conditionTrue_1 = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.condition0IsTrue_0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("NewValue") : false);
}
}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShowColumns(true);
}
}}

}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumn = function(NewValue, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "NewValue") return NewValue;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveLengthContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveLengthContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveLengthContext.GDObjectObjects2= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveLengthContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveLengthContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveLengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveLengthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveLengthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveLengthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWaveLength((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("NewValue")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveLength = function(NewValue, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "NewValue") return NewValue;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveLengthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveLengthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveLengthContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetPeriodContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetPeriodContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetPeriodContext.GDObjectObjects2= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetPeriodContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetPeriodContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetPeriodContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetPeriodContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetPeriodContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetPeriodContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWavePeriod((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("NewValue")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetPeriod = function(NewValue, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "NewValue") return NewValue;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetPeriodContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetPeriodContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetPeriodContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveMagnitudeContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveMagnitudeContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveMagnitudeContext.GDObjectObjects2= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveMagnitudeContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveMagnitudeContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveMagnitudeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveMagnitudeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveMagnitudeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveMagnitudeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWaveMagnitude((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("NewValue")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveMagnitude = function(NewValue, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "NewValue") return NewValue;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveMagnitudeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveMagnitudeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveMagnitudeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSurfaceSizeContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSurfaceSizeContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSurfaceSizeContext.GDObjectObjects2= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSurfaceSizeContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSurfaceSizeContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSurfaceSizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSurfaceSizeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSurfaceSizeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSurfaceSizeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSurfaceSize((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("NewValue")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSurfaceSize = function(NewValue, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "NewValue") return NewValue;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSurfaceSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSurfaceSizeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSurfaceSizeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnNumberContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnNumberContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnNumberContext.GDObjectObjects2= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnNumberContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnNumberContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnNumberContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnNumberContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnNumberContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnNumberContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setColumns((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("NewValue")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnNumber = function(NewValue, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "NewValue") return NewValue;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnNumberContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnNumberContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetColumnNumberContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSpreadContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSpreadContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSpreadContext.GDObjectObjects2= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSpreadContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSpreadContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSpreadContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSpreadContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSpreadContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSpreadContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpread((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("NewValue")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSpread = function(NewValue, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "NewValue") return NewValue;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSpreadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSpreadContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetSpreadContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetDampingContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetDampingContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetDampingContext.GDObjectObjects2= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetDampingContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetDampingContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetDampingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetDampingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetDampingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetDampingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDampening((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("NewValue")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetDamping = function(NewValue, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "NewValue") return NewValue;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetDampingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetDampingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetDampingContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetTensionContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetTensionContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetTensionContext.GDObjectObjects2= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetTensionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetTensionContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetTensionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetTensionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetTensionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetTensionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTension((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("NewValue")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetTension = function(NewValue, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "NewValue") return NewValue;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetTensionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetTensionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetTensionContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveDirectionContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveDirectionContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveDirectionContext.GDObjectObjects2= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveDirectionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveDirectionContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveDirectionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveDirectionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWaveDirection((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("NewValue") : ""));
}
}}

}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveDirection = function(NewValue, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "NewValue") return NewValue;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveDirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveDirectionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.SetWaveDirectionContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext = {};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.GDObjectObjects2= [];

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.conditionTrue_1 = gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.condition0IsTrue_0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(18400956);
}
}if (gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.GDObjectObjects1);
{runtimeScene.getVariables().get("__CheckDeleteID").getChild((( gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.GDObjectObjects1[0].getName())).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.GDObjectObjects1[0].getVariables()).get("__ID__"))));
}}

}


};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("DynamicWater::DynamicWaterBody", gdjs.evtsExt__DynamicWater__DynamicWaterBody.DynamicWaterBody);

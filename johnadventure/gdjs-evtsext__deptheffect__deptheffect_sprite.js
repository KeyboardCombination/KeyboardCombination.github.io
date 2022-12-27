
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite = gdjs.evtsExt__DepthEffect__DepthEffect_Sprite || {};

/**
 * Behavior generated from Depth effect
 */
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite = class DepthEffect_Sprite extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.MaxScale = behaviorData.MaxScale !== undefined ? behaviorData.MaxScale : Number("1") || 0;
    this._behaviorData.HorizonY = behaviorData.HorizonY !== undefined ? behaviorData.HorizonY : Number("0") || 0;
    this._behaviorData.PowerY = behaviorData.PowerY !== undefined ? behaviorData.PowerY : Number("2") || 0;
    this._behaviorData.PercentAwayFromHorizon = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.MaxScale !== newBehaviorData.MaxScale)
      this._behaviorData.MaxScale = newBehaviorData.MaxScale;
    if (oldBehaviorData.HorizonY !== newBehaviorData.HorizonY)
      this._behaviorData.HorizonY = newBehaviorData.HorizonY;
    if (oldBehaviorData.PowerY !== newBehaviorData.PowerY)
      this._behaviorData.PowerY = newBehaviorData.PowerY;
    if (oldBehaviorData.PercentAwayFromHorizon !== newBehaviorData.PercentAwayFromHorizon)
      this._behaviorData.PercentAwayFromHorizon = newBehaviorData.PercentAwayFromHorizon;

    return true;
  }

  // Properties:
  
  _getMaxScale() {
    return this._behaviorData.MaxScale !== undefined ? this._behaviorData.MaxScale : Number("1") || 0;
  }
  _setMaxScale(newValue) {
    this._behaviorData.MaxScale = newValue;
  }
  _getHorizonY() {
    return this._behaviorData.HorizonY !== undefined ? this._behaviorData.HorizonY : Number("0") || 0;
  }
  _setHorizonY(newValue) {
    this._behaviorData.HorizonY = newValue;
  }
  _getPowerY() {
    return this._behaviorData.PowerY !== undefined ? this._behaviorData.PowerY : Number("2") || 0;
  }
  _setPowerY(newValue) {
    this._behaviorData.PowerY = newValue;
  }
  _getPercentAwayFromHorizon() {
    return this._behaviorData.PercentAwayFromHorizon !== undefined ? this._behaviorData.PercentAwayFromHorizon : Number("") || 0;
  }
  _setPercentAwayFromHorizon(newValue) {
    this._behaviorData.PercentAwayFromHorizon = newValue;
  }
}

/**
 * Shared data generated from Depth effect
 */
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.SharedData = class DepthEffect_SpriteSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._DepthEffect_DepthEffect_SpriteSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._DepthEffect_DepthEffect_SpriteSharedData = new gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.SharedData(
      initialData
    );
  }
  return instanceContainer._DepthEffect_DepthEffect_SpriteSharedData;
}

// Methods:
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPercentAwayFromHorizon(Math.max(0, ((gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext.GDObjectObjects1[i].getPointY("")) - (gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizonY())) / (gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizonY()))));
}
}}

}


{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext.GDObjectObjects1[i].setScale(Math.pow((gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PercentAwayFromHorizon((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), Math.max(1, (gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ExponentY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))))) * (gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxScale()));
}
}}

}


};

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.PercentAwayFromHorizonContext = {};
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.PercentAwayFromHorizonContext.GDObjectObjects1= [];
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.PercentAwayFromHorizonContext.GDObjectObjects2= [];

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.PercentAwayFromHorizonContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.PercentAwayFromHorizonContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.PercentAwayFromHorizonContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.PercentAwayFromHorizonContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.PercentAwayFromHorizonContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.PercentAwayFromHorizonContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPercentAwayFromHorizon()); }}}

}


};

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.PercentAwayFromHorizon = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.PercentAwayFromHorizonContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.PercentAwayFromHorizonContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.PercentAwayFromHorizonContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.ExponentYContext = {};
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.ExponentYContext.GDObjectObjects1= [];
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.ExponentYContext.GDObjectObjects2= [];

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.ExponentYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.ExponentYContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.ExponentYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.ExponentYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.ExponentYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.ExponentYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPowerY()); }}}

}


};

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.ExponentY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.ExponentYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.ExponentYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.ExponentYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.MaxScaleContext = {};
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.MaxScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.MaxScaleContext.GDObjectObjects2= [];

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.MaxScaleContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.MaxScaleContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.MaxScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.MaxScaleContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.MaxScaleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.MaxScaleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxScale()); }}}

}


};

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.MaxScale = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.MaxScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.MaxScaleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.MaxScaleContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.HorizonYContext = {};
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.HorizonYContext.GDObjectObjects1= [];
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.HorizonYContext.GDObjectObjects2= [];

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.HorizonYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.HorizonYContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.HorizonYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.HorizonYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.HorizonYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.HorizonYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizonY()); }}}

}


};

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.HorizonY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.HorizonYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.HorizonYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.HorizonYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetMaxScaleContext = {};
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetMaxScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetMaxScaleContext.GDObjectObjects2= [];

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetMaxScaleContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetMaxScaleContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetMaxScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetMaxScaleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetMaxScaleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetMaxScaleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxScale((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetMaxScale = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetMaxScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetMaxScaleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetMaxScaleContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetExponentYContext = {};
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetExponentYContext.GDObjectObjects1= [];
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetExponentYContext.GDObjectObjects2= [];

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetExponentYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetExponentYContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetExponentYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetExponentYContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetExponentYContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetExponentYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPowerY((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetExponentY = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetExponentYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetExponentYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetExponentYContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetHorizonYContext = {};
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetHorizonYContext.GDObjectObjects1= [];
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetHorizonYContext.GDObjectObjects2= [];

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetHorizonYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetHorizonYContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetHorizonYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetHorizonYContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetHorizonYContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetHorizonYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHorizonY((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetHorizonY = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetHorizonYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetHorizonYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.SetHorizonYContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("DepthEffect::DepthEffect_Sprite", gdjs.evtsExt__DepthEffect__DepthEffect_Sprite.DepthEffect_Sprite);

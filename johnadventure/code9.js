gdjs.Untitled_32scene2Code = {};
gdjs.Untitled_32scene2Code.GDNewVideoObjects1= [];
gdjs.Untitled_32scene2Code.GDNewVideoObjects2= [];

gdjs.Untitled_32scene2Code.conditionTrue_0 = {val:false};
gdjs.Untitled_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32scene2Code.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32scene2Code.condition2IsTrue_0 = {val:false};


gdjs.Untitled_32scene2Code.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Untitled_32scene2Code.GDNewVideoObjects1);
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "OOPS You are died");
}{gdjs.evtTools.advancedWindow.flash(true, runtimeScene);
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i].play();
}
}}

}


{


gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Untitled_32scene2Code.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i].setCurrentTime(gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i].getCurrentTime() * (60));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Untitled_32scene2Code.GDNewVideoObjects1);

gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
gdjs.Untitled_32scene2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i].isEnded() ) {
        gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.Untitled_32scene2Code.GDNewVideoObjects1[k] = gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length = k;}if ( gdjs.Untitled_32scene2Code.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32scene2Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}}
if (gdjs.Untitled_32scene2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Untitled_32scene2Code.GDNewVideoObjects1);

gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
gdjs.Untitled_32scene2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i].isEnded() ) {
        gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.Untitled_32scene2Code.GDNewVideoObjects1[k] = gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length = k;}if ( gdjs.Untitled_32scene2Code.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32scene2Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
}}
if (gdjs.Untitled_32scene2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene4", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Untitled_32scene2Code.GDNewVideoObjects1);

gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
gdjs.Untitled_32scene2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i].isEnded() ) {
        gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.Untitled_32scene2Code.GDNewVideoObjects1[k] = gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length = k;}if ( gdjs.Untitled_32scene2Code.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32scene2Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
}}
if (gdjs.Untitled_32scene2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene422", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Untitled_32scene2Code.GDNewVideoObjects1);

gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
gdjs.Untitled_32scene2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i].isEnded() ) {
        gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.Untitled_32scene2Code.GDNewVideoObjects1[k] = gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length = k;}if ( gdjs.Untitled_32scene2Code.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32scene2Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 4;
}}
if (gdjs.Untitled_32scene2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene42", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Untitled_32scene2Code.GDNewVideoObjects1);

gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
gdjs.Untitled_32scene2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i].isEnded() ) {
        gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.Untitled_32scene2Code.GDNewVideoObjects1[k] = gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length = k;}if ( gdjs.Untitled_32scene2Code.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32scene2Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 5;
}}
if (gdjs.Untitled_32scene2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene423", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Untitled_32scene2Code.GDNewVideoObjects1);

gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
gdjs.Untitled_32scene2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i].isEnded() ) {
        gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.Untitled_32scene2Code.GDNewVideoObjects1[k] = gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length = k;}if ( gdjs.Untitled_32scene2Code.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32scene2Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 6;
}}
if (gdjs.Untitled_32scene2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene4232", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Untitled_32scene2Code.GDNewVideoObjects1);

gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
gdjs.Untitled_32scene2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i].isEnded() ) {
        gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.Untitled_32scene2Code.GDNewVideoObjects1[k] = gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length = k;}if ( gdjs.Untitled_32scene2Code.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32scene2Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 7;
}}
if (gdjs.Untitled_32scene2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene42322", true);
}}

}


};

gdjs.Untitled_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewVideoObjects2.length = 0;

gdjs.Untitled_32scene2Code.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32scene2Code'] = gdjs.Untitled_32scene2Code;

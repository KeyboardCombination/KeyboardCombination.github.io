gdjs.Irio_32DeathCode = {};
gdjs.Irio_32DeathCode.GDNewVideoObjects1= [];
gdjs.Irio_32DeathCode.GDNewVideoObjects2= [];

gdjs.Irio_32DeathCode.conditionTrue_0 = {val:false};
gdjs.Irio_32DeathCode.condition0IsTrue_0 = {val:false};
gdjs.Irio_32DeathCode.condition1IsTrue_0 = {val:false};


gdjs.Irio_32DeathCode.eventsList0 = function(runtimeScene) {

{


gdjs.Irio_32DeathCode.condition0IsTrue_0.val = false;
{
gdjs.Irio_32DeathCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Irio_32DeathCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Irio_32DeathCode.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.Irio_32DeathCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Irio_32DeathCode.GDNewVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Irio_32DeathCode.GDNewVideoObjects1);

gdjs.Irio_32DeathCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Irio_32DeathCode.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.Irio_32DeathCode.GDNewVideoObjects1[i].isEnded() ) {
        gdjs.Irio_32DeathCode.condition0IsTrue_0.val = true;
        gdjs.Irio_32DeathCode.GDNewVideoObjects1[k] = gdjs.Irio_32DeathCode.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.Irio_32DeathCode.GDNewVideoObjects1.length = k;}if (gdjs.Irio_32DeathCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.Irio_32DeathCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Irio_32DeathCode.GDNewVideoObjects1.length = 0;
gdjs.Irio_32DeathCode.GDNewVideoObjects2.length = 0;

gdjs.Irio_32DeathCode.eventsList0(runtimeScene);

return;

}

gdjs['Irio_32DeathCode'] = gdjs.Irio_32DeathCode;

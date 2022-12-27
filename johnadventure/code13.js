gdjs.Irio_32Spared_32Yay_32YipieCode = {};
gdjs.Irio_32Spared_32Yay_32YipieCode.GDNewVideoObjects1= [];
gdjs.Irio_32Spared_32Yay_32YipieCode.GDNewVideoObjects2= [];

gdjs.Irio_32Spared_32Yay_32YipieCode.conditionTrue_0 = {val:false};
gdjs.Irio_32Spared_32Yay_32YipieCode.condition0IsTrue_0 = {val:false};
gdjs.Irio_32Spared_32Yay_32YipieCode.condition1IsTrue_0 = {val:false};


gdjs.Irio_32Spared_32Yay_32YipieCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Irio_32Spared_32Yay_32YipieCode.GDNewVideoObjects1);

gdjs.Irio_32Spared_32Yay_32YipieCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Irio_32Spared_32Yay_32YipieCode.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.Irio_32Spared_32Yay_32YipieCode.GDNewVideoObjects1[i].isEnded() ) {
        gdjs.Irio_32Spared_32Yay_32YipieCode.condition0IsTrue_0.val = true;
        gdjs.Irio_32Spared_32Yay_32YipieCode.GDNewVideoObjects1[k] = gdjs.Irio_32Spared_32Yay_32YipieCode.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.Irio_32Spared_32Yay_32YipieCode.GDNewVideoObjects1.length = k;}if (gdjs.Irio_32Spared_32Yay_32YipieCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.Irio_32Spared_32Yay_32YipieCode.condition0IsTrue_0.val = false;
{
gdjs.Irio_32Spared_32Yay_32YipieCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Irio_32Spared_32Yay_32YipieCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Irio_32Spared_32Yay_32YipieCode.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.Irio_32Spared_32Yay_32YipieCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Irio_32Spared_32Yay_32YipieCode.GDNewVideoObjects1[i].play();
}
}}

}


};

gdjs.Irio_32Spared_32Yay_32YipieCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Irio_32Spared_32Yay_32YipieCode.GDNewVideoObjects1.length = 0;
gdjs.Irio_32Spared_32Yay_32YipieCode.GDNewVideoObjects2.length = 0;

gdjs.Irio_32Spared_32Yay_32YipieCode.eventsList0(runtimeScene);

return;

}

gdjs['Irio_32Spared_32Yay_32YipieCode'] = gdjs.Irio_32Spared_32Yay_32YipieCode;

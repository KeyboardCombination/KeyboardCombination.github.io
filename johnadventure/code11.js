gdjs.IriosSceneCode = {};
gdjs.IriosSceneCode.GDNewSpriteObjects1= [];
gdjs.IriosSceneCode.GDNewSpriteObjects2= [];
gdjs.IriosSceneCode.GDNewTiledSpriteObjects1= [];
gdjs.IriosSceneCode.GDNewTiledSpriteObjects2= [];
gdjs.IriosSceneCode.GDNewSprite2Objects1= [];
gdjs.IriosSceneCode.GDNewSprite2Objects2= [];
gdjs.IriosSceneCode.GDNewTextObjects1= [];
gdjs.IriosSceneCode.GDNewTextObjects2= [];
gdjs.IriosSceneCode.GDNewSprite3Objects1= [];
gdjs.IriosSceneCode.GDNewSprite3Objects2= [];
gdjs.IriosSceneCode.GDNewSprite32Objects1= [];
gdjs.IriosSceneCode.GDNewSprite32Objects2= [];

gdjs.IriosSceneCode.conditionTrue_0 = {val:false};
gdjs.IriosSceneCode.condition0IsTrue_0 = {val:false};
gdjs.IriosSceneCode.condition1IsTrue_0 = {val:false};


gdjs.IriosSceneCode.asyncCallback20238532 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.IriosSceneCode.GDNewTextObjects2);

{gdjs.evtTools.sound.playSound(runtimeScene, "good plumber.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.IriosSceneCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.IriosSceneCode.GDNewTextObjects2[i].setString("Irios: Please spare me I used to be a good plumber!");
}
}}
gdjs.IriosSceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.IriosSceneCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.IriosSceneCode.asyncCallback20238532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IriosSceneCode.asyncCallback20240988 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Irio Death", false);
}}
gdjs.IriosSceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.IriosSceneCode.asyncCallback20240988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IriosSceneCode.asyncCallback20242548 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Irio Spared Yay Yipie", false);
}}
gdjs.IriosSceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.IriosSceneCode.asyncCallback20242548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IriosSceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.IriosSceneCode.condition0IsTrue_0.val = false;
{
gdjs.IriosSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IriosSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.IriosSceneCode.GDNewTextObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "paranoid android MKDS.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.IriosSceneCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.IriosSceneCode.GDNewTextObjects1[i].setString("Irios: Ahh you are defeat me");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "defeat.mp3", false, 100, 1);
}
{ //Subevents
gdjs.IriosSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.IriosSceneCode.condition0IsTrue_0.val = false;
{
gdjs.IriosSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if (gdjs.IriosSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "he_is_a_evil_man.ogg", false, 100, 1);
}
{ //Subevents
gdjs.IriosSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.IriosSceneCode.condition0IsTrue_0.val = false;
{
gdjs.IriosSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if (gdjs.IriosSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "he_is_not_evil.ogg", false, 100, 1);
}
{ //Subevents
gdjs.IriosSceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.IriosSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IriosSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.IriosSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.IriosSceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.IriosSceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.IriosSceneCode.GDNewSprite2Objects1.length = 0;
gdjs.IriosSceneCode.GDNewSprite2Objects2.length = 0;
gdjs.IriosSceneCode.GDNewTextObjects1.length = 0;
gdjs.IriosSceneCode.GDNewTextObjects2.length = 0;
gdjs.IriosSceneCode.GDNewSprite3Objects1.length = 0;
gdjs.IriosSceneCode.GDNewSprite3Objects2.length = 0;
gdjs.IriosSceneCode.GDNewSprite32Objects1.length = 0;
gdjs.IriosSceneCode.GDNewSprite32Objects2.length = 0;

gdjs.IriosSceneCode.eventsList3(runtimeScene);

return;

}

gdjs['IriosSceneCode'] = gdjs.IriosSceneCode;

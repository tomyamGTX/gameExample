gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDCameraObjects1= [];
gdjs.Untitled_32sceneCode.GDCameraObjects2= [];
gdjs.Untitled_32sceneCode.GDCameraObjects3= [];
gdjs.Untitled_32sceneCode.GDCameraObjects4= [];
gdjs.Untitled_32sceneCode.GDCameraObjects5= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects3= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects4= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects5= [];
gdjs.Untitled_32sceneCode.GDStartMarkerObjects1= [];
gdjs.Untitled_32sceneCode.GDStartMarkerObjects2= [];
gdjs.Untitled_32sceneCode.GDStartMarkerObjects3= [];
gdjs.Untitled_32sceneCode.GDStartMarkerObjects4= [];
gdjs.Untitled_32sceneCode.GDStartMarkerObjects5= [];
gdjs.Untitled_32sceneCode.GDFallDeathObjects1= [];
gdjs.Untitled_32sceneCode.GDFallDeathObjects2= [];
gdjs.Untitled_32sceneCode.GDFallDeathObjects3= [];
gdjs.Untitled_32sceneCode.GDFallDeathObjects4= [];
gdjs.Untitled_32sceneCode.GDFallDeathObjects5= [];
gdjs.Untitled_32sceneCode.GDGroundObjects1= [];
gdjs.Untitled_32sceneCode.GDGroundObjects2= [];
gdjs.Untitled_32sceneCode.GDGroundObjects3= [];
gdjs.Untitled_32sceneCode.GDGroundObjects4= [];
gdjs.Untitled_32sceneCode.GDGroundObjects5= [];
gdjs.Untitled_32sceneCode.GDGroundElevatedObjects1= [];
gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2= [];
gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3= [];
gdjs.Untitled_32sceneCode.GDGroundElevatedObjects4= [];
gdjs.Untitled_32sceneCode.GDGroundElevatedObjects5= [];
gdjs.Untitled_32sceneCode.GDSpikeGroupObjects1= [];
gdjs.Untitled_32sceneCode.GDSpikeGroupObjects2= [];
gdjs.Untitled_32sceneCode.GDSpikeGroupObjects3= [];
gdjs.Untitled_32sceneCode.GDSpikeGroupObjects4= [];
gdjs.Untitled_32sceneCode.GDSpikeGroupObjects5= [];
gdjs.Untitled_32sceneCode.GDCoinObjects1= [];
gdjs.Untitled_32sceneCode.GDCoinObjects2= [];
gdjs.Untitled_32sceneCode.GDCoinObjects3= [];
gdjs.Untitled_32sceneCode.GDCoinObjects4= [];
gdjs.Untitled_32sceneCode.GDCoinObjects5= [];
gdjs.Untitled_32sceneCode.GDCoinsScoreObjects1= [];
gdjs.Untitled_32sceneCode.GDCoinsScoreObjects2= [];
gdjs.Untitled_32sceneCode.GDCoinsScoreObjects3= [];
gdjs.Untitled_32sceneCode.GDCoinsScoreObjects4= [];
gdjs.Untitled_32sceneCode.GDCoinsScoreObjects5= [];
gdjs.Untitled_32sceneCode.GDHighScoreObjects1= [];
gdjs.Untitled_32sceneCode.GDHighScoreObjects2= [];
gdjs.Untitled_32sceneCode.GDHighScoreObjects3= [];
gdjs.Untitled_32sceneCode.GDHighScoreObjects4= [];
gdjs.Untitled_32sceneCode.GDHighScoreObjects5= [];
gdjs.Untitled_32sceneCode.GDTutorialTextObjects1= [];
gdjs.Untitled_32sceneCode.GDTutorialTextObjects2= [];
gdjs.Untitled_32sceneCode.GDTutorialTextObjects3= [];
gdjs.Untitled_32sceneCode.GDTutorialTextObjects4= [];
gdjs.Untitled_32sceneCode.GDTutorialTextObjects5= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.Untitled_32sceneCode.GDGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPlayerObjects1, gdjs.Untitled_32sceneCode.GDPlayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGroundObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGroundObjects2[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDGroundObjects2[i].getVariables().get("Lane")) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGroundObjects2[k] = gdjs.Untitled_32sceneCode.GDGroundObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGroundObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2[i].getVariables().get("Lane")) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2[k] = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDGroundObjects2 */
/* Reuse gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGroundObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGroundObjects2[i].activateBehavior("Platform", false);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2[i].activateBehavior("Platform", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.Untitled_32sceneCode.GDGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPlayerObjects1, gdjs.Untitled_32sceneCode.GDPlayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGroundObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGroundObjects2[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDGroundObjects2[i].getVariables().get("Lane")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGroundObjects2[k] = gdjs.Untitled_32sceneCode.GDGroundObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGroundObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2[i].getVariables().get("Lane")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2[k] = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDGroundObjects2 */
/* Reuse gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGroundObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGroundObjects2[i].activateBehavior("Platform", true);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2[i].activateBehavior("Platform", true);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CoinsScore"), gdjs.Untitled_32sceneCode.GDCoinsScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.Untitled_32sceneCode.GDHighScoreObjects2);
{gdjs.evtTools.storage.readNumberFromJSONFile("GameHighscore", "GameHighscore", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3));
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCoinsScoreObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCoinsScoreObjects2[i].setString("Coins: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHighScoreObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHighScoreObjects2[i].setString("Highscore: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.Untitled_32sceneCode.GDTutorialTextObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTutorialTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTutorialTextObjects1[i].setString("Swipe to move and jump.");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTutorialTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTutorialTextObjects1[i].setCharacterSize(40);
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.Untitled_32sceneCode.GDCameraObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);
{gdjs.scene3d.camera.setCameraZ(runtimeScene, (( gdjs.Untitled_32sceneCode.GDCameraObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDCameraObjects2[0].getZ()) + 5, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDCameraObjects2.length !== 0 ? gdjs.Untitled_32sceneCode.GDCameraObjects2[0] : null), true, "", 0);
}{gdjs.scene3d.camera.turnCameraTowardObject(runtimeScene, (gdjs.Untitled_32sceneCode.GDPlayerObjects2.length !== 0 ? gdjs.Untitled_32sceneCode.GDPlayerObjects2[0] : null), "", 0, false);
}{gdjs.scene3d.camera.setCameraRotationY(runtimeScene, -(90), "", 0);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCameraObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCameraObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDCameraObjects2[i].getVariables().getFromIndex(0)).setNumber((gdjs.Untitled_32sceneCode.GDCameraObjects2[i].getX()) - (( gdjs.Untitled_32sceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects2[0].getX()));
}
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (100), "", 0);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.Untitled_32sceneCode.GDCameraObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{gdjs.scene3d.camera.setCameraZ(runtimeScene, gdjs.evtTools.common.lerp(gdjs.scene3d.camera.getCameraZ(runtimeScene, "", 0), (( gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getZ()), 0.05 * 60 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Untitled_32sceneCode.GDCameraObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDCameraObjects1[0].getX()), "", 0);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCameraObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCameraObjects1[i].setX((( gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getX()) + (gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDCameraObjects1[i].getVariables().getFromIndex(0))));
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.Untitled_32sceneCode.GDGroundObjects4);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.Untitled_32sceneCode.GDGroundElevatedObjects4);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPlayerObjects3, gdjs.Untitled_32sceneCode.GDPlayerObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGroundObjects4.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGroundObjects4[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDGroundObjects4[i].getVariables().get("Lane")) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDPlayerObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects4[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGroundObjects4[k] = gdjs.Untitled_32sceneCode.GDGroundObjects4[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGroundObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects4.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGroundElevatedObjects4[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDGroundElevatedObjects4[i].getVariables().get("Lane")) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDPlayerObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects4[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGroundElevatedObjects4[k] = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects4[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGroundElevatedObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDGroundObjects4 */
/* Reuse gdjs.Untitled_32sceneCode.GDGroundElevatedObjects4 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGroundObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGroundObjects4[i].activateBehavior("Platform", false);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGroundElevatedObjects4[i].activateBehavior("Platform", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.Untitled_32sceneCode.GDGroundObjects3);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3);
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGroundObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGroundObjects3[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDGroundObjects3[i].getVariables().get("Lane")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGroundObjects3[k] = gdjs.Untitled_32sceneCode.GDGroundObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGroundObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3[i].getVariables().get("Lane")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3[k] = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDGroundObjects3 */
/* Reuse gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGroundObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGroundObjects3[i].activateBehavior("Platform", true);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3[i].activateBehavior("Platform", true);
}
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGroundElevatedObjects3Objects = Hashtable.newFrom({"GroundElevated": gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3});
gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPlayerObjects3, gdjs.Untitled_32sceneCode.GDPlayerObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__Distance.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 100;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__HasSwipeJustEnded.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects4[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) < 2 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects4[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9382172);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects4 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects4[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerObjects4[i].getVariables().getFromIndex(1)).add(1);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects4[i].setAnimationName("RunRight");
}
}}

}


{

/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__Distance.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 100;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__HasSwipeJustEnded.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects3[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9385316);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].setAnimationName("RunLeft");
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__Distance.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 100;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__HasSwipeJustEnded.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9377692);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)) != (gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(1))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects3[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getBehavior("Tween").hasFinished("Move") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects3[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getBehavior("Tween").removeTween("Move");
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(1))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects3[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects3Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGroundElevatedObjects3Objects, true, runtimeScene, true);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(1))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects3[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getAnimationName() != "Run" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects3[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].setAnimationName("Run");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) != (gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(1))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects2[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getBehavior("Tween").exists("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects2[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getBehavior("Tween").addObjectPositionZTween("Move", (gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(1))) * 160, "linear", 300, false);
}
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCoinObjects2Objects = Hashtable.newFrom({"Coin": gdjs.Untitled_32sceneCode.GDCoinObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects2});
gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Untitled_32sceneCode.GDCoinObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDCoinObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDCoinObjects2[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDCoinObjects2[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDCoinObjects2[k] = gdjs.Untitled_32sceneCode.GDCoinObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDCoinObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCoinObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects2Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDCoinObjects2 */
gdjs.copyArray(runtimeScene.getObjects("CoinsScore"), gdjs.Untitled_32sceneCode.GDCoinsScoreObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "CoinPickUp", false, 50, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}{runtimeScene.getScene().getVariables().getFromIndex(1).mul(1.03);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCoinObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RisingPitch");
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) * 1.003);
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCoinsScoreObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCoinsScoreObjects2[i].setString("Coins: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSpikeGroupObjects1Objects = Hashtable.newFrom({"SpikeGroup": gdjs.Untitled_32sceneCode.GDSpikeGroupObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects1});
gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("FallDeath"), gdjs.Untitled_32sceneCode.GDFallDeathObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getY() > (( gdjs.Untitled_32sceneCode.GDFallDeathObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDFallDeathObjects2[0].getPointY("")) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects2[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("GameState").setString("GameOver");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpikeGroup"), gdjs.Untitled_32sceneCode.GDSpikeGroupObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDSpikeGroupObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDSpikeGroupObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDSpikeGroupObjects1[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDSpikeGroupObjects1[k] = gdjs.Untitled_32sceneCode.GDSpikeGroupObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDSpikeGroupObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSpikeGroupObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("GameState").setString("GameOver");
}}

}


};gdjs.Untitled_32sceneCode.eventsList7 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList5(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList6(runtimeScene);
}


};gdjs.Untitled_32sceneCode.eventsList8 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList7(runtimeScene);
}


};gdjs.Untitled_32sceneCode.asyncCallback9397028 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}
gdjs.Untitled_32sceneCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback9397028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CoinsScore"), gdjs.Untitled_32sceneCode.GDCoinsScoreObjects2);
{gdjs.evtTools.storage.writeNumberInJSONFile("GameHighscore", "GameHighscore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)));
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCoinsScoreObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCoinsScoreObjects2[i].setColor("248;231;28");
}
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9395004);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "DeathSound", false, 50, 0.7);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].setAnimationName("Death");
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.5);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList12 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList11(runtimeScene);
}


};gdjs.Untitled_32sceneCode.eventsList13 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Untitled_32sceneCode.GDCoinObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCoinObjects2[i].setRotationY(gdjs.Untitled_32sceneCode.GDCoinObjects2[i].getRotationY() + (60 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "RisingPitch") > 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9399140);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0.8);
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDStartMarkerObjects2Objects = Hashtable.newFrom({"StartMarker": gdjs.Untitled_32sceneCode.GDStartMarkerObjects2});
gdjs.Untitled_32sceneCode.eventsList14 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.Untitled_32sceneCode.GDGroundObjects3);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPlayerObjects2, gdjs.Untitled_32sceneCode.GDPlayerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGroundObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGroundObjects3[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDGroundObjects3[i].getVariables().get("Lane")) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGroundObjects3[k] = gdjs.Untitled_32sceneCode.GDGroundObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGroundObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3[i].getVariables().get("Lane")) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3[k] = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDGroundObjects3 */
/* Reuse gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGroundObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGroundObjects3[i].activateBehavior("Platform", false);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3[i].activateBehavior("Platform", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.Untitled_32sceneCode.GDGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2);
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGroundObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGroundObjects2[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDGroundObjects2[i].getVariables().get("Lane")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGroundObjects2[k] = gdjs.Untitled_32sceneCode.GDGroundObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGroundObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2[i].getVariables().get("Lane")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2[k] = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDGroundObjects2 */
/* Reuse gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGroundObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGroundObjects2[i].activateBehavior("Platform", true);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2[i].activateBehavior("Platform", true);
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList15 = function(runtimeScene) {

{

/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects2 */
/* Reuse gdjs.Untitled_32sceneCode.GDStartMarkerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDStartMarkerObjects2Objects, (( gdjs.Untitled_32sceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects2[0].getX()), (( gdjs.Untitled_32sceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects2[0].getY()), false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDStartMarkerObjects2 */
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Layout" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 9)), (( gdjs.Untitled_32sceneCode.GDStartMarkerObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDStartMarkerObjects2[0].getPointX("")) + 2048, (( gdjs.Untitled_32sceneCode.GDStartMarkerObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDStartMarkerObjects2[0].getPointY("")));
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList16 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("StartMarker"), gdjs.Untitled_32sceneCode.GDStartMarkerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDStartMarkerObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDStartMarkerObjects2[i].getX() < (( gdjs.Untitled_32sceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects2[0].getX()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDStartMarkerObjects2[k] = gdjs.Untitled_32sceneCode.GDStartMarkerObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDStartMarkerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDStartMarkerObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDStartMarkerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDStartMarkerObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList15(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Untitled_32sceneCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.Untitled_32sceneCode.GDGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.Untitled_32sceneCode.GDGroundElevatedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpikeGroup"), gdjs.Untitled_32sceneCode.GDSpikeGroupObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGroundObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGroundObjects1[i].getX() < (( gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getX()) - 1060 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGroundObjects1[k] = gdjs.Untitled_32sceneCode.GDGroundObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGroundObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGroundElevatedObjects1[i].getX() < (( gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getX()) - 1060 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGroundElevatedObjects1[k] = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGroundElevatedObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDSpikeGroupObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDSpikeGroupObjects1[i].getX() < (( gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getX()) - 1060 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDSpikeGroupObjects1[k] = gdjs.Untitled_32sceneCode.GDSpikeGroupObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDSpikeGroupObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDCoinObjects1[i].getX() < (( gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getX()) - 1060 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDCoinObjects1[k] = gdjs.Untitled_32sceneCode.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDCoinObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDCoinObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDGroundObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDGroundElevatedObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDSpikeGroupObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGroundObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGroundObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGroundElevatedObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGroundElevatedObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSpikeGroupObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSpikeGroupObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{runtimeScene.getScene().getVariables().get("GameState").setString("Playing");
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.func(runtimeScene, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__SwipeGesture__SetLayer.func(runtimeScene, "UI", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].setAnimationSpeedScale(1.3);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("GameState")) == "Playing";
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("GameState")) == "GameOver";
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


gdjs.Untitled_32sceneCode.eventsList13(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList16(runtimeScene);
}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDCameraObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCameraObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCameraObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCameraObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDCameraObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDStartMarkerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDStartMarkerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDStartMarkerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDStartMarkerObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDStartMarkerObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDFallDeathObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFallDeathObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFallDeathObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDFallDeathObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDFallDeathObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDGroundElevatedObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGroundElevatedObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGroundElevatedObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDGroundElevatedObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDGroundElevatedObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDSpikeGroupObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSpikeGroupObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSpikeGroupObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSpikeGroupObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDSpikeGroupObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDCoinsScoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCoinsScoreObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCoinsScoreObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCoinsScoreObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDCoinsScoreObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDHighScoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHighScoreObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHighScoreObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDHighScoreObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDHighScoreObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDTutorialTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTutorialTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTutorialTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDTutorialTextObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDTutorialTextObjects5.length = 0;

gdjs.Untitled_32sceneCode.eventsList17(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;

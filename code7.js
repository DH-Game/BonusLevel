gdjs.WinCode = {};
gdjs.WinCode.GDExitButtonObjects1= [];
gdjs.WinCode.GDExitButtonObjects2= [];
gdjs.WinCode.GDExitButtonObjects3= [];
gdjs.WinCode.GDJackOLantern2Objects1= [];
gdjs.WinCode.GDJackOLantern2Objects2= [];
gdjs.WinCode.GDJackOLantern2Objects3= [];
gdjs.WinCode.GDJaneObjects1= [];
gdjs.WinCode.GDJaneObjects2= [];
gdjs.WinCode.GDJaneObjects3= [];
gdjs.WinCode.GDBerthaObjects1= [];
gdjs.WinCode.GDBerthaObjects2= [];
gdjs.WinCode.GDBerthaObjects3= [];
gdjs.WinCode.GDEleanorObjects1= [];
gdjs.WinCode.GDEleanorObjects2= [];
gdjs.WinCode.GDEleanorObjects3= [];
gdjs.WinCode.GDDrMontagueObjects1= [];
gdjs.WinCode.GDDrMontagueObjects2= [];
gdjs.WinCode.GDDrMontagueObjects3= [];
gdjs.WinCode.GDTheodoraObjects1= [];
gdjs.WinCode.GDTheodoraObjects2= [];
gdjs.WinCode.GDTheodoraObjects3= [];
gdjs.WinCode.GDEdithObjects1= [];
gdjs.WinCode.GDEdithObjects2= [];
gdjs.WinCode.GDEdithObjects3= [];
gdjs.WinCode.GDLightsObjects1= [];
gdjs.WinCode.GDLightsObjects2= [];
gdjs.WinCode.GDLightsObjects3= [];
gdjs.WinCode.GDJackDialogBubbleObjects1= [];
gdjs.WinCode.GDJackDialogBubbleObjects2= [];
gdjs.WinCode.GDJackDialogBubbleObjects3= [];
gdjs.WinCode.GDJackDialogEndObjects1= [];
gdjs.WinCode.GDJackDialogEndObjects2= [];
gdjs.WinCode.GDJackDialogEndObjects3= [];
gdjs.WinCode.GDEndWinBackgroundObjects1= [];
gdjs.WinCode.GDEndWinBackgroundObjects2= [];
gdjs.WinCode.GDEndWinBackgroundObjects3= [];

gdjs.WinCode.conditionTrue_0 = {val:false};
gdjs.WinCode.condition0IsTrue_0 = {val:false};
gdjs.WinCode.condition1IsTrue_0 = {val:false};
gdjs.WinCode.condition2IsTrue_0 = {val:false};
gdjs.WinCode.conditionTrue_1 = {val:false};
gdjs.WinCode.condition0IsTrue_1 = {val:false};
gdjs.WinCode.condition1IsTrue_1 = {val:false};
gdjs.WinCode.condition2IsTrue_1 = {val:false};


gdjs.WinCode.eventsList0xba4f04 = function(runtimeScene) {

{


gdjs.WinCode.condition0IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("timer").getChild("dialog").getChild("value")), gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("timer").getChild("dialog").getChild("name")));
}if (gdjs.WinCode.condition0IsTrue_0.val) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("timer").getChild("dialog").getChild("name")));
}}

}


{


gdjs.WinCode.condition0IsTrue_0.val = false;
gdjs.WinCode.condition1IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.WinCode.condition0IsTrue_0.val ) {
{
gdjs.WinCode.condition1IsTrue_0.val = gdjs.dialogueTree.hasClippedScrollingCompleted();
}}
if (gdjs.WinCode.condition1IsTrue_0.val) {
{gdjs.dialogueTree.goToNextDialogueLine();
}{runtimeScene.getVariables().get("timer").getChild("dialog").getChild("value").setNumber(0.05);
}}

}


{


gdjs.WinCode.condition0IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.WinCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("textScrollSpd").setNumber(0.02);
}}

}


}; //End of gdjs.WinCode.eventsList0xba4f04
gdjs.WinCode.eventsList0xba4dfc = function(runtimeScene) {

{


gdjs.WinCode.condition0IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.dialogueTree.isDialogueLineType("text");
}if (gdjs.WinCode.condition0IsTrue_0.val) {
gdjs.WinCode.GDJackDialogBubbleObjects1.createFrom(runtimeScene.getObjects("JackDialogBubble"));
gdjs.WinCode.GDJackDialogEndObjects1.createFrom(runtimeScene.getObjects("JackDialogEnd"));
{for(var i = 0, len = gdjs.WinCode.GDJackDialogEndObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDJackDialogEndObjects1[i].setString(gdjs.dialogueTree.getClippedLineText());
}
}{for(var i = 0, len = gdjs.WinCode.GDJackDialogBubbleObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDJackDialogBubbleObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.WinCode.eventsList0xba4f04(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.WinCode.eventsList0xba4dfc
gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.WinCode.GDExitButtonObjects1});gdjs.WinCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.WinCode.condition0IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.WinCode.condition0IsTrue_0.val) {
gdjs.WinCode.GDJackDialogBubbleObjects1.createFrom(runtimeScene.getObjects("JackDialogBubble"));
gdjs.WinCode.GDJackDialogEndObjects1.createFrom(runtimeScene.getObjects("JackDialogEnd"));
gdjs.WinCode.GDJackOLantern2Objects1.createFrom(runtimeScene.getObjects("JackOLantern2"));
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "Win.json");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Win");
}{for(var i = 0, len = gdjs.WinCode.GDJackOLantern2Objects1.length ;i < len;++i) {
    gdjs.WinCode.GDJackOLantern2Objects1[i].returnVariable(gdjs.WinCode.GDJackOLantern2Objects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("timer").getChild("dialog").getChild("name")));
}{for(var i = 0, len = gdjs.WinCode.GDJackDialogEndObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDJackDialogEndObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.WinCode.GDJackDialogBubbleObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDJackDialogBubbleObjects1[i].hide();
}
}}

}


{

gdjs.WinCode.GDJackOLantern2Objects1.createFrom(runtimeScene.getObjects("JackOLantern2"));

gdjs.WinCode.condition0IsTrue_0.val = false;
gdjs.WinCode.condition1IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "win");
}if ( gdjs.WinCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.WinCode.GDJackOLantern2Objects1.length;i<l;++i) {
    if ( gdjs.WinCode.GDJackOLantern2Objects1[i].getVariableNumber(gdjs.WinCode.GDJackOLantern2Objects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.WinCode.condition1IsTrue_0.val = true;
        gdjs.WinCode.GDJackOLantern2Objects1[k] = gdjs.WinCode.GDJackOLantern2Objects1[i];
        ++k;
    }
}
gdjs.WinCode.GDJackOLantern2Objects1.length = k;}}
if (gdjs.WinCode.condition1IsTrue_0.val) {
/* Reuse gdjs.WinCode.GDJackOLantern2Objects1 */
{gdjs.dialogueTree.startFrom("win");
}{for(var i = 0, len = gdjs.WinCode.GDJackOLantern2Objects1.length ;i < len;++i) {
    gdjs.WinCode.GDJackOLantern2Objects1[i].returnVariable(gdjs.WinCode.GDJackOLantern2Objects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{


gdjs.WinCode.condition0IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.dialogueTree.isRunning();
}if (gdjs.WinCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WinCode.eventsList0xba4dfc(runtimeScene);} //End of subevents
}

}


{

gdjs.WinCode.GDExitButtonObjects1.createFrom(runtimeScene.getObjects("ExitButton"));

gdjs.WinCode.condition0IsTrue_0.val = false;
{
{gdjs.WinCode.conditionTrue_1 = gdjs.WinCode.condition0IsTrue_0;
gdjs.WinCode.condition0IsTrue_1.val = false;
gdjs.WinCode.condition1IsTrue_1.val = false;
{
gdjs.WinCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDExitButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.WinCode.condition0IsTrue_1.val ) {
{
gdjs.WinCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.WinCode.conditionTrue_1.val = true && gdjs.WinCode.condition0IsTrue_1.val && gdjs.WinCode.condition1IsTrue_1.val;
}
}if (gdjs.WinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.WinCode.eventsList0xb5aa0


gdjs.WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinCode.GDExitButtonObjects1.length = 0;
gdjs.WinCode.GDExitButtonObjects2.length = 0;
gdjs.WinCode.GDExitButtonObjects3.length = 0;
gdjs.WinCode.GDJackOLantern2Objects1.length = 0;
gdjs.WinCode.GDJackOLantern2Objects2.length = 0;
gdjs.WinCode.GDJackOLantern2Objects3.length = 0;
gdjs.WinCode.GDJaneObjects1.length = 0;
gdjs.WinCode.GDJaneObjects2.length = 0;
gdjs.WinCode.GDJaneObjects3.length = 0;
gdjs.WinCode.GDBerthaObjects1.length = 0;
gdjs.WinCode.GDBerthaObjects2.length = 0;
gdjs.WinCode.GDBerthaObjects3.length = 0;
gdjs.WinCode.GDEleanorObjects1.length = 0;
gdjs.WinCode.GDEleanorObjects2.length = 0;
gdjs.WinCode.GDEleanorObjects3.length = 0;
gdjs.WinCode.GDDrMontagueObjects1.length = 0;
gdjs.WinCode.GDDrMontagueObjects2.length = 0;
gdjs.WinCode.GDDrMontagueObjects3.length = 0;
gdjs.WinCode.GDTheodoraObjects1.length = 0;
gdjs.WinCode.GDTheodoraObjects2.length = 0;
gdjs.WinCode.GDTheodoraObjects3.length = 0;
gdjs.WinCode.GDEdithObjects1.length = 0;
gdjs.WinCode.GDEdithObjects2.length = 0;
gdjs.WinCode.GDEdithObjects3.length = 0;
gdjs.WinCode.GDLightsObjects1.length = 0;
gdjs.WinCode.GDLightsObjects2.length = 0;
gdjs.WinCode.GDLightsObjects3.length = 0;
gdjs.WinCode.GDJackDialogBubbleObjects1.length = 0;
gdjs.WinCode.GDJackDialogBubbleObjects2.length = 0;
gdjs.WinCode.GDJackDialogBubbleObjects3.length = 0;
gdjs.WinCode.GDJackDialogEndObjects1.length = 0;
gdjs.WinCode.GDJackDialogEndObjects2.length = 0;
gdjs.WinCode.GDJackDialogEndObjects3.length = 0;
gdjs.WinCode.GDEndWinBackgroundObjects1.length = 0;
gdjs.WinCode.GDEndWinBackgroundObjects2.length = 0;
gdjs.WinCode.GDEndWinBackgroundObjects3.length = 0;

gdjs.WinCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['WinCode'] = gdjs.WinCode;

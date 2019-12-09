gdjs.DeathCode = {};
gdjs.DeathCode.GDExitButtonObjects1= [];
gdjs.DeathCode.GDExitButtonObjects2= [];
gdjs.DeathCode.GDExitButtonObjects3= [];
gdjs.DeathCode.GDPlayButtonObjects1= [];
gdjs.DeathCode.GDPlayButtonObjects2= [];
gdjs.DeathCode.GDPlayButtonObjects3= [];
gdjs.DeathCode.GDTitleScreenBackgroundObjects1= [];
gdjs.DeathCode.GDTitleScreenBackgroundObjects2= [];
gdjs.DeathCode.GDTitleScreenBackgroundObjects3= [];
gdjs.DeathCode.GDPlayerObjects1= [];
gdjs.DeathCode.GDPlayerObjects2= [];
gdjs.DeathCode.GDPlayerObjects3= [];
gdjs.DeathCode.GDJackDialogBubbleObjects1= [];
gdjs.DeathCode.GDJackDialogBubbleObjects2= [];
gdjs.DeathCode.GDJackDialogBubbleObjects3= [];
gdjs.DeathCode.GDJackOLantern2Objects1= [];
gdjs.DeathCode.GDJackOLantern2Objects2= [];
gdjs.DeathCode.GDJackOLantern2Objects3= [];
gdjs.DeathCode.GDNewObjectObjects1= [];
gdjs.DeathCode.GDNewObjectObjects2= [];
gdjs.DeathCode.GDNewObjectObjects3= [];
gdjs.DeathCode.GDJackDialogDeathObjects1= [];
gdjs.DeathCode.GDJackDialogDeathObjects2= [];
gdjs.DeathCode.GDJackDialogDeathObjects3= [];

gdjs.DeathCode.conditionTrue_0 = {val:false};
gdjs.DeathCode.condition0IsTrue_0 = {val:false};
gdjs.DeathCode.condition1IsTrue_0 = {val:false};
gdjs.DeathCode.condition2IsTrue_0 = {val:false};
gdjs.DeathCode.conditionTrue_1 = {val:false};
gdjs.DeathCode.condition0IsTrue_1 = {val:false};
gdjs.DeathCode.condition1IsTrue_1 = {val:false};
gdjs.DeathCode.condition2IsTrue_1 = {val:false};


gdjs.DeathCode.eventsList0xba4f04 = function(runtimeScene) {

{


gdjs.DeathCode.condition0IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("timer").getChild("dialog").getChild("value")), gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("timer").getChild("dialog").getChild("name")));
}if (gdjs.DeathCode.condition0IsTrue_0.val) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("timer").getChild("dialog").getChild("name")));
}}

}


{


gdjs.DeathCode.condition0IsTrue_0.val = false;
gdjs.DeathCode.condition1IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.DeathCode.condition0IsTrue_0.val ) {
{
gdjs.DeathCode.condition1IsTrue_0.val = gdjs.dialogueTree.hasClippedScrollingCompleted();
}}
if (gdjs.DeathCode.condition1IsTrue_0.val) {
{gdjs.dialogueTree.goToNextDialogueLine();
}{runtimeScene.getVariables().get("timer").getChild("dialog").getChild("value").setNumber(0.05);
}}

}


{


gdjs.DeathCode.condition0IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.DeathCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("textScrollSpd").setNumber(0.02);
}}

}


}; //End of gdjs.DeathCode.eventsList0xba4f04
gdjs.DeathCode.eventsList0xba4dfc = function(runtimeScene) {

{


gdjs.DeathCode.condition0IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.dialogueTree.isDialogueLineType("text");
}if (gdjs.DeathCode.condition0IsTrue_0.val) {
gdjs.DeathCode.GDJackDialogBubbleObjects1.createFrom(runtimeScene.getObjects("JackDialogBubble"));
gdjs.DeathCode.GDJackDialogDeathObjects1.createFrom(runtimeScene.getObjects("JackDialogDeath"));
{for(var i = 0, len = gdjs.DeathCode.GDJackDialogDeathObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDJackDialogDeathObjects1[i].setString(gdjs.dialogueTree.getClippedLineText());
}
}{for(var i = 0, len = gdjs.DeathCode.GDJackDialogBubbleObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDJackDialogBubbleObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.DeathCode.eventsList0xba4f04(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.DeathCode.eventsList0xba4dfc
gdjs.DeathCode.mapOfGDgdjs_46DeathCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.DeathCode.GDExitButtonObjects1});gdjs.DeathCode.mapOfGDgdjs_46DeathCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.DeathCode.GDPlayButtonObjects1});gdjs.DeathCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.DeathCode.condition0IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.DeathCode.condition0IsTrue_0.val) {
gdjs.DeathCode.GDJackDialogBubbleObjects1.createFrom(runtimeScene.getObjects("JackDialogBubble"));
gdjs.DeathCode.GDJackDialogDeathObjects1.createFrom(runtimeScene.getObjects("JackDialogDeath"));
gdjs.DeathCode.GDJackOLantern2Objects1.createFrom(runtimeScene.getObjects("JackOLantern2"));
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "Death.json");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "death");
}{for(var i = 0, len = gdjs.DeathCode.GDJackOLantern2Objects1.length ;i < len;++i) {
    gdjs.DeathCode.GDJackOLantern2Objects1[i].returnVariable(gdjs.DeathCode.GDJackOLantern2Objects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("timer").getChild("dialog").getChild("name")));
}{for(var i = 0, len = gdjs.DeathCode.GDJackDialogDeathObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDJackDialogDeathObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.DeathCode.GDJackDialogBubbleObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDJackDialogBubbleObjects1[i].hide();
}
}}

}


{

gdjs.DeathCode.GDJackOLantern2Objects1.createFrom(runtimeScene.getObjects("JackOLantern2"));

gdjs.DeathCode.condition0IsTrue_0.val = false;
gdjs.DeathCode.condition1IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "death");
}if ( gdjs.DeathCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.DeathCode.GDJackOLantern2Objects1.length;i<l;++i) {
    if ( gdjs.DeathCode.GDJackOLantern2Objects1[i].getVariableNumber(gdjs.DeathCode.GDJackOLantern2Objects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.DeathCode.condition1IsTrue_0.val = true;
        gdjs.DeathCode.GDJackOLantern2Objects1[k] = gdjs.DeathCode.GDJackOLantern2Objects1[i];
        ++k;
    }
}
gdjs.DeathCode.GDJackOLantern2Objects1.length = k;}}
if (gdjs.DeathCode.condition1IsTrue_0.val) {
/* Reuse gdjs.DeathCode.GDJackOLantern2Objects1 */
{gdjs.dialogueTree.startFrom("death");
}{for(var i = 0, len = gdjs.DeathCode.GDJackOLantern2Objects1.length ;i < len;++i) {
    gdjs.DeathCode.GDJackOLantern2Objects1[i].returnVariable(gdjs.DeathCode.GDJackOLantern2Objects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{


gdjs.DeathCode.condition0IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.dialogueTree.isRunning();
}if (gdjs.DeathCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.DeathCode.eventsList0xba4dfc(runtimeScene);} //End of subevents
}

}


{

gdjs.DeathCode.GDExitButtonObjects1.createFrom(runtimeScene.getObjects("ExitButton"));

gdjs.DeathCode.condition0IsTrue_0.val = false;
{
{gdjs.DeathCode.conditionTrue_1 = gdjs.DeathCode.condition0IsTrue_0;
gdjs.DeathCode.condition0IsTrue_1.val = false;
gdjs.DeathCode.condition1IsTrue_1.val = false;
{
gdjs.DeathCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeathCode.mapOfGDgdjs_46DeathCode_46GDExitButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.DeathCode.condition0IsTrue_1.val ) {
{
gdjs.DeathCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.DeathCode.conditionTrue_1.val = true && gdjs.DeathCode.condition0IsTrue_1.val && gdjs.DeathCode.condition1IsTrue_1.val;
}
}if (gdjs.DeathCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.DeathCode.GDPlayButtonObjects1.createFrom(runtimeScene.getObjects("PlayButton"));

gdjs.DeathCode.condition0IsTrue_0.val = false;
gdjs.DeathCode.condition1IsTrue_0.val = false;
{
{gdjs.DeathCode.conditionTrue_1 = gdjs.DeathCode.condition0IsTrue_0;
gdjs.DeathCode.condition0IsTrue_1.val = false;
gdjs.DeathCode.condition1IsTrue_1.val = false;
{
gdjs.DeathCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeathCode.mapOfGDgdjs_46DeathCode_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.DeathCode.condition0IsTrue_1.val ) {
{
gdjs.DeathCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.DeathCode.conditionTrue_1.val = true && gdjs.DeathCode.condition0IsTrue_1.val && gdjs.DeathCode.condition1IsTrue_1.val;
}
}if ( gdjs.DeathCode.condition0IsTrue_0.val ) {
{
gdjs.DeathCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}}
if (gdjs.DeathCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HauntedHouseHallway", false);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(3);
}}

}


{


{
}

}


}; //End of gdjs.DeathCode.eventsList0xb5aa0


gdjs.DeathCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DeathCode.GDExitButtonObjects1.length = 0;
gdjs.DeathCode.GDExitButtonObjects2.length = 0;
gdjs.DeathCode.GDExitButtonObjects3.length = 0;
gdjs.DeathCode.GDPlayButtonObjects1.length = 0;
gdjs.DeathCode.GDPlayButtonObjects2.length = 0;
gdjs.DeathCode.GDPlayButtonObjects3.length = 0;
gdjs.DeathCode.GDTitleScreenBackgroundObjects1.length = 0;
gdjs.DeathCode.GDTitleScreenBackgroundObjects2.length = 0;
gdjs.DeathCode.GDTitleScreenBackgroundObjects3.length = 0;
gdjs.DeathCode.GDPlayerObjects1.length = 0;
gdjs.DeathCode.GDPlayerObjects2.length = 0;
gdjs.DeathCode.GDPlayerObjects3.length = 0;
gdjs.DeathCode.GDJackDialogBubbleObjects1.length = 0;
gdjs.DeathCode.GDJackDialogBubbleObjects2.length = 0;
gdjs.DeathCode.GDJackDialogBubbleObjects3.length = 0;
gdjs.DeathCode.GDJackOLantern2Objects1.length = 0;
gdjs.DeathCode.GDJackOLantern2Objects2.length = 0;
gdjs.DeathCode.GDJackOLantern2Objects3.length = 0;
gdjs.DeathCode.GDNewObjectObjects1.length = 0;
gdjs.DeathCode.GDNewObjectObjects2.length = 0;
gdjs.DeathCode.GDNewObjectObjects3.length = 0;
gdjs.DeathCode.GDJackDialogDeathObjects1.length = 0;
gdjs.DeathCode.GDJackDialogDeathObjects2.length = 0;
gdjs.DeathCode.GDJackDialogDeathObjects3.length = 0;

gdjs.DeathCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['DeathCode'] = gdjs.DeathCode;

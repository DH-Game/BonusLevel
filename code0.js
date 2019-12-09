gdjs.PlayGameCode = {};
gdjs.PlayGameCode.GDTitleScreenBackgroundObjects1= [];
gdjs.PlayGameCode.GDTitleScreenBackgroundObjects2= [];
gdjs.PlayGameCode.GDTitleScreenBackgroundObjects3= [];
gdjs.PlayGameCode.GDPlayButtonObjects1= [];
gdjs.PlayGameCode.GDPlayButtonObjects2= [];
gdjs.PlayGameCode.GDPlayButtonObjects3= [];
gdjs.PlayGameCode.GDExitButtonObjects1= [];
gdjs.PlayGameCode.GDExitButtonObjects2= [];
gdjs.PlayGameCode.GDExitButtonObjects3= [];
gdjs.PlayGameCode.GDJackDialogTitleScreenObjects1= [];
gdjs.PlayGameCode.GDJackDialogTitleScreenObjects2= [];
gdjs.PlayGameCode.GDJackDialogTitleScreenObjects3= [];
gdjs.PlayGameCode.GDPlayerObjects1= [];
gdjs.PlayGameCode.GDPlayerObjects2= [];
gdjs.PlayGameCode.GDPlayerObjects3= [];
gdjs.PlayGameCode.GDJackOLantern2Objects1= [];
gdjs.PlayGameCode.GDJackOLantern2Objects2= [];
gdjs.PlayGameCode.GDJackOLantern2Objects3= [];
gdjs.PlayGameCode.GDEleanorObjects1= [];
gdjs.PlayGameCode.GDEleanorObjects2= [];
gdjs.PlayGameCode.GDEleanorObjects3= [];
gdjs.PlayGameCode.GDJackDialogBubbleObjects1= [];
gdjs.PlayGameCode.GDJackDialogBubbleObjects2= [];
gdjs.PlayGameCode.GDJackDialogBubbleObjects3= [];
gdjs.PlayGameCode.GDNewObjectObjects1= [];
gdjs.PlayGameCode.GDNewObjectObjects2= [];
gdjs.PlayGameCode.GDNewObjectObjects3= [];
gdjs.PlayGameCode.GDPlayerNameObjects1= [];
gdjs.PlayGameCode.GDPlayerNameObjects2= [];
gdjs.PlayGameCode.GDPlayerNameObjects3= [];
gdjs.PlayGameCode.GDEnterPlayerNameObjects1= [];
gdjs.PlayGameCode.GDEnterPlayerNameObjects2= [];
gdjs.PlayGameCode.GDEnterPlayerNameObjects3= [];
gdjs.PlayGameCode.GDEnterLevelCodeObjects1= [];
gdjs.PlayGameCode.GDEnterLevelCodeObjects2= [];
gdjs.PlayGameCode.GDEnterLevelCodeObjects3= [];
gdjs.PlayGameCode.GDEnterPlayerNameHereObjects1= [];
gdjs.PlayGameCode.GDEnterPlayerNameHereObjects2= [];
gdjs.PlayGameCode.GDEnterPlayerNameHereObjects3= [];
gdjs.PlayGameCode.GDEnterRoomCodeObjects1= [];
gdjs.PlayGameCode.GDEnterRoomCodeObjects2= [];
gdjs.PlayGameCode.GDEnterRoomCodeObjects3= [];
gdjs.PlayGameCode.GDRoomCodeObjects1= [];
gdjs.PlayGameCode.GDRoomCodeObjects2= [];
gdjs.PlayGameCode.GDRoomCodeObjects3= [];

gdjs.PlayGameCode.conditionTrue_0 = {val:false};
gdjs.PlayGameCode.condition0IsTrue_0 = {val:false};
gdjs.PlayGameCode.condition1IsTrue_0 = {val:false};
gdjs.PlayGameCode.condition2IsTrue_0 = {val:false};
gdjs.PlayGameCode.condition3IsTrue_0 = {val:false};
gdjs.PlayGameCode.condition4IsTrue_0 = {val:false};
gdjs.PlayGameCode.conditionTrue_1 = {val:false};
gdjs.PlayGameCode.condition0IsTrue_1 = {val:false};
gdjs.PlayGameCode.condition1IsTrue_1 = {val:false};
gdjs.PlayGameCode.condition2IsTrue_1 = {val:false};
gdjs.PlayGameCode.condition3IsTrue_1 = {val:false};
gdjs.PlayGameCode.condition4IsTrue_1 = {val:false};


gdjs.PlayGameCode.eventsList0xaa111c = function(runtimeScene) {

{


gdjs.PlayGameCode.condition0IsTrue_0.val = false;
{
gdjs.PlayGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("timer").getChild("dialog").getChild("value")), gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("timer").getChild("dialog").getChild("name")));
}if (gdjs.PlayGameCode.condition0IsTrue_0.val) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("timer").getChild("dialog").getChild("name")));
}}

}


{


gdjs.PlayGameCode.condition0IsTrue_0.val = false;
gdjs.PlayGameCode.condition1IsTrue_0.val = false;
{
gdjs.PlayGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.PlayGameCode.condition0IsTrue_0.val ) {
{
gdjs.PlayGameCode.condition1IsTrue_0.val = gdjs.dialogueTree.hasClippedScrollingCompleted();
}}
if (gdjs.PlayGameCode.condition1IsTrue_0.val) {
{gdjs.dialogueTree.goToNextDialogueLine();
}{runtimeScene.getVariables().get("timer").getChild("dialog").getChild("value").setNumber(0.05);
}}

}


{


gdjs.PlayGameCode.condition0IsTrue_0.val = false;
{
gdjs.PlayGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.PlayGameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("textScrollSpd").setNumber(0.02);
}}

}


}; //End of gdjs.PlayGameCode.eventsList0xaa111c
gdjs.PlayGameCode.eventsList0xaa1014 = function(runtimeScene) {

{


gdjs.PlayGameCode.condition0IsTrue_0.val = false;
{
gdjs.PlayGameCode.condition0IsTrue_0.val = gdjs.dialogueTree.isDialogueLineType("text");
}if (gdjs.PlayGameCode.condition0IsTrue_0.val) {
gdjs.PlayGameCode.GDJackDialogBubbleObjects1.createFrom(runtimeScene.getObjects("JackDialogBubble"));
gdjs.PlayGameCode.GDJackDialogTitleScreenObjects1.createFrom(runtimeScene.getObjects("JackDialogTitleScreen"));
{for(var i = 0, len = gdjs.PlayGameCode.GDJackDialogTitleScreenObjects1.length ;i < len;++i) {
    gdjs.PlayGameCode.GDJackDialogTitleScreenObjects1[i].setString(gdjs.dialogueTree.getClippedLineText());
}
}{for(var i = 0, len = gdjs.PlayGameCode.GDJackDialogBubbleObjects1.length ;i < len;++i) {
    gdjs.PlayGameCode.GDJackDialogBubbleObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.PlayGameCode.eventsList0xaa111c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.PlayGameCode.eventsList0xaa1014
gdjs.PlayGameCode.mapOfGDgdjs_46PlayGameCode_46GDPlayerNameObjects1Objects = Hashtable.newFrom({"PlayerName": gdjs.PlayGameCode.GDPlayerNameObjects1});gdjs.PlayGameCode.mapOfGDgdjs_46PlayGameCode_46GDRoomCodeObjects1Objects = Hashtable.newFrom({"RoomCode": gdjs.PlayGameCode.GDRoomCodeObjects1});gdjs.PlayGameCode.mapOfGDgdjs_46PlayGameCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.PlayGameCode.GDPlayButtonObjects1});gdjs.PlayGameCode.mapOfGDgdjs_46PlayGameCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.PlayGameCode.GDExitButtonObjects1});gdjs.PlayGameCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.PlayGameCode.condition0IsTrue_0.val = false;
{
gdjs.PlayGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PlayGameCode.condition0IsTrue_0.val) {
gdjs.PlayGameCode.GDJackDialogBubbleObjects1.createFrom(runtimeScene.getObjects("JackDialogBubble"));
gdjs.PlayGameCode.GDJackDialogTitleScreenObjects1.createFrom(runtimeScene.getObjects("JackDialogTitleScreen"));
gdjs.PlayGameCode.GDJackOLantern2Objects1.createFrom(runtimeScene.getObjects("JackOLantern2"));
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "PlayScreen.json");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StartGame");
}{for(var i = 0, len = gdjs.PlayGameCode.GDJackOLantern2Objects1.length ;i < len;++i) {
    gdjs.PlayGameCode.GDJackOLantern2Objects1[i].returnVariable(gdjs.PlayGameCode.GDJackOLantern2Objects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("timer").getChild("dialog").getChild("name")));
}{for(var i = 0, len = gdjs.PlayGameCode.GDJackDialogTitleScreenObjects1.length ;i < len;++i) {
    gdjs.PlayGameCode.GDJackDialogTitleScreenObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.PlayGameCode.GDJackDialogBubbleObjects1.length ;i < len;++i) {
    gdjs.PlayGameCode.GDJackDialogBubbleObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(3);
}}

}


{

gdjs.PlayGameCode.GDJackOLantern2Objects1.createFrom(runtimeScene.getObjects("JackOLantern2"));

gdjs.PlayGameCode.condition0IsTrue_0.val = false;
gdjs.PlayGameCode.condition1IsTrue_0.val = false;
{
gdjs.PlayGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "StartGame");
}if ( gdjs.PlayGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayGameCode.GDJackOLantern2Objects1.length;i<l;++i) {
    if ( gdjs.PlayGameCode.GDJackOLantern2Objects1[i].getVariableNumber(gdjs.PlayGameCode.GDJackOLantern2Objects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.PlayGameCode.condition1IsTrue_0.val = true;
        gdjs.PlayGameCode.GDJackOLantern2Objects1[k] = gdjs.PlayGameCode.GDJackOLantern2Objects1[i];
        ++k;
    }
}
gdjs.PlayGameCode.GDJackOLantern2Objects1.length = k;}}
if (gdjs.PlayGameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayGameCode.GDJackOLantern2Objects1 */
{gdjs.dialogueTree.startFrom("JackDialogPlayScreen");
}{for(var i = 0, len = gdjs.PlayGameCode.GDJackOLantern2Objects1.length ;i < len;++i) {
    gdjs.PlayGameCode.GDJackOLantern2Objects1[i].returnVariable(gdjs.PlayGameCode.GDJackOLantern2Objects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{


gdjs.PlayGameCode.condition0IsTrue_0.val = false;
{
gdjs.PlayGameCode.condition0IsTrue_0.val = gdjs.dialogueTree.isRunning();
}if (gdjs.PlayGameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PlayGameCode.eventsList0xaa1014(runtimeScene);} //End of subevents
}

}


{

gdjs.PlayGameCode.GDPlayerNameObjects1.createFrom(runtimeScene.getObjects("PlayerName"));

gdjs.PlayGameCode.condition0IsTrue_0.val = false;
gdjs.PlayGameCode.condition1IsTrue_0.val = false;
{
gdjs.PlayGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlayGameCode.mapOfGDgdjs_46PlayGameCode_46GDPlayerNameObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PlayGameCode.condition0IsTrue_0.val ) {
{
gdjs.PlayGameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.PlayGameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.PlayGameCode.GDRoomCodeObjects1.createFrom(runtimeScene.getObjects("RoomCode"));

gdjs.PlayGameCode.condition0IsTrue_0.val = false;
gdjs.PlayGameCode.condition1IsTrue_0.val = false;
{
gdjs.PlayGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlayGameCode.mapOfGDgdjs_46PlayGameCode_46GDRoomCodeObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PlayGameCode.condition0IsTrue_0.val ) {
{
gdjs.PlayGameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.PlayGameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{


gdjs.PlayGameCode.condition0IsTrue_0.val = false;
{
gdjs.PlayGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.PlayGameCode.condition0IsTrue_0.val) {
gdjs.PlayGameCode.GDEnterLevelCodeObjects1.createFrom(runtimeScene.getObjects("EnterLevelCode"));
gdjs.PlayGameCode.GDEnterPlayerNameObjects1.createFrom(runtimeScene.getObjects("EnterPlayerName"));
gdjs.PlayGameCode.GDEnterPlayerNameHereObjects1.createFrom(runtimeScene.getObjects("EnterPlayerNameHere"));
{for(var i = 0, len = gdjs.PlayGameCode.GDEnterPlayerNameHereObjects1.length ;i < len;++i) {
    gdjs.PlayGameCode.GDEnterPlayerNameHereObjects1[i].setString((( gdjs.PlayGameCode.GDEnterPlayerNameObjects1.length === 0 ) ? "" :gdjs.PlayGameCode.GDEnterPlayerNameObjects1[0].getString()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(10).setString((( gdjs.PlayGameCode.GDEnterPlayerNameObjects1.length === 0 ) ? "" :gdjs.PlayGameCode.GDEnterPlayerNameObjects1[0].getString()));
}{for(var i = 0, len = gdjs.PlayGameCode.GDEnterLevelCodeObjects1.length ;i < len;++i) {
    gdjs.PlayGameCode.GDEnterLevelCodeObjects1[i].setString("");
}
}}

}


{


gdjs.PlayGameCode.condition0IsTrue_0.val = false;
{
gdjs.PlayGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.PlayGameCode.condition0IsTrue_0.val) {
gdjs.PlayGameCode.GDEnterLevelCodeObjects1.createFrom(runtimeScene.getObjects("EnterLevelCode"));
gdjs.PlayGameCode.GDEnterPlayerNameObjects1.createFrom(runtimeScene.getObjects("EnterPlayerName"));
gdjs.PlayGameCode.GDEnterRoomCodeObjects1.createFrom(runtimeScene.getObjects("EnterRoomCode"));
{for(var i = 0, len = gdjs.PlayGameCode.GDEnterRoomCodeObjects1.length ;i < len;++i) {
    gdjs.PlayGameCode.GDEnterRoomCodeObjects1[i].setString((( gdjs.PlayGameCode.GDEnterLevelCodeObjects1.length === 0 ) ? "" :gdjs.PlayGameCode.GDEnterLevelCodeObjects1[0].getString()));
}
}{runtimeScene.getVariables().getFromIndex(2).setString((( gdjs.PlayGameCode.GDEnterLevelCodeObjects1.length === 0 ) ? "" :gdjs.PlayGameCode.GDEnterLevelCodeObjects1[0].getString()));
}{for(var i = 0, len = gdjs.PlayGameCode.GDEnterPlayerNameObjects1.length ;i < len;++i) {
    gdjs.PlayGameCode.GDEnterPlayerNameObjects1[i].setString("");
}
}}

}


{

gdjs.PlayGameCode.GDPlayButtonObjects1.createFrom(runtimeScene.getObjects("PlayButton"));

gdjs.PlayGameCode.condition0IsTrue_0.val = false;
{
{gdjs.PlayGameCode.conditionTrue_1 = gdjs.PlayGameCode.condition0IsTrue_0;
gdjs.PlayGameCode.condition0IsTrue_1.val = false;
gdjs.PlayGameCode.condition1IsTrue_1.val = false;
gdjs.PlayGameCode.condition2IsTrue_1.val = false;
gdjs.PlayGameCode.condition3IsTrue_1.val = false;
{
gdjs.PlayGameCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlayGameCode.mapOfGDgdjs_46PlayGameCode_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PlayGameCode.condition0IsTrue_1.val ) {
{
gdjs.PlayGameCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.PlayGameCode.condition1IsTrue_1.val ) {
{
gdjs.PlayGameCode.condition2IsTrue_1.val = !(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("PlayerName")) == "");
}if ( gdjs.PlayGameCode.condition2IsTrue_1.val ) {
{
gdjs.PlayGameCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)) == "HORROR3";
}}
}
}
gdjs.PlayGameCode.conditionTrue_1.val = true && gdjs.PlayGameCode.condition0IsTrue_1.val && gdjs.PlayGameCode.condition1IsTrue_1.val && gdjs.PlayGameCode.condition2IsTrue_1.val && gdjs.PlayGameCode.condition3IsTrue_1.val;
}
}if (gdjs.PlayGameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HauntedHouseHallway", false);
}}

}


{

gdjs.PlayGameCode.GDExitButtonObjects1.createFrom(runtimeScene.getObjects("ExitButton"));

gdjs.PlayGameCode.condition0IsTrue_0.val = false;
{
{gdjs.PlayGameCode.conditionTrue_1 = gdjs.PlayGameCode.condition0IsTrue_0;
gdjs.PlayGameCode.condition0IsTrue_1.val = false;
gdjs.PlayGameCode.condition1IsTrue_1.val = false;
{
gdjs.PlayGameCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlayGameCode.mapOfGDgdjs_46PlayGameCode_46GDExitButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PlayGameCode.condition0IsTrue_1.val ) {
{
gdjs.PlayGameCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.PlayGameCode.conditionTrue_1.val = true && gdjs.PlayGameCode.condition0IsTrue_1.val && gdjs.PlayGameCode.condition1IsTrue_1.val;
}
}if (gdjs.PlayGameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.PlayGameCode.eventsList0xb5aa0


gdjs.PlayGameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PlayGameCode.GDTitleScreenBackgroundObjects1.length = 0;
gdjs.PlayGameCode.GDTitleScreenBackgroundObjects2.length = 0;
gdjs.PlayGameCode.GDTitleScreenBackgroundObjects3.length = 0;
gdjs.PlayGameCode.GDPlayButtonObjects1.length = 0;
gdjs.PlayGameCode.GDPlayButtonObjects2.length = 0;
gdjs.PlayGameCode.GDPlayButtonObjects3.length = 0;
gdjs.PlayGameCode.GDExitButtonObjects1.length = 0;
gdjs.PlayGameCode.GDExitButtonObjects2.length = 0;
gdjs.PlayGameCode.GDExitButtonObjects3.length = 0;
gdjs.PlayGameCode.GDJackDialogTitleScreenObjects1.length = 0;
gdjs.PlayGameCode.GDJackDialogTitleScreenObjects2.length = 0;
gdjs.PlayGameCode.GDJackDialogTitleScreenObjects3.length = 0;
gdjs.PlayGameCode.GDPlayerObjects1.length = 0;
gdjs.PlayGameCode.GDPlayerObjects2.length = 0;
gdjs.PlayGameCode.GDPlayerObjects3.length = 0;
gdjs.PlayGameCode.GDJackOLantern2Objects1.length = 0;
gdjs.PlayGameCode.GDJackOLantern2Objects2.length = 0;
gdjs.PlayGameCode.GDJackOLantern2Objects3.length = 0;
gdjs.PlayGameCode.GDEleanorObjects1.length = 0;
gdjs.PlayGameCode.GDEleanorObjects2.length = 0;
gdjs.PlayGameCode.GDEleanorObjects3.length = 0;
gdjs.PlayGameCode.GDJackDialogBubbleObjects1.length = 0;
gdjs.PlayGameCode.GDJackDialogBubbleObjects2.length = 0;
gdjs.PlayGameCode.GDJackDialogBubbleObjects3.length = 0;
gdjs.PlayGameCode.GDNewObjectObjects1.length = 0;
gdjs.PlayGameCode.GDNewObjectObjects2.length = 0;
gdjs.PlayGameCode.GDNewObjectObjects3.length = 0;
gdjs.PlayGameCode.GDPlayerNameObjects1.length = 0;
gdjs.PlayGameCode.GDPlayerNameObjects2.length = 0;
gdjs.PlayGameCode.GDPlayerNameObjects3.length = 0;
gdjs.PlayGameCode.GDEnterPlayerNameObjects1.length = 0;
gdjs.PlayGameCode.GDEnterPlayerNameObjects2.length = 0;
gdjs.PlayGameCode.GDEnterPlayerNameObjects3.length = 0;
gdjs.PlayGameCode.GDEnterLevelCodeObjects1.length = 0;
gdjs.PlayGameCode.GDEnterLevelCodeObjects2.length = 0;
gdjs.PlayGameCode.GDEnterLevelCodeObjects3.length = 0;
gdjs.PlayGameCode.GDEnterPlayerNameHereObjects1.length = 0;
gdjs.PlayGameCode.GDEnterPlayerNameHereObjects2.length = 0;
gdjs.PlayGameCode.GDEnterPlayerNameHereObjects3.length = 0;
gdjs.PlayGameCode.GDEnterRoomCodeObjects1.length = 0;
gdjs.PlayGameCode.GDEnterRoomCodeObjects2.length = 0;
gdjs.PlayGameCode.GDEnterRoomCodeObjects3.length = 0;
gdjs.PlayGameCode.GDRoomCodeObjects1.length = 0;
gdjs.PlayGameCode.GDRoomCodeObjects2.length = 0;
gdjs.PlayGameCode.GDRoomCodeObjects3.length = 0;

gdjs.PlayGameCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['PlayGameCode'] = gdjs.PlayGameCode;

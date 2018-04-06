/*
Made By The C8 Development Team
*/
var modName = Template;
var modVersion =  B1;
var modAuthor = "C8 Developers";
var achievements = "Achievement Test";
var play = "Play Test";
var store = "Store Test";
var settings = "Settings/ Options Test"
//The Following Is Premade For U To Make The Copyright
var copyright = "+modName";
/*
Edit All Of The Values Of Those Vars
If you don't u may have messed up your client
*/
// Don't Edit The Following Var
var buildVersion = "01001101 01100001 01100100 01100101 00100000 01000010 01111001 00100000 01010100 01101000 01100101 00100000 01000011 00111000 00100000 01000100 01100101 01110110 01110011"
//The Var Was Just Telling In Binary That The Menu Was Made By Me And In Binary So People Cant Just Read It
/*
In The following list of vars is where u insert ur button names add more vars and use format for buttons later on
*/
//Start Vars
var button1 = Button;
var button2 = Button;
var button3 = Button;
var button4 = Button;
var button5 = Button;
var button6 = Button;
var button7 = Button;
var button8 = Button;
var button9 = Button;
var button10 = Button;
//End Vars
var GUI;
var menu;
var exitUI;
function dip2px(dips){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
function newLevel(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
try{
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var menuBtn = new android.widget.Button(ctx);
menuBtn.setText('C8 Template');
menuBtn.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
mainMenu();
exit();
}
}));
layout.addView(menuBtn);
GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 10, 20);
}catch(err){
print('An error occured: ' + err);
}
}}));
}
 function mainMenu(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
try{
var menuLayout = new android.widget.LinearLayout(ctx);
var menuScroll = new android.widget.ScrollView(ctx);
var menuLayout1 = new android.widget.LinearLayout(ctx);
menuLayout.setOrientation(1);
menuLayout1.setOrientation(1);
menuScroll.addView(menuLayout);
menuLayout1.addView(menuScroll);
var button = new android.widget.Button(ctx);
button.setText('+button1+');
button.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
    //Where Ur Code Goes
    }
    }));
    menuLayout.addView(button);
    
    var button = new android.widget.Button(ctx);
    button.setText('+button2+');
    button.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        //Where Ur Code Goes
        }
        }));
        
        var button = new android.widget.Button(ctx);
        button.setText('+button3+');
        button.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(viewarg){
            //Where Ur Code Goes
            }
            }));
            
            var button = new android.widget.Button(ctx);
            button.setText('+button5+');
            button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(viewarg){
                //Where Ur Code Goes
                }
                }));
                
                var button = new android.widget.Button(ctx);
                button.setText('+button6+');
                button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    //Where Ur Code Goes
                    }
                    }));
    /*
    The Following Edits The MCPE Main Page
    */
    ModPE.langEdit("menu.copyright","+copyright+")
    ModPE.langEdit("menu.play","+play+")
    ModPE.langEdit("menu.settings","+settings+")
    ModPE.langEdit("menu.store","+store+")
    ModPE.langEdit("menu.achievements","+achievements")
    
    
    
    
    
    menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
    menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
    menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
    }catch(error){
    print('An error occured: ' + error);
    }
    }}));
    }
    function exit(){
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({ run: function(){
    try{
    var xLayout = new android.widget.LinearLayout(ctxe);
    var xButton = new android.widget.Button(ctxe);
    xButton.setText('X');
    xButton.setTextColor(android.graphics.Color.WHITE);
    xButton.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
    exitUI.dismiss();
    menu.dismiss();
    }
    }));
    xLayout.addView(xButton);
    exitUI = new android.widget.PopupWindow(xLayout, dip2px(40), dip2px(40));
    exitUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
    exitUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
    }catch(exception){
    print(exception);
    }
    }}));
    }
    function leaveGame(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
    if(GUI != null){
    GUI.dismiss();
    GUI = null;
    }
    if(menu != null){
    menu.dismiss();
    menu = null;
    }
    if(exitUI != null){
    exitUI.dismiss();
    exitUI = null;
    }
    }}));
    }
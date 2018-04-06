ModPE.log(0)
menuBtn();
/*
Made By The C8 Development Team
*/
var modName = Template;
var modVersion =  B1;
var modAuthor = "C8 Developers";
var achievements = "Achievement Test";
var play = "Play Test";
var store = "Store Test";
var settings = "Settings","Options Test"
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

function menuBtn(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);

            var menuBtn = new android.widget.Button(ctx);
            menuBtn.setText("+modName+""+modVersion+");
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    mainMenu();
                }
            }));
            layout.addView(menuBtn);

            GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
        }catch(err){
            print("An error occured: " + err);
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
            button.setText("EXIT");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    menu.dismiss();
                    menu1.dismiss();
                }
            }));
            menuLayout.addView(button);

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
                

            menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/4, ctx.getWindowManager().getDefaultDisplay().getHeight());
            menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
            menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
        }catch(error){
            print("An error occured: " + error);
        }
    }}));
}
function mainMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var menuLayout1 = new android.widget.LinearLayout(ctx);
            var menuScroll1 = new android.widget.ScrollView(ctx);
            var menuLayout11 = new android.widget.LinearLayout(ctx);
            menuLayout1.setOrientation(1);
            menuLayout11.setOrientation(1);

            menuScroll1.addView(menuLayout1);
            menuLayout11.addView(menuScroll1);

            var button = new android.widget.Button(ctx);
            button.setText("Button");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    //Your Code
                }
            }));
            menuLayout1.addView(button);

            //Add more buttons in this section

            menu1 = new android.widget.PopupWindow(menuLayout11, ctx.getWindowManager().getDefaultDisplay().getWidth()/4, ctx.getWindowManager().getDefaultDisplay().getHeight());
            menu1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.YELLOW));
            menu1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
        }catch(error){
            print("An error occured: " + error);
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
        
    }}));
}

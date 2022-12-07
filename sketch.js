var face_size=[]
var place_x=[]
var place_y=[]
var song
var songIsplay=false
var amp
var vol
function preload(){
  song = loadSound("O Come All Ye Faithful - DJ Williams.mp3");
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES)

  for (var i=0;i<5;i++){
    face_size[i] = random(0.5,5)
    place_x [i]= random(10,width)
    place_y [i]= random(10,height)
    }
  }
  function draw() {
    background("#DFE9FF"); //一開始的背景顏色 
    textSize(50)
    text("X:"+mouseX+"  Y:"+mouseY,50,50)
    for(var j=0;j<5;j++)
    {
    push()
			var f_s = face_size[j]
    translate(place_x[j],place_y[j])
	//開始畫圖案
	noStroke()
	fill("#F56861")
  rect(-70/face_size[j]+face_size[j], 50/face_size[j]+face_size[j], 140/face_size[j], 80/face_size[j], 50/face_size[j]);//上衣
	rect(-100/face_size[j]+face_size[j],-100/face_size[j]+face_size[j],200/face_size[j],150/face_size[j],200/face_size[j]); //帽子
	//ellipse(-30/face_size[j]+face_size[j],-150/face_size[j]+face_size[j],30/face_size[j],100/face_size[j]); //帽子耳朵
	//ellipse(30/face_size[j]+face_size[j],-150/face_size[j]+face_size[j],30/face_size[j],100/face_size[j]); //帽子耳朵	
		
	 if(mouseIsPressed){
		fill("#F56861") 
		ellipse(-30/face_size[j]+face_size[j],-100/face_size[j]+face_size[j],30/face_size[j],100/face_size[j]); //帽子耳朵
	ellipse(30/face_size[j]+face_size[j],-100/face_size[j]+face_size[j],30/face_size[j],100/face_size[j]); //帽子耳朵	 
		ellipse(-55/face_size[j]+face_size[j],-145/face_size[j]+face_size[j],60/face_size[j],20/face_size[j]); //帽子耳朵 折耳朵
		ellipse(55/face_size[j]+face_size[j],-145/face_size[j]+face_size[j],60/face_size[j],20/face_size[j]); //帽子耳朵 折耳朵
		 
	 }
		else{
			ellipse(-30/face_size[j]+face_size[j],-150/face_size[j]+face_size[j],30/face_size[j],100/face_size[j]); //帽子耳朵
	ellipse(30/face_size[j]+face_size[j],-150/face_size[j]+face_size[j],30/face_size[j],100/face_size[j]); //帽子耳朵	
			fill(255)
	ellipse(-30/face_size[j]+face_size[j],-130/face_size[j]+face_size[j],10/face_size[j],80/face_size[j]); //帽子耳朵
	ellipse(30/face_size[j]+face_size[j],-130/face_size[j]+face_size[j],10/face_size[j],80/face_size[j]); //帽子耳朵	
		}
			
	//fill(255)
	//ellipse(-30/face_size[j]+face_size[j],-130/face_size[j]+face_size[j],10/face_size[j],80/face_size[j]); //帽子耳朵
	//ellipse(30/face_size[j]+face_size[j],-130/face_size[j]+face_size[j],10/face_size[j],80/face_size[j]); //帽子耳朵	
	fill("#FFDEAD") 
	rect(-70/face_size[j]+face_size[j], 120/face_size[j]+face_size[j], 140/face_size[j], 80/face_size[j], 10/face_size[j]);//裙子		
	fill(255)
	rect(-40/face_size[j]+face_size[j],230/face_size[j]+face_size[j],30/face_size[j],50/face_size[j])//襪子
	rect(10/face_size[j]+face_size[j],230/face_size[j]+face_size[j],30/face_size[j],50/face_size[j])//襪子	
	fill("#FFE8DC") //膚色
	rect(-40/face_size[j]+face_size[j],200/face_size[j]+face_size[j],30/face_size[j],50/face_size[j])//腳	
	rect(10/face_size[j]+face_size[j],200/face_size[j]+face_size[j],30/face_size[j],50/face_size[j])//腳		
	ellipse(-80/face_size[j]+face_size[j],150/face_size[j],65/face_size[j]); //右手
	ellipse(80/face_size[j]+face_size[j],150/face_size[j],65/face_size[j]); //左手
	//ellipse(-70/face_size[j]+face_size[j],125/face_size[j]+face_size[j],20/face_size[j],70/face_size[j]); //手指
	//ellipse(90/face_size[j]+face_size[j],125/face_size[j]+face_size[j],20/face_size[j],70/face_size[j]); //手指
	//ellipse(-90/face_size[j]+face_size[j],125/face_size[j]+face_size[j],20/face_size[j],70/face_size[j]); //手指
	//ellipse(70/face_size[j]+face_size[j],125/face_size[j]+face_size[j],20/face_size[j],70/face_size[j]); //手指
		if(mouseIsPressed){
	fill("#F27713") //紅蘿蔔
	ellipse(-80/face_size[j]+face_size[j],105/face_size[j]+face_size[j],40/face_size[j],100/face_size[j]); //紅蘿蔔
	fill("#90F56F")
	ellipse(-70/face_size[j]+face_size[j],45/face_size[j]+face_size[j],20/face_size[j],40/face_size[j]); //葉
	ellipse(-90/face_size[j]+face_size[j],45/face_size[j]+face_size[j],20/face_size[j],40/face_size[j]); //葉
	fill("#77C722")		
	ellipse(-80/face_size[j]+face_size[j],45/face_size[j]+face_size[j],20/face_size[j],40/face_size[j]); //葉
		}
			else{
	fill("#FFE8DC") //膚色			
	ellipse(-70/face_size[j]+face_size[j],125/face_size[j]+face_size[j],20/face_size[j],70/face_size[j]); //手指
	ellipse(90/face_size[j]+face_size[j],125/face_size[j]+face_size[j],20/face_size[j],70/face_size[j]); //手指
	ellipse(-90/face_size[j]+face_size[j],125/face_size[j]+face_size[j],20/face_size[j],70/face_size[j]); //手指
	ellipse(70/face_size[j]+face_size[j],125/face_size[j]+face_size[j],20/face_size[j],70/face_size[j]); //手指
			}
			
	fill("#8C635F")
	ellipse(-25/face_size[j]+face_size[j],280/face_size[j]+face_size[j],45/face_size[j],25/face_size[j])//鞋子
  ellipse(25/face_size[j]+face_size[j],280/face_size[j]+face_size[j],45/face_size[j],25/face_size[j])//鞋子	
	fill(0)
  fill(255)
	ellipse(face_size[j],100/face_size[j]+face_size[j],10/face_size[j],10/face_size[j]); //鈕扣
	ellipse(face_size[j],150/face_size[j]+face_size[j],10/face_size[j],10/face_size[j]); //鈕扣
	fill(50); //頭部
	noStroke();
  arc(face_size[j],-15/face_size[j]+face_size[j],250/face_size[j],40/face_size[j],180/face_size[j],face_size[j])//髮尾
	ellipse(face_size[j], -40/face_size[j]+face_size[j], 180/face_size[j], 170/face_size[j]); //頭髮		
	rect(-80/face_size[j]+face_size[j],-100/face_size[j]+face_size[j],160/face_size[j],30/face_size[j]) //角
	ellipseMode(CENTER); //耳朵
	strokeWeight(2);
	fill("#FFE8DC");
	ellipse(-77/face_size[j]+face_size[j],-10/face_size[j]+face_size[j], 25/face_size[j], 40/face_size[j]); //耳朵
	ellipse(78/face_size[j]+face_size[j],-13/face_size[j]+face_size[j], 25/face_size[j], 40/face_size[j]); //耳朵
	noStroke();
	fill("#FFE8DC");//臉
	ellipse(face_size[j],-20/face_size[j]+face_size[j], 159/face_size[j], 167/face_size[j]); 
	fill(0);//眼珠
	stroke(0);
	ellipse(-30/face_size[j]+face_size[j],-20/face_size[j]+face_size[j], 10/face_size[j], 20/face_size[j]); //眼睛
	ellipse(30/face_size[j]+face_size[j],-20/face_size[j]+face_size[j], 10/face_size[j], 20/face_size[j]); //眼睛
	fill(50);	
	noStroke();	
	rect(-45/face_size[j]+face_size[j],-92/face_size[j]+face_size[j],5/face_size[j],53/face_size[j],1/face_size[j])//瀏海
	rect(-25/face_size[j]+face_size[j],-103/face_size[j]+face_size[j],5/face_size[j],63/face_size[j],1/face_size[j])//瀏海	
  rect(-4/face_size[j]+face_size[j],-105/face_size[j]+face_size[j],5/face_size[j],65/face_size[j],1/face_size[j])//瀏海
	rect(35/face_size[j]+face_size[j],-95/face_size[j]+face_size[j],5/face_size[j],55/face_size[j],1/face_size[j])//瀏海	
	rect(15/face_size[j]+face_size[j],-105/face_size[j]+face_size[j],5/face_size[j],65/face_size[j],1/face_size[j])//瀏海	
	fill("#ffddd2")
	noFill();
	fill("#FF8286")
	strokeWeight(1.5);
		noStroke()
	ellipse(1/face_size[j]+face_size[j], 12/face_size[j]+face_size[j], 80/face_size[j], 15/face_size[j]) //嘴巴
	fill("#FCFAF9")
	rect(-22/face_size[j]+face_size[j],4/face_size[j]+face_size[j],50/face_size[j],5/face_size[j]) //牙齒
	fill("#FF417E")
	ellipse(45/face_size[j]+face_size[j],face_size[j],20/face_size[j],10/face_size[j]) //腮紅
	ellipse(-40/face_size[j]+face_size[j],face_size[j],20/face_size[j],10/face_size[j]) //腮紅 
	if(!songIsplay){
    fill("#8C635F")
    ellipse(-25/face_size[j]+face_size[j],280/face_size[j]+face_size[j],45/face_size[j],25/face_size[j])//鞋子
  ellipse(25/face_size[j]+face_size[j],280/face_size[j]+face_size[j],45/face_size[j],25/face_size[j])//鞋子	 //沒有播放
  }
  else{
    if(!songIsplay){
      fill("#BD11D9")
      ellipse(-25/face_size[j]+face_size[j],280/face_size[j]+face_size[j],45/face_size[j],25/face_size[j])//鞋子
      ellipse(25/face_size[j]+face_size[j],280/face_size[j]+face_size[j],45/face_size[j],25/face_size[j])//鞋子	
  }
    vol = amp.getLevel() //取得聲音值(值為0~1之間)
    // console.log(vol) //網頁中console數字
    fill("#BD11D9")
    ellipse(-25/face_size[j]+face_size[j],280/face_size[j]+face_size[j],45/face_size[j],25/face_size[j])//鞋子
    ellipse(25/face_size[j]+face_size[j],280/face_size[j]+face_size[j],45/face_size[j],25/face_size[j])//鞋子	
  }
  
}

  pop()		
			
	}
  function mousePressed() //音樂
  {
    if(!songIsplay){
      song.play()
      songIsplay = true
      amp=new p5.Amplitude()

    }
    else{
      song.pause()
      songIsplay = false

    }
    
  }




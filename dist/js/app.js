!function t(s,i,e){function l(n,h){if(!i[n]){if(!s[n]){var o="function"==typeof require&&require;if(!h&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var a=i[n]={exports:{}};s[n][0].call(a.exports,function(t){var i=s[n][1][t];return l(i?i:t)},a,a.exports,t,s,i,e)}return i[n].exports}for(var r="function"==typeof require&&require,n=0;n<e.length;n++)l(e[n]);return l}({1:[function(t,s,i){var e=function(){this.$canvas=$(".labyrinth__canvas")[0],this.canvas=this.$canvas.getContext("2d"),this.rows,this.cols,this.cells=[],this.currentCell,this.startingCell="0_0",this.endingCell=!1,this.sizeCell=20,this.borderWidth=5,this.borderColor="#00",this.cache=[],this.count=0,this.indexGoBack=0,this.init=function(t,s,i,e){this.borderColor=e,this.borderWidth=i,this.sizeCell=s,this.rows=t,this.cols=t;for(var l=0;l<this.cols;l++){this.cells[l]=[];for(var r=0;r<this.rows;r++)this.cells[l][r]="1111"}$(".labyrinth__canvas").prop({width:this.sizeCell*this.cols+5,height:this.sizeCell*this.rows+5});var n=this.canvas;for(l=0;l<this.cols;l++)for(r=0;r<this.rows;r++)n.lineWidth=this.borderWidth,n.strokeStyle=this.borderColor,n.strokeRect(r*this.sizeCell+2,l*this.sizeCell+2,this.sizeCell,this.sizeCell);this.startingCell=Math.floor(Math.random()*this.rows)+"_"+Math.floor(Math.random()*this.cols)},this.build=function(){var t=this.startingCell.lastIndexOf("_"),s=this.startingCell.substr(0,t),i=this.startingCell.substring(t+1);this.cache.push(s+"_"+i),this.jump(s,i)},this.jump=function(t,s){t=parseInt(t),s=parseInt(s);for(var i=[],e=1;5>e;e++)switch(e){case 1:this.check(t,s-1)&&i.push(t+"_"+(s-1));break;case 2:this.check(t,s+1)&&i.push(t+"_"+(s+1));break;case 3:this.check(t-1,s)&&i.push(t-1+"_"+s);break;case 4:this.check(t+1,s)&&i.push(t+1+"_"+s)}if(0==i.length){if(!this.endingCell){var l=this.canvas;l.fillStyle="blue",l.fillRect(this.currentCell.substr(0,this.currentCell.lastIndexOf("_"))*this.sizeCell+2+(this.sizeCell-10)/2,this.currentCell.substring(this.currentCell.lastIndexOf("_")+1)*this.sizeCell+2+(this.sizeCell-10)/2,10,10),this.endingCell=this.currentCell}this.currentCell!=this.startingCell&&this.goBack()}else{this.count++;var r=i[Math.floor(Math.random()*i.length)];this.currentCell=r,this.transpierce(t+"_"+s,r),this.cache.push(t+"_"+s),this.indexGoBack=this.count-1,this.jump(r.substr(0,r.lastIndexOf("_")),r.substring(r.lastIndexOf("_")+1))}},this.check=function(t,s){return-1==t||-1==s||t==this.cols||s==this.rows?!1:"c"==this.cells[t][s].substring(0,1)?!1:!0},this.setState=function(t,s){"c"==t.substring(0,1)&&(t=t.substring(1));var i=[];i.top=1,i.right=2,i.bottom=3,i.left=4;var e=t.substr(0,i[s]-1),l=t.substring(i[s]),t=e+"0"+l;return t},this.transpierce=function(t,s){p1Index=t.lastIndexOf("_"),p2Index=s.lastIndexOf("_"),p1=[],p2=[],p1.x=parseInt(t.substr(0,p1Index)),p2.x=parseInt(s.substr(0,p2Index)),p1.y=parseInt(t.substring(p1Index+1)),p2.y=parseInt(s.substring(p2Index+1));var i=p1.x*this.sizeCell+this.borderWidth,e=p1.y*this.sizeCell+this.borderWidth;p1.x==p2.x?p2.y<p1.y?(p1Direction="top",p2Direction="bottom",e-=this.sizeCell/2):(p1Direction="bottom",p2Direction="top",e+=this.sizeCell/2):p2.x<p1.x?(p1Direction="left",p2Direction="right",i-=this.sizeCell/2):(p1Direction="right",p2Direction="left",i+=this.sizeCell/2),this.cells[p1.x][p1.y]="c"+this.setState(this.cells[p1.x][p1.y],p1Direction),this.cells[p2.x][p2.y]="c"+this.setState(this.cells[p2.x][p2.y],p2Direction),this.canvas.clearRect(i,e,this.sizeCell-this.borderWidth,this.sizeCell-this.borderWidth),console.log(this.sizeCell-this.borderWidth)},this.goBack=function(){if(0==!this.indexGoBack){this.indexGoBack=this.indexGoBack-1;var t=this.cache[this.indexGoBack],s=t.lastIndexOf("_"),i=t.substr(0,s),e=t.substring(s+1);this.jump(i,e)}},this.getInformations=function(){var t={startingCell:this.startingCell,endingCell:this.endingCell,cells:this.cells,sizeCell:this.sizeCell,borderWidthCell:this.borderWidth};return t}};s.exports=e},{}],2:[function(t,s,i){var e=function(){this.$player,this.sizePlayer,this.sizeCell,this.startingCell,this.currentCell,this.endingCell,this.cells,this.init=function(t,s,i){this.$player=t,this.sizePlayer=s,this.sizeCell=i.sizeCell,this.startingCell=i.startingCell,this.endingCell=i.endingCell,this.cells=i.cells,this.currentCell=this.startingCell;var e=this.startingCell.lastIndexOf("_"),l=this.startingCell.substr(0,e),r=this.startingCell.substring(e+1),n=i.borderWidthCell+(parseInt(this.sizeCell)-parseInt(this.sizePlayer))/2;this.$player.css({left:Math.floor(l*this.sizeCell+n)-1+"px",top:Math.floor(r*this.sizeCell+n)-1+"px"})},this.move=function(t){var s=this.currentCell.lastIndexOf("_"),i=parseInt(this.currentCell.substr(0,s)),e=parseInt(this.currentCell.substring(s+1)),l=this.cells[i][e].substring(1),r=parseInt(this.$player.css("top")),n=parseInt(this.$player.css("left"));38==t.keyCode?0==l.substring(0,1)&&(r-=this.sizeCell,e-=1):39==t.keyCode?0==l.substring(1,2)&&(n+=this.sizeCell,i+=1):40==t.keyCode?0==l.substring(2,3)&&(r+=this.sizeCell,e+=1):37==t.keyCode&&0==l.substring(3,4)&&(n-=this.sizeCell,i-=1),this.currentCell=parseInt(i)+"_"+parseInt(e),this.$player.css({top:r+"px",left:n+"px"}),this.win()&&console.log("Win !!")},this.win=function(){return this.currentCell==this.endingCell?!0:!1}};s.exports=e},{}],3:[function(t,s,i){!function(i){i.fn.labyrinth=function(s){i(this).prepend('<canvas class="labyrinth__canvas" width="200" height="200"></canvas>'),i(this).css("position","relative");var e=t("./constructor.js"),l=new e;l.init(s.grid,s.sizeCell,s.borderWidthCell,s.borderColorCell),l.build();var r=s.colorPlayer,n=s.sizePlayer,s=l.getInformations();i(this).append('<svg class="labyrinth__player" height="'+n+'" width="'+n+'"><circle cy="'+n/2+'" cx="'+n/2+'" r="'+n/2+'" fill="'+r+'" /></svg>'),i(this).find(".labyrinth__player").css({position:"absolute",top:0,left:0});var h=t("./gameplay.js"),h=new h;h.init(i(".labyrinth__player"),n,s),i(document).keydown(function(t){h.move(t)})},s.exports=i.fn.labyrinth}(jQuery)},{"./constructor.js":1,"./gameplay.js":2}],4:[function(t,s,i){t("./Labyrinth/index.js");$(".labyrinth").labyrinth({grid:15,sizeCell:60,borderWidthCell:4,borderColorCell:"#b45252",sizePlayer:10,colorPlayer:"#9d5e82"});t("./shapesGame/index.js")},{"./Labyrinth/index.js":3,"./shapesGame/index.js":5}],5:[function(t,s,i){!function(t){t.fn.shapesGame=function(t){},s.exports=t.fn.labyrinth}(jQuery)},{}]},{},[4]);
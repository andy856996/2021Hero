// $(document).ready(function(){
//   $("h41").mouseover(function(){
//     $("h41").css("background-color","yellow");
//   });
//   $("h41").mouseout(function(){
//     $("h41").css("background-color","#E9E9E4");
//   });
// });
function isMobile() {

  try{ document.createEvent("TouchEvent"); return true; }

  catch(e){ return false;}

}
if(isMobile()){
  alert("您使用手機瀏覽。");
}else{
  alert("您使用電腦瀏覽。");
  $(".about_us_picture_p_display").css("display", "none");
  $(document).ready(function(){
  $(".picture_H1").mouseover(function(){
    $("#about_us_picture_1").text("默默記下精彩片刻 話少認真是我們做事的態度 潛伏於人群中，尋找值得留下的回憶");
    $("#about_us_picture_1").css("fontSize", "20px");
  });
  $(".picture_H1").mouseout(function(){
    $("#about_us_picture_1").text("攝影組");
    $("#about_us_picture_1").css("fontSize", "1.5rem");
  });
  });
  $(document).ready(function(){
    $(".picture_H2").mouseover(function(){
      $("#about_us_picture_2").text("愛玩的瘋子 活潑熱情 動靜分明");
      $("#about_us_picture_2").css("fontSize", "20px");
    });
    $(".picture_H2").mouseout(function(){
      $("#about_us_picture_2").text("活動組");
      $("#about_us_picture_2").css("fontSize", "1.5rem");
    });
  });
  $(document).ready(function(){
    $(".picture_H3").mouseover(function(){
      $("#about_us_picture_3").text("講求效率 講重點!!!!廢話少說!!!!! 精打細算 女強人 假會計，真總務");
      $("#about_us_picture_3").css("fontSize", "20px");
    });
    $(".picture_H3").mouseout(function(){
      $("#about_us_picture_3").text("總務組");
      $("#about_us_picture_3").css("fontSize", "1.5rem");
    });
  });
  $(document).ready(function(){
    $(".picture_H4").mouseover(function(){
      $("#about_us_picture_4").text("負責任/比起指責錯誤，更傾向於改正錯誤/能動能靜，大笑中不失那份沉穩/鼓勵代替責罵");
      $("#about_us_picture_4").css("fontSize", "20px");
    });
    $(".picture_H4").mouseout(function(){
      $("#about_us_picture_4").text("總召組");
      $("#about_us_picture_4").css("fontSize", "1.5rem");
    });
  });
  $(document).ready(function(){
    $(".picture_H5").mouseover(function(){
      $("#about_us_picture_5").text("瀺灂 活躍 窮源竟委 實事求是 量體裁衣");
      $("#about_us_picture_5").css("fontSize", "0.7rem");
    });
    $(".picture_H5").mouseout(function(){
      $("#about_us_picture_5").text("租借組");
      $("#about_us_picture_5").css("fontSize", "1.5rem");
    });
  });
  $(document).ready(function(){
    $(".picture_H6").mouseover(function(){
      $("#about_us_picture_6").text("多元表達 富想像力 敏銳且感性");
      $("#about_us_picture_6").css("fontSize", "20px");
    });
    $(".picture_H6").mouseout(function(){
      $("#about_us_picture_6").text("文宣組");
      $("#about_us_picture_6").css("fontSize", "1.5rem");
    });
  });
  $(document).ready(function(){
    $(".picture_H7").mouseover(function(){
      $("#about_us_picture_7").text("熱心助人 在你最無助的時候支援你 體力怪💪");
      $("#about_us_picture_7").css("fontSize", "20px");
    });
    $(".picture_H7").mouseout(function(){
      $("#about_us_picture_7").text("機動組");
      $("#about_us_picture_7").css("fontSize", "1.5rem");
    });
  });
  $(document).ready(function(){
    $(".picture_H8").mouseover(function(){
      $("#about_us_picture_8").text("大大大優惠 分工明確 悶騷的6個人類");
      $("#about_us_picture_8").css("fontSize", "20px");
    });
    $(".picture_H8").mouseout(function(){
      $("#about_us_picture_8").text("宣傳組");
      $("#about_us_picture_8").css("fontSize", "1.5rem");
    });
  });
}

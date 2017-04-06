<script type="text/javascript">
var dDate=new Date();
var cur_month=dDate.getMonth();
var day_of_month=dDate.getDate();
var cur_year=dDate.getFullYear();
var Prev_Element=new Object();
var bgcolor, webgcolor, wecolor, nwecolor, tbgcolor, ntbgcolor, sbgcolor;

function fToggle_color(el) {
var toggle_col="#ff0000";
if (el.id=="cal_text") {
  if (el.color==toggle_col) el.color="";
  else el.color=toggle_col;
}
else if ((el.id=="cal_cell") || (el.id=="today_cell")) {
 for (var i in el.children) {
  if (el.children[i].id=="cal_text") {
   if (el.children[i].color==toggle_col) el.children[i].color="";
   else el.children[i].color=toggle_col;
  }
 }
}
}

function opted_day(el) {
if (el.id=="cal_cell") {
 if (!isNaN(parseInt(el.children["cal_text"].innerText))) {
  el.bgColor=sbgcolor;
  Prev_Element.bgColor=ntbgcolor;
  document.all.selected_date.value=parseInt(el.children["cal_text"].innerText);
  Prev_Element=el;
 }
}
}

function DaysInMonth(iMonth, iYear) {
var prev_date=new Date(iYear, iMonth, 0);
return prev_date.getDate();
}

function build_cal(iYear, iMonth) {
var the_month=new Array();
    the_month[0]=new Array("Пн","Вт","Ср","Чт","Пт","Сб","Вс");
    the_month[1]=new Array(7);
    the_month[2]=new Array(7);
    the_month[3]=new Array(7);
    the_month[4]=new Array(7);
    the_month[5]=new Array(7);
    the_month[6]=new Array(7);
var dCalDate=new Date(iYear, iMonth-1, 1);
var day_first=dCalDate.getDay();
var iDaysInMonth=DaysInMonth(iMonth, iYear);
var iVarDate=1;
var i, d, w;
if (day_first==0) day_first=6;
else day_first=day_first-1;

for (d=day_first; d < 7; d++) {
 the_month[1][d]=iVarDate;
 iVarDate++;
}
for (w=2; w < 7; w++) {
 for (d=0; d < 7; d++) {
  if (iVarDate <= iDaysInMonth) {
   the_month[w][d]=iVarDate;
   iVarDate++;
  }
 }
}
return the_month;
}

function draw_cal(iYear, iMonth, cell_width, cell_height, text_weight, ibg_col,
                  iwebg_col, inwe_col, iwe_col, itbg_col, intbg_col, isbg_col) {
bgcolor=ibg_col;
webgcolor=iwebg_col;
nwecolor=inwe_col;
wecolor=iwe_col;
tbgcolor=itbg_col;
ntbgcolor=intbg_col;
sbgcolor=isbg_col;

var my_month;
my_month=build_cal(iYear, iMonth);
document.write("<table border='0'>")
document.write("<tr align='center' style='background-color:" + bgcolor +
                ";color:" + nwecolor +"'>");
document.write("<td><b>" + my_month[0][0] + "</b></td>");
document.write("<td><b>" + my_month[0][1] + "</b></td>");
document.write("<td><b>" + my_month[0][2] + "</b></td>");
document.write("<td><b>" + my_month[0][3] + "</b></td>");
document.write("<td><b>" + my_month[0][4] + "</b></td>");
document.write("<td style='background-color:" + webgcolor + ";color:" +
                wecolor + "'><b>" + my_month[0][5] + "</b></td>");
document.write("<td style='background-color:" + webgcolor + ";color:" +
                wecolor + "'><b>" + my_month[0][6] + "</b></td>");
document.write("</tr>");
for (w=1; w < 7; w++) {
 document.write("<tr align='center' valign='center'>")
 for (d=0; d < 7; d++) {
  if (my_month[w][d]==day_of_month) document.write("<td id=today_cell bgcolor='" +
          tbgcolor + "'width='" + cell_width + "' height='" + cell_height +
          "'style='cursor:Hand;font-weight:" +
          text_weight + "' onMouseOver='fToggle_color(this)' +
          onMouseOut='fToggle_color(this)' onclick='opted_day(this)'>");
  else document.write("<td id=cal_cell bgcolor='" + ntbgcolor + "'width='" +
          cell_width + "' height='" + cell_height +
          "'style='cursor:Hand;font-weight:" +
          text_weight + "' onMouseOver='fToggle_color(this)' +
          onMouseOut='fToggle_color(this)' onclick='opted_day(this)'>");

  if (!isNaN(my_month[w][d]))
          document.write("<font id=cal_text onclick=opted_day(this)>" +
          my_month[w][d]);
  else document.write("<font id=cal_text onclick=opted_day(this)>&nbsp;");
 document.write("</td>")
 }
document.write("</tr>");
}
document.write("</table>")
}

function update(iYear, iMonth) {
my_month=build_cal(iYear, iMonth);
Prev_Element.bgColor=ntbgcolor;
if (((iMonth-1)==cur_month) && (iYear==cur_year)) today_cell.bgColor=tbgcolor;
else today_cell.bgColor=ntbgcolor;

document.all.selected_date.value="";
for (w=1; w < 7; w++) {
 for (d=0; d < 7; d++) {
  if (!isNaN(my_month[w][d])) cal_text[((7*w)+d)-7].innerText=my_month[w][d];
  else cal_text[((7*w)+d)-7].innerText=" ";
 }
}
}
</script>
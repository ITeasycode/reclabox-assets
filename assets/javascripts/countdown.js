/**
 * @author Luca
 */

var defenceCounter = {
  tick: function() {
    this.addSec();
    this.refresh();
    setTimeout('defenceCounter.tick()', 1000);
  },

  addSec: function() {
    this.time['s']++;
    if (this.time['s'] > 59) {
      this.time['s'] = 0;
      this.time['m']++;
    }
    if (this.time['m'] > 59) {
      this.time['m'] = 0;
      this.time['h']++;
    }
    if (this.time['h'] > 23) {
      this.time['h'] = 0;
      this.time['d']++;
    }
    if (this.time['d'] > 364) {
      this.time['d'] = 0;
      this.time['y']++;
    }
  },

  refresh: function() {
    var showOthers = false;
    var clockString = '';

    if (this.time['y'] > 0) {
      clockString += '<span class="fletter">' + this.time['y'] + '</span>';
      clockString += '<span style="font-weight:normal">'+ ' ' + (this.time['y'] == 1 ? this.dateStr['year_sg'] : this.dateStr['year_pl']) + ', '+'</span>';
      showOthers = true;
    }
    if (this.time['d'] > 0 || showOthers) {
      clockString += '<span class="fletter">' + this.time['d'] + '</span>';
      clockString += '<span style="font-weight:normal">'+ ' ' + (this.time['d'] == 1 ? this.dateStr['day_sg'] : this.dateStr['day_pl']) +'</span>';
      showOthers = true;
    }
    if (this.time['h'] > 0 || showOthers) {
      clockString += '<span style="font-weight:normal">' +' '+ this.dateStr['and']+' '+'</span>';
      clockString += '<span class="fletter">' + this.time['h'] + '</span>';
      clockString += '<span style="font-weight:normal">'+' ' + (this.time['h'] == 1 ? this.dateStr['hour_sg'] : this.dateStr['hour_pl']) + '. '+'</span>';
      showOthers = true;
    }
    else {
        clockString += '<span style="font-weight:normal">' + '.' + '</span>';
    }
/*    if (this.time['m'] > 0 || showOthers) {
      clockString += '<span class="fletter">' + this.time['m'] + '</span>';
      clockString += ' ' + (this.time['m'] == 1 ? this.dateStr['min_sg'] : this.dateStr['min_pl']) + ' ' + this.dateStr['and']+ ' ';
    }
    clockString += '<span class="fletter">' + this.time['s'] + '</span>';
    clockString += ' ' + (this.time['s'] == 1 ? this.dateStr['sec_sg'] : this.dateStr['sec_pl']) + '.';*/

    document.getElementById('tempospan').innerHTML = clockString;
  }
}

function setupDefenceCounter(complaintTime, dateStrings) {
  var now;
  var diff;
  var rest;
  var time = [];

  now = new Date();
  now = now.getTime();  // milliseconds since 1.1.1970
  diff = Math.floor(now / 1000) - complaintTime;
  time['y'] = Math.floor(diff / 31536000);  // 365 * 86400
  rest = diff % 31536000;
  time['d'] = Math.floor(rest / 86400);
  rest = rest % 86400;
  time['h'] = Math.floor(rest / 3600);
  rest = rest % 3600;
  time['m'] = Math.floor(rest / 60);
  time['s'] = rest % 60;

  defenceCounter.time = time;
  defenceCounter.dateStr = dateStrings;
  defenceCounter.tick();
}

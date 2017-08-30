var popup_windows = {
  storage: '',
  rxp: function(name) {
    return new RegExp('(^' + name + ' | ' + name + ' )'); /* /(^#{name} | #{name} )/ */
  },
  hide_and_remove: function(name) {
    if (this.remove(name)) {
      HideWin(name);
      return true;
    } else {
      return false;
    }
  },
  add: function(name) {
    this.storage = this.storage + name + ' ';
  },
  add_unless_present: function(name) {
    var i = this.storage.search(this.rxp(name));
    if (i > -1) {
      return false;
    } else {
      this.add(name);
      return true;
    }
  },
  remove: function(name) {
    var i = this.storage.search(this.rxp(name));
    if (i > -1) {
      this.storage = this.storage.slice(0, i) + this.storage.slice(i + name.length + 1, this.storage.length);
      return true;
    } else {
      return false;
    }
  }
};

function ShowWin(name, val) {
  if (popup_windows.add_unless_present(name)) {
    document.getElementById(name).style.left = ((1000 - val) / 2) + "px";
    document.getElementById(name).style.top = (document.documentElement.scrollTop + 100) + "px";
    if (name === "bildbox") {
      document.getElementById(name).style.left = ((document.body.clientWidth - val) / 2) + "px";
    }
    if (name === "videobox") {
      document.getElementById(name).style.left = ((document.body.clientWidth - val) / 2) + "px";
    }
    if (name === "firebook") {
      document.getElementById(name).style.top = (document.documentElement.scrollTop + 10) + "px";
    }
    document.getElementById(name).style.display = "block";
    ADD_DHTML(name);
  } else {
    dd.elements[name].show();
  }
  if (name === "kommentbox") { document.getElementById("comment_body").focus(); }
  if (name === "empfbox") { document.getElementById("empfmail").focus(); }
  if (name === "weiterbox") { document.getElementById("weitermail").focus(); }
  document.getElementById(name).parentElement.classList.add('active')
  dd.elements[name].maximizeZ();
}

function HideWin(name) {
  document.getElementById(name).parentElement.classList.remove('active')
  dd.elements[name].hide(true);  
}

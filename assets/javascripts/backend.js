function add_default_country_codes_from_firm(firms_element_id, ccodes_element_id, complaint_id) {
  var selected_firm = function() {
    var a = jQuery('#' + firms_element_id + ' > option');
    var len = a.length;
    for (var i = 0; i < len; i++) {
      if (a[i].selected && a[i].value != '') {
        return a[i].value;
      }
    }
  }();
  if (selected_firm) {
    jQuery.get('/fantastilli0n/complaints/add_default_country_codes_from_firm',
      {selected_firm: selected_firm, ccodes_element_id: ccodes_element_id, id: complaint_id});
  }
}

function select_country_codes(ccodes_element_id, ccodes) {
  jQuery('#' + ccodes_element_id + ' > option').each(function(i, chnode) {
    if (ccodes[chnode.value]) {
      chnode.selected = true;
    } else {
      chnode.selected = false;
    }
  });
}

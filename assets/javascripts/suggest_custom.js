function SuggestCustom(candidates_list, data_hash) {
  this.element_ids = ['on_firm_id', 'on_firm_street', 'on_firm_city', 'on_firm_zipcode']  // same order as in data_hash!
  this.candidates_list = candidates_list;
  this.data_hash = data_hash;
  this.firm_name = '';
  
  // initialize defaults to blank strings, e.g.: this.on_firm_zipcode = '';
  for (var i = 0; i < this.element_ids.length; i++) {
    this[this.element_ids[i]] = '';
    this[this.element_ids[i] + '_color'] = '#999';
  }

  this.fillFormFields = function(firm_name) {
    if (this.data_hash[firm_name] != null) {
      // e.g.: this.fillFormField('on_firm_street', this.data_hash[firm_name][0]);
      for (var i = 0; i < this.element_ids.length; i++) {
        this.fillFormField(this.element_ids[i], this.data_hash[firm_name][i]);
      }
    } else if (firm_name == this.firm_name) {
      this.restoreOldValues();
    }
  };

  this.fillFormField = function(element_id, value) {
    if (value != null) {
      var element = document.getElementById(element_id);
      element.value = value;
      element.style.color = '#455A64';
    }
  };

  this.storeOldValues = function(firm_name) {
    this.firm_name = firm_name;
    // e.g.: this.on_firm_street = document.getElementById('on_firm_street').value;
    for (var i = 0; i < this.element_ids.length; i++) {
      this[this.element_ids[i]] = document.getElementById(this.element_ids[i]).value;
      this[this.element_ids[i] + '_color'] = document.getElementById(this.element_ids[i]).style.color;
    }
  };

  this.restoreOldValues = function() {
    // e.g.: document.getElementById('on_firm_street').value = this.on_firm_street;
    for (var i = 0; i < this.element_ids.length; i++) {
      document.getElementById(this.element_ids[i]).value = this[this.element_ids[i]];
      document.getElementById(this.element_ids[i]).style.color = this[this.element_ids[i] + '_color'];
    }
  };

  this.hookAfterSetInputText = this.fillFormFields;
  this.hookBeforeSearch = this.storeOldValues;
}

function startSuggest() {
  new Suggest.Local(
    "on_firm",  // input element id.
    "suggest",  // suggestion area id.
    suggest_custom.candidates_list,  // suggest candidates list  
    {  // options
      dispMax: 10,
      interval: 1000,
      hookProvider: suggest_custom  
    }
  );
}

function startSuggest2() {
  new Suggest.Local(
    "not_used_on_firm",  // input element id.
    "not_used_suggest",  // suggestion area id.
    suggest_custom.candidates_list,  // suggest candidates list  
    {  // options
      dispMax: 10,
      interval: 1000,
      hookProvider: suggest_custom
    }
  );
}

window.addEventListener ? window.addEventListener('load', startSuggest, false) : window.attachEvent('onload', startSuggest);
window.addEventListener ? window.addEventListener('load', startSuggest2, false) : window.attachEvent('onload', startSuggest2);

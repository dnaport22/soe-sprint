//ES5 Class to perform ajax calls
function Submitform(type, url, data, cache) {
    this.type = type;
    this.dataArray = data;
    this.url = url;
    this.cache = cache;
}

Submitform.prototype.ajaxSubmit = function(callback) {
  $.ajax({
    type: this.type,
    url: this.url,
    cache: this.cache,
    data: this.dataArray,
    success: function(response, headers) {
      callback.onSuccess(response);
    },
    error: function(error) {
      callback.onError(error);
    }
  });
}

Submitform.prototype.ajaxFileSubmit = function(callback) {
  console.log(this.dataArray)
  $.ajax({
    type: this.type,
    url: this.url,
    cache: this.cache,
    dataType: 'json',
    contentType: false,
    data: this.dataArray,
    processData: false,
    success: function(response) {
      callback.onSuccess(response);
    },
    error: function(error) {
      callback.onError(error);
    }
  });
}

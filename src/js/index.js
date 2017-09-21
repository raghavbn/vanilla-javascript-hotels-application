Accordion = function(location, list, count){
    this.location = location;
    this.list = list;
    this.count = count;
};
Accordion.prototype.buildHtml = function () {
    var hotelData = {
        location: this.location,
        hotelCount: this.count,
        hotelList: this.list
    };
    var template = _.template($('#hotel-list-template').html())({data : hotelData});
    return template;
};

Accordion.prototype.render = function ($el) {
    $el.append(this.buildHtml());
};

$(document).ready(function(){
    var hotelsInformation = window.hotelInfo;
    var $hotelContainer = $('#hotel-container');
    if(hotelsInformation && Array.isArray(hotelsInformation)) {
        $hotelContainer.html('');
        hotelsInformation.forEach(function(locationList, index){
            var accordion = new Accordion(locationList.location, locationList.hotelList, locationList.hotelCount);
            accordion.render($hotelContainer);
        });
    }
    $(".accordion").bind("click", function(e){
        var currentAccordion = $(e.currentTarget);
        var currentSpan = currentAccordion.find('div');
        var panelToShow = currentAccordion.parent().find('.panel');
        if (currentSpan.hasClass('icon-arrow')) {
            currentSpan.removeClass('icon-arrow');
            currentSpan.addClass('icon-open');
        } else {
            currentSpan.removeClass('icon-open');
            currentSpan.addClass('icon-arrow');
        }
        panelToShow.toggle('is-active');
    });
});
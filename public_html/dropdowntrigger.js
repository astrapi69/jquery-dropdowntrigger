(function ($) {
    $.fn.dropdowntrigger = function (options) {
        //Set the default values, use comma to separate the settings, example:
        var defaults = {
            dropdownId: "pick",
            triggerValue: "three",
            triggerComponentId: "feedbackMessage",
            hiddenClass: 'hidden'
        };
        var settings = $.extend(defaults, options);
        // for chainability
        return this.each(function () {
            var o = settings;
            var dropdown = $('#' + o.dropdownId);
            var triggerComponent = $('#' + o.triggerComponentId);
            dropdown.on('change', function () {
                var dropdownVal = dropdown.val();
                if (dropdownVal === o.triggerValue) {
                    triggerComponent.removeClass(o.hiddenClass);
                } else {
                    triggerComponent.addClass(o.hiddenClass);
                }
            });
        });
    };
})(jQuery);
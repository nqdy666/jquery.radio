/**
 * Created by NQLDY on 2015/7/26.
 */

(function($) {

    $.QjzdRadiobox = function($labelObjs, opt) {
        if (typeof($labelObjs) !== 'object') {
            $labelObjs = $($labelObjs);
        }
        var options = $.extend({}, $.QjzdRadiobox.defaults);
        //设置options入参
        var setOptions = function (opt) {
            if (typeof(opt) !== 'object') {
                opt = {};
            }
            options = $.extend(options, opt);
        };
        setOptions(opt);

        $labelObjs.addClass("radiobox");
        var thatAll = $('.radiobox');
        $labelObjs.each(function(){
            var that = $(this);
            if(that.find('input').attr('checked')){
                that.addClass('active');
            }else{
                that.removeClass('active');
            }
            that.find('input').unbind("change").on('change',function() {
                thatAll.find('input[name="'+$(this).attr('name')+'"]').parent().removeClass('active');
                if ($(this).prop("checked")) {
                    $(this).parent().addClass("active");
                } else {
                    $(this).parent().removeClass("active");
                }
            });
        });

        var api = {};

        /**
         * 设置选中, 设置第一个选中
         * 使用房里
         * setChecked()   //默认选中第一个为true
         * setChecked(true) //同上默认选中
         * setChecked($("#label") 设置true
         * setChecked("#lalel") 设置true
         * setChecked("#lalel", true) 设置true
         * setChecked("#radioInput") 设置true
         * setChecked("#radioInput", true) 设置true
         * @param $lbObj
         * @param checked
         */
        api.setChecked = function($lbObj, checked) {
            if (typeof ($lbObj) === "undefined") {
                $lbObj = $labelObjs;
            } else if (typeof ($lbObj) === "boolean") {
                checked = $lbObj;
                $lbObj = $labelObjs;
            } else if (typeof ($lbObj) !== "object") {
                $lbObj = $($lbObj);
            }
            if ($lbObj.is("input")) {
                $lbObj = $lbObj.parent();
            }
            if ($lbObj.length > 1) {
                $lbObj = $lbObj.eq(0);
            }
            if (typeof (checked) !== "boolean") {
                checked = true;
            }
            if ($labelObjs.closest($lbObj).length > 0) {
                $lbObj.find("input").prop("checked", checked).trigger("change");
            }
        };
        return api;
    };

    //默认参数
    $.QjzdRadiobox.defaults = {
    };

    $.fn.radiobox = function (options, callback) {
        var api;
        if(this && this.length > 0){
            api = $.QjzdRadiobox(this, options);
            if ($.isFunction(callback)) {
                callback.apply(api);
            }
        }
        return this;
    };

}(jQuery));
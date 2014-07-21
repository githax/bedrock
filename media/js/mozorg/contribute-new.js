/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

;(function($) {
    'use strict';

    $('#inquiry-form :checkbox:checked').parents('label').addClass('selected');

    $('#inquiry-form :checkbox').on('change', function() {
        if ($(this).is(':checked')) {
            $(this).parents('label').addClass('selected');
        } else {
            $(this).parents('label').removeClass('selected');
        }
    });

    $('a[href="#"]').on('click', function(e) {
        return false;
    });

})(window.jQuery);

---
# Main JS File
---

{% include_relative vendor/featherlight.min.js %}
{% include_relative vendor/jquery.validate.min.js %}
{% include_relative vendor/jquery.validate.messages_de.js %}

/**
 * jQuery UI Date Picker
 */
$( function() {
    $( "#birthdate" ).datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd.mm.yy"
    });
} );

/**
 * jQuery Form Validator
 */
$.validator.addMethod(
    "germanDate",
    function(value, element) {
        // put your own logic here, this is just a (crappy) example
        return value.match(/^\d\d?[\.\/]\d\d?[\.\/]\d\d\d\d$/);
    },
    "Bitte ein Datum im Format dd.mm.yyyy eingeben."
);
$("#registrationForm").validate({
    rules: {
        PLZ: {
            required: true,
            digits: true,
            minlength: 5,
            maxlength: 5
        },
        Geburtsdatum: {
            date: false,
            germanDate: true
        }
    },
    errorPlacement: function(error, element) {
        error.appendTo( element.closest("li") );
    },
});

---
# Main JS File
---

{% include_relative vendor/featherlight.min.js %}
{% include_relative vendor/jquery.validate.min.js %}
{% include_relative vendor/jquery.validate.messages_de.js %}

/**
 * jQuery Form Validator
 */
$("#registrationForm").validate({
    rules: {
        plz: {
            required: true,
            digits: true,
            minlength: 5,
            maxlength: 5
        },
        geburtsdatum: {
            date: false
        }
    },
    errorPlacement: function(error, element) {
        error.appendTo( element.closest("li") );
    },
});


/**
 * Email Obfuscator
 * @author: Lukas Hermann <lukas@codethink.de>
 *
 * Use with the following html-tag:
 * <noscript defuscate data-name="lukas" data-domain="codethink.de"><em>Diese E-Mail-Adresse ist durch JavaScript geschützt</em></noscript>
 */
var spam = $("[defuscate]"), lhs = spam.attr("data-name"), rhs = spam.attr("data-domain");
var nospam = "<a href=\"mailto" + ":" + lhs + "spamkill@" + rhs + "\" onclick=\"rep(this)\">" + lhs + "<span class=\"u-hidden\">spamkill</span>" + window.atob('QA==') + rhs + "</a>";
spam.replaceWith( nospam );
function rep(e) {
    e.href=e.href.replace(/spamkill/,'')
}

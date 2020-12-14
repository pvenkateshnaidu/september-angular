<!--
    /resources/views/email_template.blade.php
-->
@php
 $datetime = date("Y/m/d h:i:sa")
@endphp
<h1>Hey, how you doing bro?</h1>
{{$datetime}}
I have some info for you, please visit my website  <a href="http://webmobilez.com">here</a>.

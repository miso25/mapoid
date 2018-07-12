# Mapoid
Mapoid is a jQuery plugin to create responsive html map area highlighter with area selection
# Requirements
Mapoid plugin requires the latest version of jQuery. Also you can include waypoints plugin to execute the counting after you scroll to the countid element
# Usage basic
jsFiddle example for [basic example](https://jsfiddle.net/miso25/s5qf1tLh/13/) 

# Options
A complete listing of the plugin options.

Option | Data Attribute | Default | Description
----|------|----|----
start | data-start  | 0  | start
end | data-end  | 0  | end
speed | data-speed  | 10  | speed in fps - frames per seconds
tick | data-tick  | 10  | tick
clock | data-clock  | false  | clock
switchClock | data-switch-clock  | true  | switchClock
dateTime | data-date-time  | '%m/%d/%y %h:%i:%s' | Possible formats: You can set this value to the number of seconds or specific MM/DD/YYYY H:i:s date or you can set a mask '%m/%d/%y %h:%i:%s' and every mask input will be replaced by current datetime value. For example you can set this option to '12/24/%y' and the counter will count up or count down to/from the Christmas Eve of this year.

# HT ocn lookup for recordurl
 Very rough Google Apps Script to lookup OCNs and return HT record URL. Script assumes that the OCN is in column 1, and that there's something in column 2, and that there's a header row. Additionally you'll need to strip prefixes from your OCN.

 I'm sure there are faster and better ways to accomplish this task, but this works. Please note that for me GAS will only run for about 3500 OCN lookups before exceeding maximum execution time.

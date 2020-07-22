# Two scripts for looking up specific OCNs in HathiTrust
## htocnlookup.gs returns a link to the record for a given OCN
 Very rough Google Apps Script to lookup OCNs and return HT record URL. Script assumes that the OCN is in column 1, and that there's something in column 2, and that there's a header row. Additionally you'll need to strip prefixes from your OCN.

 I'm sure there are faster and better ways to accomplish this task, but this works. Please note that for me GAS will only run for about 3500 OCN lookups before exceeding maximum execution time.

## find-umn-barcodes.py
This script will return all barcodes that begin with the string umn attached to a HathiTrust record. You can replace the regular expression string to match your institution's HT prefix for barcodes. 

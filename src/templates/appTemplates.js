var AppTemplates = {};

AppTemplates["html/accordion-new.html"] = "<table id=\"customers\">\n" +
   "    <tr>\n" +
   "        <th>Name</th>\n" +
   "        <th>Type-of-Index</th>\n" +
   "        <th>Open-Price</th>\n" +
   "        <th>Last-Traded-Price</th>\n" +
   "        <th>Has-Changed-Since-Morning-By</th>\n" +
   "        <th>Has-Changed-Since-Morning-Percentage</th>\n" +
   "        <th>Current-Volume</th>\n" +
   "        <th>Stock-Value-in-Bracket-Order</th>\n" +
   "        <th>Margin-given</th>\n" +
   "    </tr>\n" +
   "    <% _.each(data, function(scrip, i) { %>\n" +
   "    <tr>\n" +
   "        <td><%= scrip.symbol%></td>\n" +
   "        <td>\n" +
   "            <% _.each(scrip.typeOfIndex, function(scripIndex, j) { %>\n" +
   "            <%= scripIndex%>,\n" +
   "            <% });%>\n" +
   "        </td>\n" +
   "        <td><%= scrip.open%></td>\n" +
   "        <td><%= scrip.ltP%></td>\n" +
   "        <td><%= scrip.hasChangedBy%></td>\n" +
   "        <td><%= scrip.hasChangedByPercent ? (scrip.hasChangedByPercent + '%') : ''%></td>\n" +
   "        <td><%= scrip.trdVol%></td>\n" +
   "        <td><%= scrip.CoverOneStockFor%></td>\n" +
   "        <td><%= isNaN(scrip.marginProvided) ? '':(scrip.marginProvided + 'x')%></td>\n" +
   "    </tr>\n" +
   "    <% });%>\n" +
   "</table>\n" +
   "\n" +
   "";

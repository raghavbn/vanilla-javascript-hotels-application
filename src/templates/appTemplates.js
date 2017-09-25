var AppTemplates = {};

AppTemplates["html/accordion.html"] = "<div>\n" +
   "    <button class = \"accordion\">\n" +
   "        <div class = \"icon-arrow\"><span class = \"color-blue txt-lg bold mg-lt-md\"><%= data.location %></span></div>\n" +
   "        <span class = \"color-gray txt-lg bold mg-lt-md txt-left\" >over <%= data.hotelCount %> hotels</span>\n" +
   "    </button>\n" +
   "    <div class = \"panel\">\n" +
   "        <ul class = \"hotel-grid\">\n" +
   "            <% _.each(data.hotelList, function(hotel, i) { %>\n" +
   "            <li key= \"<%= i%>\" class = \"hotel-element\">\n" +
   "                <span class = \"color-blue ft-base\"><%= hotel.hotelName %></span>\n" +
   "                <div class = \"float-rt\">\n" +
   "                    <span class = \"color-grayDark ft-base\"><%= hotel.stars%></span>\n" +
   "                    <span class = \"color-red mg-rt-tiny ft-base\">&#9733;</span>\n" +
   "                    <span class = \"color-grayDark mg-rt-tiny ft-base\">From</span>\n" +
   "                    <% if(hotel.discountedPrice) {%>\n" +
   "                            <span><strike><%= hotel.originalPrice%></strike>\n" +
   "                                  <span class = \"mg-lt-tiny color-greenDark ft-base bold\"><%= hotel.discountedPrice%></span>\n" +
   "                            </span>\n" +
   "                    <% } else {%>\n" +
   "                    <span class = \"color-greenDark ft-base bold\"><%= hotel.originalPrice %></span>\n" +
   "                    <% } %>\n" +
   "                </div>\n" +
   "            </li>\n" +
   "            <% });%>\n" +
   "        </ul>\n" +
   "        <a className = \"each-hotel\" href=\"#\">\n" +
   "            <span class = \"color-blue ft-base bold mg-rt-tiny\">see all <%= data.hotelCount %> hotels in <%= data.location%></span>\n" +
   "            <span class = \"icon-arrow-right\"/>\n" +
   "        </a>\n" +
   "    </div>\n" +
   "</div>\n" +
   "\n" +
   "";

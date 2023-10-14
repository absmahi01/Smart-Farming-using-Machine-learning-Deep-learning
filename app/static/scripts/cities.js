var state_arr = new Array("Barishal", "Chattogram", "Dhaka", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet");

var s_a = new Array();
s_a[0]="";
s_a[1]="Barishal |  Bhola | Jhalokati | Patuakhali | Pirojpur";
s_a[2]=" Bandarban | Brahmanbaria | Chandpur | Chittagong | Comilla | Cox's Bazar | Feni | Khagrachhari | Lakshmipur";
s_a[3]=" Dhaka | Faridpur | Gazipur | Gopalganj | Kishoreganj | Madaripur | Manikganj | Munshiganj | Narayanganj | Narsingdi | Rajbari | Shariatpur | Tangail";
s_a[5]=" Jhenaidah | Khulna | Kushtia | Magura | Narail | Satkhira ";
s_a[6]=" Jamalpur | Mymensingh | Netrokona | Sherpur";
s_a[7]=" Joypurhat | Naogaon | Pabna | Rajshahi | Sirajganj";
s_a[8]=" Dinajpur | Gaibandha | Kurigram | Lalmonirhat | Nilphamari | Panchagarh | Rangpur | Thakurgaon";
s_a[9]=" Habiganj | Moulvibazar | Sylhet";

function print_state(state_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function print_city(city_id, city_index){
	var option_str = document.getElementById(city_id);
	option_str.length=0;	// Fixed by Julian Woods
	option_str.options[0] = new Option('Select City','');
	option_str.selectedIndex = 0;
	var city_arr = s_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
	}
}

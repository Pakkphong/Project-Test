const DropdownComponent=({ChangeRestaurantData})=>{
    return(
        <div className="dropdown">
            <select onChange={ChangeRestaurantData} className="select-1">
                <option value="All Restaurant">All Restaurant</option>
                <option value="Bistro Bazaar">Bistro Bazaar</option>
                <option value="Bistro Captain">Bistro Captain</option>
                <option value="Bistroporium">Bistroporium</option>
                <option value="Cuisine Street">Cuisine Street</option>
                <option value="Cuisine Wave">Cuisine Wave</option>
                <option value="Deli Divine">Deli Divine</option>
                <option value="Deli Feast">Deli Feast</option>
                <option value="Eatery Hotspot">Eatery Hotspot</option>
                <option value="Eateryworks">Eateryworks</option>
                <option value="Feast Lounge">Feast Lounge</option>
                <option value="Feast Palace">Feast Palace</option>
                <option value="Grub Chef">Grub Chef</option>
                <option value="Grub lord">Grub lord</option>
                <option value="Kitchen Sensation">Kitchen Sensation</option>
                <option value="Kitchen Takeout">Kitchen Takeout</option>
            </select>
        </div>
    )
}

export default DropdownComponent
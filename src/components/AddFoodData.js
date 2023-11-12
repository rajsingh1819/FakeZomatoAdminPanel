import React, { useState } from 'react'
import './AddFoodData.css'

import { db, storage } from '../FireBase/FireBaseConfig';
import { addDoc, collection, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
const AddFoodData = () => {
    const [foodName, setFoodName] = useState('');
    const [foodPrice, setFoodPrice] = useState('');
    const [foodImage, setFoodImage] = useState(null);
    const [foodCategory, setFoodCategory] = useState('')
    const [foodDescription, setFoodDescription] = useState('')

    const [foodImageUrl, setFoodImageUrl] = useState('')
    //
    const [foodType, setFoodType] = useState('');
    const [mealType, setMealType] = useState('');
    const [foodAddon, setFoodAddon] = useState('');
    const [foodAddonPrice, setFoodAddonPrice] = useState('');

    //
    const [restaurantName, setRestauruntName] = useState('')
    // const [restaurantAddress, setRestauruntAddress] = useState('')
    const [resttaurantPhone, setRestauruntPhone] = useState('')
    const [restaurantEmail, setRestauruntEmail] = useState('');
    const [restaurantAaddressBuilding, setRestaurantAaddressBuilding] = useState('')
    const [restaurantAaddressStreet, setRestaurantAaddressStreet] = useState('');
    const [restaurantAaddressCity, setRestaurantAaddressCity] = useState('');
    const [restaurantAaddressPincode, setRestaurantAaddressPincode] = useState('')
    const submit = (e) => {
        e.preventDefault();
        if (foodImage == null) {
            alert("Please select an Image !!!")
            return
        }
        else {
            const imageRef = ref(storage, `FoodImages/${foodImage.name}`)
            uploadBytes(imageRef, foodImage).then(() => {
                alert("Image Upload Successfully !!!")
                getDownloadURL(imageRef)
                    .then((url) => {
                        // setFoodImageUrl(url);
                        const foodData = {

                            foodName,
                            foodPrice,
                            foodImageUrl: url,
                            foodCategory,
                            foodDescription,
                            restaurantName,
                            // restaurantAddress,
                            resttaurantPhone,
                            foodType,
                            mealType,
                            foodAddon,
                            foodAddonPrice,
                            restaurantEmail,
                            restaurantAaddressBuilding,
                            restaurantAaddressStreet,
                            restaurantAaddressCity,
                            restaurantAaddressPincode,
                            id: new Date().getTime().toString()

                        }

                        console.log(foodData)
                        try {
                            const docRef = addDoc(collection(db, 'ProductData'), foodData);
                            alert("Data added successfully", docRef.id)
                        }
                        catch (error) {
                            alert("Error adding document", error)
                        }



                    })

            })
                .catch((error) => {
                    alert(error.message);

                })
        }



    }
    return (
        <div className='form-outer'>
            <h1>Add Food data</h1>
            <form className='form-inner' onSubmit={submit} >
                <lable>Food name : </lable>
                <input type='text' name='food_name' onChange={(e) => setFoodName(e.target.value)} /><br />
                <label> Food Description :</label>
                <input type='text' name='food_description' onChange={(e) => setFoodDescription(e.target.value)} /><br />

                <div className='form-row'>
                    <div className='form-col'>
                        <label >Food Price :</label>
                        <input type='number' name='food_price' onChange={(e) => setFoodPrice(e.target.value)} />
                    </div>
                    <div className='form-col'>
                        <label >Food Type :</label>
                        <select name='food_type' onChange={(e) => setFoodType(e.target.value)}>
                            <option value='null'>Select Food Type</option>
                            <option value="veg">Veg</option>
                            <option value="non-veg">Non-Veg</option>

                        </select>
                    </div>
                </div>
                <br />
                <div className='form-row'>
                    <div className='form-col'>
                        <label >Food Category :</label>
                        <select name='food_category' onChange={(e) => setFoodCategory(e.target.value)} >
                            <option value='null'>Select Food Category</option>
                            <option value='indian'>Indian</option>
                            <option value='chineese'>Chineese</option>
                            <option value='italian'>Italian</option>
                            <option value='american'>American</option>
                        </select>

                    </div>
                    <div className='form-col'>
                        <label >Meal Type :</label>
                        <select name='meal_type' onChange={(e) => setMealType(e.target.value)} >
                            <option value='null'>Select Food Category</option>
                            <option value='indian'>Dinner</option>
                            <option value='chineese'>Starters</option>
                            <option value='italian'>Breakfast</option>
                            <option value='american'>Liquid</option>
                        </select>

                    </div>
                </div><br />
                <div className='form-row'>
                    <div className='form-col'>
                        <lable>Add On Name :</lable>
                        <input type='text' name='food_addon' onChange={(e) => setFoodAddon(e.target.value)} />
                    </div>
                    <div className='form-col'>
                        <lable>Add Price :</lable>
                        <input type='number' name='food_addon_price' onChange={(e) => setFoodAddonPrice(e.target.value)} />
                    </div>
                </div>



                <label >Food Image : </label>
                <input type='file' name='food_file' onChange={(e) => setFoodImage(e.target.files[0])} /><br />
                <label >Restaurant Name : </label>
                <input type='text' name='restaurant_name' onChange={(e) => setRestauruntName(e.target.value)} /><br />
                {/* <label >Restaurant Address : </label>
                <input type='text' name='restaurant_address' onChange={(e) => setRestauruntAddress(e.target.value)} /><br /> */}
                {/* <label >Restaurant Phone : </label>
                <input text='number' name='restaurant_phone' onChange={(e) => setRestauruntPhone(e.target.value)} /><br />
                 */}

                <div className='form-row'>
                    <div className='form-col'>
                        <lable>Restaurant Building Number/Name :</lable>
                        <input type='text' name='restaurant_address_building' onChange={(e) => setRestaurantAaddressBuilding(e.target.value)} />
                    </div>
                    <div className='form-col'>
                        <lable>Restaurant Street / Area Name :</lable>
                        <input type='text' name='restaurant_address_street' onChange={(e) => setRestaurantAaddressStreet(e.target.value)} />
                    </div>
                </div>
                <br />
                <div className='form-row'>
                    <div className='form-col'>
                        <lable>Restaurant City Pin Code :</lable>
                        <input type='text' name='restaurant_address_city' onChange={(e) => setRestaurantAaddressCity(e.target.value)} />
                    </div>
                    <div className='form-col'>
                        <lable>Restaurant Pin Code :</lable>
                        <input type='text' name='restaurant_address_pincode' onChange={(e) => setRestaurantAaddressPincode(e.target.value)} />
                    </div>
                </div>


                <br />
                <div className='form-row'>
                    <div className='form-col'>
                        <lable>Restaurant Phone Number:</lable>
                        <input type='text' name='restaurant_phone' onChange={(e) => setRestauruntPhone(e.target.value)} />
                    </div>
                    <div className='form-col'>
                        <lable>Restaurant Email :</lable>
                        <input type='text' name='restaurant_email' onChange={(e) => setRestauruntEmail(e.target.value)} />
                    </div>
                </div>
                <button >Add Food</button>

            </form>
        </div>
    )
}

export default AddFoodData
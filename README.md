# Canteen Portal : MERN STACK APP

This is a canteen portal built using MERN stack with all the basic functionalities such as 
+ Registration & Login for both buyer and vendor
+ Option to view and edit profile for buyer and vendor
+ Vendor can add, delete and edit food items.
+ Vendor can see the list of orders and can either accept them or reject them
+ Buyer can see,search and filter food items based on Veg/Non-Veg and price range.
+ Fuzzy Search has been implemented as well(Bonus)
+ Buyer can't order from shops that aren't open at that time
+ Buyer can order a food item of his/her choice by clicking on the order button and specifying the quantity of food item and add-ons if any after which the required amount of money gets deducted from the wallet
+ If the wallet balance is less than bill amount, order doesn't get placed. Buyer can add money to wallet and then place the order again.
+ A wallet page has been implemented where buyer can add money.
+ Once order gets placed, the vendor can see the order and either accept or reject it.
+ A mail gets sent to the buyer once their order is accepted / rejected.(Bonus)
+ Then the vendor can move the order to next stages till Ready For Pickup stage.
+ Buyer can click on order Picked Up button, where order is Ready for Pickup once they picks it up order gets completed.
+ Upon completing the order, he/she can rate it as well from 1 to 5. This updates the average rating for that food item in the food list.
+ No vendor can keep more than 10 orders in accepted/ cooking stage.
+ Vendor can see stats like Top 5 Items that have been sold, Counts for- Orders Placed,Pending Orders,Completed Orders and also the graph distributions(Bonus)
+ Deployed the website with heroku and surge (Bonus)
    - frontend at: "https://canteen-portal.herokuapp.com/"
    - backend  at: "http://canteen-portal.surge.sh/"

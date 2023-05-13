const PATH = "../Models";

const Models = {
    user_Model : require(PATH+'/users'),
    parking_Spot_Model : require(PATH+'/parkingSpot.js'),
    user_Vechicles_Model : require(PATH+'/userVechicles.js'),
    log_Model : require(PATH+'/log.js')
}
module.exports = Models
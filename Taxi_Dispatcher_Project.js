// Taxi Dispatcher Project : 

Taxis = [
{ id: 1, position: 55, available: true, timeRemaining: 0, totalRides:
0 },
{ id: 2, position: 12, available: true, timeRemaining: 0,
totalRides: 0 },
{ id: 3, position: 20, available: true, timeRemaining: 0,
totalRides: 0 }
]


Requests = [
{ reqId: 1, position: 10, duration: 3, time: 6 },
{ reqId: 2, position: 3, duration: 4, time: 2 },
{ reqId: 3, position: 18, duration: 2, time: 4 },
{ reqId: 4, position: 19, duration: 5, time: 1 }
]








// found the earliest request 
function takeCurrentReq(){
    let currentClient = Requests[0];
for(let i = 1 ; i < Requests.length ;i++){
    if(currentClient.time > Requests[i].time){
        currentClient = Requests[i];
    }
}
return currentClient;  // return objet of the current Client
}

// put the function in a single variable
 let currentClient = takeCurrentReq(Requests);
 //Current position of the client
 let currentClientPosition = currentClient.position;






// Return only availble Taxis
function availbleTaxis(){
let availbleT = [];
    for(let i = 0 ; i < Taxis.length ; i++){
        if(Taxis[i].available){ 
            availbleT.push(Taxis[i]);

        }
    }
    return availbleT;
}




// Return nearest Taxi
function nearestTaxi(reqPosition,availbleTaxi){
let rr  ;
let nearestTaxiIndex;
let smallDinstance;
let distances = []  ;
for(let i = 0 ; i < availbleTaxi.length ; i++){
rr =  reqPosition - availbleTaxi[i].position; 
distances.push(Math.abs(rr));
}
smallDinstance = Math.min(...distances)
for(let i = 0 ; i < availbleTaxi.length ; i++){
    if(smallDinstance == Math.abs(reqPosition - availbleTaxi[i].position) ){
        nearestTaxiIndex = availbleTaxi[i];
        availbleTaxi[i].available = false;
        availbleTaxi[i].timeRemaining = reqPosition;
    }
}
return  nearestTaxiIndex;
}

availbleTaxis()
console.log(nearestTaxi(currentClientPosition,availbleTaxis()))
console.log(currentClientPosition , " clientPosition");

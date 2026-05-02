const axios = require('axios');
const Log = require('../logging_middleware/index.js');

function optimizeMaintenance(vehicles, capacity) {
    let dp = new Array(capacity + 1).fill(0);
    for (let i = 0; i < vehicles.length; i++) {
        for (let w = capacity; w >= vehicles[i].Duration; w--) {
            dp[w] = Math.max(dp[w], dp[w - vehicles[i].Duration] + vehicles[i].Impact);
        }
    }
    return dp[capacity];
}

async function runScheduler() {
    await Log("backend", "info", "controller", "Starting optimization");

    const capacity = 188;
    const vehicles = [
        { "TaskID": "9e26de4e-274f-41f0-b1e2-9b56d13cabd2", "Duration": 2, "Impact": 5 },
        { "TaskID": "e7739c49-da27-4a65-8d77-69127767e0c6", "Duration": 6, "Impact": 2 },
        { "TaskID": "535c0ec0-f0be-4271-8988-ad3c60d28ca6", "Duration": 3, "Impact": 10 },
        { "TaskID": "e985fb69-6930-4d78-a548-0c45b95b6f09", "Duration": 3, "Impact": 8 },
        { "TaskID": "4d9336a7-2c7b-4d79-8fae-3c78c2475e9f", "Duration": 2, "Impact": 1 },
        { "TaskID": "63e1521f-35bd-4792-8b83-2a6f0264daaa", "Duration": 8, "Impact": 3 },
        { "TaskID": "db2bc99d-332b-4ff8-82c9-8640c5a6c888", "Duration": 4, "Impact": 1 },
        { "TaskID": "5f8147cc-45c0-451d-9038-ad65be4a0e64", "Duration": 4, "Impact": 2 },
        { "TaskID": "27a3a5c2-523e-4c45-9ee4-ecf35eaf55df", "Duration": 2, "Impact": 4 },
        { "TaskID": "8a8e6335-3800-412b-8fff-2c5577d86887", "Duration": 7, "Impact": 5 },
        { "TaskID": "bc4a678a-b359-4462-bf09-4f397a66558d", "Duration": 7, "Impact": 5 },
        { "TaskID": "d093bfdf-5c19-4321-b99e-c1a1a937c67f", "Duration": 6, "Impact": 6 },
        { "TaskID": "251bf2d1-d01e-4c56-bafa-9984bcd5d8b3", "Duration": 6, "Impact": 9 },
        { "TaskID": "5d8c6eab-016c-44f5-a47e-0642abe047da", "Duration": 5, "Impact": 9 },
        { "TaskID": "6f3d35f4-9bf4-493d-adce-04df39b316f9", "Duration": 3, "Impact": 3 },
        { "TaskID": "fc143100-ee14-4660-8ca7-227f1335dccc", "Duration": 2, "Impact": 6 },
        { "TaskID": "9af8c212-0252-48c3-a8d3-7003c7876166", "Duration": 5, "Impact": 10 },
        { "TaskID": "fc2d223b-71dc-4b7f-8b07-5f2604abbb5b", "Duration": 2, "Impact": 2 },
        { "TaskID": "ce75c49d-c67d-46c7-87ac-f0d5f6b98b4d", "Duration": 3, "Impact": 7 },
        { "TaskID": "99d74887-a693-405b-bdd0-a30b247f51be", "Duration": 7, "Impact": 9 },
        { "TaskID": "312c2777-176b-4e15-896a-a144b2187afc", "Duration": 4, "Impact": 3 },
        { "TaskID": "283205f8-66c9-4d65-b5dd-9ad9528f3b39", "Duration": 8, "Impact": 3 },
        { "TaskID": "1a570733-a1ce-4c03-afff-a2f14508f428", "Duration": 6, "Impact": 2 },
        { "TaskID": "da728e0f-dfb3-45d5-9ff9-1f55f7a26e40", "Duration": 6, "Impact": 4 },
        { "TaskID": "12378bf9-20c4-4350-904b-1633aca5b9e7", "Duration": 7, "Impact": 2 },
        { "TaskID": "261239b3-a19c-4b03-ab9c-be7e4fc539d7", "Duration": 4, "Impact": 10 },
        { "TaskID": "061d2a44-68b4-43f5-a712-2bdc8b7ec6c1", "Duration": 6, "Impact": 3 },
        { "TaskID": "a468f6f3-6df6-4510-a2d4-89fbc800bb8e", "Duration": 3, "Impact": 8 },
        { "TaskID": "abed6a15-475e-4523-afec-3513703bbba7", "Duration": 7, "Impact": 4 },
        { "TaskID": "21e41fcc-eea8-4d9e-b73d-0eef31c31067", "Duration": 1, "Impact": 2 },
        { "TaskID": "5e84bf23-dbd1-4660-8a09-dcc199d176f7", "Duration": 5, "Impact": 3 },
        { "TaskID": "7a102465-571c-4046-9d11-a8e128c5041b", "Duration": 4, "Impact": 2 },
        { "TaskID": "70bd3373-c94d-4937-b152-e462c84211f6", "Duration": 7, "Impact": 2 }
    ];

    const result = optimizeMaintenance(vehicles, capacity);
    console.log("Max Impact:", result);

    await Log("backend", "info", "controller", "Optimization completed");
}

runScheduler();
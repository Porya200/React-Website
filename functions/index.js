const functions = require('firebase-functions');
const admin = require('firebase-admin');
const persianDate = require('persian-date')
const persianNum = require('persianjs');

const serviceAccount = require("./permisson.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://react-api-test-168e7.firebaseio.com"
});

const express = require('express');
const app = express();
const db = admin.firestore();

const cors = require('cors');
app.use(cors( {origin : true} ))

// Routes

app.get('/hello-world' , (req , res) => {
    return res.status(200).send('Hello World !!')
});


// Create
// Post
app.post('/api/create' , (req , res) => {
    (async () => {
        try {
            await db.collection('personal').doc(`/${req.body.id}/`)
            .create({
                firstName : persianNum(req.body.firstName).englishNumber()._str ,
                lastName : persianNum(req.body.lastName).englishNumber()._str ,
                old : persianNum(req.body.old).englishNumber()._str ,
                dad : persianNum(req.body.dad).englishNumber()._str ,
                feild : persianNum(req.body.feild).englishNumber()._str ,
                GPA : persianNum(req.body.GPA).englishNumber()._str ,
                created_at : new persianDate(new Date()).format()
            })

            return res.status(200).send();
        }
        catch(error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// Read a specific product based on ID
// Get
app.get('/api/read/:id' , (req , res) => {
    (async () => {
        try {
            const Document = db.collection('personal').doc(req.params.id);
            let product = await Document.get();
            let response = product.data();

            return res.status(200).send(response);
        }
        catch(error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});



// Read all products
// Get
app.get('/api/read' , (req , res) => {
    (async () => {
        try {
            let query = db.collection('personal');
            let response = [];

            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs; //result of query

                for (let doc of docs ) {
                    const selectedItem = {
                        firstName : doc.data().firstName ,
                        lastName : doc.data().lastName,
                        old : doc.data().old,
                        dad : doc.data().dad,
                        feild : doc.data().feild,
                        GPA : doc.data().GPA ,
                        created_at : doc.data().created_at ,
                        update_at : doc.data().update_at
                    }
                    response.push(selectedItem);
                }
                return response; //each then should return a
            })
            return res.status(200).send(response);
        }
        catch(error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});


// Update
// Put
app.put('/api/update/:id' , (req , res) => {
    (async () => {
        try {
            const Document = db.collection('personal').doc(req.params.id);

            await Document.update({
                firstName : persianNum(req.body.firstName).englishNumber()._str ,
                lastName : persianNum(req.body.lastName).englishNumber()._str ,
                old : persianNum(req.body.old).englishNumber()._str ,
                dad : persianNum(req.body.dad).englishNumber()._str ,
                feild : persianNum(req.body.feild).englishNumber()._str ,
                GPA : persianNum(req.body.GPA).englishNumber()._str ,
                update_at : new persianDate(new Date()).format()
            });

            return res.status(200).send();
        }
        catch(error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});


// Delete
// Delete
app.delete('/api/delete/:id' , (req , res) => {
    (async () => {
        try {
            const Document = db.collection('personal').doc(req.params.id);

            await Document.delete();
            return res.status(200).send();
        }
        catch(error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});


// Export the Api to firebase Cloud Function
exports.app = functions.https.onRequest(app)